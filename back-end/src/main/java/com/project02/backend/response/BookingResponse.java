package com.project02.backend.response;



import com.project02.backend.model.Room;
import jakarta.persistence.Column;
import lombok.*;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class BookingResponse {

    private Long id;

    private LocalDate checkInDate;

    private LocalDate checkOutDate;

    private String guestName;

    private String guestEmail;

    private int numOfAdults;

    private int numOfChildren;

    private int totalNumOfGuests;

    private String bookingConfirmationCode;

    private RoomResponse room;

    public BookingResponse(Long id, LocalDate checkInDate, LocalDate checkOutDate,
                           String bookingConfirmationCode) {
        this.id = id;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.bookingConfirmationCode = bookingConfirmationCode;
    }
}