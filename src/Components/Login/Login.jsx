import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';

const Login = () => {
  // puxa o state de login do UserContext.jsx para não mostrar a tela de login
  // se caso o usuário já estiver logado
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/account" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="passlost" element={<LoginPasswordLost />} />
        <Route path="passreset" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
