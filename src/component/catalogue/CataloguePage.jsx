"use client";
import React from "react";
import OEMCatalogue from "./OEMCatalogue";
import ReplacementParts from "./ReplacementParts";
import SeoSection from "./SeoSection";

const CatalogPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-pink-50 py-12 px-6">
      {/* Breadcrumbs */}
      <nav className="text-sm text-sky-700 mb-6">
        <a href="/" className="hover:underline">Home</a> / <span>Catalog</span>
      </nav>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        Genuine (OEM) & Aftermarket Spare Parts
      </h1>

      {/* OEM Catalogue */}
      <OEMCatalogue />

      {/* Replacement Parts */}
      <ReplacementParts />

      {/* SEO Info Section */}
      <SeoSection />
    </main>
  );
};

export default CatalogPage;
