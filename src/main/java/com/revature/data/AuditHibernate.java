package com.revature.data;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Audit;
import com.revature.util.HibernateUtil;

@Component
public class AuditHibernate implements AuditDao
{
	@Autowired
	HibernateUtil hu;
	
	public Audit getAudit(int id) 
	{
		Session s = hu.getSession();
		Audit u = s.get(Audit.class, id);
		s.close();
		return u;
	}

	@Override
	public void addAudit(Audit k) 
	{
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		
		try
		{
			s.save(k);
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
	public ArrayList<Audit> getAudits() 
	{
        Session s = hu.getSession();
        List<Audit> k = s.createQuery("From Audit", Audit.class).list();
        s.close();
        return (ArrayList<Audit>) k;
	}

	@Override
	public void updateAudit(Audit k)
	{
		Session s = hu.getSession();
		Transaction t = s.beginTransaction();
		
		try
		{
			s.update(k);
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
	public void deleteAudit(Audit k) 
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
