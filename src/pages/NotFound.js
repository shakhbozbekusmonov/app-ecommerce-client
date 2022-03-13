import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <span className="text-center">
                <h1 className="font-weight-bold display-4 fa-3x">Page Not Found <b>404 Error.</b></h1>
                <Link to="/">Back to Home</Link>
            </span>
        </div>
    );
};

export default NotFound;