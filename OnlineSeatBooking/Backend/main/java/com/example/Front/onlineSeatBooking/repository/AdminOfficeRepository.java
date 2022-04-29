package com.example.Front.onlineSeatBooking.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.example.Front.onlineSeatBooking.domain.AdminstrationOfficeDetails;

@Repository
public interface AdminOfficeRepository extends PagingAndSortingRepository<AdminstrationOfficeDetails, Long> {

    @Query("FROM AdminstrationOfficeDetails b WHERE b.address LIKE %:searchText% OR b.floor LIKE %:searchText% ORDER BY b.availablespaces ASC")
    Page<AdminstrationOfficeDetails> findAllAdminstrationOfficeDetails(Pageable pageable, @Param("searchText") String searchText); 

}
