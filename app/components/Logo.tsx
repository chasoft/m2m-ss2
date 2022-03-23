import React from "react"
import { motion } from "framer-motion"

type LogoProps = {
	className?: string
	isAnimated?: boolean
}

export default function Logo({ className, isAnimated }: LogoProps) {
	return (
		<motion.img 
			animate={{ 
				rotate: [0,0,360,-360,0,0,0]
			}}
			transition={{ repeat: Infinity, duration: isAnimated ? 15 : 9999 }}
			className={className ?? "w-8 h-8"} 
			src="/img/logo.png" alt="Logo"
		/>
	)
}