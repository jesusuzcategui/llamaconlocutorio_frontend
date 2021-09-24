import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBTypography, MDBCardText, MDBInput, MDBBtn, MDBSwitch } from 'mdb-react-ui-kit';
import toastr from 'toastr';
import { CUSTOMFORMLC_COUNTRIES_LIST, CUSTOMFORMLC_MEMBERS_LIST } from "../../Shared/environment";

function Contractpage({ slug }) {

    const history = useHistory();

    const { state } = useLocation();

    useEffect(() => {
        document.title = "Llama con locutorios - Contrato";
    });

    const [formValue, setFormValue] = useState({
        fname: '',
        lname: '',
        email: '',
        whatsapp: '',
        country: '',
        paquete: state,
        ammount: '',
        activar: false,
        response: '',
        publicidad: '',
    });

    const slugP = slug.toLowerCase();
    const avible = ["libre", "idavnzla", "idayvueltavnzla"];
    const exist = avible.includes(slugP);

    if(exist === false){
        return (<Redirect to={"/nofound"} />);
    }

    const setService = () => {
        const fieldNameService = "paquete";
        setFormValue({
            ...formValue,
            [fieldNameService] : slug
        });
    };

    const proccessStep = (step) => {
        history.push({
            pathname: step,
            state: formValue
        });
    };

    const onChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name] : e.target.value
        });
    };

    const onChangeSwitch = (e) => {
        const fieldName = "activar";
        setFormValue({
            ...formValue,
            [fieldName] : !formValue.activar
        });
    };

    const onChangeSelectCountry = (newValue) => {
        const fieldName = "country";
        setFormValue({
            ...formValue,
            [fieldName] : newValue.value
        });
    };

    const onChangeSelectService = (newValue) => {
        const fieldName = "publicidad";
        setFormValue({
            ...formValue,
            [fieldName] : newValue.value
        });
    };

    const goToNext = (e) => {
        e.preventDefault();

        /*Validate fields*/
        if(formValue.fname.trim() === ''){
            toastr.info(`Por favor, ingrese su nombre`, `información`);
            return false;
        }

        if(formValue.lname.trim() === ''){
            toastr.info(`Por favor, ingrese su apellido`, `información`);
            return false;
        }

        if(formValue.email.trim() === ''){
            toastr.info(`Por favor, ingrese su correo electrónico`, `información`);
            return false;
        }

        if(formValue.whatsapp.trim() === ''){
            toastr.info(`Por favor, ingrese su numero de whatsapp`, `información`);
            return false;
        }

        if(formValue.country.trim() === ''){
            toastr.info(`Por favor, seleccione su país`, `información`);
            return false;
        }

        if(formValue.publicidad.trim() === ''){
            toastr.info(`Por favor, seleccione como nos conoció`, `información`);
            return false;
        }

        if( (formValue.publicidad === 'Amigo') || (formValue.publicidad === 'Publicidad por Influencer') || (formValue.publicidad === 'Otro') ){
            if( formValue.response.trim() === "" ){
                toastr.info(`Escriba una respuesta por favor`, `información`);
                return false;
            }
        }

        let nameFieldpaquete = "paquete";
        setFormValue({
            ...formValue,
            [nameFieldpaquete] : state
        });

        setTimeout(() => {
            history.push({
                pathname: "/checkout",
                state: formValue
            });
        }, 1000);
    };

    return (
        <div style={{ marginTop: `-50px`, marginBottom: `60px` }} className={"container"}>
            <MDBCard  className="w-100">
                <MDBCardBody >
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-2 col-md-5 col-sm-5">
                            <button onClick={() => proccessStep('/home' )} className="btn btn-outline-primary btn-rounded waves-effect">
                                <i className="fas fa-chevron-left"></i> Volver
                            </button>
                        </div>
                        <div className="col-lg-10 col-md-7 col-sm-7">
                            <MDBTypography tag='h4' className="text-sm-center text-md-end" style={{fontWeight: 300}}>Contratar { (slugP === 'libre') ? 'Libre' : (slugP === 'idavnzla') ? 'Ida Venezuela' : 'Ida y vuelta Venezuela' }</MDBTypography>
                            <MDBCardText className="text-sm-center text-md-end">
                                Completa tus datos
                            </MDBCardText>
                        </div>
                    </div>

                    <form onSubmit={goToNext}>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 p-3">
                                <MDBInput
                                    className=''
                                    value={formValue.fname}
                                    name='fname'
                                    onChange={onChange}
                                    id='nombre'
                                    label='Nombre'
                                    validation='Looks good!'
                                />
                            </div>
                            <div className="col-md-6 col-sm-12 p-3">
                                <MDBInput
                                    className=''
                                    value={formValue.lname}
                                    name='lname'
                                    onChange={onChange}
                                    id='apellido'
                                    label='Apellido'
                                    validation='Looks good!'
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 p-3">
                                <MDBInput
                                    className=''
                                    value={formValue.email}
                                    name='email'
                                    onChange={onChange}
                                    id='email'
                                    label='Correo electrónico'
                                    validation='Looks good!'
                                />
                            </div>
                            <div className="col-md-6 col-sm-12 p-3">
                                <MDBInput
                                    className=""
                                    name="whatsapp"
                                    id="whatsapp"
                                    label="Whatsapp"
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-sm-12 p-3">
                                <label>País</label>
                                <Select isSearchable isClearable options={CUSTOMFORMLC_COUNTRIES_LIST} name="country" onChange={onChangeSelectCountry}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-sm-12 p-3">
                                <label>¿Cómo nos conociste?</label>
                                <Select isSearchable isClearable options={CUSTOMFORMLC_MEMBERS_LIST} name="publicidad" onChange={onChangeSelectService}/>
                            </div>
                        </div>
                        {( (formValue.publicidad === 'Amigo') || (formValue.publicidad === 'Publicidad por Influencer') || (formValue.publicidad === 'Otro')) && (
                            <div>
                            {(formValue.publicidad === 'Amigo') && (
                                <div className="md-form mb-4 pink-textarea active-pink-textarea">
                                    <textarea id="form18" name="response" className="md-textarea form-control" rows="3" onChange={onChange}></textarea>
                                    <label htmlFor="form18">Escribe el nombre de tu amigo</label>
                                </div>
                            )}
                            {(formValue.publicidad === 'Publicidad por Influencer') && (
                                <div className="md-form mb-4 pink-textarea active-pink-textarea">
                                    <textarea id="form18" name="response" className="md-textarea form-control" rows="3" onChange={onChange}></textarea>
                                    <label htmlFor="form18">Escribe el nombre del influencer</label>
                                </div>
                            )}
                            {(formValue.publicidad === 'Otro') && (
                                <div className="md-form mb-4 pink-textarea active-pink-textarea">
                                    <textarea id="form18" name="response" className="md-textarea form-control" rows="3" onChange={onChange}></textarea>
                                    <label htmlFor="form18">Describe cómo nos conociste</label>
                                </div>
                            )}
                            </div>
                        )}
                        <div className="row">
                            <div className="col-md-12 col-sm-12 p-3">
                                <MDBSwitch id="activar" name="activar" checked={formValue.activar} onChange={onChangeSwitch} label="Activar el periodo de prueba" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-sm-12 p-3 d-flex justify-content-end">
                                <MDBBtn type="submit" color="primary" outline rounded>
                                    Elegir tu monto
                                    <span style={{marginLeft: "30px"}} className="fas fa-chevron-right"></span>
                                </MDBBtn>
                            </div>
                        </div>
                    </form>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}

export default Contractpage;