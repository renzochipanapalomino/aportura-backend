import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const linkBaseClass =
  'rounded-full px-4 py-2 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40';

const Navbar = () => {
  const { isAuthenticated, user, logout, isAdmin } = useAuth();

  return (
    <header className="sticky top-0 z-30 border-b border-primary/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row md:gap-6">
        <Link to="/" className="flex items-center gap-3 text-left">
          <img
            src="/aportura.png"
            alt="Aportura"
            className="h-11 w-11 rounded-full border border-primary/20 object-contain"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/70">Aportura</span>
            <p className="mt-1 text-lg font-semibold text-slate-900">Plataforma de capacitación</p>
          </div>
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-2 rounded-full bg-white/70 p-1 text-sm font-medium text-slate-600 shadow-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 transition ${isActive ? 'bg-primary text-white shadow-sm' : 'hover:text-primary'}`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/cursos"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 transition ${isActive ? 'bg-primary text-white shadow-sm' : 'hover:text-primary'}`
            }
          >
            Cursos
          </NavLink>
          {isAuthenticated && (
            <NavLink
              to="/perfil"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition ${isActive ? 'bg-primary text-white shadow-sm' : 'hover:text-primary'}`
              }
            >
              Mi perfil
            </NavLink>
          )}
          {isAdmin && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition ${isActive ? 'bg-primary text-white shadow-sm' : 'hover:text-primary'}`
              }
            >
              Administración
            </NavLink>
          )}
        </nav>
        <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className={`${linkBaseClass} border border-primary/30 text-primary hover:border-primary hover:bg-primary/10`}
              >
                Iniciar sesión
              </Link>
              <Link
                to="/registro"
                className={`${linkBaseClass} bg-primary text-white shadow-sm hover:bg-primary/90`}
              >
                Regístrate
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <span className="hidden text-sm text-slate-500 sm:block">Hola, {user?.name}</span>
              <button
                onClick={logout}
                className={`${linkBaseClass} border border-primary/30 text-primary hover:bg-primary hover:text-white`}
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
