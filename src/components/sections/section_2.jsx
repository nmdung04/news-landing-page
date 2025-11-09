'use client';
import React, { useState } from "react";
import FullSection from "./FullSection";
import PinBox from "../PinBox";
import Image from "next/image";

export default function Section2() {
  const [preview, setPreview] = useState({ open: false, src: null });

  return (
    <FullSection >
      <div  className="grid grid-cols-[52%_45%] gap-6 pt-6 pl-2 max-w-[800px] mx-auto">
        <div className="space-y-3 text-justify leading-relaxed ">
          <p className="text-[14px] font-cabin pl-6">
           Trải qua hơn 30 năm, Làng Hy Vọng không chỉ là nơi cưu mang những mảnh đời khó khăn, mà còn trở thành biểu tượng của lòng nhân ái và tinh thần sẻ chia của người Đà Nẵng, một vùng đất được mệnh danh là “thành phố của những trái tim nhân hậu”. Trong nhịp sống hiện đại hối hả, Làng vẫn ngày ngày lặng lẽ giữ cho ngọn lửa yêu thương ấy cháy mãi, để mỗi đứa trẻ nơi đây đều được sống trong ánh sáng của hy vọng.
          </p> 
          <p className="text-[14px] font-cabin pl-6">
           Được thành lập năm 1993, dưới sự quản lý của Sở Lao động - Thương binh và Xã hội TP. Đà Nẵng, Làng Hy Vọng mang trong mình một sứ mệnh giản dị mà thiêng liêng đó là chăm sóc, nuôi dưỡng và dạy dỗ những đứa trẻ thiếu vắng tình thân, để mỗi em đều có cơ hội được học, được lớn, được ước mơ như bao người khác. Cái tên “Làng Hy Vọng” vì thế không chỉ là một danh xưng, mà là lời thì thầm đầy nhân ái, nơi gieo mầm cho những ước mơ nhỏ bé vươn lên từ nghịch cảnh.
          </p>

          <h2 className="font-bold text-[#0292b7] font-utm text-center">
             QUÁ TRÌNH HÌNH THÀNH VÀ PHÁT TRIỂN LÀNG HY VỌNG
          </h2>

           <PinBox title="" bgColor="#1ac8db" style={{ width: 300, height: 220, borderRadius: 0, marginLeft: 10 }}>
              <p style={{ fontSize: 13 , padding: 12}} className= "font-cabin" >Với phương châm “Tình thương - Chia sẻ - Phát triển - Hy vọng”, Làng Hy Vọng luôn đặt con người làm trung tâm của mọi hoạt động. Ở đó, những đứa trẻ không chỉ được dạy chữ, mà còn được dạy làm người, học nghề, rèn kỹ năng sống và tìm thấy ý nghĩa của sự trưởng thành. Có những em sau khi rời Làng, đã quay trở lại, mang theo tình yêu và lòng biết ơn để tiếp tục chăm lo cho những thế hệ sau như cách mà mình từng được yêu thương.</p>
           </PinBox>

        </div>

      {/* collum 2 */}
        <div className="space-y-3 text-justify leading-relaxed">
          <PinBox
            bgImage="/assets/images/section2/banner.png"
            height={620}
            width={250}
            onClick={() =>
              setPreview({
                open: true,
                src: "/assets/images/section2/banner.png",
              })
            }
          />
        </div>

       <div style={{  position: "relative", top: 100, left: 220 , zIndex: -1 , rotate: "-13deg"}}>
          <PinBox bgImage="/assets/images/section2/ps.png" height={120} width={300}>
          </PinBox>
       </div>

       <div style={{  position: "relative", top: 70, left: 120,  rotate: "13deg" }}>
          <PinBox bgImage="/assets/images/section2/address.png" height={155} width={155} style={{ padding: 0, top: -5 ,}} >
          </PinBox>
       </div>
  
      </div>





     
    </FullSection>
  );
}


