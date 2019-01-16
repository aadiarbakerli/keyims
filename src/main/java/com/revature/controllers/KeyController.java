package com.revature.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

<<<<<<< HEAD
import com.fasterxml.jackson.databind.ObjectMapper;
=======
>>>>>>> master
import com.revature.beans.Key;
import com.revature.services.KeyService;

@Controller
<<<<<<< HEAD
=======
@RequestMapping(value="/keyserv")
>>>>>>> master
public class KeyController
{
	@Autowired
	private KeyService ks;
	ObjectMapper om = new ObjectMapper();
	
<<<<<<< HEAD
	@RequestMapping(value="/key")
	public String keyStat()
=======
	@RequestMapping(method=RequestMethod.GET)
	@ResponseBody
	public List<Key> goLogin(HttpSession sess)
>>>>>>> master
	{
		return ks.getKeys();
	}
	
	@RequestMapping(value="/keyserv", method=RequestMethod.GET)
	@ResponseBody
	public List<Key> getKeys()
	{
		return ks.getKeys();
	}
	
	@RequestMapping(value="/keyserv", method=RequestMethod.POST)
	@ResponseBody
	public String UpdateKey(@RequestBody String json) throws Exception
	{
		Key k = om.readValue(json, Key.class);
		
		ks.editKey(k);
		
		System.out.println(k.toString());
		return "done";
	}
	
	@RequestMapping(value="/keyserv", method=RequestMethod.PUT)
	@ResponseBody
	public String PutKey(@RequestBody String json) throws Exception
	{
		Key k = om.readValue(json, Key.class);
		
		ks.addKey(k);
		
		System.out.println(k.toString());
		return "done";
	}
}