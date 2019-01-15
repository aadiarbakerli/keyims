package com.revature.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;

import org.apache.commons.net.PrintCommandListener;
import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPReply;
import org.springframework.stereotype.Component;

@Component
public class FileUtil 
{
	private String server = "18.218.169.118";
	private int port = 21;
	private String user = "keyims";
	private String password = "pass";
	private FTPClient ftp;
	
	public String getServer()
	{
		return server;
	}
	
	public String getLogin()
	{
		return user + ":" + password;
	}
	
	public int getPort()
	{
		return port;
	}
	
    public void open() throws IOException
    {
        ftp = new FTPClient();
 
        ftp.addProtocolCommandListener(new PrintCommandListener(new PrintWriter(System.out)));
 
        ftp.connect(server, port);
        int reply = ftp.getReplyCode();
        if (!FTPReply.isPositiveCompletion(reply)) 
        {
            ftp.disconnect();
            throw new IOException("Exception in connecting to FTP Server");
        }
        ftp.login(user, password);
    }
 
    public void close() throws IOException
    {
        ftp.disconnect();
    }
    
    public void putFileToPath(File file) throws IOException 
    {
    	System.out.println("Pootis...");
    	ftp.setFileType(FTP.BINARY_FILE_TYPE);
        boolean d = ftp.storeFile(file.getName(), new FileInputStream(file));
        
        if(d)
        	System.out.println("Complete");
    }
    
    public void deleteFile(String f) throws IOException
    {
    	
    	ftp.deleteFile(f);
    	
    }

}
