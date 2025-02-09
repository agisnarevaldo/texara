import {Link} from "@inertiajs/react";

export default function SectionHero() {
  return (
    <section className="hero-section bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
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
        <div className="flex-1 mt-4 md:mt-0">
          <img
            src="/images/dev.svg"
            alt="Ilustrasi Teknologi"
            className="w-full"
          />
        </div>
      </div>
      <div className="mt-10 text-center text-2xl font-medium">
        <span className="inline-block animate-pulse">AI</span>,{' '}
        <span className="inline-block animate-pulse">Cybersecurity</span>,{' '}
        <span className="inline-block animate-pulse">Web Development</span>,{' '}
        <span className="inline-block animate-pulse">Data Science</span>
      </div>
    </section>
  );
}
