const Footer = () => (
  <footer className="mt-20 bg-primary text-brandSand">
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">Aportura</h3>
          <p className="mt-3 text-sm text-brandSand/80">
            Impulsamos la capacitación continua con experiencias híbridas que integran cultura, arte y desarrollo profesional
            para toda la comunidad.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-brandSand/70">Explora</h4>
          <ul className="mt-3 space-y-2 text-sm text-brandSand/80">
            <li>Inicio</li>
            <li>Cursos</li>
            <li>Danza y eventos</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-brandSand/70">Contacto</h4>
          <p className="mt-3 text-sm text-brandSand/80">Av. Cultura Viva 742, Lima, Perú</p>
          <p className="text-sm text-brandSand/80">comunidad@aportura.pe</p>
          <p className="text-sm text-brandSand/80">(+51) 999-000-123</p>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-brandSand/60">
        © {new Date().getFullYear()} Aportura. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
