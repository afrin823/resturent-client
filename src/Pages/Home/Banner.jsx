

const Banner = () => {
    return (
        <div>
            <div className="carousel mb-12 mt-0 w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img 
                        src="https://media.istockphoto.com/id/104704117/photo/restaurant-plates.jpg?s=612x612&w=0&k=20&c=MhFdN_qVgzoHov-kgFx0qWSW0nZht4lZV1zinC3Ea44="
                        className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center left-0 h-full top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                       <div className="text-white pl-12 space-y-7 w-1/2">
                        <h2 className="text-6xl font-bold">Restaurant Joomla 4 & 5 Template</h2>
                        <p>Baume is a clean and professional Joomla 4 & 5 template, perfect for Restaurant, Bakery, any food business and personal chef web site</p>
                        <button className="btn btn-success text-white text-xl w-1/2">Order Now</button>
                       </div>
                    </div>
                    <div className="absolute left-5 right-5 flex -translate-y-1/2 transform justify-end gap-2 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://assets.eposnow.com/public/blog-images/jay-wennington-N_Y88TWmGwA-unsplash-v3__FocusFillWzMzNiwxNjEsInkiLDMyXQ.jpg"
                        className="w-full rounded-xl" />
                         <div className="absolute rounded-xl flex items-center left-0 h-full top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                       <div className="text-white pl-12 space-y-7 w-1/2">
                        <h2 className="text-6xl font-bold">Restaurant Joomla 4 & 5 Template</h2>
                        <p>Baume is a clean and professional Joomla 4 & 5 template, perfect for Restaurant, Bakery, any food business and personal chef web site</p>
                        <button className="btn btn-success text-white text-xl w-1/2">Order Now</button>
                       </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://media.smallbiztrends.com/2023/03/Most-Profitable-Types-of-Restaurants.png"
                        className="w-full rounded-xl" />
                         <div className="absolute rounded-xl flex items-center left-0 h-full top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                       <div className="text-white pl-12 space-y-7 w-1/2">
                        <h2 className="text-6xl font-bold">Restaurant Joomla 4 & 5 Template</h2>
                        <p>Baume is a clean and professional Joomla 4 & 5 template, perfect for Restaurant, Bakery, any food business and personal chef web site</p>
                        <button className="btn btn-success text-white text-xl w-1/2">Order Now</button>
                       </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-0 gap-2 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYYwZhx7jjJ654JaZTuMEaq-oYfbRiRviUg&s"
                        className="w-full rounded-xl" />
                         <div className="absolute rounded-xl flex items-center left-0 h-full top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                       <div className="text-white pl-12 space-y-7 w-1/2">
                        <h2 className="text-6xl font-bold">Restaurant Joomla 4 & 5 Template</h2>
                        <p>Baume is a clean and professional Joomla 4 & 5 template, perfect for Restaurant, Bakery, any food business and personal chef web site</p>
                        <button className="btn btn-success text-white text-xl w-1/2">Order Now</button>
                       </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-0 gap-2 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;