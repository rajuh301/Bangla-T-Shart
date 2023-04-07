import React, { createContext, useState } from 'react';
import Father from '../components/Father/Father';
import Uncle from '../components/Uncle/Uncle';
import Aunty from '../components/Aunty/Aunty';
import './Grandpa.css'

export const RingContext = createContext('Gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'Diamond'

    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p><small>Has money {money}</small></p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='Golden Ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>



        </div>
    );
};

export default Grandpa;

/**
 * 
 Create context 5 things

 1.

 * */ 