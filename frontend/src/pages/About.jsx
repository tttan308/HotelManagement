import React, { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";

const About = () => {
  const slideImgs = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdGVsfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdGVsfGVufDB8fDB8fHww",
  ];

  const firstLayer = {
    main: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGhvdGVsfGVufDB8fDB8fHww",
    sub: [
      "https://images.unsplash.com/photo-1561501878-aabd62634533?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1587874522487-fe10e954d035?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1584132869994-873f9363a562?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
    ],
  };

  const secondLayer = {
    main:"https://images.unsplash.com/photo-1506059612708-99d6c258160e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
    sub: [
      "https://plus.unsplash.com/premium_photo-1683133440756-3b91f36aff20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI1fHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1571003123771-bd6a099dd83a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI0fHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1584132905271-512c958d674a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ3fHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUxfHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
    ]
  }
  
  const size = slideImgs.length;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => {
        return index < size - 1 ? index + 1 : 0;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-[500px] m-auto mt-16">
      <div className="max-w-[1200px] bg-[#EEEEEE] mx-auto rounded-2xl flex flex-row p-8">
        <div className="basis-3/5">
          <div className="title flex flex-col items-start pl-0 w-full justify-around gap-y-4">
            <h1 className="flex flex-row items-center justify-center gap-x-2font-bold text-4xl font-bold text-[#1AACAC]">
              Giới thiệu về BORN <GoDotFill /> PINK
            </h1>
            <div className="w-2/5 mt-2 h-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-r-xl"></div>
            <p className="text-justify">
              <span className="text-[#1AACAC] font-semibold">BORN PINK</span>{" "}
              luôn tự hào là điểm đến lý tưởng cho những trải nghiệm đẳng cấp và
              không gian thư giãn tuyệt vời. Với vị trí đắc địa tại trung tâm
              thành phố Hồ Chí Minh, chúng tôi mang đến không gian sang trọng và
              dịch vụ chất lượng, đảm bảo mọi chuyến đi của quý khách trở nên
              đặc biệt và nhớ mãi.
            </p>
            <p className="text-justify">
              Với đội ngũ nhân viên chuyên nghiệp và thân thiện, chúng tôi cam
              kết mang đến trải nghiệm nghỉ ngơi tuyệt vời nhất cho quý khách.
              <span className="text-[#1AACAC] font-semibold">BORN PINK</span> có
              nhiều loại phòng đa dạng, từ phòng Deluxe tiện nghi đến các căn
              suite sang trọng, đảm bảo đáp ứng mọi nhu cầu của quý khách.
            </p>
            <p className="text-justify">
              Khách sạn chúng tôi tự hào về những tiện ích và dịch vụ đẳng cấp,
              bao gồm nhà hàng phục vụ ẩm thực đa dạng, quán bar lịch lãm và
              trung tâm thể dục hiện đại. Ngoài ra,{" "}
              <span className="text-[#1AACAC] font-semibold">BORN PINK</span>{" "}
              cũng có các phòng họp và sảnh hội nghị tiện nghi, là địa điểm lý
              tưởng cho các sự kiện kinh doanh và hội nghị.
            </p>
          </div>
        </div>
        <div className="basis-2/5 slide-img w-full object-cover flex flex-col justify-center pl-10">
          <img className="rounded-xl" src={slideImgs[index]} />
        </div>
      </div>

      <div className="w-full py-10 bg-[#EEEEEE] flex flex-col justify-center items-center h-[400px]">
        <div className="max-w-[1200px] h-full">
          <div className="layer-1 flex flex-row w-full h-full gap-x-8">
            <img src={firstLayer.main} className="basis-3/5 w-full h-full object-cover" />
            <div className="basis-2/5"></div>
          </div>
          <div className="layer-2 flex flex-row w-full h-full gap-x-8">
            <div className="basis-2/5"></div>
            <img src={secondLayer.main} className="basis-3/5 w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
