import React from 'react'

const FeaturedCollection = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center pt-4 '>
        <div className='w-full flex justify-center items-center flex-col mb-5'>
            <h2 className='text-[20px] text-black text-center lg:text-[40px]'>Featured Collection</h2>
            <button className="bg-black mt-[8px] pl-[26px] pr-[26px] pt-[5px] pb-[5px] rounded-[36px] text-[15px]  text-white lg:pt-3 lg:pb-3  ">
            View All
          </button>
        </div>
        <div className='bg-slate-100 w-full p-2 grid grid-cols-2 gap-3 lg:grid-cols-3'>
            <img  className="w-[200.16px] h-[130.83px] lg:w-[617px] lg:h-[330px]" src="./assets/featured3.jpg" alt="" />
            <img className=" object-cover w-[200.16px] h-[130.83px] lg:w-[617px] lg:h-[330px]" src="./assets/MANGO_HAMPER2 (1).jpg" alt="" />
            <img className=" w-[200.16px] h-[130.83px] lg:w-[617px] lg:h-[330px]" src="./assets/feartured1.jpg" alt="" />
            <img className="w-[200.16px] h-[130.83px] lg:w-[617px] lg:h-[330px]" src="./assets/featured2.jpg" alt="" />
            <img className="w-[200.16px] h-[130.83px] lg:w-[617px] lg:h-[330px]"  src="./assets/featured5.jpg" alt="" />
            <img className="w-[200.16px] h-[130.83px] lg:w-[617px] lg:h-[330px]" src="./assets/featured6.jpg" alt="" />
        </div>
    </div>
  )
}

export default FeaturedCollection