package mbds;

import org.apache.hadoop.io.Text;
import java.util.List;
import org.apache.hadoop.mapreduce.InputSplit;
import org.apache.hadoop.mapreduce.TaskAttemptContext;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.RecordWriter;
import org.apache.hadoop.fs.FSDataOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;

public class CarRecordWriter extends RecordWriter<Text, Text> {
	private DataOutputStream out;

	public CarRecordWriter(DataOutputStream stream) {
		out = stream;
	}

	public void write(Text k, Text count) throws IOException, InterruptedException {
		out.writeBytes(k.toString()+"\t"+count+"\n");
	}

	public void close(TaskAttemptContext arg0) throws IOException, InterruptedException {
		out.close();
	}
}
