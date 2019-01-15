package com.revature.controllers;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.http.HttpRequest;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.Part;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import com.revature.beans.Key;
import com.revature.services.KeyService;
import com.revature.util.FileUtil;

@Controller
@RequestMapping(value="/file")
public class FileController
{
	@Autowired
	FileUtil util;
	
	@Autowired
	KeyService ks;
	
	String fname = "";
	
	@RequestMapping(method=RequestMethod.POST)
	@ResponseBody
	public String addFile(@RequestParam("file") MultipartFile mf, @RequestParam("keyid") String keyid) throws Exception
	{
		
		System.out.println(mf.getOriginalFilename());
		File f = new File(mf.getOriginalFilename());
		mf.transferTo(f);
		System.out.println(f.getPath());
		System.out.println("Opening...");
		util.open();
		System.out.println("Posting...");
		util.putFileToPath(f);
		util.close();
		
		Key k = ks.getKey(Integer.parseInt(keyid));
		k.setImage("ftp://" + util.getLogin() + "@" + util.getServer() + ":" + util.getPort() + "/" + mf.getOriginalFilename());
		ks.editKey(k);
		
		System.out.println(k.getImage());
		
		return keyid;
	}
	
	@Bean(name = "multipartResolver")
	public CommonsMultipartResolver multipartResolver() {
	    CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
	    multipartResolver.setMaxUploadSize(100000);
	    return multipartResolver;
	}
}
