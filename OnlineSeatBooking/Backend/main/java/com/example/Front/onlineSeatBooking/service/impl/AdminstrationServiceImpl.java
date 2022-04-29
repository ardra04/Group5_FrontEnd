package com.example.Front.onlineSeatBooking.service.impl;

import java.util.Collection;
import java.util.Optional;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.Front.onlineSeatBooking.domain.AdminstrationOfficeDetails;
import com.example.Front.onlineSeatBooking.repository.AdminOfficeRepository;
import com.example.Front.onlineSeatBooking.service.IPageService;
import com.example.Front.onlineSeatBooking.service.Iservice;

@Service
public class AdminstrationServiceImpl implements Iservice<AdminstrationOfficeDetails>, IPageService<AdminstrationOfficeDetails> {
	
	@Autowired
	AdminOfficeRepository adminOfficeRepo;


	public Page<AdminstrationOfficeDetails> findAll(Pageable pageable, String searchText) {
		return adminOfficeRepo.findAllAdminstrationOfficeDetails(pageable,searchText);
	}

	@Override
	public Page<AdminstrationOfficeDetails> findAll(Pageable pageable) {
		return adminOfficeRepo.findAll(pageable);
	}

	@Override
	public Collection<AdminstrationOfficeDetails> findAll() {
		return (Collection<AdminstrationOfficeDetails>) adminOfficeRepo.findAll();
	}

	@Override
	public Optional<AdminstrationOfficeDetails> findById(Long id) {
		return adminOfficeRepo.findById(id);
	}

	@Override
	public AdminstrationOfficeDetails saveOrUpdate(AdminstrationOfficeDetails t) {
		return adminOfficeRepo.save(t);
	}

	@Override
	public String deleteById(Long id) {
		JSONObject jsonObject = new JSONObject();
		try {
			adminOfficeRepo.deleteById(id);
			jsonObject.put("message", "AdminstrationOfficeDetails deleted successfully");
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObject.toString();
	}
}
