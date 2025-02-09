import React from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Welcome({ canLogin, canRegister }) {
  return (
    <GuestLayout>
      <Head title="Texara – Where Knowledge Meets Code" />

      {/* 1. Hero Section */}
      <section className="hero-section bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Teks Hero */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4">
              Texara – Where Knowledge Meets Code
            </h1>
            <p className="text-xl mb-8">
              Platform berbagi ilmu untuk developer dan tech enthusiast. Temukan
              wawasan terbaru, tutorial mendalam, dan diskusi teknologi dari
              komunitas yang inovatif.
            </p>
            <div className="space-x-4">
              <Link
                href="/post/create"
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded shadow"
              >
                Mulai Menulis
              </Link>
              <Link
                href="/articles"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded shadow"
              >
                Jelajahi Artikel
              </Link>
            </div>
          </div>
          {/* Ilustrasi Hero */}
          <div className="flex-1 mt-4 md:mt-0">
            <img
              src="/images/dev.svg"
              alt="Ilustrasi Teknologi"
              className="w-full"
            />
          </div>
        </div>
        {/* Animasi Tipografi Dinamis */}
        <div className="mt-10 text-center text-2xl font-medium">
          <span className="inline-block animate-pulse">AI</span>,{' '}
          <span className="inline-block animate-pulse">Cybersecurity</span>,{' '}
          <span className="inline-block animate-pulse">Web Development</span>,{' '}
          <span className="inline-block animate-pulse">Data Science</span>
        </div>
      </section>

      {/* 2. Mengapa Texara? (Value Proposition Section) */}
      <section className="why-texara py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Mengapa Bergabung dengan Texara?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start">
              <span className="text-green-500 text-3xl mr-4">✅</span>
              <div>
                <h3 className="text-xl font-semibold">Berbagi Pengetahuan</h3>
                <p>Tulis dan publikasikan artikel tentang teknologi, coding, AI, dan lainnya.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 text-3xl mr-4">✅</span>
              <div>
                <h3 className="text-xl font-semibold">Jaringan Profesional</h3>
                <p>Terhubung dengan developer dan tech enthusiast dari seluruh dunia.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 text-3xl mr-4">✅</span>
              <div>
                <h3 className="text-xl font-semibold">Belajar dari Ahli</h3>
                <p>Akses artikel berkualitas dari para profesional dan kontributor berpengalaman.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 text-3xl mr-4">✅</span>
              <div>
                <h3 className="text-xl font-semibold">Diskusi Interaktif</h3>
                <p>Komentar, tanya jawab, dan diskusi tentang tren teknologi terbaru.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Kategori Konten (Content Highlights Section) */}
      <section className="content-categories py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Jelajahi Dunia Teknologi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Kartu kategori */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-semibold mb-2">Software Development</h3>
              <p>Framework, best practices, dan tutorial coding.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
              <p>Konsep AI, model ML, dan eksperimen terbaru.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-2">Web & Mobile Development</h3>
              <p>Frontend, backend, dan teknologi full-stack.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
              <p>Teknik keamanan siber dan analisis ancaman terbaru.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Data Science</h3>
              <p>Big Data, statistik, dan alat data modern.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimoni & Komunitas (Social Proof Section) */}
      <section className="testimonials py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Apa Kata Mereka?
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow flex items-center">
              <span className="text-2xl mr-4">💬</span>
              <p className="text-lg">
                “Texara membantu saya memahami konsep kompleks dalam AI dengan cara yang lebih sederhana.” <br />
                <span className="font-semibold">– Rizky, Data Scientist</span>
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow flex items-center">
              <span className="text-2xl mr-4">💬</span>
              <p className="text-lg">
                “Sebagai developer pemula, saya menemukan banyak insight berharga dari komunitas Texara.” <br />
                <span className="font-semibold">– Alya, Frontend Developer</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call-to-Action Final (Join Now Section) */}
      <section className="cta-final py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Mulai Berbagi & Belajar Hari Ini!
          </h2>
          <p className="text-xl mb-8">
            Bergabunglah dengan Texara dan jadilah bagian dari komunitas berbagi pengetahuan teknologi.
            Mulai menulis, berdiskusi, dan eksplorasi dunia digital bersama kami.
          </p>
          <div className="space-x-4">
            <Link
              href="/register"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded"
            >
              Daftar Sekarang
            </Link>
            <Link
              href="/articles"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded"
            >
              Baca Artikel
            </Link>
          </div>
          <div className="mt-8">
            <img
              src="/images/online-collaboration.svg"
              alt="Ilustrasi CTA"
              className="mx-auto w-2/3"
            />
          </div>
        </div>
      </section>

    </GuestLayout>
  );
}
