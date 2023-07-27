import React, { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
const FormUp = () => {
    const [disabled, setDisabled] = useState(false);
    const [againDisabled, setAgainDisabled] = useState(false);

    const handleDisable = (e) =>{
        const user_Disable_value = e.target.value;

        if(user_Disable_value){
            setDisabled(false)
        }
        else{
            setDisabled(true);
        }
    }
    const handleDisableAgain = (e) =>{
        const user_Disable_value = e.target.value;

        if(user_Disable_value){
            setAgainDisabled(false)
        }
        else{
            setAgainDisabled(true);
        }
    }
    return (
        <>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <img src="https://media.istockphoto.com/id/477663679/photo/every-woman-has-a-favourite-shade.jpg?s=2048x2048&w=is&k=20&c=HwXhgdIuowkNOIDncjwuZi3P5SOUlXCcWxvec5TA-n8=" className="max-w-sm rounded-lg shadow-2xl lg:ml-40" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-2xl">Do You Like This color of Lipstick?</span>
                                </label>
                                <input type="text" placeholder="Write here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-2xl">What Rate do You want to give?</span>
                                </label>
                                <input type="number" placeholder="Rating" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                {/* <button className="btn btn-primary">Submit</button> */}
                                <input onClick={handleDisable} disabled={disabled} className="btn btn-primary text-white" type="submit" placeholder='Submit' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <span className='flex gap-4 justify-center items-center text-5xl'>
            <FaArrowDown></FaArrowDown>
            <h2>Scroll Down Please!</h2>
            </span>

{/* second part */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                    <img src="https://images.unsplash.com/photo-1587271511223-18b7ef9a327a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="max-w-sm rounded-lg shadow-2xl lg:ml-40" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-2xl">Do You Like This jewellery?</span>
                                </label>
                                <input type="text" placeholder="Write here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-2xl">What Rate do You want to give?</span>
                                </label>
                                <input type="number" placeholder="Rating" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                {/* <button className="btn btn-primary">Submit</button> */}
                                <input onClick={handleDisableAgain} disabled={againDisabled} className="btn btn-primary text-white" type="submit" placeholder='Submit' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormUp;