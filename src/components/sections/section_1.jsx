'use client';
import React from "react";
import FullSection from "./FullSection";
import Title from "../../../public/assets/images/section1/Title.svg";
import homeHeader from "../../../public/assets/images/section1/homeHeader.svg";
import section1_footer from "../../../public/assets/images/section1/section1_footer.png";
import Image from "next/image";
import GradientText from "../GradientText";

export default function Section1() {
  return (
    <FullSection  >
        
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center -mb-20">
            <Image src={Title} alt="Title" width={350} height={100} />
            <p style={{ fontSize: 12, fontFamily: "Noto Sans", fontWeight: 500 }}>HÀNH TRÌNH GIEO MẦM YÊU THƯƠNG HƠN BA THẬP KỈ</p>
          </div>
          <Image src={homeHeader} alt="homeHeader" width={800} height={300} className="z-[-1]" />
        </div>
        <p style={{ fontFamily: "var(--font-cabin)", textAlign: "justify", fontStyle: "Italic"}} className="font-cabin text-sm px-6 pt-3">Giữa lòng Đà Nẵng náo nhiệt, có một ngôi làng bình yên suốt hơn ba thập kỷ vẫn ngày ngày nuôi dưỡng ước mơ cho những đứa trẻ kém may mắn. Ở Làng Hy Vọng (phường Thanh Khê, thành phố Đà Nẵng), các em không chỉ được chăm sóc, dạy dỗ, mà còn được sống trong tình yêu thương, sẻ chia như trong một đại gia đình. Nơi đây, “hy vọng” không chỉ là tên gọi, mà là ánh sáng dẫn đường giúp hàng trăm em nhỏ vượt qua bóng tối của số phận để tìm về tương lai tươi sáng của chính mình.</p>
        
        <h2 className="text-xl font-bold font-utm pt-2 text-shadow-2xl">
            <GradientText colors={["#5de0e6","#004aad"]}
                          animationSpeed={10}
                          showBorder={false}
                          className="custom-class">
                MỘT NGÔI LÀNG, VẠN ƯỚC MƠ
            </GradientText>
        </h2>

        <p className="font-cabin text-sm px-6 pt-2 text-justify">
            Tọa lạc tại số 209 trên con đường Dũng Sĩ Thanh Khê (phường Thanh Khê, TP. Đà Nẵng), Làng Hy Vọng, hay còn gọi là Trung tâm Nuôi dạy Trẻ em Khó khăn TP. Đà Nẵng, suốt hơn ba thập kỷ qua vẫn lặng lẽ sáng lên như một ngọn đèn ấm giữa lòng thành phố. Nơi ấy, hàng trăm trẻ em mồ côi, khuyết tật, những mảnh đời chịu nhiều thiệt thòi, đã tìm được một mái nhà, một vòng tay và một niềm tin để bắt đầu lại cuộc sống của chính mình.
        </p>

        <div className="flex flex-col items-center justify-center mt-0 overflow-hidden">
          <Image src={section1_footer} alt="section1_footer" width={800} height={300} className="z-[-1]" />
        </div>
      </div>
    </FullSection>
  );
}