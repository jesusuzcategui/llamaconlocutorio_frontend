import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardText, MDBTypography} from "mdb-react-ui-kit";
import { CUSTOMFORMLC_PRICE_ONE, CUSTOMFORMLC_PRICE_TWO, WORDPRESS_AJAX_SEND_FORM, WORDPRESS_AJAX_HOOK_FORM  } from '../../Shared/environment';
import Swal from 'sweetalert2';
import axios from 'axios';


function Checkoutpage(){
    const { state } = useLocation();

    useEffect(() => {
        document.title = `Llama con locutorios - Finalizar`;
    });

    const history = useHistory();

    console.log(state);

    const { activar, ammount, country, email, fname, lname, paquete, publicidad, response, whatsapp } = state;

    const selectPrice = (price) => {
        console.log(price);
        Swal.fire({
            text: `Haz elegido el paquete ${paquete} con el monto ${price}. ¿Deseas continuar?`,
            icon: 'info',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Continuar',
            denyButtonText: 'Elegir otro',
        }).then((response) => {
            if(response.isConfirmed) {
                sendEmail(price);
            }
        });
    };

    const sendEmail = async (price) => {

        let paquete_number;
        if(paquete == 'LIBRE'){
            paquete_number = "1";
        } else if(paquete == 'IDAVENEZUELA') {
            paquete_number = "2";
        } else {
            paquete_number = "3";
        }

        const form_wordpress = new FormData();
        form_wordpress.append('action', WORDPRESS_AJAX_HOOK_FORM);
        form_wordpress.append('user_name', fname + ' ' + lname);
        form_wordpress.append('user_email', email);
        form_wordpress.append('user_country', country);
        form_wordpress.append('user_publicidad', publicidad);
        form_wordpress.append('user_service', paquete_number);
        form_wordpress.append('user_ammount', price);
        form_wordpress.append('user_whatsapp', whatsapp);
        form_wordpress.append('user_especified_publicidad', response);
        form_wordpress.append('user_activate', activar);

        try {

            const response_wordpress_ajax = await axios.post(WORDPRESS_AJAX_SEND_FORM, form_wordpress);
            console.log(response_wordpress_ajax);

            Swal.fire({
                title: `Genial`,
                icon: `success`,
                showCancelButton: false,
                showConfirmButton: false,
                timer: 3000
            });

            setTimeout(() => {
                history.push({
                    pathname: `/home`
                });
            });

        } catch( error ){
            console.log(error);
            Swal.fire({
                title: `Vaya`,
                text: `Ha ocurrido un error`,
                icon: `error`,
                showCancelButton: false,
                showConfirmButton: false
            });
        }

    };

    const goBack = () => {
        history.goBack();
    };

    const renderPriceOne = CUSTOMFORMLC_PRICE_ONE.map((price, index) => {
        return (<div key={index} className="col-sm-12 col-md-6 col-xl-3">
            <MDBCard alignment='center' style={{ width: '100%', height: '100%' }}>
                <MDBCardBody>
                    <MDBTypography tag='h4' className="text-sm-center text-md-end" style={{fontWeight: 300}}>
                        { price.label }
                    </MDBTypography>
                </MDBCardBody>
                <MDBCardFooter>
                    <MDBBtn className="btn-block" onClick={() => selectPrice( price.value ) }>SELECCIONAR</MDBBtn>
                </MDBCardFooter>
            </MDBCard>
        </div>);
    });

    const renderPriceOTwo = CUSTOMFORMLC_PRICE_TWO.map((price, index) => {
        return (<div key={index} className="col-sm-12 col-md-6 col-xl-3">
            <MDBCard alignment='center' style={{ width: '100%', height: '100%' }}>
                <MDBCardBody>
                    <MDBTypography tag='h4' className="text-sm-center text-md-end" style={{fontWeight: 300}}>
                        { price.label }
                    </MDBTypography>
                </MDBCardBody>
                <MDBCardFooter>
                    <MDBBtn className="btn-block" onClick={() => selectPrice( price.value ) }>SELECCIONAR</MDBBtn>
                </MDBCardFooter>
            </MDBCard>
        </div>);
    });


    return (
        <div style={{ marginTop: `-100px`, marginBottom: `60px` }} className={"container"}>
            <MDBCard  className="w-100">
                <MDBCardBody>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-2 col-md-5 col-sm-5">
                            <button onClick={() => goBack() } className="btn btn-outline-primary btn-rounded waves-effect">
                                <i className="fas fa-chevron-left"></i> Volver
                            </button>
                        </div>
                        <div className="col-lg-10 col-md-7 col-sm-7">
                            <MDBTypography tag='h4' className="text-sm-center text-md-end" style={{fontWeight: 300}}>Precios</MDBTypography>
                            <MDBCardText className="text-sm-center text-md-end">
                                Elige tu precio
                            </MDBCardText>
                        </div>
                    </div>
                    <div className="col-12">

                        { (paquete === 'LIBRE') && (
                            <div className="row">
                                { renderPriceOne }
                            </div>
                        ) }

                        {(paquete === 'IDAVENEZUELA' || paquete === 'IDAYEVUELTAVENEZUELA') && (
                            <div className="row">
                                { renderPriceOTwo }
                            </div>
                        ) }

                    </div>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}

export default Checkoutpage;