import React from "react";
import { useParams } from "react-router-dom";

const PartSearchResults = () => {
  const { pn } = useParams();

  return (
    <section className="px-4 md:px-6 py-8 md:py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white border rounded-2xl shadow p-5 md:p-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">Search results for Part Number</h1>
        <p className="mt-2 text-gray-600">Part Number: <span className="font-semibold">{pn}</span></p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1,2,3].map((i) => (
            <div key={i} className="border rounded-xl p-4 bg-white hover:shadow-md transition-shadow">
              <div className="h-24 bg-gray-100 rounded mb-3" />
              <div className="font-semibold">Matching Part #{i}</div>
              <div className="text-sm text-gray-500">OEM / Equivalent</div>
              <button className="mt-3 inline-flex items-center justify-center px-4 py-2 rounded bg-red-600 text-white text-sm hover:bg-red-700">View / Buy</button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-gray-700 text-sm md:text-base">
          You were redirected here from Oriparts. Replace these placeholders with your catalog results and buy flow.
        </div>
      </div>
    </section>
  );
};

export default PartSearchResults;


