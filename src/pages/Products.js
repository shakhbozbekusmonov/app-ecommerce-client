import React, {useEffect, useState} from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import Loader from "react-spinners/FadeLoader";
import {Link} from "react-router-dom";

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("http://fakestoreapi.com/products");
            if (componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} width={260} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} width={260} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} width={260} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} width={260} />
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                {filter.map((product) => {
                    return (
                        <div className="col-md-3 mt-3" key={product.id}>
                            <div className="card h-100 text-center p-4" key={product.id}>
                                <img src={product.image} style={{height: "250px"}} alt={product.title}/>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title.slice(0, 12)}</h5>
                                    <p className="card-text lead font-weight-bold">${product.price}</p>
                                    <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-12 mb-5">
                        <h1 className="display-4 font-weight-bolder text-center">Latest Products</h1>
                        <hr/>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="buttons col-12 d-flex justify-content-center  mb-5 pb-5">
                                <button type="button" className="btn btn-outline-dark" onClick={() => setFilter(data)}>All</button>
                                <button type="button" className="btn btn-outline-dark mx-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                                <button type="button" className="btn btn-outline-dark mr-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                                <button type="button" className="btn btn-outline-dark mr-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                                <button type="button" className="btn btn-outline-dark mr-2" onClick={() => filterProduct("electronics")}>Electronic</button>
                            </div>
                        </div>
                        {loading ? <Loading/> : <ShowProducts/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;