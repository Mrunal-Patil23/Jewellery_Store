import React, { useContext } from "react";
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
    const {product} = props;
    const{addToCart} = useContext(ShopContext);

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                    <p className="productdisplay-right-category"><span>Category :</span>Diamond, Gold, jewellry </p>
                    <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest, Stunning </p>
                </div>
            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">{'\u20B9'}{product.old_price}</div>
                    <div className="productdisplay-right-price-new">{'\u20B9'}{product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                 The versatility of gold chain is unmatched, ranging from simple, classic styles to intricate, modern patterns.
                 Whether seeking a subtle addition to daily wear or a bold statement piece for special events,
                 the array of gold chain designs caters to every preference.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>18K</div>
                        <div>22K</div>
                        <div>24K</div>
                    </div>
                </div>
                    <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            </div>
        </div>
    )
}
export default ProductDisplay