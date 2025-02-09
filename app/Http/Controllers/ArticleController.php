<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ArticleController extends Controller
{
    // Tampilkan daftar artikel (Read - index)
    public function index()
    {
        // Misal, menampilkan artikel dengan pagination
        $articles = Article::latest()->paginate(10);
        // Jika menggunakan Blade, kirim data ke view, atau
        // jika menggunakan Inertia, gunakan: Inertia::render('Articles/Index', ['articles' => $articles]);
        // return view('articles.index', compact('articles'));

        // Menggunakan Inertia untuk render ke frontend
        return Inertia::render('Articles/Index', [
            'articles' => $articles,
        ]);

    }

    // Tampilkan form pembuatan artikel baru (Create)
    public function create()
    {
        return Inertia::render('Articles/Create');
    }

    // Simpan artikel baru ke database (Store)
    public function store(Request $request)
    {
        $request->validate([
            'title'   => 'required|string|max:255',
            'content' => 'required',
            // Validasi gambar bersifat opsional
            'image'   => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $data = $request->only(['title', 'content']);
        // Membuat slug secara otomatis dari judul
        $data['slug'] = Str::slug($request->title);
        $data['user_id'] = auth()->id();

        // Proses upload gambar jika ada
        if ($request->hasFile('image')) {
            // Simpan file gambar ke direktori storage/app/public/articles
            $data['image'] = $request->file('image')->store('articles', 'public');
        }

        $article = Article::create($data);

        return redirect()->route('articles.show', $article)
            ->with('success', 'Artikel berhasil dibuat.');
    }

    // Tampilkan detail artikel (Read - show)
    public function show(Article $article)
    {
        return Inertia::render('Articles/Show', [
            'article' => $article,
        ]);
    }

    // Tampilkan form untuk mengedit artikel (Edit)
    public function edit(Article $article)
    {
        // Pastikan hanya pemilik artikel yang dapat mengedit
        if (auth()->id() !== $article->user_id) {
            abort(403);
        }
        // return view('articles.edit', compact('article'));
        return Inertia::render('Articles/Edit', [
            'article' => $article,
        ]);
    }

    // Proses update artikel (Update)
    public function update(Request $request, Article $article)
    {
        if (auth()->id() !== $article->user_id) {
            abort(403);
        }

        $request->validate([
            'title'   => 'required|string|max:255',
            'content' => 'required',
            'image'   => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $data = $request->only(['title', 'content']);
        $data['slug'] = Str::slug($request->title);

        if ($request->hasFile('image')) {
            // Hapus file gambar lama jika ada
            if ($article->image) {
                Storage::disk('public')->delete($article->image);
            }
            $data['image'] = $request->file('image')->store('articles', 'public');
        }

        $article->update($data);

        return redirect()->route('articles.show', $article)
            ->with('success', 'Artikel berhasil diperbarui.');
    }

    // Hapus artikel (Delete)
    public function destroy(Article $article)
    {
        if (auth()->id() !== $article->user_id) {
            abort(403);
        }
        // Hapus file gambar jika ada
        if ($article->image) {
            Storage::disk('public')->delete($article->image);
        }
        $article->delete();

        return redirect()->route('articles.index')
            ->with('success', 'Artikel berhasil dihapus.');
    }
}
