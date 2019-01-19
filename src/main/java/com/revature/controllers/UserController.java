package com.revature.controllers;

import java.util.ArrayList;

import javax.servlet.ServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.beans.Key;
import com.revature.beans.User;
import com.revature.services.KeyService;
import com.revature.services.UserService;

@Controller
@RequestMapping(value="/userserv")
public class UserController 
{
	@Autowired
	UserService us;
	@Autowired
	KeyService ks;
	
	@RequestMapping(method=RequestMethod.GET)
	@ResponseBody
	public ArrayList<User> getUser()
	{
		
		return us.getUsers();
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public String addKey(@RequestBody String in)
	{
		System.out.println(in);
		
		String[] parse = in.split("&");
		
		String keyid = parse[0];
		String userid = parse[1];
		
		Key k = ks.getKey(Integer.parseInt(keyid));
		User u = us.getUser(Integer.parseInt(userid));
		
		if(u != null && k != null)
		{
			if(u.getKeys().indexOf(k) == -1)
			{
				u.getKeys().add(k);
				us.editUser(u);
			}
		}
		
		return "done";
	}
	
}
