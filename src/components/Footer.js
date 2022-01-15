import React from 'react'

const Footer=()=>{
return(
    <div className="footer">
        <div className="section">
          <p className="logo-head">PANTECH SOLUTIONS</p>
          <p className="card-logo">
            <span><i class="fa fa-facebook-official" aria-hidden="true"></i></span>
            <span><i class="fa fa-twitter" aria-hidden="true"></i></span>
            <span><i class="fa fa-google-plus" aria-hidden="true"></i></span>
            <span><i class="fa fa-pinterest-p" aria-hidden="true"></i></span>
          </p>
          <p>Pantech Prolabs India Pvt ltd.</p>
          <p>No.8, Natarajan Street,Nookampalayam Road,Chemmencherry,Sholinganallur, Chennai-600 119.</p>
          <p className="phone">Phone: 91 - 9840974408/9003113840</p>
          <p>© 2020 Pantech ProLabs India Pvt Ltd.</p>
          <p>Trademarks and brands</p>

        </div>
        <div className="section">
          <p className="head">INFORMATION</p>
          <li>Warranty Information</li>
          <li>Return Policy</li>
          <li>Cancellation Order</li>
          <li>Holidays</li>
          <li>Terms for Software</li>
          <li>rohs</li>
          <li>Dealership</li>
          <li>Shipping Policy</li>
        </div>
        <div className="section">
          <p className="head">COMPANY</p>
          <li>About Us</li>
          <li>Terms of use</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Contact Us</li>
        </div>

        <div className="section">
          <p className="head">CONTACT US</p>
          <li>Blog</li>
          <li>Videos</li>
          <li>Presentations</li>
          <li>Verify Certificate</li>
        </div>
        <div className="section">
          <p className="head">SUBSCRIBE US</p>
          <p className="subscribe">
            <span>
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </span>
            <span className="input">
              <input type="text" placeholder="Enter Your Email"></input>
            </span>
          </p>
          <p className="card-logo">
            <span><i class="fa fa-cc-visa" aria-hidden="true"></i></span>
            <span><i class="fa fa-cc-mastercard" aria-hidden="true"></i></span>
            <span><i class="fa fa-cc-paypal" aria-hidden="true"></i></span>
            <span><i class="fa fa-cc-discover" aria-hidden="true"></i></span>
            <span><i class="fa fa-cc-amex" aria-hidden="true"></i></span>
          </p>
        </div>
      </div>
)
}

export default Footer;