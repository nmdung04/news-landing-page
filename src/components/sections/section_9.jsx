'use client';
import React from "react";
import FullSection from "./FullSection";
import Image from "next/image";

export default function Section9() {
  return (
    <FullSection>
      <div className="section9-container px-10 pt-8 font-cabin text-justify text-sm flex flex-col items-center">
       <p className="px-4"> Ngoài ra, niềm vui của các em học sinh không chỉ đến từ bàn học và mái ấm hàng ngày, mà còn từ những dịp mà các bạn sinh viên và mạnh thường quân đến thăm và tổ chức hoạt động ngoại khóa đầy ý nghĩa. Gần đây, ngày 24/ 3 / 2024, Đoàn Thanh Niên Công an TP Đà Nẵng đã đến Làng, trao tặng quà và nhu yếu phẩm trị giá khoảng 10 triệu đồng, đồng thời tổ chức trò chơi tập thể, bữa trưa giao lưu với các em nhỏ tại Làng.</p>
       
       <Image src="/assets/images/section9/section9.png" alt="section_9" width={500} height={300} />
       
       <span className="px-4 text-shadow-2xs font-bold text-[10px]">
        Các em nhỏ Làng Hy Vọng tham gia hoạt động học tập và vui chơi cùng tình nguyện viên.
       </span>

       <p className="px-4 pt-4">
          Những buổi giao lưu, từ vẽ tranh, trồng hoa, đến các trò chơi vận động trên sân cỏ đã trở thành “ngày hội” với các em: tiếng cười vang, bàn tay nhỏ cùng xắn áo giúp nhau, không khí thân thương như một gia đình mở rộng. Qua đó, mạnh thường quân và sinh viên không chỉ tặng quà mà còn đi cùng các em, dành thời gian để lắng nghe, chơi đùa và tạo dựng ký ức đẹp cho các em để giúp các em nhận ra mình không đơn độc mà luôn có cộng đồng ủng hộ.
          <br /><br />
          Hoạt động như vậy chính là minh chứng sống động cho giá trị toàn diện mà Làng Hy Vọng hướng tới: không chỉ về mặt học tập và chăm sóc vật chất, mà còn về mặt tinh thần, nơi các em được vui chơi, được kết nối và được sống trong tình thương lan tỏa từ nhiều thế hệ.
       </p>

      </div>
    </FullSection>
  );
}