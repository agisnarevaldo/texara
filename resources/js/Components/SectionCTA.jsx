export default function SectionCTA() {
    return (
        <section className="cta-section py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-4">
                        Bergabunglah dengan Komunitas Texara
                    </h2>
                    <p className="text-xl mb-8">
                        Dapatkan akses ke artikel eksklusif, tutorial mendalam, dan diskusi interaktif.
                    </p>
                    <div className="space-x-4">
                        <a
                            href="/register"
                            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded shadow"
                        >
                            Daftar Sekarang
                        </a>
                        <a
                            href="/login"
                            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded shadow"
                        >
                            Masuk
                        </a>
                    </div>
                </div>
                <div className="flex-1 mt-4 md:mt-0">
                    <img
                        src="/images/online-collaboration.svg"
                        alt="Ilustrasi Komunitas"
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    )
}
