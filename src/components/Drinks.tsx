import { Button } from '@/components/ui/button'

const Drinks = () => {
	return (
		<div className='mt-[105px] w-[1110px] m-auto mb-10'>
			<h3 className='font-inter font-bold text-[52px] leading-[62.93px] text-[#222124] mb-[30px]'>
				Ichimliklar
			</h3>
			<div className='flex flex-wrap gap-[30px]'>
				<div className='w-[540px] p-[30px] border rounded-lg flex'>
					<img
						className='mr-[43px]'
						src='src/images/Sprite.png'
						alt='Sprite Drink'
					/>
					<div>
						<h3 className='font-inter font-medium text-2xl mb-2.5'>
							Sprite 1L
						</h3>
						<p className='font-inter font-normal text-sm opacity-40 text-[#222124] mb-[30px]'>
							Горячая закуска c митболами из говядины, томатами, моцареллой и
							соусом чипотле
						</p>
						<div className='flex items-center justify-between'>
							<p className='font-inter font-bold text-2xl text-[#222124]'>
								6,000 UZS
							</p>
							<Button className='rounded-full' size='icon'>
								+
							</Button>
						</div>
					</div>
				</div>

				<div className='w-[540px] p-[30px] border rounded-lg flex'>
					<img
						className='mr-[43px]'
						src='src/images/CocaCola.png'
						alt='Cola Drink'
					/>
					<div>
						<h3 className='font-inter font-medium text-2xl mb-2.5'>
							Coca Cola 1.5L
						</h3>
						<p className='font-inter font-normal text-sm opacity-40 text-[#222124] mb-[30px]'>
							Горячая закуска c митболами из говядины, томатами, моцареллой и
							соусом чипотле
						</p>
						<div className='flex items-center justify-between'>
							<p className='font-inter font-bold text-2xl text-[#222124]'>
								6,000 UZS
							</p>
							<Button className='rounded-full' size='icon'>
								+
							</Button>
						</div>
					</div>
				</div>

				<div className='w-[540px] p-[30px] border rounded-lg flex'>
					<img
						className='mr-[43px]'
						src='src/images/Fanta.png'
						alt='Fanta Drink'
					/>
					<div>
						<h3 className='font-inter font-medium text-2xl mb-2.5'>Fanta 1L</h3>
						<p className='font-inter font-normal text-sm opacity-40 text-[#222124] mb-[30px]'>
							Горячая закуска c митболами из говядины, томатами, моцареллой и
							соусом чипотле
						</p>
						<div className='flex items-center justify-between'>
							<p className='font-inter font-bold text-2xl text-[#222124]'>
								6,000 UZS
							</p>
							<Button className='rounded-full' size='icon'>
								+
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Drinks
