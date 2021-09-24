import React, {Component} from 'react';

class Footer extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            menu: [],
        };
    }

    render(){
        return (
            <footer className={"bg-dark p-3"}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center">Locutorios SPA - Powered By Jesus Uzcategui</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;