package com.revature.controllers;

import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.beans.Audit;
import com.revature.beans.Key;
import com.revature.beans.User;
import com.revature.services.AuditService;
import com.revature.services.KeyService;
import com.revature.services.UserService;

@Controller
public class KeyController
{
	@Autowired
	private KeyService ks;
	
	@Autowired
	private UserService us;
	
	@Autowired 
	private AuditService as;
	
	ObjectMapper om = new ObjectMapper();
	
	@RequestMapping(value="/key")
	public String keyStat()
	{
		return "index.html";
	}
	
	@RequestMapping(value="/keyserv", method=RequestMethod.GET)
	@ResponseBody
	public List<Key> getKeys(HttpSession sess)
	{
		List<Key> k = ks.getKeys();
		User u =  (User)sess.getAttribute("user");
		
		if(u == null || u.getlvl() == 0)
		{
			Iterator<Key> i = k.iterator();
		
			while(i.hasNext())
			{
				if(!i.next().isPub())
					i.remove();
			}
		}
		return k;
	}
	
	@RequestMapping(value="/keyserv", method=RequestMethod.POST)
	@ResponseBody
	public String UpdateKey(@RequestBody String json, HttpSession sess) throws Exception
	{
		User u =  (User)sess.getAttribute("user");
		Key k = om.readValue(json, Key.class);
		
		ks.editKey(k);
		
		Date d = new Date();
		Audit a =new Audit();
		a.setUser(u.getId());
		a.setEvent(d.toString() + "=> Updated key " + k.getId());
		as.addAudit(a);
		
		System.out.println(k.toString());
		return "done";
	}
	
	@RequestMapping(value="/keyserv", method=RequestMethod.PUT)
	@ResponseBody
	public String PutKey(@RequestBody String json, HttpSession sess) throws Exception
	{
		Key k = om.readValue(json, Key.class);
		
		User u =  (User)sess.getAttribute("user");
		
		if(u != null)
		{
			u.getKeys().add(k);
			us.editUser(u);
			
			Date d = new Date();
			Audit a =new Audit();
			a.setUser(u.getId());
			a.setEvent(d.toString() + "=> Added key " + k.getId());
			as.addAudit(a);
		}
		
		ks.addKey(k);
		
		System.out.println(k.toString());
		return "done";
	}
	
	@RequestMapping(value="/keyserv/{id}", method=RequestMethod.DELETE)
	@ResponseBody
	public String DeleteKey(@PathVariable String id, HttpSession sess) throws Exception
	{
		Key k = ks.getKey(Integer.parseInt(id));
		
		User u =  (User)sess.getAttribute("user");
		Date d = new Date();
		Audit a =new Audit();
		a.setUser(u.getId());
		a.setEvent(d.toString() + "=> Deleted key " + k.getId());
		as.addAudit(a);
		
		ks.deleteKey(k);
		return "done";
	}
}
