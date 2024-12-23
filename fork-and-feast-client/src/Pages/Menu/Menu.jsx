import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from "./../../assets/menu/dessert-bg.jpeg"
import soupImg from "./../../assets/menu/soup-bg.jpg"
import saladImg from "./../../assets/menu/salad-bg.jpg"
import pizzaImg from "./../../assets/menu/dessert-bg.jpeg"


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Fork & Feast | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts items */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
            {/* soups items */}
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
            {/* salads items */}
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
            {/* pizzas items */}
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
        </div>
    );
};

export default Menu;