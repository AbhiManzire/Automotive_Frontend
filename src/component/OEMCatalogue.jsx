import React from "react";
import { useLocation } from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search);

const OEMCatalogue = () => {
  const query = useQuery();
  const maker = query.get("maker") || "";
  const model = query.get("model") || "";
  const year = query.get("year") || "";
  const modification = query.get("mod") || "";

  return (
    <section className="px-4 md:px-6 py-8 md:py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white border rounded-2xl shadow p-5 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">OEM Catalogue</h1>
            <p className="mt-1 text-gray-600 text-sm md:text-base">Boodmo-like EPC structure by vehicle selection</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <div className="px-3 py-2 bg-gray-50 rounded border"><span className="text-gray-500">Maker:</span> <span className="font-semibold">{maker}</span></div>
            <div className="px-3 py-2 bg-gray-50 rounded border"><span className="text-gray-500">Model:</span> <span className="font-semibold">{model}</span></div>
            <div className="px-3 py-2 bg-gray-50 rounded border"><span className="text-gray-500">Year:</span> <span className="font-semibold">{year}</span></div>
            <div className="px-3 py-2 bg-gray-50 rounded border"><span className="text-gray-500">Mod:</span> <span className="font-semibold">{modification}</span></div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
          <aside className="lg:col-span-3 bg-gray-50 rounded-xl border p-4">
            <h2 className="font-semibold text-gray-800 mb-3">Groups</h2>
            <ul className="space-y-2 text-sm">
              {["Engine","Transmission","Suspension","Brakes","Electrical","Body","Interior"].map((g) => (
                <li key={g} className="px-3 py-2 rounded hover:bg-white hover:shadow cursor-pointer border">
                  {g}
                </li>
              ))}
            </ul>
          </aside>
          <main className="lg:col-span-9">
            <div className="rounded-xl border p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded h-64" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Subgroups</h3>
                  <ul className="space-y-2 text-sm">
                    {["Cylinder head","Timing belt","Oil filter","Fuel system","Cooling"].map((s) => (
                      <li key={s} className="px-3 py-2 rounded border hover:bg-gray-50 cursor-pointer">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-xl border p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Parts</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-500">
                      <th className="py-2">PN</th>
                      <th className="py-2">Name</th>
                      <th className="py-2">Qty</th>
                      <th className="py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1,2,3,4,5].map((i) => (
                      <tr key={i} className="border-t">
                        <td className="py-2 font-mono">PN00{i}</td>
                        <td className="py-2">Example OEM Part {i}</td>
                        <td className="py-2">1</td>
                        <td className="py-2">
                          <button className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700">Buy</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default OEMCatalogue;


