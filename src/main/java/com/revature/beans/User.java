package com.revature.beans;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="userInfo")
public class User
{
	@Id
	@SequenceGenerator(name="user_seq", sequenceName="user_seq", allocationSize=1)
	@GeneratedValue(generator="user_seq", strategy=GenerationType.AUTO)	
	private int id;
	private String name;
	private String email;
	private String pswd;
	private int lvl;
	@ManyToMany(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinTable(name="userkey",
	joinColumns=@JoinColumn(name="userid"),
	inverseJoinColumns=@JoinColumn(name="keyid"))
	private List<Key> keys;
	
	public User()
	{
		System.out.println("user created");
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPswd() {
		return pswd;
	}

	public void setPswd(String pswd) {
		this.pswd = pswd;
	}

	public int getLevel() {
		return lvl;
	}

	public void setLevel(int level) {
		this.lvl = level;
	}
	
	public List<Key> getKeys() {
		return keys;
	}

	public void setKeys(ArrayList<Key> keys) {
		this.keys = keys;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + lvl;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((pswd == null) ? 0 : pswd.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (lvl != other.lvl)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (pswd == null) {
			if (other.pswd != null)
				return false;
		} else if (!pswd.equals(other.pswd))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", pswd=" + pswd + ", level=" + lvl + "]";
	}
	
	
}
