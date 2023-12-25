package com.example.backend.controller;

import com.example.backend.entity.Room;
import com.example.backend.entity.RoomType;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/v1/rooms")
@RequiredArgsConstructor
public class RoomController {

    @GetMapping
    public List<Room> getAllRooms() {
        RoomType vipRoomType = new RoomType(
                "VIP",
                "Phòng VIP với đầy đủ tiện nghi",
                3,
                500000.0,
                new ArrayList<>()
        );

        Room vipRoom = new Room(
                "VIP001",
                vipRoomType,
                "Available",
                "viproom001.jpg",
                "Clean",
                Arrays.asList("WiFi", "HDTV", "Minibar")
        );

        RoomType normalRoomType = new RoomType(
                "Normal",
                "Phòng thường với đầy đủ tiện nghi",
                3,
                300000.0,
                new ArrayList<>()
        );

        Room normalRoom = new Room(
                "Normal001",
                normalRoomType,
                "Available",
                "normalroom001.jpg",
                "Clean",
                Arrays.asList("WiFi", "HDTV", "Minibar")
        );

        return Arrays.asList(vipRoom, normalRoom);
    }
}
