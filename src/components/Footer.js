import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer bg-light">
            <div className="container d-flex align-items-center">
                <span>&copy; Copyright {new Date().getFullYear()} ShahNur Software</span>
            </div>
        </footer>
    );
};

export default Footer;