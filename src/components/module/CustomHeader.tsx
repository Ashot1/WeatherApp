import { FC, ReactNode } from 'react'
import BackButton from '@/components/entity/BackButton'
import MenuButton from '@/components/widgets/MenuButton'
import { comfortaa600 } from '@/lib/fonts'

const CustomHeader: FC<{ children?: ReactNode, title?: string }> = ({ children, title }) => {

	return (
		<header className='w-screen h-[60px] flex justify-center relative'>
			<div className='max-w-[1100px] w-[90%] 768p:w-[70%] flex h-[100%] items-center'>
				<nav className='w-[20%] -mt-[2px] justify-center flex items-center'>
					<BackButton />
				</nav>
				{children}
				<span className='w-[20%] justify-center flex items-center'>
					<MenuButton />
				</span>
			</div>
		</header>
	)
}

export default CustomHeader


export const HeaderTitle: FC<{ children: string }> = ({ children }) => {
	return (
		<h1 className={`${comfortaa600.className} flex-1 text-center h-auto text-base 4k:text-xl`}>{children}</h1>
	)
}
