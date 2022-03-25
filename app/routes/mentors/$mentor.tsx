import React from "react"
import { json, LoaderFunction, useLoaderData } from "remix"
import Footer from "~/components/Footer"
import Header from "~/components/Header"
import { MentorDetailsContent } from "~/components/mentors/Mentors"

export const loader: LoaderFunction = async ({ params }) => {
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