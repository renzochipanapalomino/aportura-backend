const Footer = () => (
  <footer className="mt-16 bg-primary text-white">
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">Aportura</h3>
          <p className="mt-3 text-sm text-white/80">
            Impulsamos el desarrollo profesional y artístico con programas de capacitación de primer nivel para toda la comunidad.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">Enlaces</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>Inicio</li>
            <li>Cursos</li>
            <li>Nosotros</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">Contacto</h4>
          <p className="mt-3 text-sm text-white/80">
            Av. Innovación 123, Lima, Perú
          </p>
          <p className="text-sm text-white/80">contacto@aportura.pe</p>
          <p className="text-sm text-white/80">(+51) 999-000-123</p>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Aportura. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
