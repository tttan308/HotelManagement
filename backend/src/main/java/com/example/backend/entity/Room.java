package com.example.backend.entity;

import jakarta.persistence.*;

import java.util.List;
import java.util.Objects;

@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomId;

    private String roomName;

    @ManyToOne
    @JoinColumn(name = "room_type_id") // Định danh của loại phòng
    private RoomType roomType; // Tham chiếu đến RoomType

    private String status;
    private String roomImageId;
    private String cleaningStatus;

    @ElementCollection
    private List<String> features;
    // Constructors, getters, setters, và các phương thức khác.

    public Room() {
    }

    public Room(String roomName, RoomType roomType, String status, String roomImageId, String cleaningStatus, List<String> features) {
        this.roomName = roomName;
        this.roomType = roomType;
        this.status = status;
        this.roomImageId = roomImageId;
        this.cleaningStatus = cleaningStatus;
        this.features = features;
    }

    public Long getRoomId() {
        return roomId;
    }

    public void setRoomId(Long roomId) {
        this.roomId = roomId;
    }

    public RoomType getRoomType() {
        return roomType;
    }

    public void setRoomType(RoomType roomType) {
        this.roomType = roomType;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getRoomImageId() {
        return roomImageId;
    }

    public void setRoomImageId(String roomImageId) {
        this.roomImageId = roomImageId;
    }

    public String getCleaningStatus() {
        return cleaningStatus;
    }

    public void setCleaningStatus(String cleaningStatus) {
        this.cleaningStatus = cleaningStatus;
    }

    public List<String> getFeatures() {
        return features;
    }

    public void setFeatures(List<String> features) {
        this.features = features;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Room room)) return false;
        return Objects.equals(getRoomId(), room.getRoomId()) && Objects.equals(roomName, room.roomName) && Objects.equals(roomType, room.roomType) && Objects.equals(status, room.status) && Objects.equals(roomImageId, room.roomImageId) && Objects.equals(cleaningStatus, room.cleaningStatus) && Objects.equals(features, room.features);
    }

    @Override
    public int hashCode() {
        return Objects.hash(getRoomId(), roomName, roomType, status, roomImageId, cleaningStatus, features);
    }

    @Override
    public String toString() {
        return "Room{" +
                "roomId=" + roomId +
                ", roomName='" + roomName + '\'' +
                ", roomType=" + roomType +
                ", status='" + status + '\'' +
                ", roomImageId='" + roomImageId + '\'' +
                ", cleaningStatus='" + cleaningStatus + '\'' +
                ", features=" + features +
                '}';
    }
}
