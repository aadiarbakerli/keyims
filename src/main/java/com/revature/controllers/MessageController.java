package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.beans.Message;
import com.revature.beans.User;
import com.revature.services.MessageService;
import com.revature.services.UserService;

@RestController
@RequestMapping(value="/msg")
public class MessageController {
	
	@Autowired
	private MessageService ms;
	
	@Autowired
	private UserService us;
	
	ObjectMapper om = new ObjectMapper();
	
	@RequestMapping(method=RequestMethod.GET)
	@ResponseBody
	public List<Message> getMessage() {
		return ms.getMessages();
	}

	@RequestMapping(method=RequestMethod.POST)
	@ResponseBody
	public void addMessage(@RequestBody String input) throws Exception {
		
		System.out.println(input);
		
		String[] split = input.split("&");
		
		String uFrom = split[0];
		String uTo = split[1];
		String content = split[2];
		
		Message m = new Message();
		
		System.out.println("from: " + uFrom + " To: " + uTo + " Content: " + content);
		
		User uF = us.getUser(Integer.parseInt(uFrom));
		User uT = us.getUser(Integer.parseInt(uTo));
		
		System.out.println(uF);
		System.out.println(uT);
		
		if (uF != null && uT != null) {
			m.setSender(uF.getId());
			m.setReceiver(uT.getId());
			m.setContent(content);
			System.out.println(m);
		
			ms.addMessage(m);
		}
		
	}
	
	@RequestMapping(method=RequestMethod.DELETE)
	@ResponseBody
	public void deleteMessage(@RequestBody String input) throws Exception {
		System.out.println(input);
		
		String[] split = input.split("&");
		
		String uFrom = split[0];
		String uTo = split[1];
		String content = split[2];
		
		Message m = new Message();
		
		System.out.println("from: " + uFrom + " To: " + uTo + " Content: " + content);
		
		int uF = Integer.parseInt(uFrom);
		int uT = Integer.parseInt(uTo);
		
		System.out.println(uF);
		System.out.println(uT);
		
		m.setSender(uF);
		m.setReceiver(uT);
		m.setContent(content);
		System.out.println(m);
		
		ms.deleteMessage(m);
	
	}
}
