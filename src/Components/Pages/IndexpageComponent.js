import React, { useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBTypography, MDBCardText, MDBBtn, MDBCardTitle, MDBCardFooter } from 'mdb-react-ui-kit';
import { useHistory } from "react-router-dom";


function Indexpage(){

    let history = useHistory();

    useEffect(() => {
        document.title = 'Llama con locutorios - Inicio';
    });

    function OpenContrat(place, data) {
        history.push({
            pathname: place,
            state: data
        });
    }

    return(
        <div style={{ marginTop: `-100px`, marginBottom: `30px` }} className={"container"}>
            <MDBCard  className="w-100">
                <MDBCardBody >
                    <MDBTypography tag='h1' style={{fontSize: `5rem`, fontWeight: 300, textAlign: `center`}}>Nuestros planes</MDBTypography>
                    <MDBCardText style={{textAlign: `center`}}>
                        A continuación podrás ver la información detallada de nuestros planes
                    </MDBCardText>
                </MDBCardBody>
                <div className="row p-5 mb-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <MDBCard alignment='center' style={{ width: '100%', height: '100%', }}>
                            <MDBCardBody style={{padding: "0"}}>
                                <img style={{
                                    width: "100%"
                                }} src="assets/libre.jpeg" alt="Cover de Plan libre"/>
                            </MDBCardBody>
                            <MDBCardFooter style={{padding: "0"}}s>
                                <MDBBtn block={true} onClick={() => OpenContrat('/contract/libre', 'LIBRE') }>CONTRATAR</MDBBtn>
                            </MDBCardFooter>
                        </MDBCard>
                    </div>
                    <div className="col-md-4 col-sm-12 mb-3">
                        <MDBCard alignment='center' style={{ width: '100%', height: '100%', }}>
                            <MDBCardBody style={{padding: "0"}}>
                                <img style={{
                                    width: "100%"
                                }} src="assets/solo_ida_venezuela.jpeg" alt="Cover de Plan ida venezuela"/>
                            </MDBCardBody>
                            <MDBCardFooter style={{padding: "0"}}>
                                <MDBBtn block={true}  onClick={() => OpenContrat('/contract/idavnzla', 'IDAVENEZUELA') }>CONTRATAR</MDBBtn>
                            </MDBCardFooter>
                        </MDBCard>
                    </div>
                    <div className="col-md-4 col-sm-12 mb-3">
                        <MDBCard alignment='center' style={{ width: '100%', height: '100%', }}>
                            <MDBCardBody style={{padding: "0"}}>
                                <img style={{
                                    width: "100%"
                                }} src="assets/solo_ida_y_vuelta_venezuela.jpeg" alt="Cover de Plan ida y vuelta venezuela"/>
                            </MDBCardBody>
                            <MDBCardFooter style={{padding: "0"}}>
                                <MDBBtn block={true} onClick={() => OpenContrat('/contract/idayvueltavnzla', 'IDAYEVUELTAVENEZUELA') }>CONTRATAR</MDBBtn>
                            </MDBCardFooter>
                        </MDBCard>
                    </div>
                </div>
            </MDBCard>
        </div>
    );
};


export default Indexpage;