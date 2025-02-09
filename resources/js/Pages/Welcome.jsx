import React from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import SectionHero from "@/Components/SectionHero.jsx";
import SectionValue from "@/Components/SectionValue.jsx";
import SectionContent from "@/Components/SectionContent.jsx";
import SectionTesti from "@/Components/SectionTesti.jsx";
import SectionCTA from "@/Components/SectionCTA.jsx";

export default function Welcome({ canLogin, canRegister }) {
  return (
    <GuestLayout>
      <Head title="Texara – Where Knowledge Meets Code" />

      {/* 1. Hero Section */}
      <SectionHero />

      {/* 2. Mengapa Texara? (Value Proposition Section) */}
      <SectionValue />

      {/* 3. Kategori Konten (Content Highlights Section) */}
      <SectionContent />

      {/* 4. Testimoni & Komunitas (Social Proof Section) */}
      <SectionTesti />

      {/* 5. Call-to-Action Final (Join Now Section) */}
      <SectionCTA canLogin={canLogin} canRegister={canRegister} />

    </GuestLayout>
  );
}
