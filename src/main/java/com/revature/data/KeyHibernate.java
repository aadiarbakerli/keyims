package com.revature.data;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Key;
import com.revature.util.HibernateUtil;
@Component
public class KeyHibernate implements KeyDao
{
	@Autowired
	HibernateUtil hu;
	
	public Key getKey(int id) 
	{
		Session s = hu.getSession();
		Key u = s.get(Key.class, id);
		s.close();
		return u;
	}

	@Override
	public void addKey(Key k) 
	{
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		
		try
		{
			s.save(k);
			System.out.println("Here, commiting");
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
	public ArrayList<Key> getKeys() 
	{
        Session s = hu.getSession();
        List<Key> k = s.createQuery("From Key", Key.class).list();
        s.close();
        return (ArrayList<Key>) k;
	}

	@Override
	public void updateKey(Key k)
	{
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		
		try
		{
			s.update(k);
			System.out.println("Here, commiting");
			s.flush();
			t.commit();
		}
		catch(HibernateException e)
		{
			System.out.println(e.getMessage());
			t.rollback();
		}
		finally
		{
			s.close();
		}

		
	}

	@Override
	public void deleteKey(Key k) 
	{
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		
		try
		{
			s.delete(k);
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
}
