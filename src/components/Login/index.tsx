import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import { login } from '../../services/authService';

interface LoginProps {
  onLogin: (token: string, role: string) => void;
}

const Login = ({ onLogin } : LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { access_token } = await login(username, password);
      const role = username;
      onLogin(access_token, role);
      navigate(`/${role}`);
    } catch (error) {
      setError('Erro ao realizar o login. Tente novamente.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm
        username={username}
        password={password}
        onUsernameChange={(e) => setUsername(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
};

export default Login;
