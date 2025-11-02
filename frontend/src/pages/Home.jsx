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
      <section className="relative overflow-hidden bg-primary text-brandSand">
        <div className="absolute inset-0">
          <div className="absolute -left-10 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center">
          <div className="w-full space-y-6 lg:w-1/2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em]">
              Aportura
            </span>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Formación que impulsa el talento cultural y profesional del Perú
            </h1>
            <p className="text-lg text-brandSand/80">
              Diseñamos experiencias de aprendizaje con especialistas, programas híbridos y eventos artísticos que fortalecen
              la comunidad.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/cursos"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-brandSand/80"
              >
                Ver cursos
              </Link>
              <Link
                to="/registro"
                className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Únete a Aportura
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="grid gap-4 sm:grid-cols-2">
              {galleryItems.map((item) => (
                <figure
                  key={item.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-lg backdrop-blur"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent p-4 text-sm font-medium text-white">
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
            <h2 className="text-3xl font-bold text-slate-900">Reseña de Aportura</h2>
            <p className="mt-4 text-lg text-slate-600">
              Somos una asociación comprometida con crear oportunidades de capacitación para artistas, emprendedores y gestores
              culturales. Nuestro enfoque integral combina tecnología, acompañamiento docente y eventos presenciales para
              potenciar cada talento.
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Con nuestra plataforma puedes acceder a cursos gratuitos, especializaciones premium y experiencias en vivo que
              conectan a la comunidad creativa del país.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-slate-900">Beneficios de ser parte</h3>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                Mentoría con especialistas reconocidos y acompañamiento personalizado.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                Biblioteca digital, eventos híbridos y contenidos descargables exclusivos.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                Comunidad activa para networking profesional y cultural.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h2 className="text-3xl font-bold text-slate-900">Danza y eventos</h2>
            <Link to="/cursos" className="text-sm font-semibold text-primary">
              Explorar cursos
            </Link>
          </div>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Celebramos la cultura desde talleres, muestras artísticas y festivales que reúnen a talentos emergentes y
            profesionales.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {galleryItems.map((item) => (
              <div key={item.id} className="group overflow-hidden rounded-2xl border border-brandSand/60 bg-brandSand shadow-sm">
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
