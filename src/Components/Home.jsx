import {Link} from "react-router-dom";
import '../index.css';
import Menu from "./Menu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination , Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home()
{
    return(
        <> 
      
 
          <Menu/>

          <div className="container mx-auto bg-red-500">
            <div className="relative bg-green-700">
                <div className="container w-full absolute px-3 z-0 ">

             {/* دکمه‌های کاستوم */}
                <button className="swiper-button-next-custom absolute right-2 top-1/5 z-50 cursor-pointer"> 
                      <svg className="w-18 h-20 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                    </svg>
                </button>

                <button className="swiper-button-prev-custom absolute left-2 top-1/5 z-50 cursor-pointer">
                    <svg className="w-18 h-20 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                    </svg>
                </button>

             <Swiper
            
            modules={[Pagination , Navigation]}
             navigation={{
      nextEl: '.swiper-button-next-custom',
      prevEl: '.swiper-button-prev-custom',
    }}
            pagination={{clickable:true}}
             loop={true}
            >
                <SwiperSlide className="">
                    <img alt="" src="../../public/5.jpg" className="mask-b-from-50% mask-b-to-100%" />
                </SwiperSlide>
                <SwiperSlide className="">
                    <img src="../../public/2.jpg" alt="" className="mask-b-from-50% mask-b-to-100%"/>
                </SwiperSlide>
                <SwiperSlide className="">
                    <img src="../../public/4.jpg" alt="" className="mask-b-from-50% mask-b-to-100%"/>
                </SwiperSlide>
                  <SwiperSlide className="">
                    <img src="../../public/3.jpg" alt="" className="mask-b-from-50% mask-b-to-100%"/>
                </SwiperSlide>
                 <SwiperSlide className="">
                    <img src="../../public/6.jpg" alt="" className="mask-b-from-50% mask-b-to-100%"/>
                </SwiperSlide>
                 <SwiperSlide className="">
                    <img src="../../public/7.jpg" alt="" className="mask-b-from-50% mask-b-to-100%"/>
                </SwiperSlide>
            </Swiper>
           </div>
            </div>

          </div>
           

           <div className="bg-wh constainer mx-auto z-40 relative top-68 max-sm:top-40">
              <div className="container  mx-auto w-366 max-sm:w-100">
                  <div className=" grid grid-cols-4 gap-5 max-sm:grid-cols-1">
                    <div className=" p-3 py-4 bg-white ">
                        <span className="ms-1 text-xl font-bold block">Shop Gifts By Price</span>
                        <div className="grid grid-cols-2 gap-4  px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/1.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/2.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/3.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/4.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                     </div>
                    <div className=" bg-white p-3 py-4">
                           <span className="ms-1 text-xl font-bold block">Fashion trends you like</span>
                        <div className="grid grid-cols-2 gap-4  px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/5.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/6.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/7.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/8.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                    </div>
                    <div className=" bg-white p-3 py-5">
                           <span className="ms-1 text-xl font-bold block">Shop For Your Home Essential</span>
                        <div className="grid grid-cols-2 gap-4  px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/9.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/10.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/11.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/12.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                    </div>
                    <div className="bg-white p-3 py-4">
                           <span className="ms-1 text-xl font-bold block">Big deals. Bigger surprises.</span>
                        <div className="grid grid-cols-2 gap-4 px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/22.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/23.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/24.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/25.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                    </div>
                    <div className=" p-3 py-4 bg-white max-sm:hidden">
                        <span className="ms-1 text-xl font-bold block">Shop Gifts By Price</span>
                        <div className="grid grid-cols-2 gap-4  px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/1.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/2.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/3.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/4.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                     </div>
                    <div className=" bg-white p-3 py-4 max-sm:hidden">
                           <span className="ms-1 text-xl font-bold block">Fashion trends you like</span>
                        <div className="grid grid-cols-2 gap-4  px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/5.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/6.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/7.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/8.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                    </div>
                    <div className=" bg-white p-3 py-5 max-sm:hidden">
                           <span className="ms-1 text-xl font-bold block">Shop For Your Home Essential</span>
                        <div className="grid grid-cols-2 gap-4  px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/9.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/10.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/11.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/12.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                    </div>
                    <div className="bg-white p-3 py-4 max-sm:hidden">
                           <span className="ms-1 text-xl font-bold block">Big deals. Bigger surprises.</span>
                        <div className="grid grid-cols-2 gap-4 px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/22.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/23.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/24.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/25.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                    </div>
                  </div>
              </div>
           </div>
           
           <div className=" container mx-auto z-40 relative top-77 max-sm:top-50">
            <div className="container w-366 mx-auto bg-white relative px-6 pt-6 pb-4 ">

                <span className="text-xl font-bold block">Best Sellers in Books</span>

             <div className="p-1 relative">
                   <button className="next-multislides bg-white absolute shadow right-0 max-sm:right-238 top-17 w-18 z-40 h-23 cursor-pointer">next</button>
                <button className="prev-multislides bg-white absolute shadow left-0 z-40 top-17 w-18 h-23 cursor-pointer">prev</button>

                <Swiper
                modules={[Navigation , Pagination]}
                
                navigation={{
                    nextEl: ".next-multislides",
                    prevEl: ".prev-multislides",
                }}
                slidesPerView={8}
                className=""
                loop={true}
                >

                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/book/1.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/book/2.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/book/3.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/book/4.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/book/5.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3 me-3">
                            <img src="../../public/book/6.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/book/7.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/book/8.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3 me-5">
                            <img src="../../public/book/9.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3 me-4">
                            <img src="../../public/book/10.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3 me-4">
                            <img src="../../public/book/11.jpg" className='cursor-pointer'  alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/book/21.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3 me-4">
                            <img src="../../public/book/6.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/book/2.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/book/4.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/book/8.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/book/21.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>

                    
                </Swiper>
             </div>
            </div>
           </div>

           <div className=" container mx-auto z-40 relative top-85 max-sm:top-60">
            <div className="container w-366 mx-auto bg-white relative px-6 pt-6 pb-4">

                <span className="text-xl font-bold block">Best Sellers in Books</span>

             <div className="p-1 relative">
                   <button className="next-multislides1 bg-white absolute shadow right-0 max-sm:right-238 top-17 w-18 z-40 h-23 cursor-pointer">next</button>
                <button className="prev-multislides1 bg-white absolute shadow left-0 z-40 top-17 w-18 h-23 cursor-pointer">prev</button>

                <Swiper
                modules={[Navigation , Pagination]}
                
                navigation={{
                    nextEl: ".next-multislides1",
                    prevEl: ".prev-multislides1",
                }}
                slidesPerView={7}
                className=""
                loop={true}
                >

                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/underbook/1.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/underbook/2.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/underbook/3.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/underbook/4.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/underbook/5.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/underbook/6.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/underbook/7.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/underbook/8.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=" w-100 mt-3">
                            <img src="../../public/underbook/9.jpg" className='cursor-pointer' alt="" />
                    </SwiperSlide>

                    
                </Swiper>
             </div>
            </div>
           </div>

           <div className="bg-wh constainer mx-auto z-40 relative top-92 max-sm:top-70">
              <div className="container mx-auto w-366 max-sm:w-100">
                  <div className=" grid grid-cols-4 gap-5 max-sm:grid-cols-1">
                    <div className=" p-3 py-4 bg-white">
                        <span className="ms-1 text-xl font-bold block">Shop Gifts By Price</span>
                        <div className="grid grid-cols-2 gap-4  px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/1.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/2.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/3.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/4.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                     </div>
                    <div className=" bg-white p-3 py-4">
                           <span className="ms-1 text-xl font-bold block">Fashion trends you like</span>
                        <div className="grid grid-cols-2 gap-4  px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/5.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/6.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/7.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/8.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                    </div>
                    <div className=" bg-white p-3 py-5">
                           <span className="ms-1 text-xl font-bold block">Shop For Your Home Essential</span>
                        <div className="grid grid-cols-2 gap-4  px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/9.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/10.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/11.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/12.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                    </div>
                    <div className="bg-white p-3 py-4">
                           <span className="ms-1 text-xl font-bold block">Big deals. Bigger surprises.</span>
                        <div className="grid grid-cols-2 gap-4 px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/22.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/23.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/24.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/25.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                    </div>
                    <div className=" p-3 py-4 bg-white">
                        <span className="ms-1 text-xl font-bold block">Shop Gifts By Price</span>
                        <div className="grid grid-cols-2 gap-4  px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/1.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/2.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/3.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/4.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                     </div>
                    <div className=" bg-white p-3 py-4 ">
                           <span className="ms-1 text-xl font-bold block">Fashion trends you like</span>
                        <div className="grid grid-cols-2 gap-4  px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/5.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/6.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/7.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/8.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                    </div>
                    <div className=" bg-white p-3 py-5 max-sm:hidden">
                           <span className="ms-1 text-xl font-bold block">Shop For Your Home Essential</span>
                        <div className="grid grid-cols-2 gap-4  px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/9.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/10.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/11.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/12.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                    </div>
                    <div className="bg-white p-3 py-4 max-sm:hidden">
                           <span className="ms-1 text-xl font-bold block">Big deals. Bigger surprises.</span>
                        <div className="grid grid-cols-2 gap-4 px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/22.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/23.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/24.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/25.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                    </div>

                    <div className=" p-3 py-4 bg-white max-sm:hidden">
                        <span className="ms-1 text-xl font-bold block">Shop Gifts By Price</span>
                        <div className="grid grid-cols-2 gap-4  px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/1.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/2.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/3.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/4.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                     </div>
                    <div className=" bg-white p-3 py-4 max-sm:hidden">
                           <span className="ms-1 text-xl font-bold block">Fashion trends you like</span>
                        <div className="grid grid-cols-2 gap-4  px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/5.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/6.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/7.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/8.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                    </div>
                    <div className=" bg-white p-3 py-5 max-sm:hidden">
                           <span className="ms-1 text-xl font-bold block">Shop For Your Home Essential</span>
                        <div className="grid grid-cols-2 gap-4  px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/9.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/10.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/11.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/12.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                    </div>
                    <div className="bg-white p-3 py-4 max-sm:hidden">
                           <span className="ms-1 text-xl font-bold block">Big deals. Bigger surprises.</span>
                        <div className="grid grid-cols-2 gap-4 px-1 pt-3">
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/22.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/23.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" cursor-pointer">
                                <img src="../../public/img/24.jpg" className="h-29" alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                            <div className=" object-cover cursor-pointer">
                                <img src="../../public/img/25.jpg" className="h-29"alt="" />
                                <span className="text-xs">Under $2</span>
                            </div>
                        </div>
                        <div className=" mt-5">
                        <span className=" text-sm cursor-pointer">discover More For Holidays</span>
                        </div>
                    </div>
                    
                  </div>
              </div>
           </div>


           {/* bottom */}
           <div className="w-full px-1 py-5 bg-white mt-98 max-sm:mt-80">
              <div className=" border-1 border-gray-300 rounded-sm text-center p-4 pb-5">
                <span className="text-2xl font-bold block mt-6">See personalized recommendations</span>
                <button className="bg-amber-300 px-3 py-1 rounded-2xl mt-2 w-70 cursor-pointer">sign In</button>
                <span className="text-xs block mt-1">New customer? <a href="" className="text-blue-700">Start here.</a></span>
              </div>
           </div>

           <div className="bg-gray-600 w-full p-3 text-center text-white text-sm hover:bg-gray-500 cursor-pointer">
              Back To Top
           </div>
           
           <div className=" w-full pt-13 pb-21 bg-gray-700 border-b-1 border-gray-500">
              <div className=" container mx-auto w-230 flex justify-between max-sm:w-115">
                  <div className="">
                    <span className="font-bold text-white block">Get to Know Us</span>
                    <span className="text-sm text-white block mt-1">Carees</span>
                    <span className="text-sm text-white block mt-1">Blog</span>
                    <span className="text-sm text-white block mt-1">About Amazon</span>
                    <span className="text-sm text-white block mt-1">Investor Relative</span>
                    <span className="text-sm text-white block mt-1">Amazon Devices</span>
                    <span className="text-sm text-white block mt-1">Amazon Science</span>
                  </div>
                  <div className="">
                     <span className="font-bold text-white block">Get to Know Us</span>
                    <span className="text-sm text-white block mt-1">Carees</span>
                    <span className="text-sm text-white block mt-1">Blog</span>
                    <span className="text-sm text-white block mt-1">About Amazon</span>
                    <span className="text-sm text-white block mt-1">Investor Relative</span>
                    <span className="text-sm text-white block mt-1">Amazon Devices</span>
                    <span className="text-sm text-white block mt-1">Amazon Science</span>
                  </div>
                  <div className="">
                     <span className="font-bold text-white block">Get to Know Us</span>
                    <span className="text-sm text-white block mt-1">Carees</span>
                    <span className="text-sm text-white block mt-1">Blog</span>
                    <span className="text-sm text-white block mt-1">About Amazon</span>
                    <span className="text-sm text-white block mt-1">Investor Relative</span>
                    <span className="text-sm text-white block mt-1">Amazon Devices</span>
                    <span className="text-sm text-white block mt-1">Amazon Science</span>
                  </div>
                  <div className="">
                     <span className="font-bold text-white block">Get to Know Us</span>
                    <span className="text-sm text-white block mt-1">Carees</span>
                    <span className="text-sm text-white block mt-1">Blog</span>
                    <span className="text-sm text-white block mt-1">About Amazon</span>
                    <span className="text-sm text-white block mt-1">Investor Relative</span>
                    <span className="text-sm text-white block mt-1">Amazon Devices</span>
                    <span className="text-sm text-white block mt-1">Amazon Science</span>
                  </div>
              </div>
           </div>
           <div className="bg-gray-700 w-full p-8">
              <div className=" container mx-auto w-160 max-sm:w-100">
                <div className=" grid grid-cols-4">
                    <div className="">
                        <img src="../../public/1.png" className="object-cover h-8"></img>
                    </div>
                    <div className="cursor-pointer">
                        <div className=" w-30 h-8 rounded-xs text-center border-1 border-gray-400 ml-4 ">
                            <span className="text-sm text-center text-gray-300">English</span>
                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <div className=" w-37 h-8 max-sm:ms-10 rounded-xs text-center border-1 border-gray-400  ">
                            <span className="text-sm text-center text-gray-300">$USD-U.S. Dollar</span>
                        </div>
                    </div>
                    <div className="cursor-pointer max-sm:hidden">
                        <div className=" w-35 h-8 rounded-xs text-center border-1 border-gray-400 ">
                            <span className="text-sm text-center text-white">United States</span>
                        </div>
                    </div>
                </div>
              </div>
           </div>


           <div className="bg-gray-800 w-full text-white">
               <div className=" container mx-auto w-230 max-sm:w-100 flex flex-wrap justify-center">
                  <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
                    <div className=" w-1/7 flex flex-wrap cursor-pointer mt-7">
                      <span className="text-white font-bold text-xs w-1/1">Amazon Music</span>
                      <span className="text-gray-400 text-xs w-1/1">Stream Millions</span>
                      <span className="text-gray-400 text-xs w-1/1">Of Song</span>
                  </div>
               </div>
           </div>

           <div className="bg-gray-800 w-full text-white pt-12 pb-7 text-center">
               <span className="font-bold text-sm"> ________________Created By Masoud With Love _______________ </span>
           </div>
        </>
    )
}