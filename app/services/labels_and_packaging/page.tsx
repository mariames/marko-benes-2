import Faq from '@/components/Faq'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='flex justify-center christmas-title text-5xl my-16'>
        Labels & Packaging
      </div>
        <div className="container mx-auto p-6">
      {/* Text Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold mb-4">
          Are you in need of an eye-catching and professionally designed label and packaging for your product?
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          I'm here to help you create an impressive design that will captivate your target audience and elevate your brand. My
          approach combines creativity and strategic thinking to make your product stand out on the shelf.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          <span className="font-bold">PRODUCT LABEL | BOX DESIGN | SHELF READY PACKAGING | PANEER POUCH DESIGN | STAND-UP POUCH |
            DOYPACK | SPRAY BOTTLE PACKAGING | FOOD PACKAGING | COSMETICS PACKAGING | SUPPLEMENT PACKAGING | AMAZON PRODUCT PACKAGING | and Complete Product Packaging for any kind of product</span>
        </p>
      </div>

      {/* Image Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img src="https://via.placeholder.com/400" alt="Packaging 1" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h3 className="text-center font-semibold text-xl">Packaging Design 1</h3>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img src="https://via.placeholder.com/400" alt="Packaging 2" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h3 className="text-center font-semibold text-xl">Packaging Design 2</h3>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img src="https://via.placeholder.com/400" alt="Packaging 3" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h3 className="text-center font-semibold text-xl">Packaging Design 3</h3>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img src="https://via.placeholder.com/400" alt="Packaging 4" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h3 className="text-center font-semibold text-xl">Packaging Design 4</h3>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img src="https://via.placeholder.com/400" alt="Packaging 5" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h3 className="text-center font-semibold text-xl">Packaging Design 5</h3>
        </div>
      </div>
      <Faq />
    </div>
    </>

  )
}

export default page