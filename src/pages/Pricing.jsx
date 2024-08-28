import React from 'react';
import Head from '../components/Head';
import Footer from '../components/Footer';
import './Pricing.css';
import coinIcon from '../assets/coinn2.png';

const Pricing = () => {
    return (
        <div className="pricing-page">
            <Head />
            <div className="pricing-container">
                <h1 className='pricing-title'>Pricing</h1>
                <div className="pricing-options">
                    <div className="pricing-card">
                        <h2>Standard</h2>
                        <img src={coinIcon} alt="Coin Icon" className="coin-icon" />
                        <p className='coin-amount'>2000</p>
                        <p className='price'>$10</p>
                        <button className='purchase-button'>Purchase</button>
                    </div>
                    <div className='pricing-card discount'>
                        <h2>Discount</h2>
                        <img src={coinIcon} alt="Coin Icon" className="coin-icon" />
                        <p className='coin-amount'>4000</p>
                        <p className='price'>$15</p>
                        <button className='purchase-button'>Purchase</button>
                    </div>
                </div>
                <p className="disclaimer">Q.Coin is a token. You can only use it within the quvi.ai website.<br />You can use Q.Coins to create digital products produced with AI support.</p>
            </div>
            <Footer />
        </div>
    )
}
export default Pricing;
