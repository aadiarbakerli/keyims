package com.revature.data;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.User;
import com.revature.util.HibernateUtil;
@Component
public class UserHibernate implements UserDao
{
	@Autowired
	HibernateUtil hu;
	@Override
	public User login(String name, String pass) 
	{
        Session s = hu.getSession();
        String query = "from User u where u.email=:username and u.pswd=:password";
        Query<User> q = s.createQuery(query, User.class);
        q.setParameter("username", name);
        q.setParameter("password", pass);
        User u = q.getSingleResult();
        s.close();
        return u;

	}

	@Override
	public User getUser(int id) 
	{
		Session s = hu.getSession();
		User u = s.get(User.class, id);
		s.close();
		return u;
	}

	@Override
	public void addUser(User u) 
	{
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		
		try
		{
			s.save(u);
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
	public ArrayList<User> getUsers() 
	{
        Session s = hu.getSession();
        List<User> b = s.createQuery("From User", User.class).list();
        s.close();
        return (ArrayList<User>) b;

	}

	@Override
	public void updateUser(User u)
	{
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteUser(User u) 
	{
		// TODO Auto-generated method stub
		
	}

}
