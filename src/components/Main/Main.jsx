import React, { useState } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Main = () => {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError('');
    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failled to logout');
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-3'>Профиль</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <strong>Email:</strong>
          {' '}
          {currentUser.email}
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogout}>Выйти</Button>
      </div>
    </>
  );
};

export default Main;
