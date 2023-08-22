'use client'
import { FC, ReactNode, MouseEvent } from 'react'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import ThemeChangeButton from '@/components/entity/ThemeChangeButton'


const MenuButton: FC = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<DotsVerticalIcon className='w-4 h-4 1024p:w-5 1024p:h-5 4k:w-7 4k:h-7' />
			</DropdownMenuTrigger>
			<DropdownMenuContent className='mt-[15px]'>
				<MenuItem asChild><Link href='/about'>Информация</Link></MenuItem>
				<MenuItem click={(e) => e.preventDefault()}><ThemeChangeButton /></MenuItem>
				<MenuItem asChild><Link href='/weather'>На главную</Link></MenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default MenuButton

const MenuItem: FC<{
	children: ReactNode,
	click?: (e: MouseEvent<HTMLDivElement>) => void,
	asChild?: boolean
}> = ({ children, click, asChild }) => {

	return (
		<DropdownMenuItem className='cursor-pointer justify-center text-[0.8rem]' onClick={click} asChild={asChild}>
			{children}
		</DropdownMenuItem>
	)
}