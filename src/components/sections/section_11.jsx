'use client';
import React from "react";
import FullSection from "./FullSection";

export default function Section11() {
  return (
    <FullSection>
      <div className="section11-container pt-4 font-cabin text-justify text-sm flex flex-col items-center" >
        <p className="px-10 ">
          Những món quà không chỉ dừng lại ở vật chất như: bữa ăn ấm áp, giấc ngủ yên bình, bàn học mới, mà còn là tiếng cười vang trong sân, là bàn tay an ủi khi em nhỏ nhớ nhà, là ánh mắt kiên nhẫn khi một em chập chững học ký hiệu, là bàn tay vỗ nhẹ khi em ấy trưởng thành. Chúng ta vẫn thường nói “lá lành đùm lá rách” như một câu châm ngôn, nhưng ở đây, trong từng hành động cụ thể, trong từng ngày sống của các em, câu nói ấy trở nên sống động và có thật.
        </p>
          <p className="px-10 pt-2">

          Khi chúng ta nhìn thấy các em được chăm lo toàn diện, từ vật chất đến tinh thần, nhìn thấy các em lớn lên và tìm được chỗ đứng trong xã hội, đồng thời quay lại để trở thành người hỗ trợ cho thế hệ kế tiếp thì chúng ta hiểu rằng, chính sự sẻ chia ấy đã thắp lên ngọn lửa hy vọng, đã tạo dựng nên một cộng đồng nơi mọi em đều “thuộc về”, đều có quyền được lớn lên giữa yêu thương và cơ hội.
          </p>
          <p className="px-10 pt-2">

          Và nếu mỗi người chúng ta nhắc bản thân: mình có thể làm một “lá lành” nhỏ thôi như bắt đầu từ một nụ cười, một lời hỏi han, một món đồ nhỏ, một phút đến thăm thì lần lượt sẽ có thêm nhiều “lá” được đùm bọc, và xã hội sẽ càng ấm áp hơn, sẻ chia hơn và trọn vẹn hơn với những ai vốn khởi đầu từ thiệt thòi nhưng vẫn luôn mạnh mẽ hướng về tương lai.
          </p>
        <div className="w-full h-[40vh] mt-2 py-2">
          <video src="/assets/media/videos/end.mp4" controls className="w-full"></video>
        </div>
      </div>
    </FullSection>
  );
}