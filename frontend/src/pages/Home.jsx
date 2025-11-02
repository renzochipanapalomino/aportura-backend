import { Link } from 'react-router-dom';

const galleryItems = [
  {
    id: 1,
    title: 'Gala de Danza Contemporánea',
    image:
      'https://images.unsplash.com/photo-1521649415030-41e4b49984f4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Encuentro Cultural Andino',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Festival de Ritmos Latinos',
    image:
      'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=800&q=80',
  },
];

const Home = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,102,255,0.45),_transparent_60%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
              Plataforma de capacitación
            </span>
            <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
              Crece con programas exclusivos de formación profesional y artística
            </h1>
            <p className="mt-6 text-lg text-slate-200">
              Conecta con expertos en distintas disciplinas, accede a cursos gratuitos y desbloquea contenidos premium para
              impulsar tu talento.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/cursos"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                Ver cursos
              </Link>
              <Link
                to="/registro"
                className="rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary hover:text-white"
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
                  className="group relative overflow-hidden rounded-3xl border border-slate-800/50 bg-slate-800/60 shadow-lg"
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
            <h2 className="text-3xl font-bold text-slate-900">Reseña de la institución</h2>
            <p className="mt-4 text-lg text-slate-600">
              Somos una asociación comprometida con el desarrollo profesional y artístico de la región. Desde hace más de 10
              años ofrecemos programas de formación continua, talleres especializados y eventos culturales que integran a la
              comunidad educativa, empresarial y artística.
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Nuestra plataforma digital permite acceder a cursos gratuitos y premium diseñados por especialistas, facilitando
              el aprendizaje flexible y la actualización constante.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-slate-900">Beneficios de unirte</h3>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                Acceso a expertos de trayectoria internacional.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                Biblioteca de recursos descargables y grabaciones.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                Eventos presenciales y virtuales exclusivos para miembros premium.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-900">Danza y eventos</h2>
            <Link to="/cursos" className="text-sm font-semibold text-primary">
              Explorar cursos
            </Link>
          </div>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Descubre nuestras actividades culturales, festivales y espectáculos que promueven la danza, la música y la
            integración comunitaria.
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
                    Talleres, presentaciones y experiencias que fortalecen nuestro vínculo con la comunidad artística.
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
