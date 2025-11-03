import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Navbar = () => {
  const { isAuthenticated, user, logout, isAdmin } = useAuth();

  return (
    <header className="border-b border-primary/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-primary">
          ASOCIACION DE PROFESIONALES Y TECNICOS DE TURISMO DE AREQUIPA
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition hover:text-primary ${isActive ? 'text-primary' : 'text-slate-600'}`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/cursos"
            className={({ isActive }) =>
              `transition hover:text-primary ${isActive ? 'text-primary' : 'text-slate-600'}`
            }
          >
            Cursos
          </NavLink>
          {isAuthenticated && (
            <NavLink
              to="/perfil"
              className={({ isActive }) =>
                `transition hover:text-primary ${isActive ? 'text-primary' : 'text-slate-600'}`
              }
            >
              Mi perfil
            </NavLink>
          )}
          {isAdmin && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `transition hover:text-primary ${isActive ? 'text-primary' : 'text-slate-600'}`
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
                className="rounded-full border border-primary px-4 py-2 text-primary transition hover:bg-primary hover:text-white"
              >
                Iniciar sesión
              </Link>
              <Link
                to="/registro"
                className="rounded-full bg-primary px-4 py-2 text-white transition hover:bg-primary-dark"
              >
                Regístrate
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <span className="hidden text-slate-500 sm:block">Hola, {user?.name}</span>
              <button
                onClick={logout}
                className="rounded-full border border-slate-300 px-3 py-2 text-xs uppercase tracking-wide text-slate-500 transition hover:border-primary hover:text-primary"
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
