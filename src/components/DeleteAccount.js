import React from 'react';
import axios from 'axios';

const DeleteAccountButton = ({ username }) => {
    const handleDeleteAccount = () => {
        axios.delete(`http://localhost:8080/api/v1/customer/delete?i=${username}`)
            .then(() => {
                // Optionally, handle success response (e.g., display a confirmation message)
                console.log('Account deleted successfully');
            })
            .catch((error) => {
                // Optionally, handle error response (e.g., display an error message)
                console.error('Error deleting account:', error);
            });
    };

    return (
        <button onClick={handleDeleteAccount}>Delete Account</button>
    );
};

export default DeleteAccountButton;
