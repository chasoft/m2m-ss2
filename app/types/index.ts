export type MenuItemType = {
	title: string
	slug: string
	description?: string
	external?: boolean
	icon?:string
	lessImportant?: boolean
}

export type MenuGroupType = {
	header: string,
	items: MenuItemType[]
}

export type MentorProfileType = {
	name: string
	position: string
	company: string
	avatar: string
	background: string
	description: string
}

export type MentorItemType = {
	group: string,
	items: MentorProfileType[]
}