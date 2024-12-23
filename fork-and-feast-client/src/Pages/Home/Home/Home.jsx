import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category'
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Fork & Feast | Home</title>
            </Helmet>

            <Banner></Banner>
            <Category></Category>

            {/* about section coming------------------------ */}
            <PopularMenu></PopularMenu>

            {/* chef recommand coming---------------------- */}

            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;