import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation()
    const hideHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            { hideHeaderFooter ||  <NavBar></NavBar>}
            <Outlet></Outlet>
            { hideHeaderFooter ||  <Footer></Footer>}
        </div>
    );
};

export default Main;