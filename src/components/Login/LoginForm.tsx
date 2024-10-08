interface LoginFormProps {
  username: string;
  password: string;
  onUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: string;
}

const LoginForm = ({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onSubmit,
  error,
} : LoginFormProps) => (
  <form onSubmit={onSubmit}>
    <div>
      <label>Username</label>
      <input type="text" value={username} onChange={onUsernameChange} />
    </div>
    <div>
      <label>Password</label>
      <input type="password" value={password} onChange={onPasswordChange} />
    </div>
    <button type="submit">Login</button>
    {error && <p>{error}</p>}
  </form>
);

export default LoginForm;
