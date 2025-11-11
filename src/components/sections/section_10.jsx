'use client';
import React from "react";
import FullSection from "./FullSection";
import Image from "next/image";

export default function Section10() {
  return (
    <FullSection>
      <div className="section10-container px-10 pt-8 font-cabin text-justify text-sm flex flex-col items-center">
        <p className="text-2sm ">Tình nguyện viên Lê Thị Trang, sinh viên năm 4, Khoa Ngữ văn - Truyền thông chia sẻ: “Chuyến đi tình nguyện đến với Làng Hy Vọng hôm nay để lại cho mình rất nhiều cảm xúc. Vì mình được chứng kiến những đứa trẻ có hoàn cảnh khó khăn nhưng các em vẫn có một tình thần vượt khó và nơi đây thì được các cô gieo mầm yêu thương. Khi đến với nơi đây thì mình cảm thấy yêu cuộc sống, yêu những điều bình dị hơn”</p>
      </div>

      <div className="video-container px-10 pt-8">
        <video src="/assets/media/videos/section10-video.MOV" controls></video>
      </div>

      <div className="note-container mx-7 text-justify mt-6" style={{backgroundColor: "#1ac8db", padding: "15px"}}>
        <p className="text-sm">Ngoài ra, Làng Hy Vọng còn tổ chức nhiều hoạt động tình nguyện khác như hỗ trợ trẻ em trong tình huống khó khăn, tổ chức buổi giao lưu với các em nhỏ, giúp đỡ những người gặp khó khăn. Những hoạt động này không chỉ mang lại cho các em những trải nghiệm quý giá mà còn tạo nên một cộng đồng mạnh mẽ, đoàn kết và hỗ trợ lẫn nhau. </p>
      </div>

      <div className="decor-container flex justify-center items-center absolute right-3 bottom-6">
        <div className="decor-item absolute left-[-35px] top-15 rotate-10 shake">
          <Image src="/assets/images/section10/corn.png" alt="swing" width={90} height={50} />
        </div>
        <div className="decor-item absolute left-1 bottom-[-10] shake" >
          <Image src="/assets/images/section10/swing.png" alt="35" width={80} height={50} />
        </div>
        <div className="decor-item">
          <Image src="/assets/images/section10/milk.png" alt="35" width={170} height={50} />
        </div>
      </div>
    </FullSection>
  );
}