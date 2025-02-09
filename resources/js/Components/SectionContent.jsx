export default function SectionContent() {
    return (
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
    )
}
