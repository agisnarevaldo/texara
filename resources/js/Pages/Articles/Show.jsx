import React from 'react';
import { Head, Link } from '@inertiajs/react';
import ReactMarkdown from 'react-markdown';

export default function Show({ article }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <Head title={article.title} />
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <p className="text-gray-600 mb-4 text-sm">
                Ditulis oleh {article.user.name} pada {new Date(article.created_at).toLocaleDateString()}
            </p>

            {article.image && (
                <img
                    src={`/storage/${article.image}`}
                    alt={article.title}
                    className="w-full object-cover mb-4 rounded"
                />
            )}

            <div className="prose">
                <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>

            {/* Tampilkan tombol edit/hapus jika user yang login adalah pemilik artikel */}
            <div className="mt-6">
                {article.canEdit && (
                    <>
                        <Link
                            href={`/articles/${article.id}/edit`}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded mr-4"
                        >
                            Edit
                        </Link>
                        <form
                            method="POST"
                            action={`/articles/${article.id}`}
                            onSubmit={(e) => {
                                if (!confirm('Yakin ingin menghapus artikel ini?')) {
                                    e.preventDefault();
                                }
                            }}
                            className="inline"
                        >
                            {/* Inertia biasanya mengirim _method via hidden input untuk DELETE */}
                            <input type="hidden" name="_method" value="DELETE" />
                            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                                Hapus
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
