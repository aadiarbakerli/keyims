package com.revature.services;

import java.util.ArrayList;

import com.revature.beans.Key;

public interface KeyService 
{
	public void editKey(Key k);
	public void deleteKey(Key k);
	public void addKey(Key k);
	public ArrayList<Key> getKeys();
}
