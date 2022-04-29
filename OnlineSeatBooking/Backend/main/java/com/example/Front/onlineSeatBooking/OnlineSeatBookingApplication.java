package com.example.Front.onlineSeatBooking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.Front.onlineSeatBooking.domain.AdminstrationOfficeDetails;
import com.example.Front.onlineSeatBooking.domain.Role;
import com.example.Front.onlineSeatBooking.domain.User;
import com.example.Front.onlineSeatBooking.service.IRoleService;
import com.example.Front.onlineSeatBooking.service.Iservice;
import com.example.Front.onlineSeatBooking.utils.ConstantUtils;

@SpringBootApplication
public class OnlineSeatBookingApplication implements CommandLineRunner {
	@Autowired
	private Iservice<User> userService;

	@Autowired
	private IRoleService<Role> roleService;

	@Autowired
	private Iservice<AdminstrationOfficeDetails> adminService;

	public static void main(String[] args) {
		SpringApplication.run(OnlineSeatBookingApplication.class, args);
	}
	
	
	@Override
	public void run(String... args) throws Exception {
		if (roleService.findAll().isEmpty()) {
			roleService.saveOrUpdate(new Role(ConstantUtils.ADMIN.toString()));
			roleService.saveOrUpdate(new Role(ConstantUtils.USER.toString()));
		}

		if (userService.findAll().isEmpty()) {
			User user1 = new User();
			user1.setEmail("test@user.com");
			user1.setName("Test User");
			user1.setMobile("9787456545");
			user1.setRole(roleService.findByName(ConstantUtils.USER.toString()));
			user1.setPassword(new BCryptPasswordEncoder().encode("testuser"));
			userService.saveOrUpdate(user1);

			User user2 = new User();
			user2.setEmail("test@admin.com");
			user2.setName("Test Admin");
			user2.setMobile("9787456545");
			user2.setRole(roleService.findByName(ConstantUtils.ADMIN.toString()));
			user2.setPassword(new BCryptPasswordEncoder().encode("testadmin"));
			userService.saveOrUpdate(user2);
		}

		if (adminService.findAll().isEmpty()) {
			for (int i = 1; i <= 10; i++) {
				AdminstrationOfficeDetails admin = new AdminstrationOfficeDetails();
				admin.setAddress("Bangalore");
				admin.setAvailablespaces(40);
				admin.setFloor("H9b2");
				admin.setOfficeId(1);
				adminService.saveOrUpdate(admin);
			}
		}
	}

}
