import { Link } from 'react-router-dom';
import { FaFacebook, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaTiktok } from 'react-icons/fa';
import { FaLandmark, FaStar, FaHandsHelping, FaLeaf, FaLightbulb, FaGraduationCap, FaMusic, FaCalendarAlt, FaNetworkWired } from 'react-icons/fa';

const values = [
  {
    title: 'Identidad regional',
    description:
      'Valoramos las raíces culturales de Arequipa y las incorporamos en cada programa, presentación y alianza que gestionamos.'
  },
  {
    title: 'Excelencia profesional',
    description:
      'Nos comprometemos con altos estándares de formación, servicios y eventos para elevar el turismo regional.'
  },
  {
    title: 'Inclusión y colaboración',
    description:
      'Promovemos la participación de profesionales, comunidades y organizaciones con respeto, equidad y escucha activa.'
  },
  {
    title: 'Sostenibilidad turística',
    description:
      'Impulsamos prácticas responsables que cuidan el entorno natural, fortalecen el tejido social y preservan el legado cultural.'
  },
  {
    title: 'Innovación y creatividad',
    description:
      'Apostamos por ideas frescas, formatos disruptivos y experiencias memorables que posicionan a Arequipa en el mapa turístico.'
  }
];

const historyMilestones = [
  {
    year: 'Fundación',
    detail:
      'Nacemos como una asociación comprometida con el turismo, la danza y la cultura en la provincia y departamento de Arequipa.'
  },
  {
    year: 'Alianzas estratégicas',
    detail:
      'Construimos vínculos con instituciones educativas, municipalidades y empresas turísticas para potenciar nuestro alcance.'
  },
  {
    year: 'Programas insignia',
    detail:
      'Desarrollamos talleres, festivales y presentaciones que conectan a la comunidad con su identidad cultural.'
  },
  {
    year: 'Presente',
    detail:
      'Seguimos generando experiencias que transforman el turismo en Arequipa.'
  }
];

const leadership = [
  {
    name: 'Humberto Michel Chipana Palomino',
    role: 'Fundador de la asociacion de Profesionales y Técnicos de Turismo de Arequipa',
    bio: 'Turismo y Hotelería',
    photo: '/images/aprotura-director.svg'
  }
];

const programs = [
  {
    title: 'Programas de formación en turismo',
    description:
      'Cursos, talleres y certificaciones diseñados para profesionales, emprendedores y estudiantes que desean fortalecer sus capacidades.'
  },
  {
    title: 'Actividades de música y danza',
    description:
      'Talleres, presentaciones y experiencias que integran expresiones artísticas con propuestas turísticas memorables.'
  },
  {
    title: 'Eventos turísticos y culturales',
    description:
      'Festivales, ferias y encuentros comunitarios que impulsan la visibilidad de Arequipa y fomentan el orgullo regional.'
  },
  {
    title: 'Servicios de vinculación',
    description:
      'Espacios para conectar a profesionales, empresas del sector y comunidades locales, generando redes de colaboración.'
  }
];

const impactHighlights = [
  {
    metric: '+300',
    description: 'Participantes capacitados en turismo y cultura durante nuestras ediciones recientes.'
  },
  {
    metric: '+25',
    description: 'Eventos con presencia comunitaria y cobertura mediática en la región.'
  },
  {
    metric: 'Red viva',
    description: 'Profesionales, colectivos artísticos y emprendedores articulados en proyectos colaborativos.'
  }
];

const involvementActions = [
  'Hazte miembro activo de la asociación.',
  'Participa en nuestros cursos y talleres especializados.',
  'Apoya o presenta propuestas en nuestros eventos de danza, cultura y turismo.',
  'Síguenos en redes sociales y comparte nuestras convocatorias.'
];

const About = () => {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(123,31,58,0.35),_transparent_65%)]" />
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary-light">
              Asociacion de turismo Aprotura Arequipa
            </span>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              Turismo y cultura que transforman la ciudad de Arequipa
            </h1>
            <p className="text-lg text-white/80">
              Somos APROTURA, la asociación que impulsa experiencias y formación en turismo de la ciudad de Arequipa con un enfoque profesional y transformador.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/registro"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-20px_rgba(123,31,58,0.8)] transition-transform hover:-translate-y-1 hover:shadow-[0_35px_50px_-25px_rgba(123,31,58,0.85)]"
              >
                Únete a la comunidad
              </Link>
              <Link
                to="/cursos"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white/80 transition-transform hover:-translate-y-1 hover:bg-white/10 hover:text-white"
              >
                Explora nuestros programas
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-32 w-32 rounded-full bg-primary/40 blur-3xl md:block" />
            <div className="absolute -right-10 bottom-0 hidden h-28 w-28 rounded-full bg-primary-dark/40 blur-3xl md:block" />
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-white/20 via-white/10 to-white/5 p-10 shadow-[0_45px_120px_-50px_rgba(15,23,42,1)] backdrop-blur-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">Quiénes somos</p>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                Trabajamos para promover la identidad local, fortalecer las capacidades del sector turístico y generar eventos que impulsen el crecimiento regional.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/10 p-5 shadow-[0_25px_60px_-35px_rgba(255,255,255,0.7)]">
                  <h3 className="text-3xl font-black text-primary-light">Misión</h3>
                  <p className="mt-3 text-sm text-white/75">
                    Empoderar a profesionales, emprendedores y comunidades mediante capacitación, danza, cultura y turismo.
                  </p>
                </div>
                <div className="rounded-3xl bg-white/10 p-5 shadow-[0_25px_60px_-35px_rgba(255,255,255,0.7)]">
                  <h3 className="text-3xl font-black text-primary-light">Visión</h3>
                  <p className="mt-3 text-sm text-white/75">
                    Ser la asociación líder en el sur del Perú para transformar el turismo, promoviendo cultura, profesionalismo y desarrollo regional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white via-white/95 to-primary-light/60 py-20 text-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900">Valores que nos guían</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Nuestros principios orientan cada decisión y aseguran que nuestras iniciativas integren identidad, excelencia y sostenibilidad.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[
                { icon: FaLandmark, title: values[0].title, description: values[0].description },
                { icon: FaStar, title: values[1].title, description: values[1].description },
                { icon: FaHandsHelping, title: values[2].title, description: values[2].description },
                { icon: FaLeaf, title: values[3].title, description: values[3].description },
                { icon: FaLightbulb, title: values[4].title, description: values[4].description }
              ].map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="group h-full transform rounded-3xl bg-white/80 p-8 shadow-[0_40px_80px_-45px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_50px_110px_-45px_rgba(123,31,58,0.55)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-inner shadow-primary/20 transition">
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{description}</p>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_100px_-55px_rgba(15,23,42,1)] backdrop-blur-2xl">
              <h2 className="text-3xl font-bold text-white">Historia y trayectoria</h2>
              <p className="mt-4 text-base text-white/70">
                Desde nuestra fundación hasta la actualidad, APROTURA ha tejido una red de experiencias que unen danza, cultura y turismo para Arequipa.
              </p>
              <div className="mt-10 space-y-6">
                {historyMilestones.map((milestone) => (
                  <div
                    key={milestone.year}
                    className="rounded-3xl border border-white/10 bg-white/8 p-5 shadow-[0_20px_60px_-45px_rgba(255,255,255,0.6)]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">{milestone.year}</p>
                    <p className="mt-2 text-sm text-white/80">{milestone.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-white/60">
                Fundada en el año 2021, la Asociación Peruana de Turismo – APROTURA cuenta con más de 4 años de experiencia impulsando el turismo y la cultura en la ciudad de Arequipa
              </p>
            </div>
            <div className="space-y-8">
              {leadership.map((leader) => (
                <div
                  key={leader.name}
                  className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/90 via-white/80 to-primary-light/60 p-10 text-slate-900 shadow-[0_40px_80px_-55px_rgba(123,31,58,0.6)]"
                >
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                  <div className="relative grid gap-8 lg:grid-cols-[240px_1fr]">
                    <div className="flex items-center justify-center">
                      <div className="relative h-56 w-56 rounded-[2rem] bg-gradient-to-br from-primary/10 via-white to-primary-light p-[6px] shadow-[0_25px_60px_-45px_rgba(15,23,42,0.5)]">
                        <div className="h-full w-full overflow-hidden rounded-[1.7rem] bg-white">
                          <img
                            src={leader.photo}
                            alt={leader.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Equipo y liderazgo</p>
                      <h3 className="text-3xl font-bold text-slate-900">{leader.name}</h3>
                      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">{leader.role}</p>
                      <p className="text-base leading-relaxed text-slate-700">{leader.bio}</p>
                      <p className="text-xs text-slate-500">
                         los datos reales del equipo directivo 
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">Programas y servicios</h2>
              <p className="mt-4 text-base text-white/70">
                Diseñamos experiencias de aprendizaje y difusión cultural que elevan la competitividad del turismo en Arequipa.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {[
                  { icon: FaGraduationCap, title: programs[0].title, description: programs[0].description },
                  { icon: FaMusic, title: programs[1].title, description: programs[1].description },
                  { icon: FaCalendarAlt, title: programs[2].title, description: programs[2].description },
                  { icon: FaNetworkWired, title: programs[3].title, description: programs[3].description }
                ].map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_-40px_rgba(0,0,0,0.6)] transition duration-300 hover:-translate-y-2 hover:border-primary-light/60"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white shadow-inner shadow-primary/40 transition group-hover:bg-primary-light">
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                    <p className="mt-3 text-sm text-white/75">{description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-10 shadow-[0_40px_90px_-55px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-light">Impacto y logros</h3>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {impactHighlights.map((highlight) => (
                  <div
                    key={highlight.metric}
                    className="rounded-3xl bg-white/10 p-6 text-center shadow-[0_25px_60px_-40px_rgba(123,31,58,0.65)]"
                  >
                    <p className="text-3xl font-black text-white">{highlight.metric}</p>
                    <p className="mt-3 text-xs text-white/70">{highlight.description}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-white/60">
                Asociacion de Profesionales y Técnicos de Turismo de Arequipa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white via-primary-light to-white py-20 text-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Cómo pertenecer a la Asociacion de turismo Aprotura</h2>
              <p className="mt-4 text-base text-slate-600">
                Sé parte del turismo que transforma Arequipa siguiendo cualquiera de estas acciones.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-slate-600">
                {involvementActions.map((action) => (
                  <li key={action} className="flex items-start gap-4">
                    <span className="mt-1 h-3 w-3 rounded-full bg-primary" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/registro"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-18px_rgba(123,31,58,0.7)] transition-transform hover:-translate-y-1"
                >
                  Hazte miembro
                </Link>
                <Link
                  to="/cursos"
                  className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-1 hover:border-primary hover:bg-primary/10"
                >
                  Inscríbete en un curso
                </Link>
              </div>
            </div>
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-[0_40px_90px_-60px_rgba(15,23,42,0.6)]">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Contacto y ubicación</h3>
              <div className="mt-8 space-y-6 text-sm text-slate-600">
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-primary" />
                  <span>Dirección: Arequipa, Mariano Melgar - Peru</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaWhatsapp className="text-primary" />
                  <span>Teléfono / WhatsApp: (+51) 951 936 792</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-primary" />
                  <span>Correo electrónico: aproturaaqp.peru@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaFacebook className="text-primary" />
                  <a
                    href="https://www.facebook.com/aproturaqp/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    facebook.com/aproturaqp
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FaTiktok className="text-primary" />
                  <a
                    href="https://www.tiktok.com/@aproturaoficial"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    @aproturaoficial
                  </a>
                </div>
              </div>
              <p className="mt-6 text-xs text-slate-500">
                Síguenos en nuestras redes sociales para estar al tanto de nuestros eventos y actividades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 text-center">
        <div className="absolute inset-x-0 bottom-0 -z-10 h-full bg-[radial-gradient(circle_at_bottom,_rgba(123,31,58,0.2),_transparent_70%)]" />
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-black text-white">¡Únete al turismo que transforma Arequipa!</h2>
          <p className="mt-4 text-lg text-white/80">
            Participa en nuestras próximas actividades, comparte tu talento y construyamos juntos nuevas oportunidades para la región.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/registro"
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_25px_60px_-35px_rgba(123,31,58,0.75)] transition-transform hover:-translate-y-1"
            >
              Postúlate como miembro
            </Link>
            <Link
              to="/cursos"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white/80 transition-transform hover:-translate-y-1 hover:bg-white/10 hover:text-white"
            >
              Conoce nuestros eventos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
