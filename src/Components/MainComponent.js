import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Indexpage from "./Pages/IndexpageComponent";
import Nofoundpage from "./Pages/NofoundpageComponent";
import Header from "./Core/HeaderComponent";
import Footer from "./Core/FooterComponent";
import Contractpage from "./Pages/Contractpage";
import Checkoutpage from "./Pages/Checkout";

const Main = () => {
    return (
        <BrowserRouter basename="/demo">
            <Header />
            <Switch>
                <Route path="/home" component={Indexpage}/>
                <Route path="/nofound" component={Nofoundpage}/>
                <Route path="/contract/:slug" component={ ( { match } ) => { return ( <Contractpage slug={match.params.slug} /> ) } } />
                <Route path="/checkout" component={Checkoutpage} />
                <Redirect to="/home"/>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default Main;