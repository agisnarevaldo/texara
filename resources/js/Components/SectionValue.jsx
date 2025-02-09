export default function SectionValue() {
    return (
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
    )
}
