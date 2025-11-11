'use client';
import React from "react";
import FullSection from "./FullSection";
import Image from "next/image";


export default function Section6() {
  return (
    <FullSection>
      <div style={{ textAlign: "center" }}>
          {/* paragraph */}
        <div className="paragraph-section6 font-cabin text-sm text-justify px-6 py-12">
          <p>Không chỉ ở giáo viên, mà các em học sinh cũng cảm nhận được sự tận tuỵ và tình thương ấm áp của các cô nơi đây. Đến gặp em L.K.Trang (15 tuổi, học sinh lớp 10, bị khiếm thính câm và đang học tại Làng Hy Vọng), khi chúng tôi nhờ cô giáo giao tiếp với bạn để bạn nêu cảm nhận, thì bạn đã ra ký hiệu để chia sẻ rằng: “Con vào Làng Hy Vọng được khoảng 4 năm rồi. Trước kia, con không thể hòa đồng với các bạn được và thường ngại giao tiếp vì sợ bị cười. Tuy nhiên ở đây, cô giáo dạy con bằng ký hiệu, bằng tay, bằng hình ảnh nên con hiểu dần hơn và cũng mạnh dạn hơn khi nói ‘xin chào’, ‘cảm ơn’ với bạn.”</p>
          <p className="mt-2">Mỗi sáng, con ngồi bàn học văn hóa như các bạn bình thường, rồi buổi chiều con học nghề may vá, con thích được tự làm ra một chiếc túi nhỏ cho mình. Khi làm xong, con rất vui vì nó là sản phẩm mà con tự làm. Con thấy ở Làng này, con không chỉ được học phép tính, chữ viết mà được học cách tin bản thân mình. Khi con khoẻ hơn và học tốt hơn, con mong có thể giúp lại các em nhỏ hơn như cách các anh chị ở đây từng giúp con. Con ước một ngày được làm giáo viên dạy nghề hoặc hướng dẫn ký hiệu cho trẻ khiếm thính khác, để các em hiểu rằng con có thể vươn lên được, dù khác biệt vẫn có thể thành công.”</p>
        </div>

          {/* note */}
        <div className="note-section6 flex justify-center items-center">
          <Image src="/assets/images/blue-quotes.svg" alt="quote" width={80} height={50} className="-mt-8"  style={{position:"relative", scale:"1.3", left:"28px", top:"-15px"}}/>
          <div className="flex flex-col items-center justify-center ">
            <p className="font-utm font-bold text-sm text-center text-[#0292b7] px-0 py-0 mt-1"> Khi tới đây, em không chỉ được học chữ mà còn được học cách tin vào mình và biết rằng mình có thể vươn lên dù bắt đầu từ một hoàn cảnh khó khăn.</p>
            <span className="font-cabin font-bold italic mt-2">em L.K.Trang (15 tuổi)</span>
          </div>
          <Image src="/assets/images/blue-quotes.svg" alt="quote" width={80} height={50} className="-mt-8"  style={{position:"relative", rotate:"180deg", bottom:"-30px", right:"28px"}}/>
        </div>

          {/* video */}
        <div className="video-container w-full flex items-center justify-center mt-10">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/o6IYrduWWWc?si=akDGMQyxq1KGoZsb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </div>
    </FullSection>
  );
}