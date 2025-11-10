'use client';
import React from "react";
import FullSection from "./FullSection";
import Image from "next/image";
import GradientText from "../GradientText";

export default function Section4() {
  return (
    <FullSection>
      <div style={{ textAlign: "center" }}>
        {/* header*/}
        <div className="background-img overflow-hidden " style={{height: "40vh"}}>
          <Image src="/assets/images/section4/background.jpg" alt="background" width={700} height={400}/>
          <div className="absolute top-3/8 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold up_down">
            <Image src="/assets/images/section4/four-pic.svg" alt="logo" width={600} height={200} style={{scale: 1.3} }/>
          </div>
        </div>
          
          {/* heading 2*/}
        <div className="text-xl font-bold font-utm  mt-15">
          <h2>
            <GradientText 
              colors={["#5de0e6","#004aad"]}
              animationSpeed={10}
              showBorder={false}
              className="custom-class">
              GIEO CHỮ GIỮA ĐỜI, NẢY MẦM HY VỌNG
            </GradientText>
          </h2>
        </div>
          {/* paragraph*/}
          <Image src="/assets/images/section4/T-letter.svg" alt="quote" width={80} height={50} className="mt-3 -mb-12"  style={{position:"relative", top: "10%", left: "10%"}}/>
          <p className="text-sm font-cabin ml-8 px-18 text-justify">
                                    ại Làng Hy Vọng, mỗi bình minh mở ra bằng tiếng chuông gọi lớp nhẹ nhàng
                      vang lên trong khuôn viên xanh mát, các em học sinh nhanh chóng vệ sinh cá
                 nhân, tập thể dục, ăn sáng, rồi sau đó ổn định chỗ ngồi, chuẩn 

          </p>
          <p className="text-sm font-cabin mt-0 px-18 text-justify">
            bị cho tiết học văn hóa buổi sáng.  Khi tiếng chuông báo hiệu giờ học vang lên ở Làng Hy Vọng, không gian lớp học liền trở nên rộn rã với ánh mắt sáng và bút chì lặng lẽ viết trên vở. Các em học sinh ở đây, phần lớn là những trẻ mồ côi, trẻ khuyết tật hoặc có hoàn cảnh khó khăn, bắt đầu ngày mới bằng tiết học văn hóa: Toán, Tiếng Việt, Ngoại ngữ, do giáo viên đứng lớp, kiên nhẫn hướng dẫn từng em. Sau giờ chính khóa vào buổi sáng, các em được chuyển sang phần học kỹ năng sống và nghề, các lớp may thêu, mộc mỹ nghệ, vi tính được tổ chức ngay trong khuôn viên Làng. Ví dụ như một nhóm các em lớp 12 đang thực hành trên máy may, dưới ánh đèn, bàn tay khéo léo vụng về nhưng đầy quyết tâm từng mũi chỉ, nó tựa như niềm tin mãnh liệt của em vào tương lai. 
          </p>

          {/* footer note*/}
        <div className="footer-note">
          <Image src="/assets/images/blue-quotes.svg" alt="quote" width={80} height={50} className="mt-3 -mb-12"  style={{position:"relative", top: "10%", left: "10%"}}/>
          <h3 className="font-utm font-bold text-[15px] text-[#0292b7] text-center px-20">
            
             Ở đây, con được học may và được thầy cô dạy nghề để sau này có thể tự lập
          </h3>
          <p className="text-sm font-cabin mt-0 px-18 font-bold italic text-right">
             Em N.H.Tài (14 tuổi)
          </p>
        </div>
      
      </div>
    </FullSection>
  );
}