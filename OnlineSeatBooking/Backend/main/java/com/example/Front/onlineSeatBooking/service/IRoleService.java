package com.example.Front.onlineSeatBooking.service;

public interface IRoleService<T> extends Iservice<T> {
	T findByName(String name);
}
