package com.revature.data;

import java.util.ArrayList;

import com.revature.beans.Message;

public interface MessageDao 
{
	public Message getMessage(int id);
	public void addMessage(Message m);
	public ArrayList<Message> getMessages();
	public void updateMessage(Message m);
	public void deleteMessage(Message m);
}
