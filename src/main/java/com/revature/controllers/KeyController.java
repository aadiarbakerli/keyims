package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.revature.services.KeyService;

@Controller
@RequestMapping(value="/key")
public class KeyController
{
	@Autowired
	private KeyService ks;
	
	@RequestMapping(method=RequestMethod.GET)
	public String goLogin(HttpSession sess)
	{
		return "index.html";
	}
}
