export default function Menu(){
    return(
        <>
          <div className=" flex w-full bg-menu items-center p-1 sticky top-0 z-100">


                {/* left */}
                <div className=" w-8/50 flex px-3">
                   <div className=" w-3/7 ">
                      <img src="../../public/1.png" className="object-cover mt-2 " alt="" />
                   </div>
                   <div className=" w-4/7 ms-4 flex ">

                   <div className="text-white">
                    <i class="fa-solid fa-location-dot mt-6"></i>
                   </div>

                       <div className="space-y-0">
                         <div className=" text-sm ms-1 text-white">dasd</div>
                         <div className="font-bold ms-1 text-white">dsdsdad,.d.s...</div>
                       </div>


                   </div>
                </div>


                {/* middle searchbar */}
                <div className=" w-31/50">
                   <div className="flex  items-center w-full justify-center">

                       <div className="w-3/50  flex justify-end"> 
                        <div className="bg-gray-200 w-17/20 rounded-tl-sm rounded-bl-sm relative py-2">
                           <span className="text-sm ms-3">All</span>
                           <i class="fa-solid fa-caret-down text-shadow-sm text-sm ms-1"></i>
                            {/* <div className="absolute bg-emerald-600 p-1">

                                به اضایه هر category یدونه اضافه میشود ازین div 
                                <div className="bg-indigo-400 ">
                                    s
                                </div>
                                
                            </div> */}
                        </div>
                       </div>

                       <input type="search" className="bg-white w-45/50 py-2 focus:outline-0 " placeholder="search amazon "/>

                       <div className="w-2/50 h-full bg-gray-200 rounded-tr-sm rounded-br-sm flex justify-center py-2"> 
                        <div className="">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                       </div>

                   </div>
                </div>


                {/* right */}
                <div className=" w-11/50 ">

                     <div className="flex ">
                          <div className=" w-2/6 flex justify-end  space-x-1">
                             
                              <div className="border-menu flex  w-3/4">
                                  <i class="fa-solid fa-flag text-red-800 text-sm mt-7 ms-2"></i>
                                <span className="font-semibold text-sm mt-6 text-white">EN</span>
                                <i class="fa-solid fa-caret-down text-sm mt-7 text-white"></i>
                              </div>
                            
                          </div>
                          

                          <div className=" w-3/6 flex justify-end">
                             <div className=" w-11/12 space-y-0 border-menu py-2">
                               <div className="text-sm ms-2 text-white">sdad</div>
                               <div className="text-sm font-bold ms-2 text-white ">hi this is your,,,</div>
                             </div>
                          </div>
                          
                          <div className=" w-2/6 flex justify-end">
                             <div className=" w-6/7 space-y-0 border-menu  py-2">
                               <div className="text-sm ms-1 text-white">asdasd</div>
                               <div className="text-sm font-bold ms-1 text-white">& asdasd..</div>
                             </div>
                          </div>
                          <div className=" w-2/6 justify-end flex">
                             <div className=" w-13/14 hover:border-amber-700 border-menu  flex items-center py-2 px-1">
                             <i class="fa-solid fa-cart-arrow-down text-3xl ms-2 text-white"></i>
                             <span className="text-ll font-semibold mt-2 text-white">cart</span>
                             </div>
                          </div>
                     </div>
                </div>
            </div>

            <div className="down-menu w-full flex items-center py-1">

                <div className="px-2 ms-4 h-full p-1 border-down-menu cursor-pointer">
                    <span className="text-sm font-bold">All</span>
                </div>
                <div className="px-4 h-full p-1 border-down-menu  cursor-pointer">
                    <span className="text-sm ">Black Fridy</span>
                </div>
                <div className="px-2 h-full p-1 border-down-menu  cursor-pointer">
                    <span className="text-sm ">Prime Video</span>
                </div>
                <div className="px-2 h-full p-1 border-down-menu cursor-pointer">
                    <span className="text-sm ">Registry</span>
                </div>
                <div className="px-2 h-full p-1 border-down-menu cursor-pointer">
                    <span className="text-sm ">Gidt Cards</span>
                </div>
                <div className="px-3 h-full p-1 border-down-menu cursor-pointer">
                    <span className="text-sm ">Customer Service</span>
                </div>
                <div className="px-2 h-full p-1 border-down-menu cursor-pointer">
                    <span className="text-sm">Sell</span>
                </div>
              
            </div>

        </>
    )
}