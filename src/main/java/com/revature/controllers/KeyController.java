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
@RequestMapping(value="/key")
public class KeyController
{
	@Autowired
	private KeyService ks;
	
	@RequestMapping(method=RequestMethod.GET)
	@ResponseBody
	public List<Key> goLogin(HttpSession sess)
	{
		return ks.getKeys();
	}
}
