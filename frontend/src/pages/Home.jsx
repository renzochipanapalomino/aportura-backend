import { Link } from 'react-router-dom';

const galleryItems = [
  {
    id: 1,
    title: 'Música y Danza de nuestra provincia y departamento de Arequipa',
    image:
      'https://scontent.ftcq3-1.fna.fbcdn.net/v/t39.30808-6/571290624_1107105121411758_8748723166794922654_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEmnM2YWy46bIsNnSe4R7OBayxfgYDlHNBrLF-BgOUc0MQGBAncwToTwgELBC8DgLEsg7KfiZjg9UzdPgQCD-h7&_nc_ohc=Y1MTKszardcQ7kNvwGXdOrL&_nc_oc=AdkviBqtF1W3Kp2WQyKAcTeTQA41L2HrQ017RaTZtY6kvbEdSqXxOCNiZevih_N4_RA&_nc_zt=23&_nc_ht=scontent.ftcq3-1.fna&_nc_gid=Gwrhcjp3fKriVzIVOlAJQQ&oh=00_AfikXCpI0I1NHg-0MWRxWeEdCaNqqUqzsvKbFs0Ab2Fmfg&oe=690EE1C6',
    description: 'Talleres y presentaciones que conectan el talento local con el turismo regional.'
  },
  {
    id: 2,
    title: 'Cultura de nuestra provincia y departamento de Arequipa',
    image:
      'https://scontent.ftcq3-1.fna.fbcdn.net/v/t39.30808-6/469226981_1090504122456312_7530932388672681400_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE9cMTCBaxI_AZYOSJ94yI4xmr3ug6kflDGave6DqR-ULbvgbHlYv-KSKRUYSOU_ioyHRfx1dp0ikxxfQEPOeZQ&_nc_ohc=wmbPjgl-1yAQ7kNvwFCqWHh&_nc_oc=AdmXpBVizukn2uDRiY-T-7jZ19mP4QHXlPLOBu-2eyzAixGLBPrP4aB_KMKmnS4A&_nc_zt=23&_nc_ht=scontent.ftcq3-1.fna&_nc_gid=wHTAI6WAYyg_Q9Mr8ENC2g&oh=00_AfhhtG2W-cVoXypJ7Dy-FjTC0lyrCE1jlfJ94bZT2AqBEQ&oe=690EE779',
    description: 'Actividades que destacan nuestra identidad regional y fortalecen tu perfil profesional en turismo.'
  },
  {
    id: 3,
    title: 'Eventos de nuestra provincia y departamento de Arequipa',
    image:
      'https://scontent.ftcq3-1.fna.fbcdn.net/v/t39.30808-6/469399789_1090503842456340_686464472171251050_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHx-5c_n8igwh-_tpwXSW68k9LON6qHfbST0s43qod9tAV4fh9difu_AAZ3pwM8sWuExbZV0UOXwOS2Vn-Gmj-a&_nc_ohc=7AFIJva6qEUQ7kNvwEjOJMm&_nc_oc=AdnhHsDoHg0O0sr9hALn8tPwR7IGWKnSg3Ay8kGvjKKlGtBN0ONpXJlDw_-YYy4tKHo&_nc_zt=23&_nc_ht=scontent.ftcq3-1.fna&_nc_gid=CBuB7s88mG-fQ3p8pRboCg&oh=00_AfiyBTRZtY5mSzkyEkSJMq1-A4TLqrw0oZCTkYW2rxfCtw&oe=690EC314',
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