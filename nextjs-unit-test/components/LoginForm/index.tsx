interface LoginFormParam {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<LoginFormParam> = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" id="id" />
    <input type="password" id="password" />
    <button type="submit">Login</button>
  </form>
);

export default LoginForm;
