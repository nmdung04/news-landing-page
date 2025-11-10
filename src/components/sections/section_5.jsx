'use client';
import React from "react";
import FullSection from "./FullSection";
import Image from "next/image";

export default function Section5() {
  return (
    <FullSection >
      <div style={{ textAlign: "center" }}>
       {/* paragraph  */}
        <div className="paragraph-section4 font-cabin text-[13px] pt-8 px-8 text-justify">
          <p>Ăn trưa và nghỉ ngơi xong thì đến buổi chiều thường bắt đầu bằng giờ thư viện hoặc sinh hoạt nhóm, các em tập trung tại phòng học chung, đọc sách, tra cứu tài liệu, hoặc tham gia các câu lạc bộ ngoại khóa như âm nhạc, vẽ tranh, thể thao. Mỗi “gia đình nhỏ” trong Làng (khoảng 10 em/chỗ) đều có một “gia đình trưởng” hay còn được biết là em lớn hơn phụ trách động viên, giúp đỡ các em nhỏ hơn trong học tập và sinh hoạt.</p>
          <p className="mt-4">Một trong những đặc điểm nổi bật là 100 % học sinh tại Làng hoàn thành chương trình THCS và tỷ lệ đậu vào đại học, cao đẳng luôn đạt mức cao, vượt chỉ tiêu đề ra. Bên cạnh đó, cơ sở vật chất như phòng học, thư viện, xưởng nghề, khuôn viên xanh ngày một cải thiện, tất cả đều được đầu tư nhằm tạo môi trường học tập thân thiện và an toàn cho các em. Trải qua các tiết học, các em không chỉ nhớ bài và học thêm kiến thức mới, mà còn học cách “giúp đỡ nhau” như một gia đình thật sự. Khi màn chiều buông, tiếng cười vang lên sân thể thao là lúc các em chơi bóng, tập kịch hoặc luyện thanh nhạc cho buổi biểu diễn sắp tới. Tinh thần “Tình thương - Chia sẻ - Phát triển - Hy vọng” được thể hiện rõ trong từng hoạt động học tập và sinh hoạt hàng ngày của các em tại đây.</p>
        </div>

        {/* note  */}
        <div style={{ fontSize: "13px", background: "#1ac8db" }} className="flex items-center justify-center px-2 py-4 mt-4 text-justify">
          <span className="text-5xl italic font-bold" style={{ position:"relative", top:"-140px", left:"-8px" }}>&ldquo;</span>
          <p>Khi chúng tôi đến gặp cô Hà Thị Thành - giáo viên chuyên dạy trẻ khiếm thính câm tại Làng Hy Vọng, cô tâm sự:  Tôi đến với Làng Hy Vọng không chỉ vì công việc mà bởi một tiếng gọi từ trái tim. Tại đây, những em nhỏ khiếm thính không chỉ cần học chữ mà cần được hiểu, được kết nối. Mỗi sáng tới lớp, tôi lại đứng trước bảng, tay chỉ từng ký hiệu, mắt nhìn từng em vì có em học hiểu ngay, có em mất cả tuần chỉ để nhớ một ký hiệu mới. Điểm khó khăn lớn nhất không phải là bài học dạy cho các em, mà là rào cản thính giác và tâm lý của các em. Có hôm em thương nhớ gia đình, ngồi khóc không muốn học; em bị tăng động thì không thể ngồi yên lâu. Tôi phải dạy từng bước như: ôn bài cũ, giảng lại kỹ ký hiệu, kết hợp trò chơi, vỗ nhẹ vai để em biết rằng cô luôn ở bên. 
          <br /><br />
Nhưng len lỏi đâu đó tôi vẫn cảm nhận được niềm vui từ những điều nhỏ bé xảy ra hằng ngày. Như việc có một em trước kia còn ngại giao tiếp, nay biết nói “xin chào”, biết viết tên mình, biết giúp bạn mới, thông qua đó tôi biết mình đã góp phần gieo mầm một hy vọng nhỏ. Khi các em lớn hơn, rời Làng và quay lại thăm các em nhỏ hơn với nghề của mình, đó là lúc tôi nhận ra rằng công sức không chỉ là dạy chữ, mà là trao cho các em cơ hội để tự tin và vững bước trong tương lai của chính mình.
</p>
          <span className="text-5xl italic font-bold rotate-180" style={{ position:"relative", bottom:"-140px" }}>&ldquo;</span>
        </div>
        
        {/* picture  */}
        <div className="footer-section4 font-cabin text-[10px]" style={{ backgroundImage: "url('/assets/images/section5/bg.jpg')", backgroundSize: "cover", backgroundPosition: "50% center", width:"620px", height:"200px",  }}>
          <div className="flex flex-col items-center justify-center relative top-1/2 -left-1/6 transform -translate-y-1/2">
            <div className="font-extrabold">
              <span className="-m">____   </span>
              <span>HÀ THỊ THÀNH  </span>
            </div>
            <span>(Giáo viên dạy trẻ khiếm thính) </span>
          </div>
          <Image src="/assets/images/section5/person.png" alt="person" width={650} height={200} style={{ position:"relative", top:"-135px" }}></Image>
        </div>

      </div>
    </FullSection>
  );
}