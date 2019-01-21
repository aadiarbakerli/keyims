package com.revature.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.revature.beans.User;
import com.revature.services.UserService;

@Controller
(value="/login")
public class LoginController 
{
	@Autowired
	private UserService us;
	@RequestMapping(value="/login", method=RequestMethod.GET)
	public String goLogin(HttpSession session) throws Exception
	{

			return "index.html";
	}
	

	@RequestMapping(value="/logincheck", method=RequestMethod.GET)
	@ResponseBody
	public User checkLog(HttpSession sess)
	{
		System.out.println("GET");
		
		User u = (User)sess.getAttribute("user");

		if(u != null)
		{
			u = us.login(u.getEmail(), u.getPswd());
			return u;
		}
		else
			return null;
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)

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
	
	@RequestMapping(value="/login", method=RequestMethod.DELETE)
	@ResponseBody
	public void logout(HttpSession session)
	{
		session.invalidate();
	}


}
