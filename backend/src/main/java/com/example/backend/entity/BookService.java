package com.example.backend.entity;

import jakarta.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
public class BookService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookServiceId;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private UserAccount customer;

    @ManyToOne
    @JoinColumn(name = "service_id")
    private Service service;

    @ManyToOne
    @JoinColumn(name = "booking_id")
    private UserAccount booking;

    @Temporal(TemporalType.TIMESTAMP)
    private Date bookingDate;

    @Temporal(TemporalType.DATE)
    private Date serviceDate;

    private int quantity;

    private String status;

    private double totalPrice;

    private String specialRequests;

    public BookService() {
    }

    public BookService(UserAccount customer, Service service, UserAccount booking, Date bookingDate, Date serviceDate, int quantity, String status, double totalPrice, String specialRequests) {
        this.customer = customer;
        this.service = service;
        this.booking = booking;
        this.bookingDate = bookingDate;
        this.serviceDate = serviceDate;
        this.quantity = quantity;
        this.status = status;
        this.totalPrice = totalPrice;
        this.specialRequests = specialRequests;
    }

    public Long getBookServiceId() {
        return bookServiceId;
    }

    public void setBookServiceId(Long bookServiceId) {
        this.bookServiceId = bookServiceId;
    }

    public UserAccount getCustomer() {
        return customer;
    }

    public void setCustomer(UserAccount customer) {
        this.customer = customer;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public UserAccount getBooking() {
        return booking;
    }

    public void setBooking(UserAccount booking) {
        this.booking = booking;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

    public Date getServiceDate() {
        return serviceDate;
    }

    public void setServiceDate(Date serviceDate) {
        this.serviceDate = serviceDate;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
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
        if (!(o instanceof BookService that)) return false;
        return getQuantity() == that.getQuantity() && Double.compare(that.getTotalPrice(), getTotalPrice()) == 0 && Objects.equals(getBookServiceId(), that.getBookServiceId()) && Objects.equals(getCustomer(), that.getCustomer()) && Objects.equals(getService(), that.getService()) && Objects.equals(getBooking(), that.getBooking()) && Objects.equals(getBookingDate(), that.getBookingDate()) && Objects.equals(getServiceDate(), that.getServiceDate()) && Objects.equals(getStatus(), that.getStatus()) && Objects.equals(getSpecialRequests(), that.getSpecialRequests());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getBookServiceId(), getCustomer(), getService(), getBooking(), getBookingDate(), getServiceDate(), getQuantity(), getStatus(), getTotalPrice(), getSpecialRequests());
    }

    @Override
    public String toString() {
        return "BookService{" +
                "customer=" + customer +
                ", service=" + service +
                ", booking=" + booking +
                ", bookingDate=" + bookingDate +
                ", serviceDate=" + serviceDate +
                ", quantity=" + quantity +
                ", status='" + status + '\'' +
                ", totalPrice=" + totalPrice +
                ", specialRequests='" + specialRequests + '\'' +
                '}';
    }
}
