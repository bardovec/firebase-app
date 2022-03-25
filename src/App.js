import React from 'react';

import { Container } from 'react-bootstrap';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Signup from './components/Signup/Signup';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import PrivateRoute from './routes/PrivateRoute';

const App = () => (

  <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
    <div className='w-100 ' style={{ maxWidth: '400px' }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              exact
              path='/'
              element={(
                <PrivateRoute>
                  <Main />
                </PrivateRoute>
)}
            />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>

  </Container>

);

export default App;
