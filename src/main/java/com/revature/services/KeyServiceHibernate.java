package com.revature.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Key;
import com.revature.data.KeyDao;
@Service
public class KeyServiceHibernate implements KeyService
{
	@Autowired
	KeyDao kd;
	@Override
	public void editKey(Key m) 
	{
		kd.updateKey(m);
		
	}

	@Override
	public void deleteKey(Key m) 
	{
		kd.deleteKey(m);
		
	}

	@Override
	public void addKey(Key m)
	{
		kd.addKey(m);
		
	}

	@Override
	public ArrayList<Key> getKeys() 
	{
		return kd.getKeys();
	}

}
