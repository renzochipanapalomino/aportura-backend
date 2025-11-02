import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const socialButtons = [
  { id: 'facebook', label: 'Ingresa con Facebook', brand: 'bg-[#1877F2]/10 text-[#1877F2]' },
  { id: 'google', label: 'Ingresa con Google', brand: 'bg-[#EA4335]/10 text-[#EA4335]' },
];

const Login = () => {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [step, setStep] = useState('options');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    const result = await login(form);
    if (!result.success) {
      setError(result.message);
    } else {
      const redirectTo = location.state?.from || '/perfil';
      navigate(redirectTo, { replace: true });
    }
  };

  const handleSocial = (provider) => {
    alert(`La autenticación con ${provider} estará disponible próximamente. Mientras tanto, ingresa con tu correo.`);
  };

  return (
    <div className="bg-brandSand min-h-[70vh]">
      <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center px-6 py-16">
        <div className="rounded-3xl bg-white p-10 shadow-2xl">
          {step === 'options' ? (
            <div className="space-y-8">
              <header className="space-y-2 text-center">
                <h1 className="text-3xl font-semibold text-slate-900">Inicia sesión en Aportura</h1>
                <p className="text-sm text-slate-600">Elige el método de ingreso que prefieras.</p>
              </header>
              <div className="space-y-3">
                {socialButtons.map((button) => (
                  <button
                    key={button.id}
                    type="button"
                    onClick={() => handleSocial(button.label.replace('Ingresa con ', ''))}
                    className={`flex w-full items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary ${button.brand}`}
                  >
                    {button.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setStep('email')}
                  className="flex w-full items-center justify-center rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  Ingresa con correo electrónico
                </button>
              </div>
              <div className="text-center text-sm text-slate-500">
                <button
                  type="button"
                  onClick={() => navigate('/registro')}
                  className="font-semibold text-primary underline-offset-2 hover:underline"
                >
                  ¿Aún no tienes cuenta? Regístrate
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <header className="space-y-2 text-center">
                <h1 className="text-3xl font-semibold text-slate-900">Ingresa con tu correo</h1>
                <p className="text-sm text-slate-600">Completa tus datos para continuar.</p>
              </header>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm font-semibold text-slate-700" htmlFor="email">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700" htmlFor="password">
                    Contraseña
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={form.password}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  {loading ? 'Ingresando...' : 'Iniciar sesión'}
                </button>
                <button
                  type="button"
                  onClick={() => alert('Solicita el restablecimiento de contraseña con el equipo de soporte de Aportura.')}
                  className="w-full text-sm font-semibold text-primary underline-offset-2 hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </form>
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
                <button
                  type="button"
                  onClick={() => setStep('options')}
                  className="font-semibold text-primary underline-offset-2 hover:underline"
                >
                  Volver a métodos de acceso
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/registro')}
                  className="font-semibold text-primary underline-offset-2 hover:underline"
                >
                  ¿No tienes cuenta? Regístrate
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
