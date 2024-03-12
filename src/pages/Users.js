import React, { useState, useEffect } from 'react';
import { Table, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getUsers } from '../network/UserService';
import { UseLoading } from '../hooks/UseLoading';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const { isLoading, setIsLoading } = UseLoading();

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
      setIsLoading(false);
    };

    fetchUsers();
  }, [setIsLoading]);

  return (
    <div className="container">
      <h3 className="mt-4">Users</h3>
      {isLoading ? (
        <Spinner color="secondary" />
      ) : (
        <Table striped className="table table-bordered">
          <thead>
            <tr className='tableTitle'>
              <th className="centeredText">#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td className="centeredText">{index + 1}</td>
                <td>
                  <Link to={`/users/${user.id}`} style={{ color: 'blue' }}>
                    {user.name}
                  </Link>
                </td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};
