// pages/RegisterPage.tsx
import React from "react";
import RegisterForm from "./RegisterForm";
import { useRegister } from "./useRegister";
import Image from 'next/image'

export default function RegisterPage() {
  const { user, handleChange, handleRegister } = useRegister();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleRegister();
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
      <Image src={`/logos/logo-metaview.png`} alt="Metaview" width="240" height="240" />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Register your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <RegisterForm user={user} onChange={handleChange} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
