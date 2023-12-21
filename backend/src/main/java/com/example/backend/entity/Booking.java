package com.example.backend.entity;

import jakarta.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private UserAccount customer;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;

    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Temporal(TemporalType.DATE)
    private Date endDate;

    private double totalPrice;

    private String status;

    @Temporal(TemporalType.TIMESTAMP)
    private Date bookingDate;

    private String specialRequests;

    public Booking() {
    }

    public Booking(UserAccount customer, Room room, Date startDate, Date endDate, double totalPrice, String status,
            Date bookingDate, String specialRequests) {
        this.customer = customer;
        this.room = room;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalPrice = totalPrice;
        this.status = status;
        this.bookingDate = bookingDate;
        this.specialRequests = specialRequests;
    }

    public Long getBookingId() {
        return bookingId;
    }

    public void setBookingId(Long bookingId) {
        this.bookingId = bookingId;
    }

    public UserAccount getCustomer() {
        return customer;
    }

    public void setCustomer(UserAccount customer) {
        this.customer = customer;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

    public String getSpecialRequests() {
        return specialRequests;
    }

    public void setSpecialRequests(String specialRequests) {
        this.specialRequests = specialRequests;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Booking booking)) return false;
        return Double.compare(booking.getTotalPrice(), getTotalPrice()) == 0 && Objects.equals(getBookingId(), booking.getBookingId()) && Objects.equals(getCustomer(), booking.getCustomer()) && Objects.equals(getRoom(), booking.getRoom()) && Objects.equals(getStartDate(), booking.getStartDate()) && Objects.equals(getEndDate(), booking.getEndDate()) && Objects.equals(getStatus(), booking.getStatus()) && Objects.equals(getBookingDate(), booking.getBookingDate()) && Objects.equals(getSpecialRequests(), booking.getSpecialRequests());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getBookingId(), getCustomer(), getRoom(), getStartDate(), getEndDate(), getTotalPrice(), getStatus(), getBookingDate(), getSpecialRequests());
    }

    @Override
    public String toString() {
        return "Booking{" +
                ", customer=" + customer +
                ", room=" + room +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", totalPrice=" + totalPrice +
                ", status='" + status + '\'' +
                ", bookingDate=" + bookingDate +
                ", specialRequests='" + specialRequests + '\'' +
                '}';
    }
}
