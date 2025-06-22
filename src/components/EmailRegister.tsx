import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const EmailRegister: React.FC = () => {
  const [state, handleSubmit] = useForm("mqabkrnn");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setEmail("");
      setError("");
      window.location.href = "/succesRegister";
    }
  }, [state.succeeded]);

  // Validación en tiempo real del email
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(validateEmail(value));
  };

  const handleLocalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEmailValid) {
      setError("Ingresa un email válido.");
      return;
    }

    setError("");
    await handleSubmit({ email });
    if (state.errors) {
      setError("Ocurrió un error al enviar el formulario. Inténtalo de nuevo.");
    }
  };

  return (
    <form
      onSubmit={handleLocalSubmit}
      className="flex flex-col sm:flex-row gap-4 justify-center"
      noValidate
    >
      <div className="flex flex-col w-full sm:w-auto">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="px-4 py-2 rounded-md text-white bg-[#141414] focus:outline-none focus:ring-2 focus:ring-lime-400"
          required
        />
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <button
        disabled={!isEmailValid || state.submitting}
        type="submit"
        className="bg-lime-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-lime-500 disabled:opacity-50"
      >
        {state.submitting ? "Enviando..." : "Regístrate"}
      </button>
    </form>
  );
};

export default EmailRegister;
