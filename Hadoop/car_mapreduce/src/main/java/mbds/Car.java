package mbds;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.io.IOUtils;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FSDataInputStream;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.mapreduce.lib.output.MultipleOutputs;
import org.apache.hadoop.util.GenericOptionsParser;

public class Car {
    public static class CarMap extends Mapper<Text, CarWritable, Text, CarWritable> {

        public void map(Text key, CarWritable car, Context context) throws IOException, InterruptedException {
            if (car.brand != "not implemented") {
                String carListString = context.getConfiguration().get("makesList");
                List<String> brandList = new ArrayList<String>(Arrays.asList(carListString.split("\n")));
                car.setRightProperties(brandList);
                System.out.println(car.get_serialized());
                context.write(new Text(car.brand), car);
            } else { //Avoid first row bug
                context.write(key, new CarWritable());
            }
        }
    }

    public static class CarReduce extends Reducer<Text, CarWritable, Text, Text> {
        private MultipleOutputs mos;
        private Text columns_co2;
        private Text columns_averages;

        public void setup(Context context) {
            mos = new MultipleOutputs(context);
            columns_co2 = new Text("Modele,Bonus/Malus,Rejet CO2 g/km,Cout energie");
            columns_averages = new Text("Moyenne cout energie,Moyenne rejet CO2,Moyenne Bonus Malus");
        }

        public void reduce(Text key, Iterable<CarWritable> values, Context context) throws IOException, InterruptedException {
            // ex. key = "MERCEDES"
            // ex. values = Object CarWritable
            if (key.equals(new Text("999"))) {
                mos.write("co2", new Text("Marque"), columns_co2, "co2_reformated");
                mos.write("averages", new Text("Marque"), columns_averages, "averages_per_brand");
            } else {
                System.out.println("Key: \"" + key + "\"");
                int count = 0;
                int total_cout_energie = 0;
                int total_rejet = 0;
                int total_bonus_malus = 0;

                Iterator<CarWritable> i = values.iterator();
                while (i.hasNext()) {
                    CarWritable car = i.next();
                    total_cout_energie += car.cout_energie;
                    total_rejet += car.rejet;
                    total_bonus_malus += car.bonus_malus;
                    System.out.println("Car: " + car.get_serialized());
                    count++;
                    mos.write("co2", key, new Text(car.get_attributes()), "co2_reformated");
                }
                int moyenne_cout_energie = total_cout_energie / count;
                int moyenne_rejet = total_rejet / count;
                int moyenne_bonus_malus = total_bonus_malus / count;
                mos.write("averages", key, new Text(String.valueOf(moyenne_cout_energie) + "," + String.valueOf(moyenne_rejet) + "," + String.valueOf(moyenne_bonus_malus)), "averages_per_brand");
            }
        }

        public void cleanup(Context ctx) throws IOException, InterruptedException {
            mos.close();
        }
    }

    public static void main(String[] args) throws IOException, InterruptedException, ClassNotFoundException {
        Configuration conf = new Configuration();
        String[] ourArgs = new GenericOptionsParser(conf, args).getRemainingArgs();

        String makes_txt = ourArgs[1]; // ex. "makes.txt"
        String co2File = ourArgs[0]; //CO2.csv

        FileSystem fs = new Path(makes_txt).getFileSystem(conf);
        Path hdfsreadpath = new Path(makes_txt); // p-e le folder path ?
        FSDataInputStream inputStream = fs.open(hdfsreadpath);
        String makesList = IOUtils.toString(inputStream, "UTF-8");

        conf.set("makesList", makesList); //Store makes.txt list in configuration

        while (true) {
            Job job = Job.getInstance(conf, "Car Job v1");

            job.setJarByClass(Car.class);
            job.setMapperClass(CarMap.class);
            job.setReducerClass(CarReduce.class);

            job.setOutputKeyClass(Text.class);
            job.setOutputValueClass(CarWritable.class);

            job.setInputFormatClass(CarInputFormat.class);

            FileInputFormat.addInputPath(job, new Path(co2File));
            FileOutputFormat.setOutputPath(job,new Path("/car-map-reduce-output"));
            MultipleOutputs.addNamedOutput(job, "averages", AveragesOutputFormat.class , LongWritable.class, Text.class);
            MultipleOutputs.addNamedOutput(job, "co2", CO2OutputFormat.class, LongWritable.class, Text.class);

            if (job.waitForCompletion(true))
                System.out.println("Finish!");
            System.exit(0);
            System.exit(-1);
        }
    }
}
