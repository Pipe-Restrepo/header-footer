import { useState } from "react";
import { Link } from "@remix-run/react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("ESP");
  const [darkMode, setDarkMode] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleLanguage = () =>
    setCurrentLanguage(currentLanguage === "ESP" ? "ENG" : "ESP");
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <nav className="flex items-center justify-between bg-gradient-to-b from-[#32526E] to-[#4B79A1] dark:bg-[#172a41] p-4 lg:px-20 w-full h-20 fixed top-0 z-50 shadow-lg sticky">
          <div className="flex items-center space-x-5 pl-4 lg:pl-20 w-full justify-between md:justify-start">
            <Link to="/home" className="text-white logo">
              <img
                src="/assets/images/logo-antivirus.png"
                alt="Antivirus Logo"
                className="h-24 md:h-20"
              />
            </Link>

            {/* Navegación*/}

            <nav className="hidden md:flex space-x-6">
              <Link to="#inicio" className="text-white hover:text-yellow-300">
                Inicio
              </Link>

              <Link
                to="#servicios"
                className="text-white hover:text-yellow-300"
              >
                Servicios
              </Link>

              <Link
                to="#oportunidades"
                className="text-white hover:text-yellow-300"
              >
                Oportunidades
              </Link>
            </nav>

            {/* Botón hamburguesa móvil */}

            <button
              className="md:hidden flex items-center p-2 focus:outline-none focus:ring-2 focus:ring-white filter invert brightness-0"
              onClick={toggleModal}
              aria-label="Abrir menú"
            >
              <img
                src="/assets/images/barra-de-menus.png"
                alt="Menú"
                className="w-8 h-8 object-contain"
              />
            </button>
          </div>

          {/* Iconos de registro/login */}

          <div className="hidden md:flex items-center space-x-8 pr-4 lg:relative filter brightness-0 invert">
            <div className="flex space-x-5 mr-3 mt-2">
              <div className="relative">
                <button onClick={toggleDropdown}>
                  <img
                    src="/assets/images/registro-logo.png"
                    alt="registro"
                    width="35px"
                  />
                </button>

                {/* Dropdown de login/register */}

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                    <ul className="py-1">
                      <li>
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/register"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Registro
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Botón de cambio de idioma */}

          <button
            onClick={toggleLanguage}
            className="ml-4 text-white hover:scale-110"
          >
            {currentLanguage}
          </button>

          {/* Modo Oscuro/Claro */}

          <div className="relative ml-3 lg:ml-5">
            <button
              onClick={toggleDarkMode}
              className="transition-transform transform hover:scale-110"
            >
              {darkMode ? (
                <img
                  src="/assets/images/modo-oscuro.png"
                  alt="Light Mode"
                  className="w-12 h-12 object-contain filter invert brightness-0"
                />
              ) : (
                <img
                  src="/assets/images/modo-oscuro.png"
                  alt="Dark Mode"
                  className="w-12 h-12 object-contain filter invert brightness-0"
                />
              )}
            </button>
          </div>
        </nav>

        {/* Buscador */}

        <div className="flex justify-center w-full bg-gradient-to-b from-[#32526E] to-[#4B79A1] pt-24 pb-6 mt-5">
          <div className="relative w-full max-w-4xl px-2 mx-auto">
            <input
              type="text"
              placeholder="Busca tu próxima oportunidad"
              className="w-full h-[50px] pl-12 pr-12 rounded-full bg-white text-gray-700 shadow-md focus:outline-none"
            />
            <img
              src="/assets/images/lupa-buscador.png"
              alt="Buscar"
              className="absolute left-8 top-1/2 transform -translate-y-1/2 w-6 h-6"
            />
            <button className="absolute right-8 top-1/2 transform -translate-y-1/2">
              <img
                src="/assets/images/filtro-buscador.png"
                alt="Filtrar"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
