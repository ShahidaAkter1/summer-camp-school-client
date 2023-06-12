import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useEffect } from 'react';

const useSecret = () => {
    const [secret, setSecret] = useState('');
    const { user } = useContext(AuthContext);
    const totalNew = 5500;
    const total={totalNew};

    useEffect(() => {
        // Fetch the client secret from your server
        fetch(' https://summer-camp-school-server-seven.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(total),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setSecret(data.clientSecret);
            })
    }, []);

    return [secret];


};

export default useSecret;