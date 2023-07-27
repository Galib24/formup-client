import React from 'react';
import './ThirdSection.css'
const ThirdSection = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img  src="https://media.istockphoto.com/id/1463824855/photo/woman-works-at-home-and-during-an-online-consultation-with-a-tax-agent.jpg?s=2048x2048&w=is&k=20&c=NhCUDzoYwGbQe0eZVc4sG4Cx1eA3OBfxr630jDg1_1Y=" className="max-w-sm rounded-lg shadow-2xl ml-20 image" />
                    <div>
                        <h1 className="text-5xl font-bold">Appears Striking <br /> Easy to the touch.</h1>
                        <p className="py-6">Your form-takers will be impressed. Draw in your audience with eye-catching graphics, <br /> and make filling out forms seem simple by limiting the number of <br />questions to one at a time rather than walls of them.</p>
                        <button className="btn btn-primary text-white">Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThirdSection;