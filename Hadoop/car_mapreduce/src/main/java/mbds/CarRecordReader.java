package mbds;

import java.io.IOException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.InputSplit;
import org.apache.hadoop.mapreduce.RecordReader;
import org.apache.hadoop.mapreduce.TaskAttemptContext;
import org.apache.hadoop.mapreduce.lib.input.LineRecordReader;

public class CarRecordReader extends RecordReader<Text, CarWritable> {
    private LineRecordReader lineRecordReader = null;
    private Text key = null;
    private CarWritable value = null;

    Log log = LogFactory.getLog(Car.CarMap.class);

    public void initialize(InputSplit split, TaskAttemptContext context) throws IOException, InterruptedException {
        close();
        lineRecordReader = new LineRecordReader();
        lineRecordReader.initialize(split, context);
    }

    public Text getCurrentKey() throws IOException, InterruptedException {
        return key;
    }

    public CarWritable getCurrentValue() throws IOException, InterruptedException {
        return value;
    }

    public float getProgress() throws IOException, InterruptedException {
        return lineRecordReader.getProgress();
    }

    public void close() throws IOException {
        if (lineRecordReader != null) {
            lineRecordReader.close();
            lineRecordReader = null;
        }
        key = null;
        value = null;
    }

    public boolean nextKeyValue() throws IOException, InterruptedException {
        //System.out.println("Current key: "+lineRecordReader.getCurrentKey());
        if (!lineRecordReader.nextKeyValue()) {
            key = null;
            value = null;
            return false;
        }

        Text line = lineRecordReader.getCurrentValue();
        String str = line.toString();
        str = str.replaceAll("\"", ""); //fixed: double quote en trop
        key = new Text(str.split(",")[0]); //2 (id)
        if (str.split(",", 2)[1].contains("Bonus")) { //To avoid column first row
            key = new Text("999");
            value = new CarWritable();
        } else {
            value = new CarWritable(str.split(",", 2)[1]); //MERCEDES AMG, ...
        }
        return true;
    }
}
