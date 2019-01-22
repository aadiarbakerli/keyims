package com.revature.data;

import java.util.ArrayList;

import com.revature.beans.User;

public interface UserDao 
{
	public User login(String name, String pass);
	public User getUser(int id);
	public User addUser(User u);
	public ArrayList<User> getUsers();
	public void updateUser(User u);
	public void deleteUser(User u);
	
	//added
	public User getUser(String user);
}
