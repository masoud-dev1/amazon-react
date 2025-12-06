import { useState } from "react"

export default function Menu(){
    const [sidebar , setSidebar] = useState(false);

    const handleClick = () => {
        setSidebar(true);
        console.log(sidebar)
    }
    console.log(sidebar);

    const [all , setAll] = useState(false);
    const handleAll =()=>{
        setAll(true)
    }
    const handleAllLess = ()=>{
        setAll(false)
    }

    const [all1 , setAll1] = useState(false);
    const handleAll1 =()=>{
        setAll1(true)
    }
    const handleAllLess1 = ()=>{
        setAll1(false)
    }

    const handleClose =()=> {
        setSidebar(false)
    }

    const [inside , setInside] = useState(true);
    const handleInside =()=>{
        setInside(false);
    }
    const handleInside1 =()=>{
        setInside(true);
    }

    const [dark , setDark] = useState(false);
    const [red , setRed] = useState(0)
    const [abs1 , setAbs1] = useState(false);

    const handleDarkTrue = () => {
        setDark(true);
        setAbs1(true);
    }
    const handleDarkFalse = () => {
        setDark(false);
        setAbs1(false);
    }

    return(
        <>
        
       
          <div className=" flex w-full bg-menu items-center p-1 sticky top-0 z-100 ">

            {/* black screen */}
           {
            sidebar === true ?  <div onClick={handleClose} className="bg-black opacity-80 fixed right-0 top-0 h-full w-full z-50 ">

            </div> : ''
           }

             {/* sidebar */}
             
            

             
             <div className={`fixed left-0 h-full w-92 bg-white z-60 top-0 overflow-y-auto   transform transition-transform duration-300
    ${sidebar ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="bg-gray-700 w-full py-2 block">
                    <span className="text-white ms-19 font-bold text-xl">Hello , sign in</span>
                </div>

                {/* head */}
                <div className={`transform transition-transform duration-300 ${inside ? "translate-x-0" : '-translate-x-full'} absolute`}>

                
                <div className=" border-b-1 border-gray-300 w-full p-5 px-10">
                    <div className=" font-semibold text-lg">Digital Content & Devices</div>
                    <div className="cursor-pointer w-full mt-4 grid grid-cols-2" onClick={handleInside}>
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Prime Video</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>
                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Amazon Music</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>
                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Kindle E-readers & Books</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>
                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Amazon Appstore</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>
                </div>

                {/* seeall */}
                <div className={`border-b-1 border-gray-300 w-full p-5 px-10 overflow-hidden  transition-all duration-300 ${all === true ? 'h-270' : 'h-70'} `}>
                    <div className=" font-semibold text-lg">Digital Content & Devices</div>
                    <div className="cursor-pointer w-full mt-4 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Prime Video</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>
                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Amazon Music</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>
                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Kindle E-readers & Books</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>
                    
                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Amazon Appstore</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>
                    {all === false ? <div className="cursor-pointer w-full mt-4 grid grid-cols-3" onClick={handleAll}>                        
                        <div className="grid grid-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">See All ...</span>
                            
                        </div>
                    </div> : ''}

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Automotive</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Baby</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Beauty and Personal Care</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Women Fashion</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Mens Fashion</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Girls Fashion </span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Boys Fashion</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Health and Household</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Home and Kitchen</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Industrial and Scientific</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Luggage</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Movies & Television</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Pet supplies</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Software</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Sports and Outdoors</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Tools & Home Improvement</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Toys and Games</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>

                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Video Games</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>
                    
                    {all === true ? <div className="cursor-pointer w-full mt-4 grid grid-cols-3" onClick={handleAllLess}>                        
                        <div className="grid grid-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">See Less ...</span>
                            
                        </div>
                    </div> : ''}

                    
                     
                </div>

                {/* seeall2 */}
                <div className={`border-b-1 border-gray-300 w-full p-5 px-10 overflow-hidden  transition-all duration-300  ${all1 === true ? 'h-84' : 'h-70'} `}>
                    <div className=" font-semibold text-lg">Programs & Features</div>
                    <div className="cursor-pointer w-full mt-4 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Gift Card</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>
                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Shop By Interest</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>
                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Amazon Live</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>
                    
                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">International Shopping</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>
                    {all1 === false ? <div className="cursor-pointer w-full mt-4 grid grid-cols-3" onClick={handleAll1}>                        
                        <div className="grid grid-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">See All ...</span>
                            
                        </div>
                    </div> : ''}

                <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Amazon Secend Chance</span>
                        <div className=" text-end">
                            <svg className="w-6 h-6 ms-30 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
</svg>

                        </div>
                        
                    </div>
                    
                    {all1 === true ? <div className="cursor-pointer w-full mt-4 grid grid-cols-3" onClick={handleAllLess1}>                        
                        <div className="grid grid-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">See Less ...</span>
                            
                        </div>
                    </div> : ''}

                    
                     
                </div>

                {/* foter */}
                  <div className=" border-b-1 border-gray-300 w-full p-5 px-10">
                    <div className=" font-semibold text-lg">Help & Setting</div>
                    <div className="cursor-pointer w-full mt-4 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Your Account</span>
                        <div className=" text-end">
                          
                        </div>
                        
                    </div>
                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">English</span>
                        <div className=" text-end">
                          
                        </div>
                        
                    </div>
                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">United States</span>
                        <div className=" text-end">
                      
                        </div>
                        
                    </div>
                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Customer Service</span>
                        <div className=" text-end">
                           
                        </div>
                        
                    </div>
                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Sign in</span>
                        <div className=" text-end">
                           
                        </div>
                        
                    </div>
                </div>

                </div>
            
                <div className={`transform transition-transform duration-300 ${inside ? "-translate-x-full" : 'translate-x-0'}`}>
                     <div onClick={handleInside1} className="cursor-pointer w-full py-3 px-10  border-b-1 border-gray-400">
                        <span className="font-semibold">{"< "}Main Menu</span>
                     </div>
                     <div className=" w-full p-5 px-10">
                    <div className=" font-semibold text-lg" >Prime Video</div>
                    <div className="cursor-pointer w-full mt-4 grid grid-cols-2" >
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">All Videos</span>
                        
                    </div>
                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Included with Prime</span>
                        
                        
                    </div>
                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Prime Video Channels</span>
                   
                        
                    </div>
                    <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Rent or Buy</span>
   
                    </div>
                      <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Your Watchlist</span>
   
                    </div>
                      <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Purchases & Rentals</span>
   
                    </div>
                      <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Watch Anywhere</span>
   
                    </div>
                      <div className="cursor-pointer w-full mt-5 grid grid-cols-2">
                        <span className="text-gray-800 font-semibold text-sm text-nowrap">Getting Started</span>
   
                    </div>
                </div>
                </div>
           
                
            </div>
            
                
            

            {/* X */}
            <div className="fixed w-6 h-6 left-93 top-0 z-60 p-2 py-3 cursor-pointer" onClick={handleClose}>
                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
</svg>

            </div>
            
            

                {/* left */}
                <div className=" xl:w-8/50 flex px-3  md:w-10/50 max-sm:w-15/50 ">
                   <div className=" w-3/7 ">
                      <img src="../../public/1.png" className="object-cover mt-2" alt="" />
                   </div>
                   <div className=" w-4/7 ms-4 flex max-sm:hidden">

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
                <div className="  max-sm:w-34/50  md:w-30/50  lg:w-26/50  xl:w-29/50  2xl:w-31/50">
                   <div className="flex  items-center w-full justify-center">

                       <div className="bg-gray-200 rounded-tl-sm rounded-bl-sm w-3/50 lg:w-5/50 xl:w-3/50 md:w-8/50 max-sm:w-10/50 flex justify-end"> 
                        <div className="b w-17/20 rounded-tl-sm rounded-bl-sm relative py-2">
                           <span className="text-sm ms-3">All+</span>
                           {/* <i class="fa-solid fa-caret-down text-shadow-sm text-sm ms-1"></i> */}
                            {/* <div className="absolute bg-emerald-600 p-1">

                                به اضایه هر category یدونه اضافه میشود ازین div 
                                <div className="bg-indigo-400 ">
                                    s
                                </div>
                                
                            </div> */}
                        </div>
                       </div>

                       <input type="search" className="bg-white w-45/50  py-2 focus:outline-0 " placeholder="search amazon "/>

                       <div className="w-2/50 lg:w-4/50 h-full md:w-6/50 max-sm:w-10/50 xl:w-3/50 bg-gray-200 rounded-tr-sm rounded-br-sm flex justify-center py-2"> 
                        <div className="">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                       </div>

                   </div>
                </div>


                {/* right */}
                <div className=" xl:w-11/50  lg:w-9/51 text-nowrap max-sm:hidden">

                     <div className="flex ">
                          <div className=" w-2/6 flex justify-end  space-x-1">
                             
                              <div className="border-menu flex  w-3/4 cursor-pointer relative" 
                              onMouseEnter={handleDarkTrue}
                              onMouseLeave={handleDarkFalse}
                             
                              >
                                  <i class="fa-solid fa-flag  text-sm mt-7 ms-2"></i>
                                <span className="font-semibold text-sm mt-6 text-white">EN</span>
                                <i class="fa-solid fa-caret-down text-sm mt-7 text-white"></i>

                                {abs1 === true ? <div className="absolute bg-white h-140 w-60 left-0 top-14 p-3 shadow-white shadow-sm">
                                    
                                    <div className="  border-b-1 border-gray-300 h-17 w-full mt-1">
                                        <div className=" w-full h-4">
                                        <span className="text-sm ms-1 font-semibold text-gray-700 block">Change language</span>
                                        
                                        <div className=" h-5 w-full flex block mt-1.5" 
                                        onMouseEnter={() => setRed(1)}
                                        onMouseLeave={() => setRed(0)}
                                        >
                                            <div className="w-1/6 ">
                                              <div className=" border-2 border-gray-400 rounded-full h-5 w-5 ">
                                                 <div className={`w-3 mt-0.5 ms-0.5 h-3 rounded-full ${red === 1 ? "bg-red-600" : ""}`} 
                                              
                                                 ></div>
                                              </div>
                                            </div>
                                            <div className=" w-full">
                                                <span className="text-sm font-semibold text-gray-800">English - EN</span>
                                            </div>
                                        </div>

                                    </div>
                                    </div>

                                      <div className=" w-full">
                                        <div className=" w-full mt-4 grid grid-cols-1 border-gray-300 border-b-1 pb-6">
                                        
                                        <div className=" h-5 w-full flex block mt-1.5" 
                                        onMouseEnter={() => setRed(2)}
                                        onMouseLeave={() => setRed(0)}
                                        >
                                            <div className="w-1/6 ">
                                              <div className=" border-2 border-gray-400 rounded-full h-5 w-5 ">
                                                 <div className={`w-3 mt-0.5 ms-0.5 h-3 rounded-full ${red === 2 ? "bg-red-600" : ""}`} 
                                              
                                                 ></div>
                                              </div>
                                            </div>
                                            <div className=" w-full">
                                                <span className="text-sm font-semibold text-gray-800">العربیه - AR</span>
                                            </div>
                                        </div>

                                         <div className=" h-5 w-full flex block mt-3" 
                                        onMouseEnter={() => setRed(3)}
                                        onMouseLeave={() => setRed(0)}
                                        >
                                            <div className="w-1/6 ">
                                              <div className=" border-2 border-gray-400 rounded-full h-5 w-5 ">
                                                 <div className={`w-3 mt-0.5 ms-0.5 h-3 rounded-full ${red === 3 ? "bg-red-600" : ""}`} 
                                              
                                                 ></div>
                                              </div>
                                            </div>
                                            <div className=" w-full">
                                                <span className="text-sm font-semibold text-gray-800">Deutsch - DE</span>
                                            </div>
                                        </div>

                                        <div className=" h-5 w-full flex block mt-3" 
                                        onMouseEnter={() => setRed(4)}
                                        onMouseLeave={() => setRed(0)}
                                        >
                                            <div className="w-1/6 ">
                                              <div className=" border-2 border-gray-400 rounded-full h-5 w-5 ">
                                                 <div className={`w-3 mt-0.5 ms-0.5 h-3 rounded-full ${red === 4 ? "bg-red-600" : ""}`} 
                                              
                                                 ></div>
                                              </div>
                                            </div>
                                            <div className=" w-full">
                                                <span className="text-sm font-semibold text-gray-800">English - EN</span>
                                            </div>
                                        </div>

                                        <div className=" h-5 w-full flex block mt-3" 
                                        onMouseEnter={() => setRed(5)}
                                        onMouseLeave={() => setRed(0)}
                                        >
                                            <div className="w-1/6 ">
                                              <div className=" border-2 border-gray-400 rounded-full h-5 w-5 ">
                                                 <div className={`w-3 mt-0.5 ms-0.5 h-3 rounded-full ${red === 5 ? "bg-red-600" : ""}`} 
                                              
                                                 ></div>
                                              </div>
                                            </div>
                                            <div className=" w-full">
                                                <span className="text-sm font-semibold text-gray-800">English - EN</span>
                                            </div>
                                        </div>

                                        <div className=" h-5 w-full flex block mt-3" 
                                        onMouseEnter={() => setRed(6)}
                                        onMouseLeave={() => setRed(0)}
                                        >
                                            <div className="w-1/6 ">
                                              <div className=" border-2 border-gray-400 rounded-full h-5 w-5 ">
                                                 <div className={`w-3 mt-0.5 ms-0.5 h-3 rounded-full ${red === 6 ? "bg-red-600" : ""}`} 
                                              
                                                 ></div>
                                              </div>
                                            </div>
                                            <div className=" w-full">
                                                <span className="text-sm font-semibold text-gray-800">English - EN</span>
                                            </div>
                                        </div>

                                        <div className=" h-5 w-full flex block mt-3" 
                                        onMouseEnter={() => setRed(7)}
                                        onMouseLeave={() => setRed(0)}
                                        >
                                            <div className="w-1/6 ">
                                              <div className=" border-2 border-gray-400 rounded-full h-5 w-5 ">
                                                 <div className={`w-3 mt-0.5 ms-0.5 h-3 rounded-full ${red === 7 ? "bg-red-600" : ""}`} 
                                              
                                                 ></div>
                                              </div>
                                            </div>
                                            <div className=" w-full">
                                                <span className="text-sm font-semibold text-gray-800">English - EN</span>
                                            </div>
                                        </div>

                                        <div className=" h-5 w-full flex block mt-3" 
                                        onMouseEnter={() => setRed(8)}
                                        onMouseLeave={() => setRed(0)}
                                        >
                                            <div className="w-1/6 ">
                                              <div className=" border-2 border-gray-400 rounded-full h-5 w-5 ">
                                                 <div className={`w-3 mt-0.5 ms-0.5 h-3 rounded-full ${red === 8 ? "bg-red-600" : ""}`} 
                                              
                                                 ></div>
                                              </div>
                                            </div>
                                            <div className=" w-full">
                                                <span className="text-sm font-semibold text-gray-800">English - EN</span>
                                            </div>
                                        </div>

                                        <div className=" h-5 w-full flex block mt-3" 
                                        onMouseEnter={() => setRed(true)}
                                        onMouseLeave={() => setRed(false)}
                                        >
                                            <div className="w-1/6 ">
                                              <div className=" border-2 border-gray-400 rounded-full h-5 w-5 ">
                                                 <div className={`w-3 mt-0.5 ms-0.5 h-3 rounded-full ${red === true ? "bg-red-600" : ""}`} 
                                              
                                                 ></div>
                                              </div>
                                            </div>
                                            <div className=" w-full">
                                                <span className="text-sm font-semibold text-gray-800">English - EN</span>
                                            </div>
                                        </div>

                                    </div>
                                    </div>

                                    <div className="  border-b-1 border-gray-300 h-16 w-full mt-3">
                                        <div className=" w-full h-4">
                                        <span className="text-sm ms-1 font-semibold text-gray-700 block">Change currency</span>
                                        
                                        <div className=" h-5 w-full flex block mt-1.5" 
                                        onMouseEnter={() => setRed(1)}
                                        onMouseLeave={() => setRed(0)}
                                        >
                                            <div className=" w-full flex justify-around">
                                                <span className="text-sm font-semibold text-gray-800 ">$ - USD - US Dollar</span>
                                                <span className="text-sm font-semibold ms-6 text-blue-500">Change</span>
                                            </div>
                                        </div>

                                    </div>
                                    </div>

                                    <div className=" w-full text-wrap mt-3">
                                        <span className="tetx-gray-500 text-sm font-semibold text-gray-800">Youa Are Shopping on Amazon.com</span>
                                    </div>

                                    <div className=" text-center mt-4">
                                        <span className="text-sm text-blue-500">Change country/region</span>
                                    </div>
                                    
                                </div> : ''}
                              </div>
                              
                            
                          </div>
                          

                          <div className=" w-3/6 flex justify-end">
                             <div className=" w-11/12 space-y-0 border-menu py-2 cursor-pointer"
                             onMouseEnter={() => setDark(true)}
                              onMouseLeave={() => setDark(false)}
                             >
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

            <div className="down-menu w-full flex items-center py-1 text-nowrap max-sm:hidden">

                <div className="px-2 ms-4 h-full p-1 border-down-menu cursor-pointer" onClick={handleClick}>
                    <span className="text-sm font-bold" >All</span>
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
           
            {dark &&  <div className="bg-black opacity-50 fixed top-0 right-0 w-full h-screen z-90">

            </div>}

            

        </>
    )
}