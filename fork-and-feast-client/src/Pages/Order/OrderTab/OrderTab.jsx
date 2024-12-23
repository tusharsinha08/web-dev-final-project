import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ item }) => {
    return (
        <div className='grid md:grid-cols-3 gap-10 mx-20'>
            {
                item.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;