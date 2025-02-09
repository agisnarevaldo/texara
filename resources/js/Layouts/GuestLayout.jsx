import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo Texara */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Texara
          </Link>
          {/* Navigasi */}
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/articles" className="text-gray-700 hover:text-blue-600">
                  Artikel
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-blue-600">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                  Kontak
                </Link>
              </li>
              {/* Tautan Login/Registrasi untuk user tamu */}
              <li>
                <Link href="/login" className="text-gray-700 hover:text-blue-600">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-700 hover:text-blue-600">
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Konten utama */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2">Tentang Texara</h3>
            <p>
              Texara adalah platform berbagi pengetahuan untuk developer dan tech enthusiast.
              Berbagi ilmu adalah kunci inovasi.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Kategori Artikel</h3>
            <ul>
              <li>
                <Link href="/articles?category=software-development" className="hover:text-white">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/articles?category=ai" className="hover:text-white">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/articles?category=web-development" className="hover:text-white">
                  Web & Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/articles?category=cybersecurity" className="hover:text-white">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/articles?category=data-science" className="hover:text-white">
                  Data Science
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Ikuti Kami</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Instagram
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <label htmlFor="newsletter" className="block mb-2 text-sm">
                Berlangganan Newsletter
              </label>
              <div className="flex">
                <input
                  type="email"
                  id="newsletter"
                  placeholder="Email Anda"
                  className="w-full p-2 rounded-l border-0"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r">
                  Daftar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>
            &copy; {new Date().getFullYear()} Texara. All rights reserved.{' '}
            <Link href="/terms" className="hover:text-white">
              Syarat & Ketentuan
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
