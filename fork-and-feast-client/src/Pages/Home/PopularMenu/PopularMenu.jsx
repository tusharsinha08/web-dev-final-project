import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={"Popular Items"}
                heading={"From our menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 px-20">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex items-center justify-center">
                <Link to={'/menu'}>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase">View Full Menu</button>
                </Link>
            </div>
        </section>
    );
};

export default PopularMenu;