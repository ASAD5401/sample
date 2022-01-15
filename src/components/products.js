
import React from 'react'
import shoe from './shoe.json'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

export const Products = () => {
    console.log(shoe)
    return (
        <div className="screen">
            <h1>PRODUCTS</h1>
            {/* <Router> */}
            <div className="ads">
                {Object.keys(shoe).map(keyName => {
                    const sho = shoe[keyName];
                    return (
                        <Link style={{ textDecoration: 'none', color: 'black' }} key={keyName}
                            className="link"
                            to={`/products/${keyName}`}>
                            <img src={sho.img} height={250} width={300} alt="shoe" />
                            <h3 className="productName">{sho.name}</h3>

                            <div class="productDesc">
                                <h4>Price : 1000</h4>
                                <h4>Quantity(10)</h4>
                            </div>
                        </Link>)
                })}
            </div>
            {/* </Router> */}
        </div>
    )
}