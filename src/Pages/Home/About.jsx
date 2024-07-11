

const About = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative">
                    <img data-aos="fade-right" src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-68283907/68283907.jpg"
                        className="w-3/4 rounded-lg shadow-2xl" />
                    <img data-aos="fade-up" src="https://www.the-dentist.co.uk/media/qmiexffz/fast-food-a-convenience-or-a-complication.jpg?width=1002&height=564&bgcolor=White&rnd=133261977601670000"
                        className="w-1/2 absolute border-8 border-white right-5 top-1/2 rounded-lg shadow-2xl" />

                    </div>
                    <div data-aos="fade-left" className="lg:w-1/2 space-y-5 p-4">
                    <h3 className="text-3xl text-red-500 font-bold">FOODKING</h3>
                        <h1  className="text-5xl font-bold">Where every ingredient tells a story</h1>
                        <p className="py-4">A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.</p>
                        <p className="py-4">
                        Salad recipes are my favorite way to showcase vibrant, in-season produce – fruits and veggies that are so good on their own that you don’t need to do much to make them.
                        </p>
                        <button className="btn btn-error text-white">View Our Menus</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;