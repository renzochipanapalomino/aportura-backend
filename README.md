# 🧠 APORTURA BACKEND Y FRONTEND

Servidor backend desarrollado con **Node.js, Express, PostgreSQL y JWT** y un nuevo cliente web en **React + TailwindCSS** para la plataforma de capacitación en línea.

---

## 🚀 Tecnologías utilizadas

- **Backend**: Node.js, Express.js, PostgreSQL, JWT, bcryptjs, dotenv, CORS.
- **Frontend**: Vite, React 18, React Router, TailwindCSS, Axios.

---

## ⚙️ Instalación y ejecución del backend

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/renzochipanapalomino/aportura-backend.git
   cd aportura-backend
   ```
2. Instalar dependencias del backend:
   ```bash
   npm install
   ```
3. Configurar variables de entorno (ver `.env.example`).
4. Ejecutar migraciones/seed si aplica.
5. Iniciar el servidor:
   ```bash
   npm start
   ```
   El backend se ejecutará en `http://localhost:4000` por defecto.

---

## 💻 Instalación y ejecución del frontend (React + TailwindCSS)

1. Desde la raíz del repositorio entra a la carpeta `frontend`:
   ```bash
   cd frontend
   ```
2. Instala las dependencias del proyecto React:
   ```bash
   npm install
   ```
3. Asegúrate de que el backend esté corriendo en `http://localhost:4000`.
4. Inicia el servidor de desarrollo del frontend:
   ```bash
   npm run dev
   ```
   El proyecto abrirá automáticamente en `http://localhost:5173`.

### Variables de entorno del frontend

- Puedes definir `VITE_API_URL` para apuntar a otra URL del backend (por defecto usa `http://localhost:4000`).

### Construcción para producción

1. Ajusta `VITE_API_URL` a la URL pública del backend.
2. Ejecuta:
   ```bash
   npm run build
   ```
3. Sirve la carpeta `dist` con tu servicio estático favorito.

---

## 📁 Estructura destacada del frontend

```
frontend/
├── src/
│   ├── components/      # Componentes reutilizables (Navbar, Footer, CourseCard, ProtectedRoute)
│   ├── context/         # Contexto de autenticación y manejo de token
│   ├── pages/           # Vistas principales (Home, Cursos, Registro, Login, Perfil, Admin, Detalle)
│   ├── services/        # Cliente Axios centralizado
│   ├── App.jsx          # Configuración de rutas
│   └── main.jsx         # Punto de entrada con React Router
├── index.html
├── tailwind.config.js
└── vite.config.js
```

---

## 📌 Notas importantes

- El control de acceso a cursos premium y rutas administrativas utiliza JWT emitidos por el backend.
- Para crear usuarios administradores, asegúrate de asignar el rol `admin` desde la base de datos o endpoints existentes.
- Los endpoints consumidos por el frontend deben existir en el backend (`/api/auth/login`, `/api/auth/register`, `/api/cursos`, `/api/cursos/:id`, `/api/auth/perfil`).

¡Listo! Con esto tendrás la plataforma completa de capacitación funcionando en local.
