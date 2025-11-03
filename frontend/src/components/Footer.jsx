import { FaFacebook, FaTiktok } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';

const Footer = () => (
  <footer className="mt-16 bg-primary text-white">
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">Aprotura</h3>
          <p className="mt-3 text-sm text-white/80">
            Impulsamos el desarrollo profesional y artístico con programas de capacitación de primer nivel para toda la comunidad.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">Enlaces</h4>

          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a 
                href="https://www.facebook.com/aproturaqp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors flex items-center gap-2 font-medium"
              >
                <FaFacebook className="text-xl" />
                <span className="hover:underline">Facebook</span>
              </a>
            </li>
            <li>
              <a 
                href="https://www.tiktok.com/@aproturaoficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-pink-300 transition-colors flex items-center gap-2 font-medium"
              >
                <FaTiktok className="text-xl" />
                <span className="hover:underline">TikTok</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-lg" />
              <span>Nosotros</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">Contacto</h4>
          <p className="mt-3 text-sm text-white/80 flex items-center gap-2">
            <FaLocationDot className="text-lg" />
            Arequipa, Mariano Melgar - Perú
          </p>
          <p className="text-sm text-white/80 flex items-center gap-2 mt-2">
            <MdEmail className="text-lg" />
            <a href="mailto:aproturaaqp.peru@gmail.com" className="hover:text-white hover:underline">
              aproturaaqp.peru@gmail.com
            </a>
          </p>
          <p className="text-sm text-white/80 flex items-center gap-2 mt-2">
            <BsTelephone className="text-lg" />
            <a href="tel:+51951936792" className="hover:text-white hover:underline">
              (+51) 951 936 792
            </a>
          </p>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Aprotura. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
