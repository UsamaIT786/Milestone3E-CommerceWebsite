import Image from "next/image"



const Content = () => {
  return (
    <div>



<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white ">Products Avaliable</h1>
        <div className="h-1 w-80 bg-blue-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-white">Discover the ultimate shopping experience in our content section! Explore curated collections, trending products, and expert tips to enhance your lifestyle. From fashion to tech, we've got insights and deals you won't want to miss. Dive into engaging articles, interactive guides, and personalized recommendations tailored just for you. Whether you're hunting for the latest must-haves or looking for inspiration, our content is designed to keep you informed and entertained. Stay connected, shop smarter, and make every click count. Let’s transform the way you explore and shop online—start scrolling and get inspired today!    </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">

            <Image id="contentimg" src='/Images/grossery.jpg'alt="pic"width={721}height={400}/>

          <h3 className="tracking-widest text-black text-xs font-medium title-font">Feauture1</h3>
          <h2 className="text-lg text-black font-medium title-font mb-4">GrosseryItems</h2>
          <p className="leading-relaxed text-base">Grossery Items Avaliable My Shop and Many More Items In This Site</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image id="contentimg" src='/Images/clothes.jpg'alt="pic"width={721}height={400}/>


          <h3 className="tracking-widest text-black text-xs font-medium title-font">Feauture2</h3>
          <h2 className="text-lg text-black font-medium title-font mb-4">ExpensiveCothes</h2>
          <p className="leading-relaxed text-base">Clothes Items Avaliable My Shop and Many More Items In This Site</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image id="contentimg" src='/Images/electronics.jpg'alt="pic"width={721}height={400}/>


          <h3 className="tracking-widest text-black text-xs font-medium title-font">Feauture3</h3>
          <h2 className="text-lg text-black font-medium title-font mb-4">Electronics</h2>
          <p className="leading-relaxed text-base">Electronics Items Avaliable My Shop and Many More Items In This Site</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image id="contentimg" src='/Images/shoes.jpg'alt="pic"width={721}height={400}/>

            
          <h3 className="tracking-widest text-black text-xs font-medium title-font">Feauture4</h3>
          <h2 className="text-lg text-black font-medium title-font mb-4">Shoes</h2>
          <p className="leading-relaxed text-base">Shoes Items Avaliable My Shop and Many More Items In This Site</p>
        </div>
      </div>
    </div>
  </div>
</section>
      
    </div>
  )
}

export default Content
