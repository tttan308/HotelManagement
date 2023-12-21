package com.example.backend.entity;

import jakarta.persistence.*;

import java.util.List;
import java.util.Objects;

@Entity
public class RoomType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomTypeId;

    private String roomTypeName;
    private String description;
    private int capacity;
    private double basePrice;

    @OneToMany(mappedBy = "roomType")
    private List<Room> rooms;

    public RoomType() {
    }

    public RoomType(String roomTypeName, String description, int capacity, double basePrice, List<Room> rooms) {
        this.roomTypeName = roomTypeName;
        this.description = description;
        this.capacity = capacity;
        this.basePrice = basePrice;
        this.rooms = rooms;
    }

    public Long getRoomTypeId() {
        return roomTypeId;
    }

    public void setRoomTypeId(Long roomTypeId) {
        this.roomTypeId = roomTypeId;
    }

    public String getRoomTypeName() {
        return roomTypeName;
    }

    public void setRoomTypeName(String roomTypeName) {
        this.roomTypeName = roomTypeName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public double getBasePrice() {
        return basePrice;
    }

    public void setBasePrice(double basePrice) {
        this.basePrice = basePrice;
    }

    public List<Room> getRooms() {
        return rooms;
    }

    public void setRooms(List<Room> rooms) {
        this.rooms = rooms;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof RoomType roomType)) return false;
        return getCapacity() == roomType.getCapacity() && Double.compare(getBasePrice(), roomType.getBasePrice()) == 0 && Objects.equals(getRoomTypeId(), roomType.getRoomTypeId()) && Objects.equals(getRoomTypeName(), roomType.getRoomTypeName()) && Objects.equals(getDescription(), roomType.getDescription()) && Objects.equals(getRooms(), roomType.getRooms());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getRoomTypeId(), getRoomTypeName(), getDescription(), getCapacity(), getBasePrice(), getRooms());
    }

    @Override
    public String toString() {
        return "RoomType{" +
                "roomTypeId=" + roomTypeId +
                ", roomTypeName='" + roomTypeName + '\'' +
                ", description='" + description + '\'' +
                ", capacity=" + capacity +
                ", basePrice=" + basePrice +
                ", rooms=" + rooms +
                '}';
    }
}
