import { useState } from "react";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Mentors from "~/components/mentors/Mentors";
import MentorsIntro from "~/components/mentors/MentorsIntro";

export default function MentorParam() {
	const [showMentors, setShowMentors] = useState(false)
	return (
		<>
			<Header />
			{!showMentors && <MentorsIntro setShowMentors={setShowMentors} />}
			{showMentors && <Mentors />}
			<Footer />
		</>
	)
}