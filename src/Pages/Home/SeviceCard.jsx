

const SeviceCard = ({ service }) => {
    const {name, title, description, price, category, calories, img, ingredients} = service;
    return (
        <div>
            <div className="card bg-base-100 w-96 h-96 shadow-xl">
                <figure className="pt-3 pb-10 w-full h-[200px]">
                    <img
                        src={img}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Price: ${price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeviceCard;