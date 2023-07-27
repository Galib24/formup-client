import React from 'react';
import loginImg from '../../../src/assets/login_anime_up.png'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const BioForm = () => {

    const handleSubmit = e => {
      
        
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const purpose = form.purpose.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const birth = form.birth.value;
        const photo = form.photo.value;

        const formate = { name, purpose, email, phone, address, birth, photo }
        console.log(formate);

        // send data to server
        fetch('https://form-up-server.vercel.app/userInfo',{
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
                    title: 'Request Submit successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            console.log(data);
        })

    }
    


    return (
        <>
             <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-extrabold text-center mt-8">Guest Information</h1>
            <form onSubmit={handleSubmit}>
                {/* form name and quantity  row */}
                <div className="md:flex mb-8">
                    <div className="form-control md: w-1/2">
                        <label className="label">
                            <span className="label-text">Name*</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">What Brings You here!* </span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="purpose" placeholder="Purpose" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md: w-1/2">
                        <label className="label">
                            <span className="label-text">Email*</span>
                        </label>
                        <label className="input-group">

                            <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Phone No*</span>
                        </label>
                        <label className="input-group">

                            <input type="number" name="phone" placeholder="phone No" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md: w-1/2">
                        <label className="label">
                            <span className="label-text">Address*</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="address" placeholder="Address" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Birth of Date*</span>
                        </label>
                        <label className="input-group">

                            <input type="date" name="birth" placeholder="Birth Date" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo URL row */}
                <div className="mb-8">
                    <div className="form-control  w-full">
                        <label className="label">
                            <span className="label-text">Photo URL (Optional)</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value='Submit' className="btn btn-block bg-violet-400 text-white" />
            </form>
            <Link to={`/formup`}><button className="btn mt-5 btn-block bg-green-400 text-white">Next Process</button></Link>
        </div>
        </>
    );
};

export default BioForm;