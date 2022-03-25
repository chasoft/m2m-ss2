import React from "react"

import CaseDetails from "~/components/case/CaseDetails"
import CaseIntro from "~/components/case/CaseIntro"
import CaseJudges from "~/components/case/CaseJudges"
import CasePriceStructure from "~/components/case/CasePriceStructure"
import CaseTimeline from "~/components/case/CaseTimeline"
import Footer from "~/components/Footer"
import Header from "~/components/Header"

export default function CaseCompetitionPage(){
	return (
		<>
			<Header forceDarkMode/>
			<CaseIntro />
			<CaseTimeline />
			<CaseDetails />
			<CaseJudges />
			<CasePriceStructure />
			<Footer />
		</>
	)
}