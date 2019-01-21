package com.revature.services;

import java.util.ArrayList;

import com.revature.beans.Audit;

public interface AuditService 
{
	public void editAudit(Audit a);
	public void deleteAudit(Audit a);
	public void addAudit(Audit a);
	public ArrayList<Audit> getAudits();
}
