package com.example.backend.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class BookService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookServiceId;

    @ManyToOne
    @JoinColumn(name = "customer_id") // Định danh của khách hàng đã đặt dịch vụ
    private UserAccount customer;

    @ManyToOne
    @JoinColumn(name = "service_id") // Định danh của dịch vụ trong đơn đặt dịch vụ này
    private Service service;

    @ManyToOne
    @JoinColumn(name = "booking_id") // Định danh của phòng đặt dịch vụ này
    private UserAccount booking;

    @Temporal(TemporalType.TIMESTAMP)
    private Date bookingDate; // Ngày mà dịch vụ được đặt

    @Temporal(TemporalType.DATE)
    private Date serviceDate; // Ngày mà dịch vụ được lên lịch để cung cấp

    private int quantity; // Số lượng của dịch vụ được đặt

    private String status; // Trạng thái hiện tại của việc đặt dịch vụ (Confirmed, Cancelled, Pending)

    private double totalPrice; // Tổng giá của dịch vụ đặt, tính theo số lượng và giá dịch vụ

    private String specialRequests; // Yêu cầu đặc biệt từ phía khách hàng liên quan đến việc đặt dịch vụ

    // Constructors, getters, setters và các phương thức khác.
}
