'use client';
import React, { useState, useRef } from "react";
import FullSection from "./FullSection";
import PinBox from "../PinBox";
import Image from "next/image";
import AnimatedContent from "../AnimatedContent";

export default function Section2() {
  const [preview, setPreview] = useState({ open: false, src: null });
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const dragRef = useRef({ startX: 0, startY: 0, startTx: 0, startTy: 0 });

  return (
    <>
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
  
      {preview.open && (
        <div
          style={{
            position: "fixed",
            right: 0,
            top: 0,
            height: "100vh",
            width: "min(49vw)",
            background: "rgba(255,255,255,0.88)",
            borderLeft: "1px solid rgba(0,0,0,0.98)",
            boxShadow: "0 0 32px rgba(0,0,0,0.20)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            overflow: "hidden",
            userSelect: "none",
            cursor: isDragging ? "grabbing" : zoom > 1 ? "grab" : "default",
          }}
          onWheel={(e) => {
            e.preventDefault();
            // cuộn lên: zoom in, cuộn xuống: zoom out
            const delta = e.deltaY;
            setZoom((prev) =>
              Math.min(4, Math.max(0.5, prev + (delta < 0 ? 0.15 : -0.15)))
            );
          }}
          onMouseDown={(e) => {
            if (zoom <= 1) return; // chỉ pan khi đang zoom lớn
            setIsDragging(true);
            dragRef.current = {
              startX: e.clientX,
              startY: e.clientY,
              startTx: translate.x,
              startTy: translate.y,
            };
          }}
          onMouseMove={(e) => {
            if (!isDragging) return;
            const dx = e.clientX - dragRef.current.startX;
            const dy = e.clientY - dragRef.current.startY;
            setTranslate({
              x: dragRef.current.startTx + dx,
              y: dragRef.current.startTy + dy,
            });
          }}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
        >
          <button
            onClick={() => {
              setPreview({ open: false, src: null });
              setZoom(1);
              setTranslate({ x: 0, y: 0 });
            }}
            style={{
              position: "absolute",
              top: 12,
              right: 22,
              borderRadius: 6,
              padding: "8px 12px",
              border: "1px solid rgba(0,0,0,0.1)",
              background: "#fff",
              cursor: "pointer",
              color : "rgba(0,0,0,0.88)",
            }}
          >
            Đóng
          </button>
          <Image
            src={preview.src}
            alt="Preview"
            width={550}
            height={820}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
              borderRadius: 8,
              transform: `translate(${translate.x}px, ${translate.y}px) scale(${zoom})`,
              transformOrigin: "center center",
              transition: isDragging ? "none" : "transform 0.2s ease-out",
              pointerEvents: "none", // tránh bắt sự kiện khi kéo trên panel
            }}
          />
        </div>
      )}
    </>
  );
}


