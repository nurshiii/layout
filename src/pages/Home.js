import React from 'react';
import PromoContainer from '../components/promo-banner/PromoContainer';
import Button from '../components/Button';
import Iconlist from '../components/Iconlist';
import Sportlist from '../components/Sportlist';
import PopularList from '../components/PopularList';
import PromotionsList from '../components/PromotionsList';
import ProvidersList from'../components/ProvidersList';


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

        <div className="row">
            <div className="col">
                <PopularList/>
            </div>
        </div>
        <div className="row">
                <div className="col">
                    <PromotionsList/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ProvidersList/>
                </div>
            </div>
      
    </>
    }
}



export default Home;


 

 