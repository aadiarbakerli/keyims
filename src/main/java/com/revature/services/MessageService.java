package com.revature.services;

import java.util.ArrayList;

import com.revature.beans.Message;

public interface MessageService 
{
	public void editMessage(Message m);
	public void deleteMessage(Message m);
	public void addMessage(Message m);
	public ArrayList<Message> getMessages();
}
