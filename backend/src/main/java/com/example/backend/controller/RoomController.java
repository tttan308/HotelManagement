package com.example.backend.controller;

import com.example.backend.entity.Room;
import com.example.backend.entity.RoomType;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/v1/rooms")
@RequiredArgsConstructor
public class RoomController {

        @GetMapping
        public List<RoomType> getAllRooms() {
            Room room1 = new Room(
                    "Phòng 001",
                    "Đã được đặt",
                    "Img001",
                    "Sạch",
                    Arrays.asList("2 phòng ngủ", "2 phòng tắm", "1 ban công")
            );

            Room room2 = new Room(
                    "Phòng 002",
                    "Đã được đặt",
                    "Img002",
                    "Sạch",
                    Arrays.asList("2 phòng ngủ", "2 phòng tắm", "1 ban công")
            );

            Room room3 = new Room(
                    "Phòng 003",
                    "Đã được đặt",
                    "Img003",
                    "Sạch",
                    Arrays.asList("2 phòng ngủ", "2 phòng tắm", "1 ban công")
            );

            Room room4 = new Room(
                    "Phòng 004",
                    "Đã được đặt",
                    "Img004",
                    "Sạch",
                    Arrays.asList("2 phòng ngủ", "2 phòng tắm", "1 ban công")
            );

            RoomType standardRoomType = new RoomType(
                    "Tiêu Chuẩn",
                    "Phòng ấm cúng với tiện nghi cơ bản như wifi, điều hòa, ...",
                    2,
                    1000000.0,
                    Arrays.asList(room1, room2)
            );


            RoomType vipRoomType = new RoomType(
                    "VIP",
                    "Phòng sang trọng với tiện nghi đầy đủ như wifi, điều hòa, ...",
                    2,
                    2000000.0,
                    Arrays.asList(room3, room4)
            );

            return Arrays.asList(standardRoomType, vipRoomType);
        }
}
