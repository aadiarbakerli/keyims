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
	
	@Override
	public User login(String user, String pass) 
	{
		for (User u: users.getUsers()) {
			if (u.getEmail().equals(user) && u.getPswd().equals(pass))
					return u;
		}
		return null;
	}

	@Override
	public void editUser(User u) 
	{
		users.updateUser(u);
		
	}

	@Override
	public void deleteUser(User u) 
	{
		users.deleteUser(u);
		
	}

	@Override
	public void addUser(User u) 
	{
		users.addUser(u);
		
	}

	@Override
	public ArrayList<User> getUsers() 
	{
		return users.getUsers();
	}

	@Override
	public User getUser(int id) {
		return users.getUser(id);
	}

}
