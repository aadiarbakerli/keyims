package com.revature.data;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Message;
import com.revature.util.HibernateUtil;

@Component
public class MessageHibernate implements MessageDao
{
	@Autowired
	HibernateUtil hu;
	
	public Message getMessage(int id) 
	{
		Session s = hu.getSession();
		Message u = s.get(Message.class, id);
		s.close();
		return u;
	}

	@Override
	public void addMessage(Message k) 
	{
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		
		try
		{
			s.save(k);
			System.out.println("addMessage Commit");
			System.out.println(k.toString());
			s.flush();
			t.commit();
		}
		catch(HibernateException e)
		{
			t.rollback();
		}
		finally
		{
			s.close();
		}
	}

	@Override
	public ArrayList<Message> getMessages() 
	{
        Session s = hu.getSession();
        List<Message> k = s.createQuery("From Message", Message.class).list();
        s.close();
        return (ArrayList<Message>) k;
	}

	@Override
	public void updateMessage(Message k)
	{
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		
		try
		{
			s.update(k);
		}
		catch(HibernateException e)
		{
			t.rollback();
		}
		finally
		{
			s.close();
		}
		t.commit();
		
	}

	@Override
	public void deleteMessage(Message k) 
	{
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		
		try
		{
			s.delete(k);
		}
		catch(HibernateException e)
		{
			t.rollback();
		}
		finally
		{
			s.close();
		}
		t.commit();
		
	}
}
