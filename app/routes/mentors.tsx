import React from "react"
import Header from "~/components/Header"
import MentorsHr from "~/components/mentors/MentorsHr"
import MentorsIntro from "~/components/mentors/MentorsIntro"
import MentorsLogistics from "~/components/mentors/MentorsLogistics"
import MentorsMarketing from "~/components/mentors/MentorsMarketing"

export default function MentorsPage(){
	return (
		<>
			<Header />
			MentorsPage	
			<MentorsIntro />
			<MentorsMarketing />
			<MentorsLogistics />
			<MentorsHr />
		</>
	)
}