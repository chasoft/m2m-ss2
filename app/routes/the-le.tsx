import React from "react"
import Header from "~/components/Header"
import RulesDetails from "~/components/rules/RulesDetails"
import RulesHighlights from "~/components/rules/RulesHighlights"
import RulesInfo from "~/components/rules/RulesInfo"
import RulesPayment from "~/components/rules/RulesPayment"
import RulesRegGuide from "~/components/rules/RulesRegGuide"
import RulesSections from "~/components/rules/RulesSections"
import RulesSegments from "~/components/rules/RulesSegments"

export default function RulesPage(){
	return (
		<>
			<Header />
			RulesPage	
			<RulesInfo />
			<RulesHighlights />
			<RulesSegments />
			<RulesDetails />
			<RulesSections />
			<RulesRegGuide />
			<RulesPayment />
		</>
	)
}