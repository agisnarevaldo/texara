export default function SectionTesti() {
    return (
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
    )
}
