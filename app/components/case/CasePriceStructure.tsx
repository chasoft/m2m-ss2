import React, { useState } from "react"

import { motion } from "framer-motion"

export default function CasePriceStructure() {
	const [show, setShow] = useState(false)
	return (
		<section id="PricesStructure" className="w-full min-h-screen">
			<div className="w-full">
				<svg viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z" fill="#f9fafb"></path>
				</svg>
			</div>
			<div className="flex justify-center px-4 py-20 mx-auto bg-gray-50 md:px-10 lg:px-15">
				<div className="container px-4 mx-auto 2xl:max-w-screen-xl">

					<div className="flex flex-col items-center justify-center">
						<div className="flex flex-col justify-around mb-6" >
							<div><img src="/img/rule-details-05.svg" alt="" className="h-44" /></div>
							<img src="/img/rule-details-04.svg" alt="" className="h-44	" />
						</div>
						<p>
							Các suất short-cut vào các công ty, tập đoàn đa quốc gia cùng các suất học bổng ước tính <strong>500,000,000 VND</strong>
						</p>
						<div className="pt-10">
						<motion.button
							onClick={() => setShow(p => !p)}
							className="px-8 py-4 mb-4 font-semibold leading-none text-center text-white bg-blue-600 rounded my-10block sm:inline-block sm:mb-0 sm:mr-3 hover:bg-blue-700"
							whileHover={{ scale: 1.2, textShadow: "0px 0px 8px rgb(255,255,255)" }}
						>
							{show ? "ĐÓNG CHI TIẾT" : "XEM CHI TIẾT"}
						</motion.button>
						</div>

						{show && <div className="grid max-w-screen-lg grid-cols-1 gap-10 mt-20 md:grid-cols-2">
							<div className="p-4 bg-blue-200 border-2 md:p-10 rounded-2xl">
								<h2 className="mb-4 text-xl font-bold text-center uppercase lg:text-2xl">Các suất short-cut</h2>
								<div className="prose prose-lg prose-h3:text-blue-600">
									<h3>TOP 1 DNTS</h3>
									<p>Được short-cut vào vòng Assessment Camp của chương trình <strong>Global Graduate Program (BAT)</strong></p>
									<p>Được đặc cách vào vòng Case Challenge của chương trình <strong>Leader Under 25 (Giao hàng tiết kiệm)</strong></p>
									<p>Được tiến thẳng vào vòng Case Study của chương trình <strong>Global Leader Program 2022 (Shopee)</strong></p>
									<h3>TOP 40 DNTS</h3>
									<p>Được short-cut vào vòng Initial Interview của chương trình <strong>Global Graduate Programme (BAT)</strong></p>
									<p>Programme (BAT)
										Được đặc cách vào thẳng vòng Exploring Day/Initial Interview của chương trình <strong>Leader Under 25 (Giao hàng tiết kiệm)</strong></p>
									<p>Được tiến thẳng vào vòng Group Discussion & HR Interview của chương trình <strong>Global Leader Program 2022 (Shopee)</strong></p>
									<p>Được short-cut vào vòng Phỏng vấn với HRBP của chương trình <strong>Genext 2021 (Generali)</strong></p>
									<h3>TOP 120 DNTS</h3>
									<p>Được đặc cách vào vòng General Test của chương trình <strong>Leader Under 25 (Giao hàng tiết kiệm)</strong></p>
								</div>
							</div>

							<div className="p-4 bg-pink-200 border-2 md:p-10 rounded-2xl">
								<h2 className="mb-4 text-xl font-bold text-center uppercase lg:text-2xl">Các suất học bổng</h2>
								<div className="prose prose-lg">
									<p>Từ <strong>VILAS</strong>: Học bổng 100% cho TOP 2 và 50% cho TOP 8 xuất sắc nhất ngành Supply Chain Management khóa học Supply Chain Executive</p>
									<p>Từ <strong>TOMORROW MARKETERS</strong>: Học bổng 100% cho TOP 2 và 50% cho TOP 8 xuất sắc ngành Marketing một khóa học bất kỳ.</p>
									<p>Từ <strong>FTMS</strong>: Học bổng 60% cho TOP 2 và 50% cho TOP 8 xuất sắc nhất ngành Finance khóa học FIA/ACCA/CFA</p>
									<p>Từ <strong>S.O.C INSTITUTE</strong>: Học bổng 90% cho TOP 2 và 50% cho TOP 8 xuất sắc nhất ngành Finance và Human Resources một khóa học bất kỳ.</p>
									<p>Từ <strong>THE TRAINEE CLUB</strong>: Học bổng 100% cho top 10, 70% cho TOP 40 và 30% cho TOP 120 khóa học Business Problem Solving Foundation</p>
									<p>Từ <strong>G.A.P INSTITUTE</strong>: Học bổng 100% cho TOP 3 và 50% cho TOP 10 áp dụng với mọi khóa học bất kỳ tại G.A.P</p>
								</div>
							</div>
						</div>}
					</div>
				</div>
			</div>
			<div className="w-full">
				<svg viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z" fill="#f9fafb"></path>
				</svg>
			</div>
		</section>
	)
}