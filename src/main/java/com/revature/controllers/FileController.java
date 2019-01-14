package com.revature.controllers;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.util.FileUtil;

@Controller
@RequestMapping(value="/file")
public class FileController 
{
	@Autowired
	FileUtil util;
	
	String fname;
	@RequestMapping(value="/file", method=RequestMethod.PUT)
	@ResponseBody
	public String addFile(final HttpServletResponse res, HttpServletRequest req) throws Exception
	{
		File f = getFile(req);
		util.open();
		util.putFileToPath(f);
		util.close();
		return util.getServer() + "/" + fname;
	}
	
	File getFile(HttpServletRequest req) throws IOException, ServletException
	{
		String ext = fname.substring(fname.lastIndexOf('.'), fname.length());
		
		Part filePart = req.getPart("file");
		String fileName = String.valueOf(new Date().getTime() + ext);
		File file = new File("/tmp/" + fileName);
		FileOutputStream outFile = new FileOutputStream(file);
		InputStream filecontent = filePart.getInputStream();
		
		int read = 0;
		byte[] bytes = new byte[1024];
		while ((read = filecontent.read(bytes)) != -1) 
		{
		    outFile.write(bytes, 0, read);
		}
		outFile.close();
		return file;
	}
}
