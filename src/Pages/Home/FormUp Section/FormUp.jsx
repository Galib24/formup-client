import React, { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import Swal from 'sweetalert2';
const FormUp = () => {
    const [disabled, setDisabled] = useState(false);
    const [againDisabled, setAgainDisabled] = useState(false);

    const handleDisable = (e) => {
        const user_Disable_value = e.target.value;

        if (user_Disable_value) {
            setDisabled(false)
        }
        else {
            setDisabled(true);
        }
    }
    const handleDisableAgain = (e) => {
        const user_Disable_value = e.target.value;

        if (user_Disable_value) {
            setAgainDisabled(false)
        }
        else {
            setAgainDisabled(true);
        }
    }


    // submit for create data



    const handleSubmit = e => {
      
        
        e.preventDefault();

        const form = e.target;

        const lipstick = form.lipstick.value;
        const rating1 = form.rating1.value;
        // const things = form.things.value;
        // const rating2 = form.rating2.value;
        const formate = { lipstick, rating1 }
        console.log(formate);

        // send data to server
        fetch('https://form-up-server.vercel.app/review',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formate)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
               
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Review Added successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                setDisabled(data);
            }
            console.log(data);
        })

    }

    const handleSubmit2 = e => {
      
        
        e.preventDefault();

        const form = e.target;

        // const lipstick = form.lipstick.value;
        // const rating1 = form.rating1.value;
        const things = form.things.value;
        const rating2 = form.rating2.value;
        const formate = { things, rating2 }
        console.log(formate);

        // send data to server
        fetch('https://form-up-server.vercel.app/review',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formate)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
               
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Review Added successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                setAgainDisabled(data);
            }
            console.log(data);
        })

    }




    return (
        <>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://media.istockphoto.com/id/477663679/photo/every-woman-has-a-favourite-shade.jpg?s=2048x2048&w=is&k=20&c=HwXhgdIuowkNOIDncjwuZi3P5SOUlXCcWxvec5TA-n8=" className="max-w-sm rounded-lg shadow-2xl lg:ml-40" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-2xl">Do You Like This color of Lipstick?</span>
                                </label>
                                <input type="text" name='lipstick' placeholder="Write here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-2xl">What Rate do You want to give out of 5?</span>
                                </label>
                                <input type="number" name='rating1' placeholder="Rating" className="input input-bordered" />
                            </div>
                            <input onClick={handleDisable} disabled={disabled} type="submit" value='Submit' className="btn btn-block bg-violet-400 text-white" />
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
                        <form onSubmit={handleSubmit2} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-2xl">Do You Like This jewellery?</span>
                                </label>
                                <input type="text" name='things' placeholder="Write here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-2xl">What Rate do You want to give out of 5?</span>
                                </label>
                                <input type="number" name='rating2' placeholder="Rating" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                {/* <button className="btn btn-primary">Submit</button> */}
                                <input onClick={handleDisableAgain} disabled={againDisabled} type="submit" value='Submit' className="btn btn-block bg-violet-400 text-white" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormUp;