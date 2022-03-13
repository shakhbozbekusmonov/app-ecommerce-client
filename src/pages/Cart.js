import React from 'react';
import {connect, useSelector} from "react-redux";
import {addCart, deleteCart} from "../redux/actions/cartAction";



const Cart = (props) => {
    console.log(props)
    // const state = useSelector((state) => state);
    // console.log(state);

    return (
        <div className="container my-5">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-4">
                    <img src={props.state.image} alt=""/>
                </div>
                <div className="col-md-4">
                    {/*<h3>{product.title}</h3>*/}
                    {/*<p className="lead font-weight-bold">*/}
                    {/*    {product.qty} X ${product.price} = $*/}
                    {/*    {product.qty * product.price}*/}
                    {/*</p>*/}
                    {/*<button className="btn btn-outline-dark mr-4" onClick={() => handleButton(product)}><i className="fa fa-minus"></i></button>*/}
                    {/*<button className="btn btn-outline-dark mr-4" onClick={() => handleButton(product)}><i className="fa fa-plus"></i></button>*/}
                </div>
            </div>
            {/*// {state.map((product) => {*/}
            {/*//     return (*/}
            {/*//         <div className="row justify-content-between align-items-center" key={product.id}>*/}
            {/*//             <div className="col-md-4">*/}
            {/*//                 <img src={product.image} alt={product.title} height={250} width={250}/>*/}
            {/*//             </div>*/}
            {/*//             <div className="col-md-4">*/}
            {/*//                 <h3>{product.title}</h3>*/}
            {/*//                 <p className="lead font-weight-bold">*/}
            {/*/!*                    {product.qty} X ${product.price} = $*!/*/}
            {/*/!*                    {product.qty * product.price}*!/*/}
            {/*/!*                </p>*!/*/}
            {/*//                 <button className="btn btn-outline-dark mr-4" onClick={props.deleteCart}><i className="fa fa-minus"></i></button>*/}
            {/*//                 <button className="btn btn-outline-dark mr-4" onClick={props.addCart}><i className="fa fa-plus"></i></button>*/}
            {/*//             </div>*/}
            {/*//         </div>*/}
            {/*//     )*/}
            {/*// })}*/}
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        state: state.cart
    }
}

export default connect(mapStateToProps,{addCart, deleteCart})(Cart);