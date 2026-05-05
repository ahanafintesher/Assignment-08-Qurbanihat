import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';

const loading = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2>loading</h2>
            <Footer></Footer>
        </div>
    );
};

export default loading;