import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar' >
            <div className='wrapper'>
                <div className='left' >
                </div>
                <div className='right'>
                    <div className='item' >
                        <Link>About Us</Link>
                    </div>
                    <div className='item' >
                        <Link>Best Sellers</Link>
                    </div>
                    <div className='item' >
                        <Link>Products</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar ;