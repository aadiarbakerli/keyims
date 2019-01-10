package com.revature.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Message;
import com.revature.data.MessageDao;

@Service
public class MessageServiceHibernate implements MessageService
{
	@Autowired
	MessageDao md;
	@Override
	public void editMessage(Message m) 
	{
		md.updateMessage(m);
		
	}

	@Override
	public void deleteMessage(Message m) 
	{
		md.deleteMessage(m);
		
	}

	@Override
	public void addMessage(Message m)
	{
		md.addMessage(m);
		
	}

	@Override
	public ArrayList<Message> getMessages() 
	{
		return md.getMessages();
	}

}
