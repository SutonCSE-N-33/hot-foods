import React from 'react';
import './Footer.css';
import { Container } from 'reactstrap';
import logo from '../../imgs/logo.png';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <div style={{backgroundColor:"black",padding:"50px 0",marginTop:"20px"}}>
            <Container>
                    <div className="row">
                          <div className="col-md-8 col-sm-6">
                                 <img className="logo" width="150px" src={logo} alt="" />
                          </div>
                          <div className="col-md-2 col-sm-1">
                             <ul>
                                 <li>About Online Food</li>
                                 <li>Read Our Blog</li>
                                 <li>SignUp to Deliver</li>
                                 <li>Add your Restaurant</li>
                             </ul>
                          </div>
                          <div className="col-md-2 col-sm-1">
                          <ul>
                                 <li>Get Help</li>
                                 <li>Read FAQs</li>
                                 <li>View all Cities</li>
                                 <li>Restaurants near me</li>
                             </ul>
                          </div>
                    </div>
                    <div className="row">
                       <div className="col-md-12 col-sm-12">
                           <div className="footer-title">
                                <div className="copy-right">
                                   <p>Copyright <CopyrightIcon/> 2022 Online Food </p>
                                </div>
                                <div >
                                      <ul className="otherItem">
                                          <li>Privacy</li>
                                          <li>Term of Use</li>
                                          <li>Pricing</li>
                                      </ul>
                                </div>
                           </div>
                       </div>
                    </div>
            </Container>
        </div>
    );
};

export default Footer;