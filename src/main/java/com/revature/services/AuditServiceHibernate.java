package com.revature.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Audit;
import com.revature.data.AuditDao;

@Service
public class AuditServiceHibernate implements AuditService
{
	@Autowired
	AuditDao ad;
	@Override
	public void editAudit(Audit m) 
	{
		ad.updateAudit(m);
		
	}

	@Override
	public void deleteAudit(Audit m) 
	{
		ad.deleteAudit(m);
		
	}

	@Override
	public void addAudit(Audit m)
	{
		ad.addAudit(m);
		
	}

	@Override
	public ArrayList<Audit> getAudits() 
	{
		return ad.getAudits();
	}
}
