import React from "react"
import slugify from "react-slugify"
import { json, LoaderFunction, redirect, useLoaderData } from "remix"
import Footer from "~/components/Footer"
import Header from "~/components/Header"
import { MentorDetailsContent } from "~/components/mentors/Mentors"
import { mentorsList } from "~/data/statics"
import { MentorItemType, MentorProfileType } from "~/types"

export const loader: LoaderFunction = async ({ params }) => {

	// const allMentors = mentorsList.reduce(
	// 	(all: MentorProfileType[], curr: MentorItemType) => ([...all, ...curr.items]), []
	// )

	// const selectedMentor = allMentors.find(mentor => slugify(mentor.name) === params.mentor)

	// if (selectedMentor === undefined) return redirect("/mentors")

	// return json({selectedMentor})
	return json(params.mentor)
}

export default function MentorDetails() {
	const selectedMentor = useLoaderData()

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div className="container flex items-center justify-center flex-grow pt-24 mx-auto">
				<div className="max-w-screen-lg pt-16 pb-10">
					<MentorDetailsContent mentorName={selectedMentor}/>
				</div>
			</div>
			<Footer />
		</div>
	)
}