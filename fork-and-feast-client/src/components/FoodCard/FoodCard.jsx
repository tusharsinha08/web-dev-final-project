

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={image}/>
            </figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 p-1">${price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline hover:text-yellow-400 text-yellow-400 bg-slate-100 border-0 border-yellow-400 border-b-4 mt-4 uppercase">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;