import React from "react"

import { motion } from "framer-motion"

export default function MentorsIntro({ setShowMentors }) {
	return (
		<section id="Intro" className="w-full pt-40">
			<div className="container flex flex-col items-center justify-center px-4 mx-auto 2xl:max-w-screen-xl">
				<div className="max-w-screen-lg pb-20 prose prose-xl prose-h2:text-center">
					<p>Tôi muốn kết nối và duy trì mối quan hệ với những người đi trước để có thể đồng hành cùng tôi trên con đường mở rộng tư duy và tầm nhìn cho con đường sự nghiệp</p>
					<h2>Connection makes Perfection</h2>
					<p>Điều đó hoàn toàn có thể nếu bạn chủ động tìm kiếm cho mình một sự kết nối. Cùng <strong>M2MSS2</strong> chúng ta bắt đầu khởi động cho một sự hoàn hảo đang chờ đón.</p>
				</div>
				<div className="">
					<motion.button
						onClick={()=> setShowMentors(p =>!p)}
						className="block px-8 py-4 mb-4 font-semibold leading-none text-center text-white bg-blue-600 rounded sm:inline-block sm:mb-0 sm:mr-3 hover:bg-blue-700"
						whileHover={{ scale: 1.2, textShadow: "0px 0px 8px rgb(255,255,255)" }}
					>
						KHÁM PHÁ NGAY
					</motion.button>
				</div>
			</div>
		</section>
	)
}