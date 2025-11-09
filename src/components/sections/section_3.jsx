'use client';
import React from "react";
import FullSection from "./FullSection";
import useAnimeOnView from "../../lib/anime/useAnimeOnView";
import { fadeUp } from "../../lib/anime/presets";
import Image from "next/image";

export default function Section3() {
  const sectionRef = useAnimeOnView((anime, rootEl) => {
    const content = rootEl.querySelector(".section3-content");
    if (!content) return;
    fadeUp(anime, content, { duration: 700, fromY: 0 });
  }, { threshold: 0.35, once: true });

  return (
    <FullSection>
      <div ref={sectionRef} className = "section3-content flex flex-col justify-between items-center" style={{ textAlign: "center" ,position:"relative", zIndex: -2}}>
          <div className="letter" 
            style={{
              width: "100%",
             height: "43vh",
             position: "relative",
             zIndex: -1,
             backgroundImage: "url(/assets/images/section3/back.jpg)",
             backgroundSize: "cover",
             backgroundPosition: "center",
             backgroundRepeat: "no-repeat",
             //  filter: "blur(10px)",
            }}> 

          <div className="letter" style={{scale:1, position:"relative"}}>
            <div className="letter-content" style={{background:"url(/assets/images/section3/letterback.jpg)", width:"84%", height:"300px", position:"relative", top:"20vh", left:"50%", transform:"translate(-50%, -50%)", rotate: "-3deg"}}>
               <Image src="/assets/images/section3/flyer.svg" alt="flyer" width={100} height={100} style={{position:"absolute", bottom:"0", left:"0", transform:"translate(-50%, 50%)"}} />
               <div className="content-box flex flex-center justify-between px-4 py-4">
                  <Image src="/assets/images/section3/mainavt.jpg" alt="lettercontent" width={200} height={100} />
                  <div className="flex items-center justify-center">
                    <Image src="/assets/images/section3/quotes2.svg" alt="quotes" width={40} height={100}  style={{position:"relative", top:"-23%", left:"5%"}}/>
                    <div>
                      <p className="text-[14px] font-rukola font-bold text-[#222222] text-justify indent-4"> Hơn 30 năm gắn bó và điều hành Làng Hy Vọng, với tôi, điều hạnh phúc nhất và cũng là lý do Làng ra đời và phát triển đến ngày hôm nay chính là nhìn thấy các em xem nơi đây như một gia đình lớn, một mái nhà thứ hai của mình.</p>
                      <div className="text-note font-cabin font-bold text-[7px] text-[#222222] mt-4">  _____   Bà Lê Phương Thảo, Phó Giám đốc Làng Hy Vọng Đà Nẵng</div>
                    </div>
                    <Image src="/assets/images/section3/quotes2.svg" alt="quotes" width={40} height={100} style={{transform:"scaleY(180deg)", position:"relative", bottom:"-11%", right:"6%"}} className="scale-x-[-1]" />
                  </div>

               </div>
            </div>
          </div>
        </div>

          <div className="paragraph font-cabin text-sm text-justify px-8 py-4">
              <p>
                Bà Lê Phương Thảo, Phó Giám đốc Làng Hy Vọng Đà Nẵng, chia sẻ về lý do ra đời của Làng: “Hơn 30 năm gắn bó và điều hành Làng Hy Vọng, với tôi, điều hạnh phúc nhất và cũng là lý do Làng ra đời và phát triển đến ngày hôm nay chính là nhìn thấy các em xem nơi đây như một gia đình lớn, một mái nhà thứ hai của mình. Dù nhiều em đến với Làng trong hoàn cảnh thiếu thốn đủ bề, nhưng có một điều các em chưa bao giờ thiếu, đó là tình thương và sự đùm bọc. Chính tình yêu thương ấy đã giúp các em lớn lên, trưởng thành, biết yêu thương và chia sẻ với nhau như anh em ruột thịt. Và khi các em rời khỏi Làng, trở về với cuộc sống bên ngoài, vẫn luôn có những ‘người anh, người chị’ từng trưởng thành từ mái nhà này sẵn sàng dang tay đón nhận, giúp đỡ, tiếp nối vòng tay yêu thương mà Làng đã vun đắp suốt những năm qua.”
              </p>
          </div>

          <div className="footer" style={{width:"100%", height:"10vh", background:"#F5F5F5"}}>
              <Image src="/assets/images/section3/footer.jpg" alt="footer" width={900} height={100} style={{position:"relative"}} />
          </div>

      </div>
    </FullSection>
  );
}