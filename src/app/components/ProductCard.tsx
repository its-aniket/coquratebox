import React from 'react';
import { Akaya_Telivigala ,Lilita_One,Acme ,Josefin_Slab} from 'next/font/google';
const akaya_telivigala =Acme({
  subsets: ["latin"],
  weight: "400",
})

const josefin_slab =Josefin_Slab({
  subsets: ["latin"],
  weight: "400",
})
interface ProductCardProps {
  img: string;
  alt: string;
  name: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, alt, name, description }) => {
  return (
    <div className={`${akaya_telivigala.className} w-full h-[300px] p-2 flex flex-col justify-center items-center bg-[#DDEEF4] text-left gap-1`}>
      <img className="p-0 m-0 w-[100%] h-full block object-cover overflow-hidden"src={img} alt={alt} />
      <h3 className='w-full h-auto text-[12px] sm:text-xl'>{name}</h3>
      <p className={`${josefin_slab.className} w-full h-auto text-[8px] sm:text-sm`}>{description}</p>
      <button className='bg-[#227ED2] py-1 px-3 text-white rounded self-end mr-2'>More</button>
    </div>
  );
}

export default ProductCard;
