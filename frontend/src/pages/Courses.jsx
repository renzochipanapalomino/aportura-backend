import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard.jsx';
import { fetchCourses } from '../services/api.js';
import { useAuth } from '../context/AuthContext.jsx';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { isAuthenticated, hasPremium } = useAuth();

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
      } catch (err) {
        console.error(err);
        setError('No pudimos cargar los cursos. Intenta nuevamente.');
      } finally {
        setLoading(false);
      }
    };
    loadCourses();
  }, []);

  const { freeCourses, premiumCourses } = useMemo(() => {
    const free = courses.filter((course) => course.type === 'free' || course.isFree);
    const premium = courses.filter((course) => course.type === 'premium' || course.isPremium);
    return { freeCourses: free, premiumCourses: premium };
  }, [courses]);

  const handleEnroll = (course) => {
    if (course.type === 'premium' || course.isPremium) {
      if (!isAuthenticated) {
        return navigate('/login', { state: { from: `/cursos/${course._id || course.id}` } });
      }
      if (!hasPremium) {
        alert('Debe adquirir el curso o suscripción premium para acceder.');
        return;
      }
    }
    navigate(`/cursos/${course._id || course.id}`);
  };

  return (
    <div className="bg-brandSand">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-6 rounded-3xl bg-white/80 p-10 shadow-xl backdrop-blur lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Oferta académica</p>
            <h1 className="mt-3 text-4xl font-bold text-slate-900">Explora los programas de Aportura</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Contenidos diseñados por especialistas para potenciar tus habilidades. Accede libremente a cursos gratuitos y
              desbloquea experiencias premium cuando estés listo.
            </p>
          </div>
          <Link
            to="/registro"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
          >
            Empieza ahora
          </Link>
        </div>

        <section className="mt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">Cursos gratuitos</h2>
            <span className="text-sm text-slate-500">Acceso libre para la comunidad</span>
          </div>
          {loading ? (
            <p className="mt-6 text-slate-500">Cargando cursos...</p>
          ) : error ? (
            <p className="mt-6 text-red-500">{error}</p>
          ) : freeCourses.length === 0 ? (
            <p className="mt-6 text-slate-500">Aún no hay cursos gratuitos disponibles.</p>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {freeCourses.map((course) => (
                <CourseCard key={course._id || course.id} course={course} onEnroll={handleEnroll} />
              ))}
            </div>
          )}
        </section>

        <section className="mt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">Cursos premium</h2>
            <span className="text-sm text-slate-500">Disponible para miembros premium</span>
          </div>
          {loading ? (
            <p className="mt-6 text-slate-500">Cargando cursos...</p>
          ) : error ? (
            <p className="mt-6 text-red-500">{error}</p>
          ) : premiumCourses.length === 0 ? (
            <p className="mt-6 text-slate-500">Aún no hay cursos premium disponibles.</p>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {premiumCourses.map((course) => (
                <CourseCard key={course._id || course.id} course={course} isPremium onEnroll={handleEnroll} />
              ))}
            </div>
          )}
        </section>

        <div className="mt-16 rounded-3xl bg-primary px-8 py-12 text-white shadow-xl">
          <h3 className="text-2xl font-semibold">¿Quieres subir tus cursos?</h3>
          <p className="mt-3 max-w-3xl text-sm md:text-base">
            Si formas parte de Aportura y deseas publicar contenido, solicita acceso administrativo para gestionar tus
            programas desde la plataforma.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
