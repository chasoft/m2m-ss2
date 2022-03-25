import React from "react"
import { motion } from "framer-motion"
import { socialLinks } from "~/data/statics"

export default function Footer(){
	return (
		<section id="Footer" className="w-full py-10 my-20 bg-red-700" >
			<div className="flex flex-wrap items-center px-4 mx-auto 2xl:max-w-screen-xl">
				<div className="w-full md:w-1/3 lg:w-1/2">
					<div className="max-w-2xl px-8 mx-auto md:p-12 md:pr-0 md:pt-0">
						<h2 className="mb-4 text-4xl font-bold text-white sm:mt-0 lg:mb-12 md:text-4xl lg:text-5xl xl:text-6xl" >
							Thông tin liên hệ
						</h2>
					</div>
				</div>
				<div className="w-full md:w-2/3 lg:w-1/2">
					<div className="max-w-2xl px-8 mx-auto text-lg text-white md:p-12">
						<div className="flex flex-col space-y-2">
							<p>Mọi thắc mắc xin vui lòng liên hệ</p>
							<p>Fanpage: <a href="scmission.contest@gmail.com" className="text-yellow-400 hover:text-yellow-200">https://www.facebook.com/scmissionlsc</a></p>
							<p>Email: <a href="mailto:scmission.contest@gmail.com" className="text-yellow-400 hover:text-yellow-200">scmission.contest@gmail.com</a></p>
							<p>Hotline: 0949 207 563 (Ms. Nhật Quyên)</p>
						</div>
						<div className="flex mt-6 space-x-2">
							{socialLinks.map(item => (
								<motion.div key={item.title} className="p-1 bg-gray-200 aspect-square rounded-xl" whileHover={{ scale: 1.2, textShadow: "0px 0px 8px rgb(255,255,255)"}}>
									<a href={item.link}>
										<img src={item.img} alt={item.title} className="w-8 h-8"/>
									</a>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}