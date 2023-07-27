import React, { useEffect, useState } from 'react';

const UseInfo = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://form-up-server.vercel.app/userInfo')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false)

            })
    }, [])
    return [users, loading]
};

export default UseInfo;