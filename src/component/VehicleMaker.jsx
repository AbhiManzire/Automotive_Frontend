import React, { useState } from "react";

// Example vehicle makers data
const vehicleMakers = [
  { name: "MARUTI", link: "/vehicles/maruti-286/", popular: true },
  { name: "HYUNDAI", link: "/vehicles/hyundai-212/", popular: true },
  { name: "MAHINDRA", link: "/vehicles/mahindra-278/", popular: true },
  { name: "TATA", link: "/vehicles/tata-429/", popular: true },
  { name: "CHEVROLET", link: "/vehicles/chevrolet-91/", popular: true },
  { name: "HONDA", link: "/vehicles/honda-203/", popular: true },
  { name: "SKODA", link: "/vehicles/skoda-405/", popular: true },
  { name: "VW", link: "/vehicles/vw-463/", popular: true },
  { name: "TOYOTA", link: "/vehicles/toyota-440/", popular: true },
  { name: "NISSAN", link: "/vehicles/nissan-330/", popular: true },
  { name: "RENAULT", link: "/vehicles/renault-375/", popular: true },
  { name: "FORD", link: "/vehicles/ford-157/", popular: true },
  { name: "FIAT", link: "/vehicles/fiat-150/", popular: true },
  { name: "KIA", link: "/vehicles/kia-12344/", popular: true },
  { name: "ASHOK LEYLAND", link: "/vehicles/ashokleyland-21/", popular: false },
  { name: "AUDI", link: "/vehicles/audi-27/", popular: false },
  { name: "BMW", link: "/vehicles/bmw-56/", popular: false },
  { name: "BYD", link: "/vehicles/byd-12628/", popular: false },
  { name: "CITROEN", link: "/vehicles/citro_n-12643/", popular: false },
  { name: "DAEWOO", link: "/vehicles/daewoo-104/", popular: false },
  { name: "DATSUN", link: "/vehicles/datsun-110/", popular: false },
  { name: "HINDUSTAN MOTORS", link: "/vehicles/hindustanmotors-198/", popular: false },
  { name: "ICML", link: "/vehicles/icml-215/", popular: false },
  { name: "ISUZU", link: "/vehicles/isuzu-228/", popular: false },
  { name: "JAGUAR", link: "/vehicles/jaguar-232/", popular: false },
  { name: "JEEP", link: "/vehicles/jeep-235/", popular: false },
  { name: "LAND ROVER", link: "/vehicles/land_rover-262/", popular: false },
  { name: "LEXUS", link: "/vehicles/lexus-267/", popular: false },
  { name: "MERCEDES-BENZ", link: "/vehicles/mercedes_benz-302/", popular: false },
  { name: "MINI", link: "/vehicles/mini-313/", popular: false },
  { name: "MITSUBISHI", link: "/vehicles/mitsubishi-314/", popular: false },
  { name: "MORRIS GARAGES", link: "/vehicles/morris_garages-12332/", popular: false },
  { name: "TATA COMMERCIAL", link: "/vehicles/tata_commercial-12537/", popular: false },
  { name: "OPEL", link: "/vehicles/opel-11900/", popular: false },
  { name: "PORSCHE", link: "/vehicles/porsche-360/", popular: false },
  { name: "PREMIER", link: "/vehicles/premier-361/", popular: false },
  { name: "VOLVO", link: "/vehicles/volvo-459/", popular: false },
];

const Vehicle = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter makers based on search term
  const filteredMakers = vehicleMakers.filter((maker) =>
    maker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group makers by first letter
  const groupedMakers = filteredMakers.reduce((groups, maker) => {
    const letter = maker.name[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(maker);
    return groups;
  }, {});

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <section className="p-6">
      {/* Heading and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold">
          Search Parts by <span className="text-red-500">VEHICLE MAKERS</span>
        </h1>
        <input
          type="search"
          placeholder="Filter Car Maker"
          className="border rounded-lg px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-sky-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Popular Makers */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Popular Vehicle Makers</h3>
        <div className="flex flex-wrap gap-2">
          {vehicleMakers
            .filter((maker) => maker.popular)
            .map((maker, idx) => (
              <a
                key={idx}
                href={maker.link}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200 transition"
              >
                {maker.name}
              </a>
            ))}
        </div>
      </div>

      {/* Alphabet Navigation */}
      <ul className="flex flex-wrap gap-2 mb-4 text-sm font-medium">
        {alphabet.map((letter) => (
          <li key={letter} className="cursor-pointer hover:text-sky-500">
            {letter}
          </li>
        ))}
      </ul>

      {/* Makers List */}
      <div className="space-y-4">
        {alphabet.map(
          (letter) =>
            groupedMakers[letter] && (
              <div key={letter}>
                <p className="text-lg font-semibold mb-2">{letter}</p>
                <ul className="flex flex-wrap gap-2">
                  {groupedMakers[letter].map((maker, idx) => (
                    <li key={idx}>
                      <a
                        href={maker.link}
                        className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 transition"
                      >
                        {maker.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Vehicle;
