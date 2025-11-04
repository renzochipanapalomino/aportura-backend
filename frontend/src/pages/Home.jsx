import { Link } from 'react-router-dom';

const galleryItems = [
  {
    id: 1,
    title: 'Música y Danza de nuestra provincia y departamento de Arequipa',
    image: '/images/gallery/danza-musica.jpg',
    description: 'Talleres y presentaciones que conectan el talento local con el turismo regional.'
  },
  {
    id: 2,
    title: 'Cultura de nuestra provincia y departamento de Arequipa',
    image: '/images/gallery/cultura.jpg',
    description: 'Actividades que destacan nuestra identidad regional y fortalecen tu perfil profesional en turismo.'
  },
  {
    id: 3,
    title: 'Eventos de nuestra provincia y departamento de Arequipa',
    image: '/images/gallery/eventos.jpg',
    description: 'Festivales, encuentros y experiencias diseñadas para impulsar el turismo local y tu crecimiento profesional.'
  }
];

const Home = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_65%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Plataforma de capacitación de la asociación de turismo APROTURA
            </span>
            <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
              Formamos profesionales para el turismo que transforma
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Únete a nuestra comunidad, accede a cursos gratuitos y contenidos exclusivos diseñados para elevar tu perfil profesional y contribuir al crecimiento del turismo en el Perú.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/cursos"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary-light"
              >
                Ver cursos
              </Link>
              <Link
                to="/registro"
                className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-primary-dark"
              >
                Únete a la comunidad
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="grid gap-4 sm:grid-cols-2">
              {galleryItems.map((item) => (
                <figure
                  key={item.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4 text-sm font-medium text-white">
                    {item.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Reseña de la asociación de turismo APROTURA</h2>
            <p className="mt-4 text-lg text-slate-600">
              Somos una asociación comprometida con el desarrollo profesional del sector turismo en la región de Arequipa. Ofrecemos programas de formación continua, talleres especializados y espacios de vinculación para la comunidad educativa y empresarial.
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Nuestra plataforma digital permite acceder a cursos gratuitos y contenidos exclusivos diseñados por especialistas, facilitando el aprendizaje flexible y la actualización constante.
            </p>
            <div className="mt-8">
              <Link
                to="/sobre-nosotros"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_-25px_rgba(123,31,58,0.6)] transition-transform hover:-translate-y-1"
              >
                Conoce más sobre APROTURA
                <span aria-hidden="true" className="text-lg">
                  →
                </span>
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-slate-900">Beneficios de unirte</h3>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                Acceso a expertos de trayectoria nacional e internacional.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                Biblioteca de recursos descargables y grabaciones.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                Eventos presenciales y virtuales exclusivos para miembros de APROTURA.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-900">Noticias y Eventos</h2>
            <Link to="/cursos" className="text-sm font-semibold text-primary">
              Explorar cursos
            </Link>
          </div>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Descubre nuestras actividades culturales, festivales y espectáculos que promueven la danza, la música y la integración comunitaria.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {galleryItems.map((item) => (
              <div key={item.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-52 w-full object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;