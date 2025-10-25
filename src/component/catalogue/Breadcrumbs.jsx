import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  // Extract the last part of the URL (after the last slash)
  const pathParts = location.pathname.split("/").filter(Boolean);
  const categorySlug = pathParts[pathParts.length - 1];

  // Convert slug to readable format (e.g. "maintenance_service_parts" → "Maintenance Service Parts")
  const categoryName = categorySlug
    ? categorySlug
        .replace(/_/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())
    : "Catalog";

  return (
    <nav className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link to="/" className="hover:text-red-600">
            Home
          </Link>
        </li>
        <li><span>/</span></li>
        <li>
          <Link to="/catalog" className="hover:text-red-600">
            Catalog
          </Link>
        </li>
        {categorySlug && (
          <>
            <li><span>/</span></li>
            <li className="text-gray-800">{categoryName}</li>
          </>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
