import React from 'react';
import loginImg from '../../../src/assets/login_anime_up.png'
import { Link } from 'react-router-dom';
const BioForm = () => {
    return (
        <>
             <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-extrabold text-center mt-8">Guest Information</h1>
            <form>
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

                            <input type="text" name="subject" placeholder="Subject" className="input input-bordered w-full" />
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
                <Link to={`/formup`}><input type="submit" value='Submit' className="btn btn-block bg-violet-400 text-white" /></Link>
            </form>
        </div>
        </>
    );
};

export default BioForm;