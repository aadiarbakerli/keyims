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
import com.revature.services.MessageService;

@RestController
@RequestMapping(value="/msg")
public class MessageController {
	
	@Autowired
	private MessageService ms;
	ObjectMapper om = new ObjectMapper();
	
	@RequestMapping(method=RequestMethod.GET)
	@ResponseBody
	public List<Message> getMessage() {
		return ms.getMessages();
	}

	@RequestMapping(method=RequestMethod.POST)
	@ResponseBody
	public void editMessage(@RequestBody String json) throws Exception {
		Message m = om.readValue(json, Message.class);
		
		ms.editMessage(m);
		
	}
	
	@RequestMapping(method=RequestMethod.PUT)
	@ResponseBody
	public void addMessage(@RequestBody String json) throws Exception {
		Message m = om.readValue(json, Message.class);
		
		ms.addMessage(m);
	}
}
