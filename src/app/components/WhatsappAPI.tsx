import React from 'react'
import Image from 'next/image'
const WhatsappAPI = () => {
    const message = "Hello! I would like to know more about your services."; 
  
  return (
    <a
      href={`https://wa.me/8668741902?text=${encodeURIComponent(message)}`} // Replace YOUR_PHONE_NUMBER with your actual phone number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-4 w-16 h-16 z-40"
    >
      <Image
        src="/whatsapp.png" // Replace with the path to your WhatsApp icon
        alt="WhatsApp"
        width={60}
        height={60}
        className="rounded-full shadow-lg z-50"
      />
    </a>
  )
}

export default WhatsappAPI