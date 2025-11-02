import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCourseById } from '../services/api.js';
import { useAuth } from '../context/AuthContext.jsx';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, hasPremium } = useAuth();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCourse = async () => {
      try {
        const data = await fetchCourseById(id);
        setCourse(data);
      } catch (err) {
        console.error(err);
        setError('No encontramos el curso solicitado.');
      } finally {
        setLoading(false);
      }
    };
    loadCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-brandSand">
        <p className="text-sm text-slate-500">Cargando curso...</p>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-brandSand">
        <p className="text-sm text-red-500">{error}</p>
        <button
          onClick={() => navigate('/cursos')}
          className="mt-4 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white"
        >
          Volver a cursos
        </button>
      </div>
    );
  }

  const isPremiumCourse = course.type === 'premium' || course.isPremium;
  const canAccess = !isPremiumCourse || (isAuthenticated && hasPremium);

  return (
    <div className="bg-brandSand">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl bg-white p-10 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                {isPremiumCourse ? 'Curso premium' : 'Curso gratuito'}
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-900">{course.title}</h1>
            </div>
            <button onClick={() => navigate('/cursos')} className="text-sm font-semibold text-primary">
              Volver
            </button>
          </div>
          <p className="mt-6 text-sm text-slate-600">{course.description}</p>

          <div className="relative mt-10 overflow-hidden rounded-2xl bg-slate-900">
            {course.videoUrl ? (
              <iframe
                className="h-64 w-full md:h-96"
                src={course.videoUrl}
                title={course.title}
                allowFullScreen
              />
            ) : (
              <div className="flex h-64 items-center justify-center text-slate-200 md:h-96">
                <p>No hay video disponible</p>
              </div>
            )}
            {!canAccess && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/80 p-6 text-center text-white">
                <h2 className="text-2xl font-semibold">Contenido exclusivo</h2>
                <p className="mt-3 text-sm">
                  Debes iniciar sesión y adquirir el curso premium para acceder a este contenido.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => navigate('/login', { state: { from: `/cursos/${id}` } })}
                    className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary"
                  >
                    Iniciar sesión
                  </button>
                  <button
                    onClick={() => navigate('/registro')}
                    className="rounded-full border border-white px-5 py-2 text-sm font-semibold"
                  >
                    Adquirir acceso
                  </button>
                </div>
              </div>
            )}
          </div>

          <section className="mt-10 space-y-4 text-sm text-slate-600">
            <p>
              Este curso incluye materiales descargables, sesiones en vivo y evaluaciones prácticas para asegurar el
              aprendizaje.
            </p>
            <p>
              Si tienes dudas o deseas más información sobre los programas premium, contáctanos a{' '}
              <a href="mailto:programas@aportura.pe" className="font-semibold text-primary">
                programas@aportura.pe
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
