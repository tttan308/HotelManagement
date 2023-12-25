package com.example.backend.controller;

import com.example.backend.entity.Room;
import com.example.backend.entity.RoomType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/v1/rooms")
public class RoomController {

    @GetMapping
    public Room getRoomByTypeAndPrice(@RequestParam String type, @RequestParam double minprice) {
        if ("vip".equalsIgnoreCase(type) && minprice <= 500000) {
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

            return vipRoom;
        }

        return null;
    }
}
