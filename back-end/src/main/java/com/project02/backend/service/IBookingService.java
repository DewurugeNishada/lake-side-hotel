package com.project02.backend.service;

import com.project02.backend.model.BookedRoom;

import java.util.List;

public interface IBookingService {

 List<BookedRoom> getAllBookingsByRoomId(Long roomId);

 List<BookedRoom> getAllBookings();

    BookedRoom findByBookingConfirmationCode(String confirmationCode);

    String saveBooking(Long roomId, BookedRoom bookingRequest);

    void cancelBooking(Long bookingId);
}
