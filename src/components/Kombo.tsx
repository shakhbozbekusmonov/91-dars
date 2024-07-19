import { Button } from '@/components/ui/button'


const Kombo = () => {
    return (
        <section>
            <div className="container ">
                <div className="wrapper pb-20 pt-20   ">
                    <h2 className='text-[52px] font-[700] mb-[30px]'>Kombo</h2>
                    <ul className='flex flex-wrap gap-[30px]'>
                        <li className='flex justify-around px-[30px] py-[19px] max-w-[540px] w-[100%]  border-[1px] border-[#9797972E] rounded-[10px]'>
                            <img  src="/images/Kombo_img.png" width={183} height={192} alt="Kombo-1" />
                            <div className='pl-[35px] pt-3'>
                                <h4 className='text-[24px] font-[500] mb-[10px] '>Kombo-1</h4>
                                <p className='mb-6  text-[14px]'>Горячая закуска с митболами из говядины, томатами,моцареллой и соусом чипотле</p>
                                <div className='flex justify-between'>
                                    <span className='text-[24px] font-[700]'>25,000 UZS</span>
                                    <Button className='text-[26px] pb-1' size='icon'>+</Button>
                                </div>
                            </div>
                        </li>
                        <li className='flex justify-around px-[30px] py-[19px] max-w-[540px] w-[100%]  border-[1px] border-[#9797972E] rounded-[10px]'>
                            <img  src="/images/Kombo_img.png" width={183} height={192} alt="Kombo-1" />
                            <div className='pl-[35px] pt-3'>
                                <h4 className='text-[24px] font-[500] mb-[10px] '>Kombo-1</h4>
                                <p className='mb-6  text-[14px]'>Горячая закуска с митболами из говядины, томатами,моцареллой и соусом чипотле</p>
                                <div className='flex justify-between'>
                                    <span className='text-[24px] font-[700]'>25,000 UZS</span>
                                    <Button className='text-[26px] pb-1' size='icon'>+</Button>
                                </div>
                            </div>
                        </li>
                      
                        <li className='flex justify-around px-[30px] py-[19px] max-w-[540px] w-[100%]  border-[1px] border-[#9797972E] rounded-[10px]'>
                            <img  src="/images/Kombo_img.png" width={183} height={192} alt="Kombo-1" />
                            <div className='pl-[35px] pt-3'>
                                <h4 className='text-[24px] font-[500] mb-[10px] '>Kombo-1</h4>
                                <p className='mb-6  text-[14px]'>Горячая закуска с митболами из говядины, томатами,моцареллой и соусом чипотле</p>
                                <div className='flex justify-between'>
                                    <span className='text-[24px] font-[700]'>25,000 UZS</span>
                                    <Button className='text-[26px] pb-1' size='icon'>+</Button>
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
