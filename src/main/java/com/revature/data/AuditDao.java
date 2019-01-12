package com.revature.data;

import java.util.ArrayList;

import com.revature.beans.Audit;

public interface AuditDao 
{
	public Audit getAudit(int id);
	public void addAudit(Audit a);
	public ArrayList<Audit> getAudits();
	public void updateAudit(Audit a);
	public void deleteAudit(Audit a);
}
