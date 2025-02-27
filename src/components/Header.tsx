import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-secondary to-primary text-text py-4 px-8 fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* 🔹 Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-accent hover:text-highlight transition"
        >
          Blog Headless
        </Link>

        {/* 🔹 Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-accent transition">Home</Link>
          <Link
            href="https://pedromssoares-portfolio.vercel.app/"
            className="hover:text-gray-300 transition"
            target="_self"
          >
            Sobre
          </Link>
          <Link
            href="https://pedromssoares-portfolio.vercel.app/contact"
            className="hover:text-gray-300 transition"
            target="_self"
          >
            Contato
          </Link>
        </nav>

        {/* 🔹 Botão de Menu Mobile */}
        <button onClick={() => setMenuOpen(true)} className="md:hidden p-2">
          <Menu size={28} />
        </button>
      </div>

      {/* 🔹 Sidebar Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-primary shadow-lg flex flex-col p-6 space-y-6 md:hidden"
          >
            {/* 🔹 Botão de Fechar */}
            <button onClick={() => setMenuOpen(false)} className="self-end p-2">
              <X size={28} />
            </button>

            {/* 🔹 Links do Menu */}
            <Link href="/" className="hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="https://pedromssoares-portfolio.vercel.app/" className="hover:text-gray-300 transition" target="_self" onClick={() => setMenuOpen(false)}>
              Sobre
            </Link>
            <Link href="https://pedromssoares-portfolio.vercel.app/contact" className="hover:text-gray-300 transition" target="_self" onClick={() => setMenuOpen(false)}>
              Contato
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}