import React, { useRef, useState } from 'react';
import {
  Alert, Button, Card, Form,
} from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

const Signup = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match');
    }
    setError('');
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value, passwordConfirmRef.current.value);
      navigate('/');
    } catch {
      setError('Error to create account');
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-3'>Регистрация</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type='password' ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className='w-100' type='submit'>Зарегистрироваться</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Уже зарегистрирован ?
        {' '}
        <Link to='/login'>Войти</Link>
      </div>
    </>
  );
};

export default Signup;
