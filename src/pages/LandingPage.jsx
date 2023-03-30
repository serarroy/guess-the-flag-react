import React from 'react'
import Header from '../components/Header';
import '../styles/LandingPage.css'
import {BiWorld} from 'react-icons/bi'


function LandingPage( {setStart}) {
    return (
        <div>
            <Header />
            <h2>Can you guess all the flags of the countries of the Northern Hemisphere? Find it out.</h2>
            <div className='icon-container'>
                <BiWorld className='icon' onClick={() => setStart(true)}/>
            </div>
        </div>
    )
}

export default LandingPage
