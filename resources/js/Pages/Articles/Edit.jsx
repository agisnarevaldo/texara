import React from 'react';
import { Head, useForm } from '@inertiajs/react';

export default function Edit({ article }) {
    const { data, setData, put, processing, errors } = useForm({
        title: article.title,
        content: article.content,
        image: null, // untuk file baru (jika diunggah)
    });

    const submit = (e) => {
        e.preventDefault();
        // Mengirimkan data dengan method PUT ke route update
        put(route('articles.update', article.id));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Head title="Edit Artikel" />
            <h1 className="text-3xl font-bold mb-6">Edit Artikel</h1>
            <form onSubmit={submit} encType="multipart/form-data">
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Judul</label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className="w-full border p-2"
                    />
                    {errors.title && <div className="text-red-500">{errors.title}</div>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Konten (Markdown)</label>
                    <textarea
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                        className="w-full border p-2"
                        rows="10"
                    ></textarea>
                    {errors.content && <div className="text-red-500">{errors.content}</div>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Gambar (Opsional)</label>
                    <input
                        type="file"
                        onChange={(e) => setData('image', e.target.files[0])}
                        className="w-full"
                    />
                    {errors.image && <div className="text-red-500">{errors.image}</div>}
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Perbarui Artikel
                </button>
            </form>
        </div>
    );
}
