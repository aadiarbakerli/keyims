package com.revature.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.beans.Key;
import com.revature.services.KeyService;

@Controller
public class KeyController
{
	@RequestMapping(value="/key")
	public String keyStat()
	{
		return "index.html";
	}
	
	@Autowired
	private KeyService ks;
	@RequestMapping(value="/keyserv", method=RequestMethod.GET)
	@ResponseBody
	public List<Key> getKeys(HttpSession sess)
	{
		return ks.getKeys();
	}
}
