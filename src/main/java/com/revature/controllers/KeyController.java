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
<<<<<<< HEAD
import com.fasterxml.jackson.databind.ObjectMapper;
=======
>>>>>>> master
=======
import com.fasterxml.jackson.databind.ObjectMapper;
>>>>>>> 5163ec0cfe69f412c11acc45058cc29e4865e6a8
import com.revature.beans.Key;
import com.revature.services.KeyService;

@Controller
<<<<<<< HEAD
<<<<<<< HEAD
=======
@RequestMapping(value="/keyserv")
>>>>>>> master
=======
>>>>>>> 5163ec0cfe69f412c11acc45058cc29e4865e6a8
public class KeyController
{
	@Autowired
	private KeyService ks;
	ObjectMapper om = new ObjectMapper();
	
<<<<<<< HEAD
<<<<<<< HEAD
	@RequestMapping(value="/key")
	public String keyStat()
=======
	@RequestMapping(method=RequestMethod.GET)
	@ResponseBody
	public List<Key> goLogin(HttpSession sess)
>>>>>>> master
=======
	@RequestMapping(value="/key")
	public String keyStat()
	{
		return "index.html";
	}
	
	@RequestMapping(value="/keyserv", method=RequestMethod.GET)
	@ResponseBody
	public List<Key> getKeys()
>>>>>>> 5163ec0cfe69f412c11acc45058cc29e4865e6a8
	{
		return ks.getKeys();
	}
	
<<<<<<< HEAD
	@RequestMapping(value="/keyserv", method=RequestMethod.GET)
	@ResponseBody
	public List<Key> getKeys()
	{
		return ks.getKeys();
	}
	
=======
>>>>>>> 5163ec0cfe69f412c11acc45058cc29e4865e6a8
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 5163ec0cfe69f412c11acc45058cc29e4865e6a8
