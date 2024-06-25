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
  btcolor:string
  color:string;
  name: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, alt,btcolor,color, name, description }) => {
  return (
    <div className={`${akaya_telivigala.className} bg-[${color}] w-full h-full flex flex-col justify-center items-center  text-left gap-1 lg:w-auto lg:h-[555px]`}>
      <img loading="lazy" className="p-0 m-0 w-full h-full block object-cover overflow-hidden" src={img} alt={alt} />
    

      <h3 className={`${akaya_telivigala.className} w-full h-auto text-[12px] sm:text-xl p-2 lg:text-2xl`}>{name}</h3>
      <p className={`${josefin_slab.className} hidden w-full h-auto text-[8px] p-2 lg:text-lg lg:block `}>{description}</p>
      <button className={`bg-[${btcolor}] py-[2px] px-2 text-white rounded self-end m-2 mr-2 lg:py-[6px] lg:px-3 lg:text-xl`}>More</button>
      
    </div>
  );
}

export default ProductCard;
