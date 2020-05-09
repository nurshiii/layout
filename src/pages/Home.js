import React from 'react';
import PromoContainer from '../components/promo-banner/PromoContainer';
import Button from '../components/Button';
import Iconlist from '../components/Iconlist';
import Sportlist from '../components/Sportlist';

class Home extends React.Component {


    render() {
        return <>
         <div className="row">
                <div className="col">
                    <Button/>
                </div>
            </div>
        
        <div className="row">
            <div className="col">
                <PromoContainer/>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <Iconlist/>
            </div>
        </div>
        
        <div className="row">
            <div className="col">
                <Sportlist/>
            </div>
        </div>
    </>
    }
}



export default Home;


 

 