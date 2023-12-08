package com.project02.backend.service;

import com.project02.backend.model.BookedRoom;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class BookingService {
    public List<BookedRoom> getAllBookingsByRoomId(Long roomId) {
//        return bookingRepository.findByRoomId(roomId);
        return null;
    }
}
