package com.revature.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.User;
import com.revature.services.UserService;

@RestController
@RequestMapping(value="/createuser")
public class CreateAccountController {
	@Autowired
	private UserService us;
	
//	public List<User> createAccountGet(HttpSession session) {
	@RequestMapping(method=RequestMethod.GET)
	public String createAccountGet(HttpSession session) {
		System.out.println("Create Account GET");
//		return us.getUsers();
		return "create acc get";
	}
	
	@RequestMapping(method=RequestMethod.POST)
	@ResponseBody
	public User createAccountPost(@RequestBody User u, HttpSession session) {
		User sessUser = (User) session.getAttribute("user");
		System.out.println("User: " + u);
		// proceed with account creation
		if (u != null && us.getUser(u.getEmail()) == null) {
			System.out.println("In if statement");
			sessUser = us.addUser(u);
			System.out.println("Email : " + sessUser.getEmail());
			session.setAttribute("user", sessUser);
			
			System.out.println(sessUser);
			
		// username taken	
		} else {
			return null;
		}
		return sessUser;
	}
}
