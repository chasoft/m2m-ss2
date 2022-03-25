import React, { useState } from "react"

import clsx from "clsx"
import slugify from "react-slugify"

import type { MentorItemType, MentorProfileType } from "~/types"
import { mentorsList } from "~/data/statics"

type MentorDetailsContentProps = {
	mentorName: string
}

export function MentorDetailsContent({ mentorName }: MentorDetailsContentProps) {

	const allMentors = mentorsList.reduce((all: MentorProfileType[], curr: MentorItemType) => ([...all, ...curr.items]), [])

	const selectedMentor = allMentors.find(mentor => slugify(mentor.name) === mentorName)

	if (!selectedMentor)
		return (
			<div className="">
				<h3 className="text-lg font-bold">Mentor not found</h3>
			</div>
		)

	return (
		<div className="flex flex-col space-y-4">
			<div className="bg-[url('/img/bg.jpg')] h-52 md:h-72 rounded-xl">
				<div className="flex items-end h-full">
					<div className="flex items-center m-2 md:ml-10">
						<div className="p-0 sm:p-2 md:pb-0 avatar">
							<div className="w-24 rounded-full">
								<img src="https://api.lorem.space/image/face?hash=92310" alt="" />
							</div>
						</div>
						<div className="flex flex-col justify-center px-2 text-white">
							<span className="text-2xl font-bold textShadow-dark">{selectedMentor.name}</span>
							<span className="text-lg textShadow-dark">{selectedMentor.position} tại {selectedMentor.company}</span>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-center -mb-10 md:justify-between md:flex-row">
				<div className="flex flex-wrap pt-5 ml-2 md:ml-4 md:pt-0">
					<div className="flex items-center p-2"><span className="">👩‍🎓 &nbsp;</span> 34 mentee</div>
					<div className="flex items-center p-2"><span className="">🕒 &nbsp;</span> 34 h</div>
					<div className="flex items-center p-2"><span className="">⭐ &nbsp;</span> 5/5</div>
					<div className="flex items-center p-2"><span className="">♥ &nbsp;</span> 74</div>
				</div>
				<div className="flex flex-col justify-center pt-5 space-y-2 md:space-x-4 md:space-y-0 md:flex-row md:pt-0">
					<button className="px-8 py-1 btn-primary rounded-xl">Đặt lịch ngay</button>
					<button className="px-8 py-1 btn-outline rounded-xl border-[1px]">Yêu thích</button>
				</div>
			</div>
			<div className="max-w-screen-lg pt-10 prose prose-lg">
				<p>Parturient cursus tristique facilisi dictumst nec, accumsan nibh facilisis hac. Hac.</p>
				<p>Mi enim nec dignissim mollis congue ad fermentum. Suscipit aenean ultrices senectus hac est mattis.</p>
				<p>At nec. Elit semper ligula consectetuer quisque praesent cum ad ac. Non. Tincidunt scelerisque.</p>
			</div>
		</div>
	)
}

export default function Mentors() {
	const [activeTab, setActiveTab] = useState(0)
	const [selectedMentor, setSelectedMentor] = useState("")

	return (
		<div id="Mentors" className="container flex justify-center min-h-screen pt-40 mx-auto">
			<div className="container flex flex-col items-center 2xl:max-w-screen-xl">
				<h2 className="pb-10 text-4xl font-extrabold uppercase lg:text-5xl">Mentors</h2>

				<div className="flex flex-col items-center w-full">
					<div className="btn-group">
						{mentorsList.map((mentorsGroup, idx) => {
							return (
								<button
									key={mentorsGroup.group}
									className={clsx("btn bg-white hover:bg-blue-600 hover:text-white hover:border-gray-700",
										{
											"border-blue-600 bg-blue-600/80 text-white": idx === activeTab,
											"text-black border-gray-700": idx !== activeTab
										})}
									onClick={() => setActiveTab(idx)}
								>
									{mentorsGroup.group}
								</button>
							)
						})}
					</div>

					<div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{(mentorsList[activeTab].items as MentorProfileType[]).map(profile => (
							<div key={profile.name} className="flex flex-col items-center justify-between p-4 m-4 border-2 md:m-0 aspect-square rounded-xl bg-gray-50">
								<div className="flex flex-col items-center justify-center">
									<div className="avatar">
										<div className="w-24 rounded-full">
											<img src="https://api.lorem.space/image/face?hash=92310" alt={profile.name} />
										</div>
									</div>
									<div className="flex flex-col items-center justify-center">
										<span className="py-2 text-lg font-bold">{profile.name}</span>
										<span className="text-center">{`${profile.position} tại ${profile.company}`}</span>
									</div>
								</div>
								<label htmlFor="my-modal" className="mt-2">
									<span
										onClick={() => { setSelectedMentor(slugify(profile.name)) }}
										className="btn btn-outline"
									>
										Profile
									</span>
								</label>
							</div>
						))}
					</div>

					<input type="checkbox" id="my-modal" className="modal-toggle" />
					<div className="modal">
						<div className="max-w-screen-lg modal-box">
							<MentorDetailsContent mentorName={selectedMentor} />
							<div className="modal-action">
								<label htmlFor="my-modal">
									<span className="btn btn-circle btn-outline"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></span>
								</label>
							</div>
						</div>
					</div>

				</div>

			</div>

		</div>
	)
}
