import { useState, useEffect } from 'react';

const UserProfile = () => {
    const [profile, setProfile] = useState({});

    useEffect(()=> {
        const token = {
            token: localStorage.getItem('token'),
        }

        fetch('https://safe-fortress-45916.herokuapp.com/iomtapi/v1/users/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON',
            },
            body: JSON.stringify(token),
        })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then((jsonData) => {
            console.log(jsonData)
            setProfile(jsonData.profile)
        })
        .catch((err) => console.log(err))
    }, []);

    return(
        <div>
            <h1>Welcome back, {profile.username}</h1>
        </div>
    );
}

export default UserProfile;