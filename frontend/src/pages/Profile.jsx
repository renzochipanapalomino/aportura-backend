import { useEffect, useState } from 'react';
import { fetchProfile } from '../services/api.js';
import { useAuth } from '../context/AuthContext.jsx';

const Profile = () => {
  const { user, logout } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchProfile();
        setCourses(data.enrollments || []);
      } catch (err) {
        console.error(err);
        setError('No pudimos recuperar tus cursos.');
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);

  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Tu perfil</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900">Hola, {user?.name}</h1>
              <p className="mt-2 text-sm text-slate-600">Correo: {user?.email}</p>
              {user?.role === 'admin' && (
                <p className="mt-2 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Rol administrador
                </p>
              )}
            </div>
            <button
              onClick={logout}
              className="w-full rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-primary hover:text-primary md:w-auto"
            >
              Cerrar sesión
            </button>
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-slate-900">Mis cursos</h2>
            {loading ? (
              <p className="mt-4 text-sm text-slate-500">Cargando cursos...</p>
            ) : error ? (
              <p className="mt-4 text-sm text-red-500">{error}</p>
            ) : courses.length === 0 ? (
              <p className="mt-4 text-sm text-slate-500">Aún no estás inscrito en ningún curso.</p>
            ) : (
              <ul className="mt-6 space-y-4">
                {courses.map((course) => (
                  <li key={course._id || course.id} className="rounded-2xl border border-slate-200 p-4">
                    <h3 className="text-lg font-semibold text-slate-900">{course.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{course.description}</p>
                    {course.type === 'premium' && (
                      <span className="mt-2 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        Premium
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
