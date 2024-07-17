const SiteHeader = () => {
	return (
		<header className='py-6 bg-gradient-to-r from-white from-60% to-[#800A7A] to-40%'>
			<div className='container'>
				<div className='flex justify-between items-center'>
					<a href='/'>
						<img
							src='/images/logo.svg'
							width='52'
							height='55'
							alt='MaxWay Logo'
						/>
					</a>
				</div>
			</div>
		</header>
	)
}

export default SiteHeader
