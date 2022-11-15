package mbds;

import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.TaskAttemptContext;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.mapreduce.RecordWriter;
import org.apache.hadoop.fs.FSDataOutputStream;

import java.io.IOException;

public class AveragesOutputFormat extends FileOutputFormat<Text, Text> {
	public RecordWriter<Text, Text> getRecordWriter(TaskAttemptContext context) throws IOException, InterruptedException {
    Path path = FileOutputFormat.getOutputPath(context);
    Path fullPath = new Path(path,"averages_per_brand.csv");
    FileSystem fs = path.getFileSystem(context.getConfiguration());
    FSDataOutputStream fileOut = fs.create(fullPath, context);
    return new CarRecordWriter(fileOut);
	}
}

