import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const { id } = useParams(); 

    return (
      <div>
        <h2>User Detail for User ID: {id}</h2>
      </div>
    );
};

export default UserDetail;
