import React from "react"

import { motion } from "framer-motion"
import clsx from "clsx"

type RegButtonType = {
	className?:string
}

export default function RegButton({className}: RegButtonType) {
	return (
		<motion.button className={clsx("block uppercase px-8 py-4 mb-4 font-semibold leading-none text-center text-white bg-blue-600 rounded sm:inline-block sm:mb-0 sm:mr-3 hover:bg-blue-700", className)} whileHover={{ scale: 1.2, textShadow: "0px 0px 8px rgb(255,255,255)" }}>
			Đăng ký ngay
		</motion.button>
	)
}