import React from 'react';

const SecondSection = () => {
    return (
        <div className='text-center  flex-col justify-items-center my-28'>
            <h1 className='text-2xl my-6'>Reated 4.5 out of 1000+ Reviews on Our Site Trusted by</h1>
            <div style={{ width: '1000px'}} className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:ml-52'>
                <img style={{borderRadius: '100px 0 100px 0' }} src="https://media.istockphoto.com/id/1473968622/photo/blacksmithing-icon.jpg?s=2048x2048&w=is&k=20&c=WMzQaCLouMK07ouwPYTvz8Diaxvl_bu1jnosk5610m0=" alt="" />

                <img style={{borderRadius: '0 100px 0 100px' }} src="https://images.unsplash.com/photo-1650951472998-4abf9d05f0c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80" alt="" />

                <img style={{borderRadius: '100px 0 100px 0' }} src="https://images.unsplash.com/photo-1657647269764-945167cc237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80" alt="" />

                <img style={{borderRadius: '0 100px 0 100px' }}  src="https://images.unsplash.com/photo-1658204238967-3a81a063d162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80" alt="" />


            </div>
            <h1 className='text-5xl font-bold my-28'>Pleasantly Unique and Deliberate</h1>
        </div>
    );
};

export default SecondSection;