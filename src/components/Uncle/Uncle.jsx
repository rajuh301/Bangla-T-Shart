import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (



        <div>
            <h2>Uncle</h2>
            <p><small>Grandpa money: {money}</small></p>
            <button onClick={() =>setMoney(money + 1000)}>Sent 1000 Tk</button>
            <section className='flex'>
                <Cousin>Bappi</Cousin>
                <Cousin>Momotaj</Cousin>

            </section>
        </div>
    );
};

export default Uncle;