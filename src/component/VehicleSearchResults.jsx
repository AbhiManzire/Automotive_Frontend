import React from "react";
import { useLocation } from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search);

const VehicleSearchResults = () => {
  const query = useQuery();
  const maker = query.get("maker") || "";
  const model = query.get("model") || "";
  const year = query.get("year") || "";
  const modification = query.get("mod") || "";

  return (
    <section className="px-4 md:px-6 py-8 md:py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white border rounded-2xl shadow p-5 md:p-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">Vehicle-based parts search</h1>
        <p className="mt-2 text-gray-600 text-sm md:text-base">Use these parameters to fetch parts from your API.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-800">
          <div className="p-4 bg-gray-50 rounded border">
            <div className="text-sm text-gray-500">Maker</div>
            <div className="font-semibold">{maker}</div>
          </div>
          <div className="p-4 bg-gray-50 rounded border">
            <div className="text-sm text-gray-500">Model</div>
            <div className="font-semibold">{model}</div>
          </div>
          <div className="p-4 bg-gray-50 rounded border">
            <div className="text-sm text-gray-500">Year</div>
            <div className="font-semibold">{year}</div>
          </div>
          <div className="p-4 bg-gray-50 rounded border">
            <div className="text-sm text-gray-500">Modification</div>
            <div className="font-semibold">{modification}</div>
          </div>
        </div>
        <div className="mt-8 text-gray-700 space-y-4">
          <p className="text-sm md:text-base">
            Replace this section with a data grid or product cards. You can filter by maker, model, year and modification.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="border rounded-xl p-4 bg-white hover:shadow-md transition-shadow">
                <div className="h-28 bg-gray-100 rounded mb-3" />
                <div className="font-semibold">Placeholder Part #{i}</div>
                <div className="text-sm text-gray-500">OEM / Aftermarket</div>
                <button className="mt-3 inline-flex items-center justify-center px-4 py-2 rounded bg-red-600 text-white text-sm hover:bg-red-700">View / Buy</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleSearchResults;


