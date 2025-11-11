'use client';
import React from "react";
import FullSection from "./FullSection";
import AudioWavePlayer from "../AudioWavePlayer";
import GradientText from "../GradientText";
import Image from "next/image";

export default function Section7() {
  return (
    <FullSection >
      <div style={{ textAlign: "center" }}>
        <h2 className="font-utm text-xl mt-8 mb-4">
          <GradientText 
              colors={["#3eb3b8","#002f6d"]}
              animationSpeed={10}
              showBorder={false}
              className="custom-class">
             MỘT NGÔI LÀNG, VẠN ƯỚC MƠ
            </GradientText>
        </h2>
        <p className="font-cabin text-sm text-justify px-8 mb-4">Khi được hỏi về cảm xúc sống tại Làng Hy Vọng, em N.T.T.Tâm (đã sống ở Làng Hy Vọng 6 năm) chia sẻ: “Khi em đến đây, em không còn cảm giác mình là “một đứa trẻ khó khăn” mà là một thành viên trong gia đình lớn. Mỗi sáng thức dậy, tiếng chim hót, tiếng cô gọi dậy, bữa cơm cùng các anh chị, những tiết học trên lớp, rồi buổi chiều giúp các em nhỏ làm bài tập… tất cả khiến em thấy mình không bị bỏ lại phía sau” </p>
        
        {/* letter-container */}
        <div className="container " style={{width:"100%", height:"40vh", backgroundImage:"url(/assets/images/section7/22.jpg)", backgroundSize:"cover", backgroundPosition:"center", position:"relative", zIndex:-10  }}>
          <Image src="/assets/images/section7/flower2.svg" alt="sec" width={80} height={300} className="absolute z-10 top-7/8 left-1/10 -translate-x-1/2 -translate-y-1/2" style={{borderRadius:"50%", objectFit:"cover", zIndex:10}}></Image>

             <div className="content-box flex flex-center justify-around px-4 py-4" style={{background:"url(/assets/images/section3/letterback.jpg)", width:"80%", height:"250px", position:"relative", top:"18vh", left:"50%", transform:"translate(-50%, -50%)", rotate: "-5deg"}}>
                  <div className="flex items-center justify-center">
                    <Image src="/assets/images/section3/quotes2.svg" alt="quotes" width={40} height={100}  style={{position:"relative", top:"-23%", left:"5%"}}/>
                    <div>
                      <p className="text-[14px] font-rukola font-bold text-[#222222] text-justify indent-4">        Em được chăm, được học, được yêu thương. Đây là nhà của em, là nơi em muốn quay về mỗi khi nghĩ về những kỷ niệm đẹp</p>
                      <div className="text-note font-cabin font-bold text-[7px] text-[#222222] mt-4 flex items-center justify-cente r">
                        <span> Em Nguyễn Thị Thanh Tâm, <br/> học sinh lớp khiếm thính tại Làng Hy Vọng </span>
                        <span className="ml-2">   __________</span>
                      </div>
                    </div>
                    <Image src="/assets/images/section3/quotes2.svg" alt="quotes" width={40} height={100} style={{transform:"scaleY(180deg)", position:"relative", bottom:"-11%", right:"6%"}} className="scale-x-[-1]" />
                  </div>
                  <div className="avatar" style={{background:"url(/assets/images/section7/avt-sec7.png)", width:"450px", height:"150px", backgroundSize:"contain", backgroundPosition:"center", zIndex:10, position:"relative", top:"10%", left:"5%", rotate:"5deg"}}></div>
               </div>
        </div>

        {/* footer */}
        <div className="footer flex items-center justify-center mt-2 text-[14px] font-cabin text-justify px-8">
          <p>Lời tâm sự của em không chỉ là câu chuyện của một cá nhân, mà còn là tấm gương phản chiếu tinh thần nhân văn và giá trị nhân cách mà Làng Hy Vọng đã dày công vun đắp suốt hơn 30 năm. Khi em gọi nơi này là “gia đình lớn” hay “nhà của mình”, đó không chỉ là hình ảnh về một mái ấm vật chất, mà là biểu tượng của sự thuộc về, an toàn và tình thương vô điều kiện.<br/>
              Những chi tiết nhỏ như bữa cơm cùng anh chị, những buổi chiều giúp đỡ các em nhỏ, hay việc không bị bỏ lại phía sau trong học tập… chính là minh chứng cho một cộng đồng gắn kết, nơi mỗi thành viên được trân trọng, khuyến khích và trao cơ hội để phát triển. Câu nói “là nơi mình muốn quay về mỗi khi nghĩ về kỷ niệm đẹp” vang lên như một thông điệp về sự trưởng thành gắn liền với tình cảm, ký ức và giá trị sống, nơi mà mỗi bước đi, mỗi nụ cười và mỗi thành tích của các em đều được chắp cánh bởi lòng nhân ái, sự quan tâm và niềm tin từ Làng Hy Vọng.</p>
        </div>
      </div>      
      {/* <AudioWavePlayer
        src="/assets/media/sound/phaichiu.MP3"
        bgClass="bg-cyan-400"
        waveColor="#f2f2f2"
        progressColor="#0b0b0b"
        height={42}
        barWidth={2}
        barGap={2}
      /> */}
    </FullSection>
  );
}