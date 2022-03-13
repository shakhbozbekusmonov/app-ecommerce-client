import React from 'react';
import './home.scss';
import Products from "./Products";

const Home = () => {
    return (
        <>
            <div className="hero">
            </div>
            <div className="home">
                <Products/>
            </div>
        </>
    );
};

export default Home;