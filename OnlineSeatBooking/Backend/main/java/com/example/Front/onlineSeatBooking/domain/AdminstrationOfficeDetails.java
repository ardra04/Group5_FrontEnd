package com.example.Front.onlineSeatBooking.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="adminstration_details")
public class AdminstrationOfficeDetails {
	@Id
	@GeneratedValue
	private long officeId;
	
	@Column(nullable = false)
	private String address;
	
	@Column(nullable = false)
	private final int seatcapacity=100;
	
	@Column(nullable = false)
	private int availablespaces;
	
	@Column(nullable = false)
	private String floor;
	
	public long getOfficeId() {
		return officeId;
	}
	public void setOfficeId(long officeId) {
		this.officeId = officeId;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getAvailablespaces() {
		return availablespaces;
	}
	public void setAvailablespaces(int availablespaces) {
		this.availablespaces = availablespaces;
	}
	public String getFloor() {
		return floor;
	}
	public void setFloor(String floor) {
		this.floor = floor;
	}
	public int getSeatcapacity() {
		return seatcapacity;
	}
	
}
