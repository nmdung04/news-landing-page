'use client';
import React from "react";
import FullSection from "./FullSection";
import Image from "next/image";
import AudioWavePlayer from "../AudioWavePlayer";

export default function Section8() {
  return (
    <FullSection>
      <div className="font-cabin text-justify text-sm" >
        <p className="px-10 py-6 pt-10">Trong ánh mắt và lời nói của các em, Làng Hy Vọng hiện lên không chỉ là một mái nhà, mà là nơi hun đúc nhân cách, gieo mầm hy vọng và lưu giữ những ký ức đẹp đẽ sẽ theo các em suốt đời.</p>
        
        {/* Audio Player */}
        <div className="audio-player px-10">
          <AudioWavePlayer
             src="/assets/media/sounds/section8.mp3"
             bgClass="bg-cyan-400"
             waveColor="#f2f2f2"
             progressColor="#0b0b0b"
             height={42}
             barWidth={2}
             barGap={3}
            />
        </div>

        <p className="px-10 py-0 pt-10">Tại Làng Hy Vọng, chính sự sẻ chia của cộng đồng đã góp phần biến nơi đây thành một mái ấm thực sự cho các em nhỏ có hoàn cảnh khó khăn. Từ đầu năm 2011, dự án “Nuôi dạy tạm thời cho trẻ em mồ côi, khuyết tật tại Làng Hy Vọng” do Tổ chức Đông Tây Hội Ngộ (EMW) tài trợ với tổng kinh phí 800 triệu đồng đã được triển khai, hỗ trợ các chương trình học văn hóa, học nghề và phát triển năng khiếu cho trẻ em từ 12 tuổi trở lên. Trước đó, từ năm 1993 đến nay, Làng Hy Vọng đã tiếp nhận hơn 800 em trẻ em bị mồ côi, khuyết tật hoặc ở trong hoàn cảnh đặc biệt khó khăn từ Đà Nẵng và các tỉnh miền Trung. Hiện tại, trung tâm đang nuôi dưỡng 122 em.</p>
        <p className="px-10 py-0 pt-3">Nhờ những đóng góp ấy, các em tại Làng không chỉ được đảm bảo về vật chất như bữa ăn, quần áo, dụng cụ học tập, nơi ở an toàn, mà còn được chăm lo về tinh thần: các chương trình học nghề, hoạt động ngoại khoá, hỗ trợ hòa nhập cộng đồng, và sự đồng hành bền bỉ của các cô, các “mẹ” tại Làng. Nhờ đó, Làng Hy Vọng được các em nói đến như “ngôi nhà thứ hai” - nơi các em được yêu thương, được học và được vươn lên.</p>

      
        <Image src="/assets/images/section8/footer-section8.jpg" alt="section8" width={650} height={300} className="px-0 py-6" />
        <span className="text-white text-[10px] font-bold absolute bottom-0 left-1/2 transform -translate-x-1/2  py-2">Các em nhỏ ngồi quây quần, chia sẻ những món ăn cho nhau</span>
      </div>

    </FullSection>
  );
}