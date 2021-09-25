import React, {Component} from 'react';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon} from 'mdb-react-ui-kit';

import { Link } from "react-router-dom";

class Header extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            menu: [],
        };
    }

    render(){
        return (
            <header>
                <MDBNavbar expand='lg' light bgColor='white'>
                    <MDBContainer fluid>
                        <div className={"d-flex justify-content-between w-100"}>
                            <Link to={"/"}><img style={{width: "100px"}} src={"assets/logo_color.png"} alt={"Logo de locutorios"} /></Link>
                            <MDBNavbarNav right className='justify-content-end w-100 d-flex flex-row mb-2 mb-lg-0'>
                                <MDBNavbarItem style={{marginRight: "15px"}}>
                                    <MDBNavbarLink target="_blank" href='https://www.facebook.com/locutorios.cl/'>
                                        <i className="fab fa-facebook-square fa-2x"></i>
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem style={{marginRight: "15px"}}>
                                    <MDBNavbarLink target="_blank" href='https://instagram.com/locutorios.cl'>
                                        <i className="fab fa-instagram-square fa-2x"></i>
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem style={{marginRight: "15px"}}>
                                    <MDBNavbarLink target="_blank" href='https://wa.me/56232108264'>
                                        <i className="fab fa-whatsapp-square fa-2x"></i>
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </div>
                    </MDBContainer>
                </MDBNavbar>

                <div
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: "url('assets/baner_llama_con_locutorios.jpeg')", height: 500 }}
                >
                </div>
            </header>
        );
    }
}

export default Header;