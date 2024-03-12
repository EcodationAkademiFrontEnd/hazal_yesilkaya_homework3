import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { Spinner, Col, ListGroup, ListGroupItem, Badge, Container } from 'reactstrap';
import { getUserById } from '../network/UserService'; // Servisi import ediyoruz
import { UseLoading } from '../hooks/UseLoading';

const UserDetail = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const { isLoading, setIsLoading } = UseLoading(); // Yeni hook'u kullanın

  useEffect(() => {
    const fetchUserDetails = async () => {
      setIsLoading(true);
        const user = await getUserById(id);
        setUserDetails(user);
        setIsLoading(false);
    };

    fetchUserDetails();
  }, [id, setIsLoading]);

  if (isLoading) {
    return <div><Spinner color="secondary" /></div>; // Yükleme sırasında bir Spinner göster
  }

  if (!userDetails) {
    return <div>User not found</div>; // Veri yoksa bir mesaj göster
  }

return (
  <div style={{ paddingTop: '10px'}}>
    <Container style={{marginTop: "30px"}}>
      <Col  xs="5" className="d-inline-block">
      <h4 className="bg-primary text-white p-2">{userDetails.name}</h4>
        <ListGroup>
          <ListGroupItem>
            <div className='listGroup'>
            <h6>Username:</h6>
            <Badge color="info" pill>{userDetails.username}</Badge>
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <div className='listGroup'>
              <h6>Email:</h6>
              <Badge color="info" pill>{userDetails.email}</Badge>
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <div className='listGroup'>
              <h6>Phone:</h6>
              <Badge color="info" pill>{userDetails.phone}</Badge>
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <div className='listGroup'>
              <h6>Website:</h6>
              <Badge color="info" pill>{userDetails.website}</Badge>
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <div className='listGroup'>
              <h6>Company:</h6>
              <Badge color="info" pill>{userDetails.company.name}</Badge>
            </div>
          </ListGroupItem>
        </ListGroup>
        <h5>Address</h5>
        <ListGroup>
          <ListGroupItem>
            <div className='listGroup'>
              <h6>Street:</h6>
              <Badge color="info" pill>{userDetails.address.street}</Badge>
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <div className='listGroup'>
              <h6>Suite:</h6>
              <Badge color="info" pill>{userDetails.address.suite}</Badge>
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <div className='listGroup'>
              <h6>City:</h6>
              <Badge color="info" pill>{userDetails.address.city}</Badge>
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <div className='listGroup'>
              <h6>Zipcode:</h6>
              <Badge color="info" pill>{userDetails.address.zipcode}</Badge>
            </div>
          </ListGroupItem>
        </ListGroup>
      </Col>
   </Container>
  </div>
);
};
export default UserDetail;
