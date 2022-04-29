package com.example.Front.onlineSeatBooking.resource.impl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import com.example.Front.onlineSeatBooking.domain.AdminstrationOfficeDetails;
import com.example.Front.onlineSeatBooking.resource.Resource;
import com.example.Front.onlineSeatBooking.service.IPageService;
import com.example.Front.onlineSeatBooking.service.Iservice;

import java.util.Arrays;
import java.util.Set;
import java.util.TreeSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/seatbooking")
@CrossOrigin(origins="http://localhost:3000")
public class AdminstrationResourceImpl implements Resource<AdminstrationOfficeDetails> {
	
	@Autowired
	private Iservice<AdminstrationOfficeDetails> adminService;
	
	@Autowired
	private IPageService<AdminstrationOfficeDetails> adminPageService;

	@Override
	public ResponseEntity<Page<AdminstrationOfficeDetails>> findAll(Pageable pageable, String searchText) {
		return new ResponseEntity<>(adminPageService.findAll(pageable, searchText), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Page<AdminstrationOfficeDetails>> findAll(int pageNumber, int pageSize, String sortBy,
			String sortDir) {
		return new ResponseEntity<>(adminPageService.findAll(
				PageRequest.of(
						pageNumber, pageSize,
						sortDir.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending()
				)
		), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<AdminstrationOfficeDetails> findById(Long id) {
		return new ResponseEntity<>(adminService.findById(id).get(), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<AdminstrationOfficeDetails> save(AdminstrationOfficeDetails admin) {
		return new ResponseEntity<>(adminService.saveOrUpdate(admin), HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<AdminstrationOfficeDetails> update(AdminstrationOfficeDetails admin) {
		return new ResponseEntity<>(adminService.saveOrUpdate(admin), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> deleteById(Long id) {
		return new ResponseEntity<>(adminService.deleteById(id), HttpStatus.OK);
	}
	
	@GetMapping("/genres")
	 public  ResponseEntity<Set<String>> findAllAddress() {
	        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Bangalore", "Kochi", "Chennai", "Hyderabad", "Pune", "Goa", "Delhi")), HttpStatus.OK);
	 }

}
