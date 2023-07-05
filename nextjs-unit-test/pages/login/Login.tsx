import LoginForm from "@/components/LoginForm";
import { NextPage } from "next";
import { useState } from "react";

const Login: NextPage = () => {
  const [status, setStatus] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    return true;
  };

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <LoginForm onSubmit={onSubmit} />
    </main>
  );
};

export default Login;
