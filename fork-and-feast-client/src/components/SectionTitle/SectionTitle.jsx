import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-3/12 mx-auto text-center my-4'>
            <p className='mb-2 text-yellow-400'>---{subHeading}---</p>
            <h3 className='text-3xl uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;

// style={{color:"#D99904"}}