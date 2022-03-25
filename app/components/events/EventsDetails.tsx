import React from "react"

export default function EventsDetails() {
	return (
		<section id="Details" className="w-full min-h-screen">
			<div className="w-full">
				<svg viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z" fill="#f9fafb"></path>
				</svg>
			</div>
			<div className="flex justify-center px-4 py-20 mx-auto bg-gray-50 md:px-10">
				<div className="container px-4 mx-auto 2xl:max-w-screen-xl">
					<div className="flex flex-col items-center justify-center">
						<div className="flex flex-col items-center md:flex-row">
							<div className="flex flex-col items-center">
								<img src="/img/logo.png" alt="" className="w-16"/>
								<span className="font-bold flex-nowrap">Mentee-to-Mentor</span>
								<span className="font-bold"> Season II </span>
							</div>
							<h2 className="mt-10 text-2xl font-bold text-center lg:text-3xl xl:text-4xl md:mt-0 md:pl-10">Talkshow Mentoring<br />Kickstart your career path</h2>
						</div>

						<div className="max-w-screen-xl p-0 pt-10 prose prose-lg md:p-10 rounded-xl">
							<h3><span className="font-bold underline">Với chủ đề:</span> Mô hình cố vấn nghề nghiệp (Mentoring) trong hướng nghiệp cho sinh viên.</h3>
							<p>
								Talkshow nhằm mục đích giúp các bạn sinh viên tiếp cận mô hình Mentoring cũng như hiểu hơn về vai trò, tầm quan trọng của việc tìm kiếm cố vấn (Mentor) và định hướng nghề nghiệp tương lai.
							</p>
							<div className="md:pl-10 lg:pl-20 xl:pl-28">
								<div className="pl-2 border-l-4 border-gray-400">
									<p>Thời gian: 19h00 – 21h00 ngày 01/04/2022</p>
									<p>Hình thức: Trực tuyến trên nền tảng Zoom Meeting</p>
									<p>Diễn giả:</p>
								</div>
							</div>
						</div>
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