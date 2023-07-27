import React from 'react';
import UseInfo from '../../hooks/UseInfo';

const UserInfo = () => {
    const [users] = UseInfo();
    console.log(users);
    return (
        <>
            {/* <h1>user info</h1> */}



            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                users.map(user => <div key={user._id} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={ user.photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{user.name}</h2>
                    <p><strong>Purpose: </strong> {user.purpose}</p>
                    <p><strong>Email: </strong> {user.email}</p>
                    <p><strong>Address: </strong> {user.address}</p>
                    <p><strong>Birth: </strong> {user.birth}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div> )
            }
            </div>

            
        </>
    );
};

export default UserInfo;