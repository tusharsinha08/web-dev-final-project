import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8 mb-12">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-4 mt-4 px-20">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className="flex items-center justify-center">
                    <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase">Order your favourite food</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;