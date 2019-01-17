package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.beans.User;
import com.revature.services.UserService;

@Controller
@RequestMapping(value="/login")
public class LoginController 
{
	@Autowired
	private UserService us;
	
	@RequestMapping(method=RequestMethod.GET)
	public String goLogin(HttpSession session) 
	{
		System.out.println("GET");
		return "index.html";
	}
	
	@RequestMapping(method=RequestMethod.POST)
	@ResponseBody
	public User login(@RequestBody User u, HttpSession session) 
	{
		User sessUser = (User) session.getAttribute("user");
		if (sessUser == null) 
		{
			sessUser = us.login(u.getEmail(), u.getPswd());
			session.setAttribute("user",sessUser);
			return sessUser;
		}
		else
		{
			System.out.println("null");
			return sessUser;
		}
	}
	
	@RequestMapping(method=RequestMethod.DELETE)
	public void logout(HttpSession session){
		session.invalidate();
	}

}
