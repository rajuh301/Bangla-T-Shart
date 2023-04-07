import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Borther/Brother';
import Sister from '../Siter/Sister';

const Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <Myself ring={ring}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;