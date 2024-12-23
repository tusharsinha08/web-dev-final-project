import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <section className="featured-item bg-fixed">
            <div className="bg-slate-800 bg-opacity-50 text-white pt-8 my-20 ">
                <SectionTitle
                    subHeading="Check it out"
                    heading="Featured Item"
                ></SectionTitle>
                <div className="md:flex justify-center items-center pb-20 pt-12 px-36  ">
                    <img className="w-1/3" src={featuredImg} alt="" />
                    <div className="md:ml-10">
                        <p>Nov 21, 2030</p>
                        <p className="uppercase">Where can I get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repellat consequatur necessitatibus exercitationem quidem numquam tenetur praesentium eligendi magni, totam possimus facere minima ratione ipsa accusantium ad debitis consequuntur asperiores eos obcae Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto?.</p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;