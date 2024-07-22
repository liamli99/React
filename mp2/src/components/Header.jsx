import './Header.css';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="header">
                TMDB Movie Directory
            </div>
            <div className='view'>
                <Link className='left-link' to="/">List View</Link>
                <Link className='right-link' to="/gallery">Gallery View</Link>
            </div>
        </>
    )
}

export default Header;