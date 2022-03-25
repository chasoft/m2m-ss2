import React from "react"

export default function RulesDetails() {
	return (
		<section id="Details" className="w-full min-h-screen">
			<div className="w-full">
				<svg viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z" fill="#f9fafb"></path>
				</svg>
			</div>
			<div className="flex justify-center px-4 py-20 mx-auto bg-gray-50 md:px-10 lg:px-15">
				<div className="container px-4 mx-auto 2xl:max-w-screen-xl">

					<div className="flex flex-col items-center justify-center">
						<h2 className="mb-4 text-4xl font-bold lg:mb-12 md:text-5xl xl:text-6xl uppercase" >
							Thông tin chi tiết
						</h2>
						<p className="mb-6 text-lg leading-loose text-gray-500" >
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
						</p>
						<div className="flex flex-col w-full max-w-screen-md">
							<div className="flex flex-col py-10 md:flex-row">
								<div className="pr-2 md:pr-10">
									<img src="/img/rule-details-01.svg" alt="" className="min-w-[200px] max-w-[200px]" />
								</div>
								<div className="max-w-screen-md prose prose-lg prose-p:p-0">
									<ul className="list-disc">
										<li>Sinh viên thuộc các trường Đại học trên địa bàn toàn quốc</li>
										<li>Sinh viên có quốc tịch Việt Nam, đang theo học tại các trường Đại học trên thế giới, đang có mặt tại Việt Nam trong thời gian diễn ra cuộc thi</li>
										<li>Sinh viên đã tốt nghiệp không quá 6 tháng</li>
										<li>Thí sinh đã lọt vào Chung kết Doanh Nhân Tập Sự các mùa không được tiếp tục tham gia cuộc thi</li>
									</ul>
								</div>
							</div>
							<div className="flex flex-col md:flex-row justify-end items-end md:items-center min-h-[150px] py-10">
								<div className="order-2 prose prose-lg md:order-1 prose-p:p-0 prose-p:m-0">
									<p>Cuộc thi chính thức diễn ra vào ngày 08/04/2021</p>
									<p>Dự kiến kết thúc ngày 19/06/2021</p>
								</div>
								<div className="order-1 pl-2 md:pl-10 md:order-2">
									<img src="/img/rule-details-02.svg" alt="" className="w-[200px]" />
								</div>
							</div>
							<div className="flex items-center py-10 mt-10 md:mt-0">
								<div className="pr-2 md:pr-10">
									<img src="/img/rule-details-03.svg" alt="" className="w-[400px]" />
								</div>
								<div className="max-w-screen-md prose prose-lg">
									<img src="/img/ticket.png" alt="" className="h-20" />
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