import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Index({ articles }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <Head title="Daftar Artikel" />
            <h1 className="text-3xl font-bold mb-6">Daftar Artikel</h1>
            <div className="space-y-4">
                {articles.map((article) => (
                    <div key={article.id} className="border p-4 rounded hover:shadow-lg transition-shadow">
                        <h2 className="text-2xl font-semibold">
                            <Link href={`/articles/${article.id}`}>{article.title}</Link>
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Ditulis oleh {article.user.name} pada {new Date(article.created_at).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
