package com.revature.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.beans.Audit;
import com.revature.services.AuditService;

@Controller
@RequestMapping(value="/auditserv")
public class AuditController
{
	@Autowired
	AuditService as;
	
	@RequestMapping(method=RequestMethod.GET)
	@ResponseBody
	public ArrayList<Audit> getAudit()
	{
		
		return as.getAudits();
	}
}
