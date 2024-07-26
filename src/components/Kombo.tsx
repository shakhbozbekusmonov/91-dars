import { Button } from '@/components/ui/button'


const Kombo = () => {
    return (
        <section>
            <div className="container max-w-[1142px] ">
                <div className="flex flex-col">
                    <h2 className='text-[36px] md:text-[52px] font-[700] mb-[30px]'>Kombo</h2>
                    <ul className='grid grid-cols-1  md:grid-cols-2 gap-[30px]'>

                        <li className=' max-w-[540px]  w-full flex  px-[30px] py-[19px] border-[1px] border-[#9797972E] rounded-[12px]'>
                            <img  src="/images/Kombo_img.png" width={183} height={192} alt="Kombo-1" />
                            <div className='pl-[35px] pt-3'>
                                <h4 className='text-[24px] font-[500] mb-[10px] '>Kombo-1</h4>
                                <p className='mb-6  text-[14px]'>Горячая закуска с митболами из говядины, томатами,моцареллой и соусом чипотле</p>
                                <div className='flex justify-between'>
                                    <span className='text-[24px] font-[700]'>25,000 UZS</span>
                                    <Button className='flex items-center justify-center rounded-[50%] w-[50px] h-[50px] text-3xl text-white pb-3.5'>+</Button>
                                </div>
                            </div>
                        </li>
                        <li className=' max-w-[540px] w-full flex  px-[30px] py-[19px] border-[1px] border-[#9797972E] rounded-[12px]'>
                            <img  src="/images/Kombo_img.png" width={183} height={192} alt="Kombo-1" />
                            <div className='pl-[35px] pt-3'>
                                <h4 className='text-[24px] font-[500] mb-[10px] '>Kombo-1</h4>
                                <p className='mb-6  text-[14px]'>Горячая закуска с митболами из говядины, томатами,моцареллой и соусом чипотле</p>
                                <div className='flex justify-between'>
                                    <span className='text-[24px] font-[700]'>25,000 UZS</span>
                                    <Button className='flex items-center justify-center rounded-[50%] w-[50px] h-[50px] text-3xl text-white pb-3.5'>+</Button>
                                </div>
                            </div>
                        </li>
                        <li className=' max-w-[540px] w-full flex  px-[30px] py-[19px] border-[1px] border-[#9797972E] rounded-[12px]'>
                            <img  src="/images/Kombo_img.png" width={183} height={192} alt="Kombo-1" />
                            <div className='pl-[35px] pt-3'>
                                <h4 className='text-[24px] font-[500] mb-[10px] '>Kombo-1</h4>
                                <p className='mb-6  text-[14px]'>Горячая закуска с митболами из говядины, томатами,моцареллой и соусом чипотле</p>
                                <div className='flex justify-between'>
                                    <span className='text-[24px] font-[700]'>25,000 UZS</span>
                                    <Button className='flex items-center justify-center rounded-[50%] w-[50px] h-[50px] text-3xl text-white pb-3.5'>+</Button>
                                </div>
                            </div>
                        </li>
                                            
                     
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Kombo
