package com.revature.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class main 
{
	public static void main(String[] args)
	{
		ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
		System.out.println("Hello there");
	}
}
