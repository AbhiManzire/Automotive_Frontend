import React from "react";
import VehicleBreadcrumbs from "./VehicleBreadcrumbs";
import { getOriPartsLink } from "../../utils/oripartsBackUrl";

export const Skoda = () => {
  const link = getOriPartsLink(59, "SKODA");

  return (
    <section className="min-h-screen py-6">
      {/* Breadcrumbs */}
      <div className="w-full mb-8 px-4">
        <VehicleBreadcrumbs />

        <h1 className="text-3xl px-2 font-bold text-gray-800 uppercase mb-6">
            SKODA
        </h1>

        {/* OEM Catalogue Button */}
        <a
          href={link}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="border border-1 border-gray-600 mb-2 text-black text-sm rounded-md p-2 transition-all duration-300 hover:bg-red-400"
        >
          View OEM Catalogue
        </a>
      </div>

      {/* Brand Info Section */}
    </section>
  );
};
