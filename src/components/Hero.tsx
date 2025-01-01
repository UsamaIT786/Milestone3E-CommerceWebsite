

import Image from "next/image"



const Hero = () => {
  return (
    <div>




<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 animate-bounce">

      <Image src='/Images/logo.png'alt="logo"width={720}height={600} />
    </div>
    <div id="content" className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-500">
    Wellcome My E-Commerce
        <br className="hidden lg:inline-block" />
Shop      </h1>
      <p className="mb-8 leading-relaxed text-white">
      Welcome to our e-commerce platform, crafted with passion and precision by Usama Muzammil. As a dedicated front-end developer, I focus on creating seamless, user-friendly experiences that make online shopping effortless and enjoyable. Our platform blends modern design with robust functionality, ensuring that every visitor can navigate, discover, and shop with confidence. Trust in our commitment to quality and innovation as we deliver an unparalleled digital shopping experience tailored to your needs.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex  text-white  bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded text-lg">
          LetsGo
        </button>
        <button className="ml-4 inline-flex text-black bg-gray-100 hover:bg-white border-0 py-2 px-6 focus:outline-none  rounded text-lg">
          Sign-Up
        </button>
      </div>
    </div>
  </div>
</section>

      
    </div>
  )
}

export default Hero
