import React from "react"
import { motion } from "framer-motion"
import { ClientOnly } from "remix-utils"
import useCountDownTimer from "~/utils/useCountDownTimer"
import RegButton from "../RegButton"

export default function CountDownTimer() {
	const { timeLeft: countDownTimer, addLeadingZero } = useCountDownTimer({ day: 7, month: 4, year: 2022 })
	return (
		<section id="CountDownTimer" className="w-full">
			<div className="container min-h-screen px-4 mx-auto 2xl:max-w-screen-xl">
				<section className="py-20 bg-white xl:pt-24">
					<div className="container px-4 mx-auto">
						<div className="flex flex-col items-center mb-8">
							<span className="inline-block px-2 py-px mb-6 text-xs font-medium leading-5 text-gray-500 uppercase bg-gray-100 rounded-9xl" >TIMER</span>
							<h3 className="text-4xl font-bold tracking-tighter text-gray-900 uppercase mb-9 md:text-5xl lg:text-6xl">
								Đồng hồ đếm ngược
							</h3>
							<p className="max-w-screen-sm text-lg font-medium text-center text-gray-500 md:text-xl">
								Cổng đăng ký dự thi Vòng 1 sẽ khép lại vào <span className="font-bold text-blue-800">23h59'</span> ngày <span className="font-bold text-blue-800">04/04/2022</span>. Bạn đã sẵn sàng nắm bắt cơ hội này cùng <span className="font-bold text-blue-800">SCMission</span>?
							</p>
						</div>
						<div className="flex justify-center space-x-4">
							<ClientOnly>
								{() => (
									!countDownTimer.completed
										? <>
											<div className="flex flex-col items-center justify-center p-4 bg-gray-200 border-2 rounded-xl">
												<span className="font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-9xl ]">
													{addLeadingZero(countDownTimer.days)}
												</span>
												<span className="font-bold md:text-lg lg:text-xl xl:text-3xl">Ngày</span>
											</div>
											<div className="flex flex-col items-center justify-center p-4 bg-gray-200 border-2 rounded-xl">
												<span className="text-4xl font-extrabold sm:text-6xl md:text-8xl lg:text-9xl aspect-square">
													{addLeadingZero(countDownTimer.hours)}
												</span>
												<span className="font-bold md:text-lg lg:text-xl xl:text-3xl">Giờ</span>
											</div>
											<div className="flex flex-col items-center justify-center p-4 bg-gray-200 border-2 rounded-xl">
												<span className="text-4xl font-extrabold sm:text-6xl md:text-8xl lg:text-9xl aspect-square">
													{addLeadingZero(countDownTimer.minutes)}
												</span>
												<span className="font-bold md:text-lg lg:text-xl xl:text-3xl">Phút</span>
											</div>
											<div className="flex flex-col items-center justify-center p-4 bg-gray-200 border-2 rounded-xl">
												<span className="text-4xl font-extrabold sm:text-6xl md:text-8xl lg:text-9xl aspect-square">
													{addLeadingZero(countDownTimer.seconds)}
												</span>
												<span className="font-bold md:text-lg lg:text-xl xl:text-3xl">Giây</span>
											</div>
										</>
										: "Time is UP"
								)}
							</ClientOnly>
						</div>
						<div className="flex justify-center py-20">
							<RegButton />
						</div>
					</div>
				</section>


			</div>
		</section>
	)
}