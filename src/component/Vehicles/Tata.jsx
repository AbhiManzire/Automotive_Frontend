import React, { useState } from "react";
import VehicleBreadcrumbs from "./VehicleBreadcrumbs";
import Article_Review from "../Article_Review";

export const Tata = () => {

  const link =
    "https://oriparts.com/3?back_url_id=https%3A%2F%2Fboodmo.com%2Fcatalog%2Fpart-p-%7Bitem_id%7D%2F&back_url_pn=https%3A%2F%2Fboodmo.com%2Fsearch%2F%7Bpn%7D%2F";

  const [filter, setFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");


  // 🔹 Models Data
  const models = [
    {
      id: 1,
      name: "Tata Altroz",
      image: "https://boodmo.com/media/cache/vehicle_model/images/model/8f2527e.webp",
      years: "11.2019 - now",
      link: "/vehicles/tata-429/altroz-12357/",
      modifications: [
        {
          generation: "ALTROZ 11.2019 - 05.2025",
          options: [
            "1.2L XE CUSTOM MT/Petrol/BS6",
            "1.2L XE iCNG MT/Petrol/CNG/BS6.2",
            "1.2L XE MT/Petrol/BS6",
            "1.2L XE MT (PH-2)/Petrol/BS6.2",
            "1.2L XE+ MT (PH-2)/Petrol/BS6.2",
            "1.2L XM MT/Petrol/BS6",
            "1.2L XM+ DCA (PH-2)/Petrol/BS6.2",
            "1.2L XM+ iCNG MT/Petrol/CNG/BS6.2",
            "1.2L XM+ MT (PH-2)/Petrol/BS6.2",
            "1.2L XM+ S iCNG MT/Petrol/CNG/BS6.2",
            "1.2L XT DCA/Petrol/BS6",
            "1.2L XT DCA (PH-2)/Petrol/BS6.2",
            "1.2L XT MT/Petrol/BS6",
            "1.2L XT MT (PH-2)/Petrol/BS6.2",
            "1.2L XZ DCA/Petrol/BS6",
            "1.2L XZ DCA (PH-2)/Petrol/BS6.2",
            "1.2L XZ iCNG MT/Petrol/CNG/BS6.2",
            "1.2L XZ MT/Petrol/BS6",
            "1.2L XZ MT (PH-2)/Petrol/BS6.2",
            "1.2L XZ+ DCA/Petrol/BS6",
            "1.2L XZ+ DCA (PH-2)/Petrol/BS6.2",
            "1.2L XZ+ MT/Petrol/BS6",
            "1.2L XZ+ MT (PH-2)/Petrol/BS6.2",
            "1.2L XZ+O S iCNG MT/Petrol/CNG/BS6.2",
            "1.2L XZ+S iCNG MT/Petrol/CNG/BS6.2",
            "1.5L XE MT/Diesel/BS6",
            "1.5L XE+ MT (PH-2)/Diesel/BS6.2",
            "1.5L XM MT/Diesel/BS6",
            "1.5L XM+ MT (PH-2)/Diesel/BS6.2",
            "1.5L XT MT/Diesel/BS6",
            "1.5L XT MT (PH-2)/Diesel/BS6.2",
            "1.5L XZ MT/Diesel/BS6",
            "1.5L XZ MT (PH-2)/Diesel/BS6.2",
            "1.5L XZ+ MT/Diesel/BS6",
            "1.5L XZ+ MT (PH-2)/Diesel/BS6.2"
          ],
        },
        {
          generation: "ALTROZ I-TURBO 01.2021 - 05.2025",
          options: [
            "1.2L XT MT/Petrol/BS6",
            "1.2L XZ MT/Petrol/110h.p./BS6",
            "1.2L XZ MT/Petrol/110h.p./BS6.2",
            "1.2L XZ+ MT/Petrol/110h.p./BS6",
            "1.2L XZ+ MT/Petrol/110h.p./BS6.2"
          ],
        },
        {
          generation: "ALTROZ DARK EDITION 01.2021 - now",
          options: [
            "1.2L XT DARK DCA/Petrol/BS6.2",
            "1.2L XT DARK MT/Petrol/BS6.2",
            "1.2L XZ+ DARK DCA/Petrol/86h.p./BS6.2",
            "1.2L XZ+ DARK MT/Petrol/110h.p./BS6.2",
            "1.2L XZ+ DARK MT/Petrol/86h.p./BS6",
            "1.2L XZ+ DARK MT/Petrol/86h.p./BS6.2",
            "1.5L XZ+ DARK MT/Diesel/90h.p./BS6.2",
            "1.5L XZ+ DARK MT/Diesel/88h.p./BS6"
          ],
        },
        {
          generation: "ALTROZ RACER EDITION 06.2024 - 05.2025",
          options: [
            "1.2L R1 MT/Petrol/BS6.2",
            "1.2L R2 MT/Petrol/BS6.2",
            "1.2L R3 MT/Petrol/BS6.2"
          ],
        },
        {
          generation: "ALTROZ F/L 05.2025 - now",
          options: [
            "1.2L ACCOMPLISHED +S DCA/Petrol/BS6.2",
            "1.2L ACCOMPLISHED S DCA/Petrol/BS6.2",
            "1.2L ACCOMPLISHED S iCNG MT/Petrol/CNG/BS6.2",
            "1.2L ACCOMPLISHED S MT/Petrol/BS6.2",
            "1.2L CREATIVE AMT/Petrol/BS6.2",
            "1.2L CREATIVE iCNG MT/Petrol/CNG/BS6.2",
            "1.2L CREATIVE MT/Petrol/BS6.2",
            "1.2L CREATIVE S AMT/Petrol/BS6.2",
            "1.2L CREATIVE S DCA/Petrol/BS6.2",
            "1.2L CREATIVE S iCNG MT/Petrol/CNG/BS6.2",
            "1.2L CREATIVE S MT/Petrol/BS6.2",
            "1.2L PURE AMT/Petrol/BS6.2",
            "1.2L PURE iCNG MT/Petrol/CNG/BS6.2",
            "1.2L PURE MT/Petrol/BS6.2",
            "1.2L PURE S AMT/Petrol/BS6.2",
            "1.2L PURE S iCNG MT/Petrol/CNG/BS6.2",
            "1.2L PURE S MT/Petrol/BS6.2",
            "1.2L SMART iCNG MT/Petrol/CNG/BS6.2",
            "1.2L SMART MT/Petrol/BS6.2",
            "1.5L ACCOMPLISHED S MT/Diesel/BS6.2",
            "1.5L CREATIVE S MT/Diesel/BS6.2",
            "1.5L PURE MT/Diesel/BS6.2"
          ],
        },
      ],
    },
    {
      id: 2,
      name: "TATA ARIA",
      image: "https://boodmo.com/media/cache/vehicle_model/images/model/d64f042.webp",
      years: "10.2010 - 04.2017",
      link: "/vehicles/tata-429/aria-11374/",
      modifications: [
        {
          generation: "ARIA 10.2010 - 04.2014",
          options: [
            "2.2L Diesel 138h.p. BS3",
            "2.2L Diesel 138h.p. BS4",
            "2.2L 4WD Diesel 138h.p. BS3",
            "2.2L 4WD Diesel 138h.p. BS4"
          ]
        },
        {
          generation: "ARIA LET 05.2014 - 04.2017",
          options: [
            "2.2L Diesel BS4",
            "2.2L 4WD Diesel BS4"
          ]
        }
      ]
    },
    {
      id: 3,
      name: "TATA BOLT",
      image: "https://boodmo.com/media/cache/vehicle_model/images/model/d3426fd.webp",
      years: "01.2015 - 04.2019",
      link: "/vehicles/tata-429/bolt-11382/",
      modifications: [
        {
          generation: "BOLT 01.2015 - 04.2019",
          options: [
            "1.2L Petrol 90h.p. BS4",
            "1.3L Diesel 75h.p. BS4"
          ]
        }
      ]
    },
    {
      id: 4,
      name: "TATA CURVV",
      image: "https://boodmo.com/media/cache/vehicle_model/images/model/a5c4d54.webp",
      years: "08.2024 - now",
      link: "/vehicles/tata-429/curvv-12844/",
      modifications: [
        {
          generation: "CURVV EV 08.2024 - now",
          options: [
            "45 kWh ACCOMPLISHED Electric",
            "45 kWh ACCOMPLISHED+ A Electric",
            "45 kWh ACCOMPLISHED+ S Electric",
            "45 kWh CREATIVE Electric",
            "45 kWh EMPOWERED+ S Electric",
            "45 kWh EMPOWERED+ SA Electric",
            "55 kWh ACCOMPLISHED Electric",
            "55 kWh ACCOMPLISHED+ S Electric",
            "55 kWh EMPOWERED+ Electric",
            "55 kWh EMPOWERED+ A Electric",
            "55 kWh EMPOWERED+ S Electric",
            "55 kWh EMPOWERED+ SA Electric"
          ]
        },
        {
          generation: "CURVV 09.2024 - now",
          options: [
            "1.2L ACCOMPLISHED S DCA Petrol 123h.p. BS6.2",
            "1.2L ACCOMPLISHED S DCA Petrol 118h.p. BS6.2",
            "1.2L ACCOMPLISHED S MT Petrol 123h.p. BS6.2",
            "1.2L ACCOMPLISHED S MT Petrol 118h.p. BS6.2",
            "1.2L ACCOMPLISHED+ A DCA Petrol BS6.2",
            "1.2L ACCOMPLISHED+ A MT Petrol BS6.2",
            "1.2L CREATIVE DCA Petrol BS6.2",
            "1.2L CREATIVE MT Petrol BS6.2",
            "1.2L CREATIVE S DCA Petrol BS6.2",
            "1.2L CREATIVE S MT Petrol 123h.p. BS6.2",
            "1.2L CREATIVE S MT Petrol 118h.p. BS6.2",
            "1.2L CREATIVE+ S DCA Petrol 123h.p. BS6.2",
            "1.2L CREATIVE+ S DCA Petrol 118h.p. BS6.2",
            "1.2L CREATIVE+ S MT Petrol 118h.p. BS6.2",
            "1.2L CREATIVE+ S MT Petrol 123h.p. BS6.2",
            "1.2L PURE+ DCA Petrol BS6.2",
            "1.2L PURE+ MT Petrol BS6.2",
            "1.2L PURE+ S DCA Petrol BS6.2",
            "1.2L PURE+ S MT Petrol BS6.2",
            "1.2L SMART MT Petrol BS6.2",
            "1.5L ACCOMPLISHED S DCA Diesel BS6.2",
            "1.5L ACCOMPLISHED S MT Diesel BS6.2",
            "1.5L ACCOMPLISHED+ A DCA Diesel BS6.2",
            "1.5L ACCOMPLISHED+ A MT Diesel BS6.2",
            "1.5L CREATIVE MT Diesel BS6.2",
            "1.5L CREATIVE S DCA Diesel BS6.2",
            "1.5L CREATIVE S MT Diesel BS6.2",
            "1.5L CREATIVE+ S DCA Diesel BS6.2",
            "1.5L CREATIVE+ S MT Diesel BS6.2",
            "1.5L PURE+ DCA Diesel BS6.2",
            "1.5L PURE+ MT Diesel BS6.2",
            "1.5L PURE+ S DCA Diesel BS6.2",
            "1.5L PURE+ S MT Diesel BS6.2",
            "1.5L SMART MT Diesel BS6.2"
          ]
        }
      ]
    },
    {
      id: 5,
      name: "TATA ESTATE",
      image: "https://boodmo.com/media/cache/vehicle_model/images/model/a13ea63.webp",
      years: "01.1992 - 01.2000",
      link: "/vehicles/tata-429/estate-12759/",
      modifications: [
        {
          generation: "ESTATE 01.1992 - 01.2000",
          options: [
            "1.9L STD Diesel BS1"
          ]
        }
      ]
    },
    {
      id: 6,
      name: "TATA HARRIER",
      image: "https://boodmo.com/media/cache/vehicle_model/images/model/869ef1a.webp",
      years: "01.2019 - now",
      link: "/vehicles/tata-429/harrier-12306/",
      modifications: [
        {
          generation: "HARRIER 1ST GEN 01.2019 - 12.2019",
          options: [
            "2.0L DARK EDITION XT Diesel BS4",
            "2.0L DARK EDITION XZ Diesel BS4",
            "2.0L XE Diesel BS4",
            "2.0L XM Diesel 138h.p. BS4",
            "2.0L XT Diesel BS4",
            "2.0L XZ Diesel BS4"
          ]
        },
        {
          generation: "HARRIER 1ST GEN F/L 01.2020 - 09.2023",
          options: [
            "2.0L XE Diesel BS6.2",
            "2.0L XM 4X2 Diesel BS6",
            "2.0L XMA AT 4X2 Diesel BS6",
            "2.0L XMAS Diesel BS6.2",
            "2.0L XMS (PH-2) Diesel BS6.2",
            "2.0L XT 4X2 Diesel BS6",
            "2.0L XT DARK Diesel BS6",
            "2.0L XT+ Diesel 167h.p. BS6",
            "2.0L XT+ Diesel 167h.p. BS6.2",
            "2.0L XT+ DARK Diesel BS6",
            "2.0L XTA+ Diesel BS6.2",
            "2.0L XZ Diesel BS6.2",
            "2.0L XZ 4X2 Diesel BS6",
            "2.0L XZ+ Diesel 167h.p. BS6",
            "2.0L XZ+ Diesel 167h.p. BS6.2",
            "2.0L XZ+ BLACK Diesel BS6",
            "2.0L XZ+ DARK EDITION Diesel BS6",
            "2.0L XZA Diesel BS6.2",
            "2.0L XZA AT Diesel BS6",
            "2.0L XZA+ Diesel BS6.2",
            "2.0L XZA+ AT Diesel BS6",
            "2.0L XZA+ DARK EDITION Diesel BS6",
            "2.0L XZA+ O Diesel BS6.2"
          ]
        },
        {
          generation: "HARRIER CAMO 11.2020 - 09.2021",
          options: [
            "2.0L XT CAMO Diesel BS6",
            "2.0L XT+ CAMO Diesel BS6",
            "2.0L XZ CAMO Diesel BS6",
            "2.0L XZ+ CAMO Diesel BS6",
            "2.0L XZA CAMO Diesel BS6",
            "2.0L XZA+ CAMO Diesel BS6"
          ]
        },
        {
          generation: "HARRIER DARK EDITION 07.2021 - 09.2023",
          options: [
            "2.0L XT+ Diesel BS6.2",
            "2.0L XTA+ Diesel 167h.p. BS6",
            "2.0L XTA+ Diesel 167h.p. BS6.2",
            "2.0L XZ+ Diesel 167h.p. BS6",
            "2.0L XZ+ Diesel 167h.p. BS6.2",
            "2.0L XZA+ Diesel 167h.p. BS6",
            "2.0L XZA+ Diesel 167h.p. BS6.2",
            "2.0L XZA+O Diesel BS6.2"
          ]
        },
        {
          generation: "HARRIER KAZIRANGA 02.2022 - 02.2024",
          options: [
            "2.0L XZ+ Diesel",
            "2.0L XZA+ Diesel"
          ]
        },
        {
          generation: "HARRIER JET EDITION 08.2022 - 01.2024",
          options: [
            "2.0L XZ+ Diesel",
            "2.0L XZA+ AT Diesel"
          ]
        },
        {
          generation: "HARRIER RED DARK EDITION 02.2023 - 09.2024",
          options: [
            "2.0L XZ+ Diesel",
            "2.0L XZA+ Diesel",
            "2.0L XZA+(O) Diesel"
          ]
        },
        {
          generation: "HARRIER 2ND GEN F/L 10.2023 - now",
          options: [
            "2.0L ADVENTURE Diesel BS6.2",
            "2.0L ADVENTURE+ Diesel BS6.2",
            "2.0L ADVENTURE+ AT Diesel BS6.2",
            "2.0L ADVENTURE+A Diesel BS6.2",
            "2.0L ADVENTURE+A AT Diesel BS6.2",
            "2.0L FEARLESS Diesel BS6.2",
            "2.0L FEARLESS AT Diesel BS6.2",
            "2.0L FEARLESS+ Diesel BS6.2",
            "2.0L FEARLESS+ AT Diesel BS6.2",
            "2.0L PURE(O) Diesel BS6.2",
            "2.0L SMART(O) Diesel BS6.2"
          ]
        },
        {
          generation: "HARRIER EV 06.2025 - now",
          options: [
            "65 kWh ADVENTURE Electric",
            "65 kWh ADVENTURE S Electric",
            "65 kWh FEARLESS+ Electric",
            "75 kWh EMPOWERED Electric",
            "75 kWh EMPOWERED AWD Electric",
            "75 kWh FEARLESS+ Electric"
          ]
        },
        {
          generation: "HARRIER EV STEALTH EDITION 06.2025 - now",
          options: [
            "75 kWh EMPOWERED Electric",
            "75 kWh EMPOWERED AWD Electric"
          ]
        }
      ]
    },
    {
      id: 7,
      name: "TATA HEXA",
      image: "https://boodmo.com/media/cache/vehicle_model/images/model/08ccb10.webp",
      years: "01.2017 - 04.2020",
      link: "/vehicles/tata-429/hexa-12171/",
      modifications: [
        {
          generation: "HEXA 01.2017 - 04.2020",
          options: [
            "2.2L XE MT/Diesel/BS4",
            "2.2L XM MT ABS A/B MT/Diesel/BS4",
            "2.2L XMA 4X2 AT/Diesel/BS4",
            "2.2L XMA 4X4 AT/Diesel/BS4",
            "2.2L XT 4X2 A/B MT/Diesel/BS4",
            "2.2L XT 4X4 A/B MT/Diesel/BS4",
            "2.2L XTA 4X2 A/B/Diesel/BS4"
          ]
        }
      ]
    },
    {
      id: 8,
      name: "TATA INDICA",
      image: "https://boodmo.com/media/cache/vehicle_model/images/model/19035f2.webp",
      years: "12.1998 - 08.2019",
      link: "/vehicles/tata-429/indica-12007/",
      modifications: [
        {
          generation: "INDICA 12.1998 - 05.2001",
          options: [
            "1.4L DL MT/Diesel/BS2",
            "1.4L DLE MT/Diesel/BS2",
            "1.4L DLX MT/Diesel/BS2"
          ]
        },
        {
          generation: "INDICA V2 05.2001 - 06.2013",
          options: [
            "1.4L DiCOR MT/Diesel/BS3",
            "1.4L DiCOR REFRESHED MT/Diesel/BS4",
            "1.4L MT/Diesel/53h.p./BS2",
            "1.4L MT/Petrol/BS3",
            "1.4L MT/Diesel/70h.p./BS3",
            "1.4L TURBO MT/Diesel/BS3",
            "1.4L TURBOMAX MT/Diesel/BS4"
          ]
        },
        {
          generation: "INDICA XETA 11.2006 - 08.2019",
          options: [
            "1.2L E-MAX MT/Petrol/63h.p./BS3",
            "1.2L E-MAX MT/Petrol/62h.p./BS4",
            "1.2L E-MAX MT/Petrol/56h.p./BS4",
            "1.2L MT/Petrol/65h.p./BS4",
            "1.2L MT/Petrol/65h.p./BS3",
            "1.4L MT/Petrol/BS3"
          ]
        },
        {
          generation: "INDICA VISTA 01.2008 - 12.2012",
          options: [
            "1.2L MT/Petrol/65h.p./BS3",
            "1.2L MT/Petrol/65h.p./BS4",
            "1.3L MT/Diesel/75h.p./BS3",
            "1.3L MT/Diesel/75h.p./BS4",
            "1.4L MT/Diesel/70h.p./BS3",
            "1.4L MT/Diesel/70h.p./BS3",
            "1.4L MT/Petrol/BS4"
          ]
        },
        {
          generation: "INDICA VISTA REFRESH 12.2012 - 12.2014",
          options: [
            "1.2L MT/Petrol/BS4",
            "1.3L MT/Diesel/75h.p./BS4",
            "1.3L MT/Diesel/90h.p./BS4",
            "1.4L MT/Petrol/BS4",
            "1.4L MT/Diesel/70h.p./BS3",
            "1.4L MT/Diesel/70h.p./BS4"
          ]
        },
        {
          generation: "INDICA EV2 05.2013 - 04.2018",
          options: [
            "1.4L MT/Diesel/69h.p./BS4",
            "1.4L MT/Diesel/48h.p./BS3"
          ]
        },
        {
          generation: "INDICA VISTA TECH 01.2014 - 12.2015",
          options: [
            "1.3L MT/Diesel/BS4",
            "1.4L MT/Diesel/BS3"
          ]
        }
      ]
    },
    {
      id: 9,
      name: "TATA INDIGO",
      image: "https://boodmo.com/media/cache/vehicle_model/images/model/ef9202c.webp",
      years: "06.2002 - 05.2018",
      link: "/vehicles/tata-429/indigo-11376/",
      modifications: [
        {
          generation: "INDIGO 06.2002 - 12.2009",
          options: [
            "1.4L DLS MT/Petrol/BS3",
            "1.4L GLE MT/Petrol/BS3",
            "1.4L GLX MT/Petrol/BS3",
            "1.4L GSX MT/Petrol/BS3",
            "1.4L LE MT/Diesel/BS3",
            "1.4L LS MT/Diesel/70h.p./BS3",
            "1.4L LX MT/Diesel/70h.p./BS3",
            "1.4L SX MT/Diesel/BS3",
            "1.4L V MT/Diesel/BS3",
            "1.4L VE MT/Diesel/BS3",
            "1.4L VS MT/Diesel/BS3",
          ],
        },
        {
          generation: "INDIGO XL 05.2007 - 12.2011",
          options: [
            "1.4L CLASSIC MT/Petrol/BS3",
            "1.4L CLASSIC MT/Diesel/70h.p./BS3",
            "1.4L CLASSIC MT/Diesel/70h.p./BS4",
            "1.4L GRAND MT/Diesel/70h.p./BS3",
            "1.4L GRAND MT/Diesel/70h.p./BS4",
            "1.4L MT/Petrol/BS3",
            "1.4L MT/Diesel/BS3",
            "1.4L MT/Petrol/CNG/BS4",
            "1.4L SD MT/Diesel/BS4",
          ],
        },
        {
          generation: "INDIGO CS 01.2008 - 12.2012",
          options: [
            "1.2L EGLX MT/Petrol/BS4",
            "1.2L GLE MT/Petrol/65h.p./BS3",
            "1.2L GLE MT/Petrol/65h.p./BS4",
            "1.2L GLS MT/Petrol/65h.p./BS3",
            "1.2L GLS MT/Petrol/65h.p./BS4",
            "1.2L GLX MT/Petrol/65h.p./BS3",
            "1.2L GLX MT/Petrol/65h.p./BS4",
            "1.2L GV MT/Petrol/BS4",
            "1.4L ELX MT/Diesel/BS4",
            "1.4L LE MT/Diesel/70h.p./BS3",
            "1.4L LE MT/Diesel/70h.p./BS4",
            "1.4L LS MT/Diesel/70h.p./BS3",
            "1.4L LS MT/Diesel/70h.p./BS4",
            "1.4L LX MT/Diesel/70h.p./BS3",
            "1.4L LX MT/Diesel/70h.p./BS4",
            "1.4L V MT/Diesel/BS4",
          ],
        },
        {
          generation: "INDIGO MANZA 08.2009 - 12.2015",
          options: [
            "1.3L CELEBRATION MT/Diesel/BS4",
            "1.3L MT/Diesel/89h.p./BS3",
            "1.3L MT/Diesel/89h.p./BS4",
            "1.4L CELEBRATION MT/Petrol/BS4",
            "1.4L MT/Petrol/89h.p./BS3",
            "1.4L MT/Petrol/89h.p./BS4",
          ],
        },
        {
          generation: "INDIGO MANZA CLUB CLASS 10.2012 - 12.2015",
          options: ["1.3L MT/Diesel/BS4", "1.4L MT/Petrol/BS4"],
        },
        {
          generation: "INDIGO eCS 06.2013 - 05.2018",
          options: [
            "1.2L GLE MT/Petrol/BS4",
            "1.2L GLS MT/Petrol/55h.p./BS4",
            "1.2L GLS MT/Petrol/65h.p./BS4",
            "1.2L GLX MT/Petrol/55h.p./BS4",
            "1.2L GLX MT/Petrol/65h.p./BS4",
            "1.2L GVX MT/Petrol/BS4",
            "1.4L L MT/Diesel/BS4",
            "1.4L LE MT/Diesel/BS4",
            "1.4L LS MT/Diesel/70h.p./BS3",
            "1.4L LS MT/Diesel/70h.p./BS4",
            "1.4L LX MT/Diesel/70h.p./BS3",
            "1.4L LX MT/Diesel/70h.p./BS4",
            "1.4L MT/Diesel/BS3",
            "1.4L VX MT/Diesel/70h.p./BS4",
            "1.4L VX MT/Diesel/70h.p./BS3",
          ],
        },
      ],
    },
    {
      id: 10,
      name: "TATA INDIGO MARINA",
      image: "https://boodmo.com/media/cache/vehicle_model/images/model/5c53773.webp",
      years: "01.2003 - 12.2010",
      link: "/vehicles/tata-429/indigo_marina-12063/",
      modifications: [
        {
          generation: "INDIGO MARINA 01.2003 - 12.2010",
          options: [
            "1.4L DICOR MT/Diesel/BS3",
            "1.4L MPFI MT/Petrol/BS3",
            "1.4L MT/Petrol/BS3",
            "1.4L TCIC MT/Diesel/BS3",
          ],
        },
      ],
    },
    {
      id: 11,
      name: "TATA MOVUS",
      image: "https://boodmo.com/media/cache/vehicle_model/images/model/faeb9c5.webp",
      years: "05.2014 - 04.2015",
      link: "/vehicles/tata-429/movus-11384/",
      modifications: [
        {
          generation: "MOVUS 05.2014 - 04.2015",
          options: [
            "2.2L CX/Diesel/BS4",
            "2.2L EX/Diesel/BS4",
            "2.2L LX/Diesel/BS4"
          ]
        }
      ]
    },
    {
      id: 12,
      name: "TATA NANO",
      image: "https://boodmo.com/media/cache/vehicle_model/images/model/cc8f11f.webp",
      years: "03.2009 - 09.2018",
      link: "/vehicles/tata-429/nano-11377/",
      modifications: [
        {
          generation: "NANO 03.2009 - 09.2018",
          options: [
            "0.6L AMT/Petrol/BS4",
            "0.6L MT/Petrol/38h.p./BS2",
            "0.6L MT/Petrol/38h.p./BS3",
            "0.6L MT/Petrol/38h.p./BS4",
            "0.6L MT/Petrol/38h.p./BS3",
            "0.6L MT/Petrol/CNG/BS4",
            "0.6L MT/Petrol/38h.p./BS4"
          ]
        },
        {
          generation: "NANO TWIST 01.2014 - 08.2018",
          options: [
            "0.6L MT/Petrol/38h.p./BS3",
            "0.6L MT/Petrol/38h.p./BS4"
          ]
        },
        {
          generation: "NANO GenX 05.2015 - 08.2018",
          options: [
            "0.6L FTG MT/Petrol/BS4",
            "0.6L OTG AMT/Petrol/BS4",
            "0.6L OTG MT/Petrol/BS4"
          ]
        }
      ]
    },
    {
      id: 13,
      name: "TATA NEXON",
      image: "https://boodmo.com/media/cache/vehicle_model/images/model/1e988ee.webp",
      years: "03.2017 - now",
      link: "/vehicles/tata-429/nexon-12240/",
      modifications: [
        {
          generation: "NEXON 1ST GEN 03.2017 - 12.2019",
          options: [
            "1.2L XE MT/Petrol/BS4",
            "1.2L XM MT/Petrol/BS4",
            "1.2L XT MT/Petrol/BS4",
            "1.2L XZ MT/Petrol/BS4",
            "1.2L XZ+ MT/Petrol/BS4",
            "1.2L XZA+ AMT/Petrol/BS4",
            "1.5L XE MT/Diesel/BS4",
            "1.5L XM MT/Diesel/BS4",
            "1.5L XT MT/Diesel/BS4",
            "1.5L XZ MT/Diesel/BS4",
            "1.5L XZ+ MT/Diesel/BS4",
            "1.5L XZA+ AMT/Diesel/BS4"
          ]
        },
        {
          generation: "NEXON 1ST GEN F/L 11.2019 - 08.2023",
          options: [
            "1.2L XE MT/Petrol/BS6",
            "1.2L XM MT/Petrol/BS6",
            "1.2L XMA AMT/Petrol/BS6",
            "1.2L XZ MT/Petrol/BS6",
            "1.2L XZ+ MT/Petrol/BS6",
            "1.2L XZA+ AMT/Petrol/BS6",
            "1.2L XZ+S MT/Petrol/BS6",
            "1.2L XZA+S AMT/Petrol/BS6",
            "1.2L XZ+ LUX MT/Petrol/BS6.2",
            "1.2L XZA+ LUX AMT/Petrol/BS6.2",
            "1.2L XZ+ LUX MT/Petrol/BS6",
            "1.5L XE MT/Diesel/BS6",
            "1.5L XM MT/Diesel/BS6",
            "1.5L XMA AMT/Diesel/BS6",
            "1.5L XZ MT/Diesel/BS6",
            "1.5L XZ+ MT/Diesel/BS6",
            "1.5L XZA+ AMT/Diesel/BS6",
            "1.5L XZ+S MT/Diesel/BS6",
            "1.5L XZA+S AMT/Diesel/BS6",
            "1.5L XZ+ LUX MT/Diesel/BS6.2",
            "1.5L XZA+ LUX AMT/Diesel/BS6.2"
          ]
        },
        {
          generation: "NEXON EV 01.2020 - 09.2023",
          options: [
            "30.2kWh XM/Electric",
            "30.2kWh XZ+ LUX/Electric",
            "30.2kWh XZ+/Electric",
            "40.5kWh XZ+ LUX MAX/Electric"
          ]
        },
        {
          generation: "NEXON DARK EDITION 07.2021 - 09.2023",
          options: [
            "1.2L XZ+ LX MT/Petrol/BS6.2",
            "1.2L XZA+ LX AMT/Petrol/BS6.2",
            "1.5L XZ+ LX MT/Diesel/BS6.2",
            "1.5L XZA+ LX AMT/Diesel/BS6.2"
          ]
        },
        {
          generation: "NEXON KAZIRANGA EDITION 02.2022 - 09.2023",
          options: [
            "1.2L XZ+ LX MT/Petrol/BS6.2",
            "1.2L XZA+ LX AMT/Petrol/BS6.2",
            "1.5L XZ+ LX MT/Diesel/BS6.2",
            "1.5L XZA+ LXS AMT/Diesel/BS6.2"
          ]
        },
        {
          generation: "NEXON JET EDITION 08.2022 - 01.2023",
          options: [
            "1.2L XZ+ (P) MT/Petrol/BS6",
            "1.5L XZ+ (P) MT/Diesel/BS6"
          ]
        },
        {
          generation: "NEXON EV JET EDITION 08.2022 - 01.2023",
          options: [
            "30.2kWh XZ+ LUX/Electric"
          ]
        },
        {
          generation: "NEXON RED DARK EDITION 02.2023 - 09.2023",
          options: [
            "1.2L XZ+ LUX MT/Petrol/BS6.2",
            "1.2L XZA+ LUX AMT/Petrol/BS6.2",
            "1.5L XZ+ LUX MT/Diesel/BS6.2",
            "1.5L XZA+ LXS AMT/Diesel/BS6.2"
          ]
        },
        {
          generation: "NEXON 2ND GEN F/L 09.2023 - now",
          options: [
            "1.2L FEARLESS+(O) MT/Petrol/BS6.2",
            "1.2L FEARLESS+ MT/Petrol/BS6.2",
            "1.2L FEARLESS MT/Petrol/BS6.2",
            "1.2L CREATIVE+(O) MT/Petrol/BS6.2",
            "1.2L CREATIVE+ MT/Petrol/BS6.2",
            "1.2L CREATIVE MT/Petrol/BS6.2",
            "1.2L PURE+(S) MT/Petrol/BS6.2",
            "1.2L PURE+ MT/Petrol/BS6.2",
            "1.2L PURE MT/Petrol/BS6.2",
            "1.2L SMART+(S) MT/Petrol/BS6.2",
            "1.2L SMART+ MT/Petrol/BS6.2",
            "1.2L SMART MT/Petrol/BS6.2",
            "1.5L FEARLESS+(O) MT/Diesel/BS6.2",
            "1.5L FEARLESS+ MT/Diesel/BS6.2",
            "1.5L FEARLESS MT/Diesel/BS6.2",
            "1.5L CREATIVE+(O) MT/Diesel/BS6.2",
            "1.5L CREATIVE+ MT/Diesel/BS6.2",
            "1.5L CREATIVE MT/Diesel/BS6.2",
            "1.5L PURE+(S) MT/Diesel/BS6.2",
            "1.5L PURE+ MT/Diesel/BS6.2",
            "1.5L PURE MT/Diesel/BS6.2",
            "1.5L SMART+(S) MT/Diesel/BS6.2",
            "1.5L SMART+ MT/Diesel/BS6.2",
            "1.5L SMART MT/Diesel/BS6.2"
          ]
        }
      ]
    },











  ];


  const categories = [
    { name: "Maintenance Service Parts", img: "https://boodmo.com/media/images/categories/ebba234.svg", link: "/catalog/maintenance_service_parts/" },
    { name: "Filters", img: "https://boodmo.com/media/images/categories/fab8332.svg", link: "/catalog/filters/" },
    { name: "Windscreen Cleaning System", img: "https://boodmo.com/media/images/categories/d36974e.svg", link: "/catalog/windscreen_cleaning_system/" },
    { name: "Car Accessories", img: "https://boodmo.com/media/images/categories/4372565.svg", link: "/catalog/car_accessories/" },
    { name: "Lighting", img: "https://boodmo.com/media/images/categories/c009512.svg", link: "/catalog/lighting/" },
    { name: "Control Cables", img: "https://boodmo.com/media/images/categories/64b9f40.svg", link: "/catalog/control_cables/" },
    { name: "Brake System", img: "https://boodmo.com/media/images/categories/5c30d1d.svg", link: "/catalog/brakes/" },
    { name: "Bearings", img: "https://boodmo.com/media/images/categories/d5dd6ce.svg", link: "/catalog/bearings/" },
    { name: "Clutch System", img: "https://boodmo.com/media/images/categories/bc1a73f.svg", link: "/catalog/clutch/" },
    { name: "Electric Components", img: "https://boodmo.com/media/images/categories/e1aba2b.svg", link: "/catalog/electric_components/" },
    { name: "Engine", img: "https://boodmo.com/media/images/categories/f6afc8e.svg", link: "/catalog/engine/" },
    { name: "Engine Cooling System", img: "https://boodmo.com/media/images/categories/e39dc1a.svg", link: "/catalog/cooling_system/" },
    { name: "Exhaust System", img: "https://boodmo.com/media/images/categories/83cd783.svg", link: "/catalog/exhaust/" },
    { name: "Air Conditioning", img: "https://boodmo.com/media/images/categories/10f1952.svg", link: "/catalog/air_conditioning/" },
    { name: "Fuel Supply System", img: "https://boodmo.com/media/images/categories/457f4a4.svg", link: "/catalog/fuelsystem/" },
    { name: "Gaskets and Sealing Rings", img: "https://boodmo.com/media/images/categories/38d5de9.svg", link: "/catalog/Gasket_SealingRings/" },
    { name: "Ignition and Glowplug System", img: "https://boodmo.com/media/images/categories/bfcf2c1.svg", link: "/catalog/ignition_glowplug/" },
    { name: "Interior and Comfort", img: "https://boodmo.com/media/images/categories/7e1a432.svg", link: "/catalog/interior_comfort/" },
    { name: "Body", img: "https://boodmo.com/media/images/categories/50008e4.svg", link: "/catalog/body/" },
    { name: "Oils and Fluids", img: "https://boodmo.com/media/images/categories/de978f4.svg", link: "/catalog/oilsfluids/" },
    { name: "Pipes and Hoses", img: "https://boodmo.com/media/images/categories/eeab7a3.svg", link: "/catalog/pipes_hoses/" },
    { name: "Repair Kits", img: "https://boodmo.com/media/images/categories/38427d6.svg", link: "/catalog/repair_kits/" },
    { name: "Sensors Relays and Control Units", img: "https://boodmo.com/media/images/categories/878a84e.svg", link: "/catalog/sensors_control_units/" },
    { name: "Steering", img: "https://boodmo.com/media/images/categories/15cfbae.svg", link: "/catalog/steering/" },
    { name: "Suspension and Arms", img: "https://boodmo.com/media/images/categories/9bcc0da.svg", link: "/catalog/suspension/" },
    { name: "Towbar Parts", img: "https://boodmo.com/media/images/categories/95660dc.svg", link: "/catalog/towbar/" },
    { name: "Transmission", img: "https://boodmo.com/media/images/categories/5924137.svg", link: "/catalog/transmission/" },
    { name: "Trims", img: "https://boodmo.com/media/images/categories/ecd08bd.svg", link: "/catalog/trims/" },
    { name: "Tyres and Alloys", img: "https://boodmo.com/media/images/categories/b1b2c08.svg", link: "/catalog/tyres_and_alloys/" },
    { name: "Universal", img: "https://boodmo.com/media/images/categories/8c5ddeb.svg", link: "/catalog/universal/" },
    { name: "Wheels", img: "https://boodmo.com/media/images/categories/1bb7d48.svg", link: "/catalog/wheels/" },
    { name: "Belts Chains and Rollers", img: "https://boodmo.com/media/images/categories/51eb913.svg", link: "/catalog/drive_belts/" },
  ];
  // 🔹 Filtering Logic
  const filteredModels = models.filter((model) =>
    model.name.toLowerCase().includes(filter.toLowerCase())
  );

  // 🔹 Filter parts/categories by title or name using the categoryFilter state
  const filteredParts = categories.filter((c) =>
    (c.title || c.name || "").toLowerCase().includes(categoryFilter.toLowerCase())
  );


  return (
    <section className="min-h-screen py-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Breadcrumbs */}
      <div className="w-full mb-8 px-4">
        <VehicleBreadcrumbs />

        <h1 className="text-3xl px-2 font-bold text-gray-800 uppercase mb-6">
          TATA
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
      <section className="brand-info__desc mb-8 md:mb-10 px-6">
        <div className="space-y-1 text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            Tata Motors -{" "}
            <span className="text-red-500">Connecting Aspirations</span>
          </h3>

          <p>
            The journey of Tata is one from the bottom to the sky, beginning in 1945
            with <strong>Jamshedji Tata</strong>, the legendary house founder. The
            brand is now one of India’s most popular international brands, having
            acquired renowned labels such as <strong>Land Rover</strong> and{" "}
            <strong>Jaguar</strong>, while also holding the crown for the world’s
            cheapest passenger car – <strong>Nano</strong>.
          </p>

          <p>
            Boodmo houses a wide range of Tata car spare parts from both OEM and
            aftermarket labels. Select your car make to begin comparing parts and
            choosing the best value for your vehicle.
          </p>

          <p>
            Visit the official website:{" "}
            <a
              href="https://www.tatamotors.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-blue-500 hover:underline break-all"
            >
              https://www.tatamotors.com/
            </a>
          </p>
        </div>
      </section>


      {/* Model Filter Section */}
      <div className="heading-filters flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-200 pb-3 px-4 mb-6">
        <div className="h2-section text-2xl sm:text-3xl font-semibold text-gray-800">
          Choose Your{" "}
          <span className="h2-section__name text-red-500 font-bold">
            Model
          </span>
        </div>

        {/* Search Input */}
        <div className="heading-filters__action">
          <input
            type="search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter Model"
            className="form-control form-control--search w-64 sm:w-72 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 transition duration-200"
          />
        </div>
      </div>

      {/* Models Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {filteredModels.map((model) => (
          <li
            key={model.id}
            className="bg-white dark:bg-gray-800 rounded-md shadow-md hover:shadow-red-500/30 transform hover:-translate-y-1 transition duration-110 overflow-hidden"
          >
            {/* Image */}
            <div className="bg-white dark:bg-gray-700 flex items-center justify-center h-40">
              <img
                src={model.image}
                alt={model.name}
                className="object-contain h-full w-full p-6"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <a
                href={model.link}
                className="text-lg font-semibold text-gray-900 dark:text-white transition"
              >
                {model.name}
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {model.years}
              </p>

              {/* Dropdown */}
              <select className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm rounded-md px-3 py-2 outline-none transition">
                <option className="font-semibold" value="">
                  SELECT YOUR CAR
                </option>

                {model.modifications.map((group, i) => (
                  <optgroup
                    key={i}
                    label={group.generation}
                    className="font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700"
                  >
                    {group.options.map((opt, j) => (
                      <option key={j} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </li>
        ))}

        {/* No Models Found */}
        {filteredModels.length === 0 && (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400 py-10">
            No models found.
          </p>
        )}
      </ul>


      {/* ---------tata parts and accssories------------- */}
      <section className="mt-12 px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 mt-6">
          {/* Heading (Desktop) */}
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 hidden md:block">
            MAHINDRA Parts and{" "}
            <span className="text-red-600 dark:text-pink-400">Accessories</span>
          </h2>

          {/* Search Filter */}
          <div className="w-full md:w-1/3">
            <input
              type="search"
              placeholder="Filter Category ..."
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 
                          bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                          px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 
                          transition duration-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredParts.map((part, index) => {
            const displayName = part.title || part.name || "Category";
            const href = part.href || part.link || "#";
            const itemKey = `${displayName.replace(/\s+/g, "_")}-${index}`;
            return (
              <a
                key={itemKey}
                href={href}
                title={displayName}
                aria-label={displayName}
                className="flex flex-col items-center bg-white shadow hover:shadow-lg rounded-xl p-10  transition-transform transform hover:scale-105"
              >
                <div className="w-24 h-24 flex items-center justify-center mb-3">
                  {part.img ? (
                    <img
                      src={part.img}
                      alt={displayName}
                      className="max-w-[90%] max-h-[90%] object-contain"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  ) : (
                    <div
                      className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg"
                      aria-hidden
                    />
                  )}
                </div>
                <span className="mt-1 text-sm text-gray-700 dark:text-gray-200 text-center font-medium break-words">
                  {displayName}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <Article_Review />
    </section>
  );
};
