import logo from '../../public/logo.jpg'
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-16 p-10 bg-base-200 text-base-content">
        <div>
         <img src={logo} alt="" />
          <p className='text-2xl font-bold text-orange-600'>CosmetiCraft</p>
        </div> 
        <div>
        <h5 className='text-2xl font-bold '>Subscribe</h5>
             <p>Get the latest news and updates from us.</p>
             <form>
              <div className="form-group">
               <input
                  type="email"
                  className="form-control p-4"
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Subscribe
              </button>
            </form>
        </div> 
        <div>
          {/* <span className="footer-title">Company</span>  */}
          <a className="link link-hover">My Account & Bookings</a> 
          <a className="link link-hover">Terms & Conditions of Enrolment</a> 
          <a className="link link-hover">Additional Information</a> 
          <a className="link link-hover">Awarding Bodies & Accreditation</a>
          <a className="link link-hover">CIBTAC & CIDESCO Courses at LSBM</a>
        </div> 
        <div>
          {/* <span className="footer-title">Legal</span>  */}
          <a className="link link-hover">Ways to Pay</a> 
          <a className="link link-hover">International Students</a> 
          <a className="link link-hover">Student Accommodation</a>
          <a className="link link-hover">Student Products & Kits</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Complaints Policy</a>
          <a className="link link-hover">Information on COVID-19</a>
        </div>
      </footer>
    );
};

export default Footer;