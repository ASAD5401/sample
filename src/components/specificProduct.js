
import React from 'react'
import { useParams } from 'react-router'
import shoe from './shoe.json'
// import {Outlet} from 'react-router-dom'

export const SpecificProduct = () => {
    const { id } = useParams()
    console.log(id)
    const sho = shoe[id]
    return (
        <div className="specificProduct">
            <h1>Product Description</h1>
            <div>

                <div className="imageDesc">
                    <img src={sho.img} alt={sho.name}></img>
                    <div className="descripton">
                        <h2>{sho.name}</h2>
                        <p>Rs 5000.00</p>
                        <p>Stock: In Stock</p>
                        <p>Warranty: 1 Year Brand Warranty</p>
                        <p>Delivery Area: Nationwide</p>
                        <p>Country of Origin: Germany</p>
                        <p>Shipped By: Naheed</p>
                        <h3>Product Highlights:</h3>
                        <li>Effortless shaving – makes shaving and trimming easy</li>
                        <li>3 double-ring shaving heads – ensures a smooth shave</li>
                        <li>Quick-charge function – charges up in 60 mins</li>
                        <li>LED displays – shows battery and oil indicator</li>
                        <li>Provides irritation-free contoured-trimming</li>
                        <li>Box contains cleaning brush, storage bag and mains adapter</li>


                    </div>
                </div>
            </div>
            
            <div className="productDescription">
                <p>
                    Looking for a skin-friendly and irritation-free shave? Try Beurer Barbers Corner Rotary Shaver, an ideal pick for an effortless shaving experience! With 3 rotatable shaving heads, the razor ensures an efficient shave as the blades adapt to your facial features. It supports the convenience of contoured trimming at home, relieving you from the need of going to visit a salon. The shaver is designed with a 2-in-1 beard and sideburn styler for a finishing smooth trim. It consists of an LED display for battery, charging and travel lock that helps indicate and keep a check on usage. Now you can style it up the way you want quick and easy with Beurer Shaver.
                </p>
            </div>
        </div>
    )
}