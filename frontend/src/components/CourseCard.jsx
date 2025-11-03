import { Link } from 'react-router-dom';

const CourseCard = ({ course, isPremium = false, onEnroll }) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex-1">
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${isPremium ? 'bg-primary/10 text-primary' : 'bg-emerald-100 text-emerald-700'}`}>
          {isPremium ? 'Premium' : 'Gratis'}
        </span>
        <h3 className="mt-4 text-xl font-semibold text-slate-900">{course.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{course.description}</p>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <Link
          to={`/cursos/${course._id || course.id}`}
          className="flex-1 rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-primary-dark"
        >
          Ver más
        </Link>
        {onEnroll && (
          <button
            onClick={() => onEnroll(course)}
            className="rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            Inscribirme
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
