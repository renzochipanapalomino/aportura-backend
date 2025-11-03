import { useEffect, useState } from 'react';
import { createCourse, deleteCourse, fetchCourses, updateCourse } from '../services/api.js';

const emptyForm = {
  title: '',
  description: '',
  videoUrl: '',
  type: 'free',
};

const Admin = () => {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState({ type: null, message: null });
  const [loading, setLoading] = useState(false);

  const loadCourses = async () => {
    try {
      const data = await fetchCourses();
      setCourses(data);
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Error al cargar cursos.' });
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: null });
    try {
      if (editingId) {
        await updateCourse(editingId, form);
        setStatus({ type: 'success', message: 'Curso actualizado correctamente.' });
      } else {
        await createCourse(form);
        setStatus({ type: 'success', message: 'Curso creado correctamente.' });
      }
      setForm(emptyForm);
      setEditingId(null);
      await loadCourses();
    } catch (error) {
      console.error(error);
      const message = error.response?.data?.message || 'No se pudo guardar el curso.';
      setStatus({ type: 'error', message });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (course) => {
    setForm({
      title: course.title || '',
      description: course.description || '',
      videoUrl: course.videoUrl || '',
      type: course.type || (course.isPremium ? 'premium' : 'free'),
    });
    setEditingId(course._id || course.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Deseas eliminar este curso?')) return;
    try {
      await deleteCourse(id);
      setStatus({ type: 'success', message: 'Curso eliminado correctamente.' });
      await loadCourses();
    } catch (error) {
      console.error(error);
      const message = error.response?.data?.message || 'No se pudo eliminar el curso.';
      setStatus({ type: 'error', message });
    }
  };

  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <h1 className="text-3xl font-semibold text-slate-900">Administración de cursos</h1>
          <p className="mt-2 text-sm text-slate-600">
            Crea, edita y elimina cursos disponibles en la plataforma. Recuerda asignar correctamente si es gratuito o premium.
          </p>

          <form className="mt-10 grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-slate-700" htmlFor="title">
                Título del curso
              </label>
              <input
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-slate-700" htmlFor="description">
                Descripción breve
              </label>
              <textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                rows="3"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-slate-700" htmlFor="videoUrl">
                URL del video
              </label>
              <input
                id="videoUrl"
                name="videoUrl"
                value={form.videoUrl}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700" htmlFor="type">
                Tipo de curso
              </label>
              <select
                id="type"
                name="type"
                value={form.type}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="free">Gratuito</option>
                <option value="premium">Premium</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                {loading ? 'Guardando...' : editingId ? 'Actualizar curso' : 'Crear curso'}
              </button>
            </div>
          </form>

          {status.message && (
            <p
              className={`mt-6 text-sm ${status.type === 'success' ? 'text-emerald-600' : 'text-red-500'}`}
            >
              {status.message}
            </p>
          )}

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900">Cursos publicados</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {courses.map((course) => (
                <div key={course._id || course.id} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{course.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{course.description}</p>
                      <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">
                        {course.type === 'premium' || course.isPremium ? 'Premium' : 'Gratuito'}
                      </p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                      {course.type || (course.isPremium ? 'premium' : 'free')}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-sm font-semibold">
                    <button
                      onClick={() => handleEdit(course)}
                      className="flex-1 rounded-full border border-primary px-4 py-2 text-primary transition hover:bg-primary hover:text-white"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(course._id || course.id)}
                      className="flex-1 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-red-600 transition hover:bg-red-100"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Admin;
