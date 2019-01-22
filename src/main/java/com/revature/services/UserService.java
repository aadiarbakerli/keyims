package com.revature.services;

import java.util.ArrayList;

import com.revature.beans.User;

public interface UserService 
{
	public User login(String user, String pass);
	public void editUser(User u);
	public void deleteUser(User u);
	public User addUser(User u);
	public ArrayList<User> getUsers();
	public User getUser(int id);
	
	//added	
	public User getUser(String user);
}
