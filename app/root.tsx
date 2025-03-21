import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration} from "@remix-run/react";
import Header from "~/components/Header";  // Importar el Header
import Footer from "~/components/Footer";  // Importar el Footer
import styles from"./tailwind.css";

export const links = () => [
  { rel: "stylesheet", href: styles }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {/* Aquí va el header */}
        <Header />

        {/* Aquí va el contenido de cada ruta */}
        <Outlet />

        {/* Aquí va el footer */}
        <Footer />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
