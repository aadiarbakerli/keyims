package com.revature.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.User;
import com.revature.data.UserDao;

@Service
public class UserServiceHibernate implements UserService{
	@Autowired
	private UserDao users;
	private ArrayList<User> userList = users.getUsers();
	
	@Override
	public User login(String user, String pass) {
		for (User u: userList) {
			if (u.getEmail().equals(user) && u.getPswd().equals(pass))
					return u;
		}
		return null;
	}

}
