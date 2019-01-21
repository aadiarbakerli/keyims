package com.revature.data;

import java.util.ArrayList;

import com.revature.beans.Key;

public interface KeyDao
{
	public Key getKey(int id);
	public void addKey(Key k);
	public ArrayList<Key> getKeys();
	public void updateKey(Key k);
	public void deleteKey(Key k);
}
