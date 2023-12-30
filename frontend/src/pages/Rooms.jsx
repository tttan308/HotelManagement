import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { RxDropdownMenu } from "react-icons/rx";
import RoomDetail from "../components/RoomDetail";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import InputFiltering from "../components/InputFiltering";

const Rooms = () => {
  // Chúng ta sẽ fetch dữ liệu rồi đưa vào biến data.
  const data = [
    {
      id: 1,
      year: 2023,
      name: "Premium King Room 1",
      src: "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D",
      star: 3,
      saving: true,
      basePrice: 2000000,
      salePrice: 1740000,
      featured: ["2 phòng ngủ", "2 phòng tắm", "1 ban công"],
      descriptions: [
        "Đang  thu hút nhiều lượt đặt, lần đặt gần nhất 1 giờ trước!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      discount: 13,
      capacity: 2,
      reviewCount: 102,
      vote_average: 8.2,
      roomType: "Standard",
    },
    {
      id: 2,
      year: 2023,
      saving: true,
      basePrice: 2000000,
      salePrice: 1740000,
      name: "Deluxe Room 2",
      roomType: "Deluxe",
      src: "https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb21zfGVufDB8fDB8fHww",
      star: 4,
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 ban công"],
      utils: 2,
      descriptions: [
        "Cung cấp không gian phòng hiện đại, đầy đủ tiện nghi.!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 120,
      capacity: 2,
      discount: 13,
      vote_average: 7.9,
    },
    {
      id: 3,
      year: 2023,
      saving: true,
      name: "Room With View 3",
      roomType: "Room View",
      capacity: 3,
      src: "https://images.unsplash.com/photo-1559414059-34fe0a59e57a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbSUyMHZpZXd8ZW58MHx8MHx8fDA%3D",
      star: 4,
      basePrice: 2000000,
      salePrice: 1740000,
      discount: 13,
      price: "1.740.000",
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 view biển"],
      utils: 2,
      descriptions: [
        "Tầm nhìn tuyệt vời từ căn phòng của quý khách, mang đến cho quý khách không gian thoải mái để tận hưởng cuộc sống!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 209,
      vote_average: 8.7,
    },
    {
      id: 4,
      year: 2023,
      saving: true,
      name: "Double Room 4",
      roomType: "Double",
      capacity: 5,
      src: "https://images.unsplash.com/photo-1560185893-d9680d601385?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RG91YmxlJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      star: 3,
      basePrice: 2000000,
      salePrice: 1740000,
      featured: ["2 phòng ngủ", "1 phòng tắm", "1 ban công"],
      utils: 4,
      descriptions: [
        "Đang  thu hút nhiều lượt đặt, lần đặt gần nhất 1 giờ trước!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      discount: 13,
      reviewCount: 310,
      vote_average: 8.5,
    },
    {
      id: 5,
      year: 2023,
      saving: true,
      discount: 13,
      name: "Standard Room 5",
      roomType: "Standard",
      capacity: 4,
      src: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJvb218ZW58MHx8MHx8fDA%3D",
      basePrice: 2000000,
      salePrice: 1740000,
      star: 3,
      featured: ["1 phòng ngủ", "1 phòng tắm"],
      utils: 2,
      discount: 20,
      save: true,
      descriptions: [
        "Phòng tiêu chuẩn với các tiện nghi cơ bản, thích hợp cho những người muốn trải nghiệm thoải mái và tiện ích đơn giản!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 155,
      vote_average: 7.6,
    },
    {
      id: 6,
      year: 2023,
      saving: true,
      name: "Queen Room 6",
      roomType: "Queen",
      capacity: 1,
      basePrice: 2000000,
      salePrice: 1740000,
      src: "https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbSUyMGhvdGVsfGVufDB8fDB8fHww",
      star: 4,
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 view biển"],
      utils: 4,
      discount: 13,
      descriptions: [
        "Phòng với giường lớn hơn so với giường đôi thông thường, tạo ra không gian thoải mái và sang trọng!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 254,
      vote_average: 8.8,
    },
    {
      id: 7,
      year: 2023,
      saving: true,
      basePrice: 2000000,
      capacity: 5,
      salePrice: 1740000,
      name: "Family Suite 7",
      roomType: "Family",
      src: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbSUyMGhvdGVsfGVufDB8fDB8fHww",
      star: 3,
      featured: ["2 phòng ngủ", "2 phòng tắm", "1 ban công"],
      utils: 3,
      discount: 13,
      descriptions: [
        "Phòng phù hợp cho gia đình, có thể bao gồm nhiều phòng ngủ và không gian chung, tạo điều kiện thuận lợi cho việc du lịch gia đình!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 189,
      vote_average: 8.3,
    },
    {
      id: 8,
      year: 2023,
      basePrice: 2000000,
      capacity: 1,
      roomType: "Suite",
      salePrice: 1740000,
      saving: true,
      name: "Presidential Suite 8",
      src: "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb20lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      star: 4,
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 ban công"],
      utils: 5,
      discount: 20,
      descriptions: [
        "Phòng cao cấp nhất trong khách sạn, thường có diện tích rộng lớn, cảnh đẹp ngoại ô, và nhiều tiện ích sang trọng như phòng tập gym và bếp riêng!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 298,
      vote_average: 8.2,
    },
    {
      id: 9,
      year: 2023,
      name: "Premium King Room 9",
      src: "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D",
      star: 3,
      saving: true,
      basePrice: 2000000,
      salePrice: 1740000,
      featured: ["2 phòng ngủ", "2 phòng tắm", "1 ban công"],
      utils: 2,
      descriptions: [
        "Đang  thu hút nhiều lượt đặt, lần đặt gần nhất 1 giờ trước!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      discount: 13,
      capacity: 2,
      reviewCount: 102,
      vote_average: 8.2,
      roomType: "Standard",
    },
    {
      id: 10,
      year: 2023,
      saving: true,
      basePrice: 2000000,
      salePrice: 1740000,
      name: "Deluxe Room 10",
      roomType: "Deluxe",
      src: "https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb21zfGVufDB8fDB8fHww",
      star: 4,
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 ban công"],
      utils: 2,
      descriptions: [
        "Cung cấp không gian phòng hiện đại, đầy đủ tiện nghi.!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 120,
      capacity: 2,
      discount: 13,
      vote_average: 7.9,
    },
    {
      id: 11,
      year: 2023,
      saving: true,
      name: "Room With View 11",
      roomType: "Room View",
      capacity: 3,
      src: "https://images.unsplash.com/photo-1559414059-34fe0a59e57a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbSUyMHZpZXd8ZW58MHx8MHx8fDA%3D",
      star: 4,
      basePrice: 2000000,
      salePrice: 1740000,
      discount: 13,
      price: "1.740.000",
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 view biển"],
      utils: 2,
      descriptions: [
        "Tầm nhìn tuyệt vời từ căn phòng của quý khách, mang đến cho quý khách không gian thoải mái để tận hưởng cuộc sống!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 209,
      vote_average: 8.7,
    },
    {
      id: 12,
      year: 2023,
      saving: true,
      name: "Double Room 12",
      roomType: "Double",
      capacity: 5,
      src: "https://images.unsplash.com/photo-1560185893-d9680d601385?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RG91YmxlJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      star: 3,
      basePrice: 2000000,
      salePrice: 1740000,
      featured: ["2 phòng ngủ", "1 phòng tắm", "1 ban công"],
      utils: 4,
      descriptions: [
        "Đang  thu hút nhiều lượt đặt, lần đặt gần nhất 1 giờ trước!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      discount: 13,
      reviewCount: 310,
      vote_average: 8.5,
    },
    {
      id: 13,
      year: 2023,
      saving: true,
      discount: 13,
      name: "Standard Room 13",
      roomType: "Standard",
      capacity: 4,
      src: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJvb218ZW58MHx8MHx8fDA%3D",
      basePrice: 2000000,
      salePrice: 1740000,
      star: 3,
      featured: ["1 phòng ngủ", "1 phòng tắm"],
      utils: 2,
      discount: 20,
      save: true,
      descriptions: [
        "Phòng tiêu chuẩn với các tiện nghi cơ bản, thích hợp cho những người muốn trải nghiệm thoải mái và tiện ích đơn giản!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 155,
      vote_average: 7.6,
    },
    {
      id: 14,
      year: 2023,
      saving: true,
      name: "Queen Room 14",
      roomType: "Queen",
      capacity: 1,
      basePrice: 2000000,
      salePrice: 1740000,
      src: "https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbSUyMGhvdGVsfGVufDB8fDB8fHww",
      star: 4,
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 view biển"],
      utils: 4,
      discount: 13,
      descriptions: [
        "Phòng với giường lớn hơn so với giường đôi thông thường, tạo ra không gian thoải mái và sang trọng!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 254,
      vote_average: 8.8,
    },
    {
      id: 15,
      year: 2023,
      saving: true,
      basePrice: 2000000,
      capacity: 5,
      salePrice: 1740000,
      name: "Family Suite 15",
      roomType: "Family",
      src: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbSUyMGhvdGVsfGVufDB8fDB8fHww",
      star: 3,
      featured: ["2 phòng ngủ", "2 phòng tắm", "1 ban công"],
      utils: 3,
      discount: 13,
      descriptions: [
        "Phòng phù hợp cho gia đình, có thể bao gồm nhiều phòng ngủ và không gian chung, tạo điều kiện thuận lợi cho việc du lịch gia đình!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 189,
      vote_average: 8.3,
    },
    {
      id: 16,
      year: 2023,
      basePrice: 2000000,
      capacity: 1,
      roomType: "Suite",
      salePrice: 1740000,
      saving: true,
      name: "Presidential Suite 16",
      src: "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb20lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      star: 4,
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 ban công"],
      utils: 5,
      discount: 20,
      descriptions: [
        "Phòng cao cấp nhất trong khách sạn, thường có diện tích rộng lớn, cảnh đẹp ngoại ô, và nhiều tiện ích sang trọng như phòng tập gym và bếp riêng!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 298,
      vote_average: 8.2,
    },
    {
      id: 17,
      year: 2023,
      name: "Premium King Room 17",
      src: "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D",
      star: 3,
      saving: true,
      basePrice: 2000000,
      salePrice: 1740000,
      featured: ["2 phòng ngủ", "2 phòng tắm", "1 ban công"],
      utils: 2,
      descriptions: [
        "Đang  thu hút nhiều lượt đặt, lần đặt gần nhất 1 giờ trước!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      discount: 13,
      capacity: 2,
      reviewCount: 102,
      vote_average: 8.2,
      roomType: "Standard",
    },
    {
      id: 18,
      year: 2023,
      saving: true,
      basePrice: 2000000,
      salePrice: 1740000,
      name: "Deluxe Room 18",
      roomType: "Deluxe",
      src: "https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb21zfGVufDB8fDB8fHww",
      star: 4,
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 ban công"],
      utils: 2,
      descriptions: [
        "Cung cấp không gian phòng hiện đại, đầy đủ tiện nghi.!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 120,
      capacity: 2,
      discount: 13,
      vote_average: 7.9,
    },
    {
      id: 19,
      year: 2023,
      saving: true,
      name: "Room With View 19",
      roomType: "Room View",
      capacity: 3,
      src: "https://images.unsplash.com/photo-1559414059-34fe0a59e57a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbSUyMHZpZXd8ZW58MHx8MHx8fDA%3D",
      star: 4,
      basePrice: 2000000,
      salePrice: 1740000,
      discount: 13,
      price: "1.740.000",
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 view biển"],
      utils: 2,
      descriptions: [
        "Tầm nhìn tuyệt vời từ căn phòng của quý khách, mang đến cho quý khách không gian thoải mái để tận hưởng cuộc sống!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 209,
      vote_average: 8.7,
    },
    {
      id: 20,
      year: 2023,
      saving: true,
      name: "Double Room 20",
      roomType: "Double",
      capacity: 5,
      src: "https://images.unsplash.com/photo-1560185893-d9680d601385?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RG91YmxlJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      star: 3,
      basePrice: 2000000,
      salePrice: 1740000,
      featured: ["2 phòng ngủ", "1 phòng tắm", "1 ban công"],
      utils: 4,
      descriptions: [
        "Đang  thu hút nhiều lượt đặt, lần đặt gần nhất 1 giờ trước!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      discount: 13,
      reviewCount: 310,
      vote_average: 8.5,
    },
    {
      id: 21,
      year: 2023,
      saving: true,
      discount: 13,
      name: "Standard Room 21",
      roomType: "Standard",
      capacity: 4,
      src: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJvb218ZW58MHx8MHx8fDA%3D",
      basePrice: 2000000,
      salePrice: 1740000,
      star: 3,
      featured: ["1 phòng ngủ", "1 phòng tắm"],
      utils: 2,
      discount: 20,
      save: true,
      descriptions: [
        "Phòng tiêu chuẩn với các tiện nghi cơ bản, thích hợp cho những người muốn trải nghiệm thoải mái và tiện ích đơn giản!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 155,
      vote_average: 7.6,
    },
    {
      id: 22,
      year: 2023,
      saving: true,
      name: "Queen Room 22",
      roomType: "Queen",
      capacity: 1,
      basePrice: 2000000,
      salePrice: 1740000,
      src: "https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbSUyMGhvdGVsfGVufDB8fDB8fHww",
      star: 4,
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 view biển"],
      utils: 4,
      discount: 13,
      descriptions: [
        "Phòng với giường lớn hơn so với giường đôi thông thường, tạo ra không gian thoải mái và sang trọng!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 254,
      vote_average: 8.8,
    },
    {
      id: 23,
      year: 2023,
      saving: true,
      basePrice: 2000000,
      capacity: 5,
      salePrice: 1740000,
      name: "Family Suite 23",
      roomType: "Family",
      src: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbSUyMGhvdGVsfGVufDB8fDB8fHww",
      star: 3,
      featured: ["2 phòng ngủ", "2 phòng tắm", "1 ban công"],
      utils: 3,
      discount: 13,
      descriptions: [
        "Phòng phù hợp cho gia đình, có thể bao gồm nhiều phòng ngủ và không gian chung, tạo điều kiện thuận lợi cho việc du lịch gia đình!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 189,
      vote_average: 8.3,
    },
    {
      id: 24,
      year: 2023,
      basePrice: 2000000,
      capacity: 1,
      roomType: "Suite",
      salePrice: 1740000,
      saving: true,
      name: "Presidential Suite 24",
      src: "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb20lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      star: 4,
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 ban công"],
      utils: 5,
      discount: 20,
      descriptions: [
        "Phòng cao cấp nhất trong khách sạn, thường có diện tích rộng lớn, cảnh đẹp ngoại ô, và nhiều tiện ích sang trọng như phòng tập gym và bếp riêng!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 298,
      vote_average: 8.2,
    },
    {
      id: 25,
      year: 2023,
      name: "Premium King Room 25",
      src: "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D",
      star: 3,
      saving: true,
      basePrice: 2000000,
      salePrice: 1740000,
      featured: ["2 phòng ngủ", "2 phòng tắm", "1 ban công"],
      utils: 2,
      descriptions: [
        "Đang  thu hút nhiều lượt đặt, lần đặt gần nhất 1 giờ trước!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      discount: 13,
      capacity: 2,
      reviewCount: 102,
      vote_average: 8.2,
      roomType: "Standard",
    },
    {
      id: 26,
      year: 2023,
      saving: true,
      basePrice: 2000000,
      salePrice: 1740000,
      name: "Deluxe Room 26",
      roomType: "Deluxe",
      src: "https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb21zfGVufDB8fDB8fHww",
      star: 4,
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 ban công"],
      utils: 2,
      descriptions: [
        "Cung cấp không gian phòng hiện đại, đầy đủ tiện nghi.!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 120,
      capacity: 2,
      discount: 13,
      vote_average: 7.9,
    },
    {
      id: 27,
      year: 2023,
      saving: true,
      name: "Room With View 27",
      roomType: "Room View",
      capacity: 3,
      src: "https://images.unsplash.com/photo-1559414059-34fe0a59e57a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbSUyMHZpZXd8ZW58MHx8MHx8fDA%3D",
      star: 4,
      basePrice: 2000000,
      salePrice: 1740000,
      discount: 13,
      price: "1.740.000",
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 view biển"],
      utils: 2,
      descriptions: [
        "Tầm nhìn tuyệt vời từ căn phòng của quý khách, mang đến cho quý khách không gian thoải mái để tận hưởng cuộc sống!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 209,
      vote_average: 8.7,
    },
    {
      id: 28,
      year: 2023,
      saving: true,
      name: "Double Room 28",
      roomType: "Double",
      capacity: 5,
      src: "https://images.unsplash.com/photo-1560185893-d9680d601385?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RG91YmxlJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      star: 3,
      basePrice: 2000000,
      salePrice: 1740000,
      featured: ["2 phòng ngủ", "1 phòng tắm", "1 ban công"],
      utils: 4,
      descriptions: [
        "Đang  thu hút nhiều lượt đặt, lần đặt gần nhất 1 giờ trước!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      discount: 13,
      reviewCount: 310,
      vote_average: 8.5,
    },
    {
      id: 29,
      year: 2023,
      saving: true,
      discount: 13,
      name: "Standard Room 29",
      roomType: "Standard",
      capacity: 4,
      src: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJvb218ZW58MHx8MHx8fDA%3D",
      basePrice: 2000000,
      salePrice: 1740000,
      star: 3,
      featured: ["1 phòng ngủ", "1 phòng tắm"],
      utils: 2,
      discount: 20,
      save: true,
      descriptions: [
        "Phòng tiêu chuẩn với các tiện nghi cơ bản, thích hợp cho những người muốn trải nghiệm thoải mái và tiện ích đơn giản!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 155,
      vote_average: 7.6,
    },
    {
      id: 30,
      year: 2023,
      saving: true,
      name: "Queen Room 30",
      roomType: "Queen",
      capacity: 1,
      basePrice: 2000000,
      salePrice: 1740000,
      src: "https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbSUyMGhvdGVsfGVufDB8fDB8fHww",
      star: 4,
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 view biển"],
      utils: 4,
      discount: 13,
      descriptions: [
        "Phòng với giường lớn hơn so với giường đôi thông thường, tạo ra không gian thoải mái và sang trọng!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 254,
      vote_average: 8.8,
    },
    {
      id: 31,
      year: 2023,
      saving: true,
      basePrice: 2000000,
      capacity: 5,
      salePrice: 1740000,
      name: "Family Suite 31",
      roomType: "Family",
      src: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbSUyMGhvdGVsfGVufDB8fDB8fHww",
      star: 3,
      featured: ["2 phòng ngủ", "2 phòng tắm", "1 ban công"],
      utils: 3,
      discount: 13,
      descriptions: [
        "Phòng phù hợp cho gia đình, có thể bao gồm nhiều phòng ngủ và không gian chung, tạo điều kiện thuận lợi cho việc du lịch gia đình!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 189,
      vote_average: 8.3,
    },
    {
      id: 32,
      year: 2023,
      basePrice: 2000000,
      capacity: 1,
      roomType: "Suite",
      salePrice: 1740000,
      saving: true,
      name: "Presidential Suite 32",
      src: "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb20lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      star: 4,
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 ban công"],
      utils: 5,
      discount: 20,
      descriptions: [
        "Phòng cao cấp nhất trong khách sạn, thường có diện tích rộng lớn, cảnh đẹp ngoại ô, và nhiều tiện ích sang trọng như phòng tập gym và bếp riêng!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 298,
      vote_average: 8.2,
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(4);
  const [filteredItems, setFilterdItems] = useState(data);
  const [maxIndexOfRecord, setMaxIndexOfRecord] = useState(
    Math.ceil(filteredItems.length / recordsPerPage)
  );
  const [indexOfLastRecord, setIndexOfLastRecord] = useState(
    currentPage * recordsPerPage
  );
  const [indexOfFirstRecord, setIndexOfFirstRecord] = useState(
    indexOfLastRecord - recordsPerPage
  );
  const [rangePrice, setRangePrice] = useState(0);
  const [rooms, setRooms] = useState(
    filteredItems.slice(indexOfFirstRecord, indexOfLastRecord)
  );

  /* Lấy ra toàn bộ thông tin về loại phòng, giá cơ bản, giá đã sale và số lượng người có thể ở trong phòng. */
  const roomType = [...new Set(data.map((room) => room.roomType))];
  const basePrice = [...new Set(data.map((room) => room.basePrice))];
  const salePrice = [...new Set(data.map((room) => room.salePrice))];
  const capacity = [...new Set(data.map((room) => room.capacity))];
  const [roomTypeSelected, setRoomTypeSelected] = useState(new Set([]));
  const [capacitySelected, setCapacitySelected] = useState(new Set([]));
  capacity.sort((a, b) => a - b);

  /* ============ */
  const [filterProp, setFilterProp] = useState(0);
  function chooseFilterProperty(event) {
    setFilterProp(event.target.value);
  }

  function undoChooseFilterProperty(event) {
    setFilterProp(0);
  }

  // ====================== Text Input Filter. ======================
  function handleInputTextChange(event) {
    setRooms(() => {
      return data.filter((room) => {
        return (
          room.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !==
          -1
        );
      });
    });
  }

  function FilterItems() {
    /* Lấy toàn bộ danh sách các phòng đã được lọc, ban đầu mặc định là toàn bộ phòng. */
    let filterItems = data;
    if (roomTypeSelected.size !== 0) {
      filterItems = filterItems.filter(({ roomType }) => {
        const array = Array.from(roomTypeSelected);
        for (let index = 0; index < array.length; index++) {
          if (array[index] === roomType) return true;
        }
        return false;
      });
      setRoomTypeSelected(() => {
        return new Set([]);
      });
    }
    if (capacitySelected.size !== 0) {
      filterItems = filterItems.filter(({ capacity }) => {
        const array = Array.from(capacitySelected);
        for (let index = 0; index < array.length; index++) {
          if (Number.parseInt(array[index]) >= Number.parseInt(capacity))
            return true;
        }
        return false;
      });
      setCapacitySelected(() => {
        return new Set([]);
      });
    }
    if (rangePrice != null) {
      // Lọc dựa theo giá tiên mà khách hàng.
      filterItems = filterItems.filter(({ salePrice }) => {
        return salePrice <= rangePrice;
      });
    }

    setFilterdItems(filterItems);
    setMaxIndexOfRecord(Math.ceil(filterItems.length / recordsPerPage));
    setCurrentPage(1);
    let indexLast = recordsPerPage;
    let indexFirst = indexLast - recordsPerPage;
    setIndexOfLastRecord(indexLast);
    setIndexOfFirstRecord(indexFirst);
    setRooms(filterItems.slice(indexFirst, indexLast));
  }

  function pagination(event) {
    const value = event.target.value;
    let current = 1;
    if (value === "prev") {
      if (currentPage > 1) {
        current = currentPage - 1;
      } else current = 1;
    } else if (value === "1" && maxIndexOfRecord >= 1) {
      current = 1;
    } else if (value === "2" && maxIndexOfRecord >= 2) {
      current = 2;
    } else if (value === "next") {
      if (currentPage === maxIndexOfRecord) {
        current = maxIndexOfRecord;
      } else if (currentPage < maxIndexOfRecord) {
        current = currentPage + 1;
      } else if (currentPage > maxIndexOfRecord) {
        current = currentPage;
      }
    }
    setCurrentPage(current);
    let indexLast = current * recordsPerPage;
    let indexFirst = indexLast - recordsPerPage;
    setIndexOfLastRecord(indexLast);
    setIndexOfFirstRecord(indexFirst);
    setRooms(filteredItems.slice(indexFirst, indexLast));
  }

  function handleInputChange(event) {
    setRangePrice(Number.parseInt(event.target.value));
  }

  function resetFunction() {
    /* Đây có thể set lại danh sách các phần tử là data hoặc fetch lại tuỳ ý. */
    const _rooms = data;
    setFilterdItems(_rooms);
    let indexLast = recordsPerPage;
    let indexFirst = indexLast - recordsPerPage;
    setIndexOfFirstRecord(indexFirst);
    setIndexOfLastRecord(indexLast);
    setRooms(_rooms.slice(indexFirst, indexLast));
  }

  return (
    <div className="w-4/5 max-w-screen-xl mx-auto relative">
      {false ? (
        <div className="fixed w-4/5 h-[500px] rounded-2xl bg-[#F5F5F5] bg-opacity-90 hover:shadow-lg hover:shadow-cyan-500/100 -translate-x-2/4 left-2/4 z-50">
          <button className="p-2 bg-[#2E97A7] absolute -right-8 -top-8 rounded-full hover:bg-[#1AACAC]">
            <FaXbox size={20} className="text-white" />
          </button>
          <div></div>
        </div>
      ) : null}

      <h1 className="my-[20px] text-[40px] text-[#2E97A7] w-full text-center">
        Danh sách phòng
      </h1>
      <div className="filter w-full mb-[80px]">
        {/* Lọc phòng theo dữ liệu người dùng nhập vào. --> Xong */}
        <div className="mb-4 relative w-[200px] z-0">
          <input
            type="text"
            id="floating_standard"
            className="block py-2.5 px-0 w-full text-lg text-[#2E97A7] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#2E97A7] dark:border-gray-600 dark:focus:border-[#2E97A7] focus:outline-none focus:ring-0 focus:border-[#2E97A7] peer"
            placeholder=""
            onChange={handleInputTextChange}
          />
          <label
            for="floating_standard"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#2E97A7] peer-focus:dark:text-[#2E97A7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Tìm kiếm phòng ở đây
          </label>
        </div>
        <div className="flex flex-row gap-x-16 justify-start items-center mb-4">
          <button className="px-2 py-1 rounded-2xl border-[1px] border-[#1AACAC] flex flex-row items-center">
            <FiFilter className="inline mr-1" />
            Bộ lọc
          </button>
          <div className="flex flex-row gap-x-4">
            {/* TOÀN BỘ CHỨC NĂNG LỌC PHÒNG THEO THUỘC TÍNH PHÒNG Ở ĐÂY */}
            {/* Chức năng lọc phòng theo loại phòng */}
            <div className="inline-block hover:cursor-pointer relative">
              <button
                className="px-2 py-1 rounded-2xl border-[1px] border-[#1AACAC]"
                onClick={chooseFilterProperty}
                value={1}
              >
                Loại phòng
                <FaCaretDown className="inline ml-1" />
              </button>
              <div
                className={
                  filterProp !== "1"
                    ? "hidden"
                    : "w-[700px] h-[110px] absolute top-full shadow-lg shadow-slate-600/50 mt-4 rounded-md"
                }
              >
                <div className=" w-full gap-x-3 gap-y-2 h-3/5 bg-slate-100">
                  {roomType.map((option, index) => {
                    return (
                      <InputFiltering
                        changeSelect={setRoomTypeSelected}
                        key={Math.random()}
                        option={option}
                      />
                    );
                  })}
                </div>
                <div className="flex flex-row justify-center items-center gap-x-8 h-2/5">
                  <button
                    className="border-[1px] rounded-md border-[#1AACAC] p-1 font-semibold"
                    onClick={undoChooseFilterProperty}
                  >
                    Huỷ
                  </button>
                  <button
                    className="border-[1px] rounded-md bg-[#1AACAC] p-1 text-white font-semibold"
                    onClick={FilterItems}
                  >
                    Xem kết quả
                  </button>
                </div>
              </div>
            </div>

            {/* Chức năng lọc phòng theo số lượng khách hàng tối đa */}
            <div className="inline-block hover:cursor-pointer relative">
              <button
                className="px-2 py-1 rounded-2xl border-[1px] border-[#1AACAC]"
                onClick={chooseFilterProperty}
                value={2}
              >
                Số lượng khách hàng
                <FaCaretDown className="inline ml-1" />
              </button>
              <div
                className={
                  filterProp !== "2"
                    ? "hidden"
                    : "w-[700px] h-[110px] absolute top-full shadow-lg shadow-slate-600/50 mt-4 rounded-md"
                }
              >
                <div className=" w-full gap-x-3 gap-y-2 h-3/5 bg-slate-100">
                  {capacity.map((option, index) => {
                    return (
                      <InputFiltering
                        changeSelect={setCapacitySelected}
                        key={Math.random()}
                        option={option}
                      />
                    );
                  })}
                </div>
                <div className="flex flex-row justify-center items-center gap-x-8 h-2/5">
                  <button
                    className="border-[1px] rounded-md border-[#1AACAC] p-1 font-semibold"
                    onClick={undoChooseFilterProperty}
                  >
                    Huỷ
                  </button>
                  <button
                    className="border-[1px] rounded-md bg-[#1AACAC] p-1 text-white font-semibold"
                    onClick={FilterItems}
                  >
                    Xem kết quả
                  </button>
                </div>
              </div>
            </div>

            {/* Chức năng lọc phòng theo khoảng giá phòng */}
            <div className="inline-block hover:cursor-pointer relative">
              <button
                className="px-2 py-1 rounded-2xl border-[1px] border-[#1AACAC]"
                onClick={chooseFilterProperty}
                value={3}
              >
                Giá phòng
                <FaCaretDown className="inline ml-1" />
              </button>
              <div
                className={
                  filterProp !== "3"
                    ? "hidden"
                    : "w-[700px] h-[120px] top-full shadow-lg shadow-slate-600/50 mt-3 rounded-md absolute px-4"
                }
              >
                <div>
                  <p>Dưới {rangePrice.toLocaleString()} VNĐ</p>
                </div>
                <div className="relative mb-6">
                  <label for="labels-range-input" className="sr-only">
                    Labels range
                  </label>
                  <input
                    id="labels-range-input"
                    type="range"
                    min="0"
                    defaultValue={"1000000"}
                    max="5000000"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    value={rangePrice}
                    onInput={handleInputChange}
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                    0 VNĐ
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-[20%] -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    1.000.000 VNĐ
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-[40%] -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    2.000.000 VNĐ
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-[60%] -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    3.000.000 VNĐ
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                    5.000.000 VNĐ
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center gap-x-8 h-2/5">
                  <button
                    className="border-[1px] rounded-md border-[#1AACAC] p-1 font-semibold"
                    onClick={undoChooseFilterProperty}
                  >
                    Huỷ
                  </button>
                  <button
                    className="border-[1px] rounded-md bg-[#1AACAC] p-1 text-white font-semibold"
                    onClick={FilterItems}
                  >
                    Xem kết quả
                  </button>
                </div>
              </div>
            </div>
            <button
              className="px-2 py-1 rounded-2xl border-[1px] border-[#1AACAC] flex flex-row items-center"
              onClick={resetFunction}
            >
              Đặt lại mặc định
            </button>
            <div className="inline-block hover:cursor-pointer relative">
              <button
                className="px-2 py-1 rounded-2xl border-[1px] border-[#1AACAC] flex flex-row items-center"
                onClick={chooseFilterProperty}
                value={4}
              >
                <RxDropdownMenu className="inline mr-1" />
                Xếp theo
              </button>
              <div className="flex flex-col gap-y-2 absolute top-full border-none mt-2 shadow-2xl p-2 rounded-xl w-[200px] px-2">
                <p className="hover:cursor-pointer hover:bg-gray-100 w-full h-full rounded-md">
                  Giá: Thấp ↑ Cao
                </p>
                <p className="hover:cursor-pointer hover:bg-gray-100 w-full h-full rounded-md">
                  Giá: Cao ↓ Thấp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="list-rooms w-full flex flex-col gap-y-10">
        {rooms.map((room, index) => {
          return <RoomDetail key={index} room={room} />;
        })}
      </div>
      <div className="pagination w-full flex flex-row justify-center items-center gap-x-4 my-[50px]">
        <button
          value="prev"
          className="py-1 px-3 border-[1px] rounded-md border-[#2E97A7] flex flex-row justify-center items-center hover:bg-[#2E97A7] hover:text-white duration-300"
          onClick={pagination}
        >
          <FaLongArrowAltLeft className="inline mr-2" />
          Back
        </button>
        <button
          value="1"
          className="py-1 px-3 border-[1px] rounded-md border-[#2E97A7] hover:bg-[#2E97A7] hover:text-white duration-300"
          onClick={pagination}
        >
          1
        </button>
        <button
          value="2"
          className="py-1 px-3 border-[1px] rounded-md border-[#2E97A7] hover:bg-[#2E97A7] hover:text-white duration-300"
          onClick={pagination}
        >
          2
        </button>
        <button
          value="next"
          className="py-1 px-3 border-[1px] rounded-md border-[#2E97A7] flex flex-row justify-center items-center hover:bg-[#2E97A7] hover:text-white duration-300"
          onClick={pagination}
        >
          Next
          <FaLongArrowAltRight className="inline ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Rooms;
