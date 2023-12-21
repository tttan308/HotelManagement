package com.example.backend.entity;

import jakarta.persistence.*;
import org.apache.catalina.Service;

import java.util.Date;
import java.util.Objects;

public class RoomService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomServiceId;

    @ManyToOne
    @JoinColumn(name = "room_id") // Định danh của phòng mà dịch vụ sẽ được cung cấp
    private Room room;

    @ManyToOne
    @JoinColumn(name = "service_id") // Định danh cho loại dịch vụ được cung cấp
    private Service service;

    @Temporal(TemporalType.DATE)
    private Date startDate; // Ngày bắt đầu cung cấp dịch vụ

    @Temporal(TemporalType.DATE)
    private Date endDate; // Ngày dự kiến kết thúc cung cấp dịch vụ (đối với một vài dịch vụ đặc biệt)

    private String status; // Trạng thái hiện tại của dịch vụ phòng (mô tả rằng dịch vụ còn tồn tại trong phòng này không)

    // Constructors, getters, setters và các phương thức khác.

    public RoomService() {
    }

    public RoomService(Room room, Service service, Date startDate, Date endDate, String status) {
        this.room = room;
        this.service = service;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
    }

    public Long getRoomServiceId() {
        return roomServiceId;
    }

    public void setRoomServiceId(Long roomServiceId) {
        this.roomServiceId = roomServiceId;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof RoomService that)) return false;
        return Objects.equals(getRoomServiceId(), that.getRoomServiceId()) && Objects.equals(getRoom(), that.getRoom()) && Objects.equals(getService(), that.getService()) && Objects.equals(getStartDate(), that.getStartDate()) && Objects.equals(getEndDate(), that.getEndDate()) && Objects.equals(getStatus(), that.getStatus());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getRoomServiceId(), getRoom(), getService(), getStartDate(), getEndDate(), getStatus());
    }

    @Override
    public String toString() {
        return "RoomService{" +
                "roomServiceId=" + roomServiceId +
                ", room=" + room +
                ", service=" + service +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", status='" + status + '\'' +
                '}';
    }
}
