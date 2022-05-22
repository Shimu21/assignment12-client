import React from 'react';
import ApplicableBrands from './ApplicableBrands';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Products from './Products';
import QuickContacts from './QuickContacts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <ApplicableBrands></ApplicableBrands>
            <Reviews></Reviews>
            <QuickContacts></QuickContacts>
        </div>
    );
};

export default Home;