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