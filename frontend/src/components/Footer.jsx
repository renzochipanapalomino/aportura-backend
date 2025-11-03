const Footer = () => (
  <footer className="mt-16 bg-slate-900 text-slate-100">
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">Formación Integral</h3>
          <p className="mt-3 text-sm text-slate-300">
            Impulsamos el desarrollo profesional y artístico con programas de capacitación de primer nivel para toda la comunidad.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Enlaces</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Inicio</li>
            <li>Cursos</li>
            <li>Nosotros</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Contacto</h4>
          <p className="mt-3 text-sm text-slate-300">
            Av. Arte y Formación 123, Lima, Perú
          </p>
          <p className="text-sm text-slate-300">info@formacionintegral.pe</p>
          <p className="text-sm text-slate-300">(+51) 999-000-123</p>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Formación Integral. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
