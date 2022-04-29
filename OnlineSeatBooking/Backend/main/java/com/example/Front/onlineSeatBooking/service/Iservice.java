package com.example.Front.onlineSeatBooking.service;

import java.util.Collection;
import java.util.Optional;

//import org.springframework.context.annotation.Bean;


public interface Iservice<T> {
	
	Collection<T> findAll();
	
	Optional<T> findById(Long id);
	
	T saveOrUpdate(T t);
	
	String deleteById(Long id);
}
