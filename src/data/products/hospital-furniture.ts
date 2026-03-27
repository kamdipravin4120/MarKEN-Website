import type { Product } from "@/types";

export const hospitalFurnitureProducts: Product[] = [
  {
    id: "hf-icu-bed-01",
    slug: "icu-bed",
    name: "ICU Electric Bed",
    shortName: "MICU Series",
    category: "hospital-furniture",
    subcategory: "ICU Beds",
    tagline: "5-Function Electric ICU Bed — Full Critical Care Control at the Bedside",
    description:
      "MarKEN MICU Series ICU beds deliver complete positioning control for critically ill patients with five independent motorised functions including Trendelenburg, reverse Trendelenburg, and CPR quick-flat. Constructed from epoxy-coated mild steel with a stainless steel deck, the bed withstands the rigours of high-dependency environments while keeping nursing workload low. Integrated nurse call, IV pole sockets, and side-rail locking ensure every clinical requirement is met at a single platform.",
    heroImage: "/images/hospital-furniture/icu-bed-hero.jpg",
    images: [
      "/images/hospital-furniture/icu-bed-front.jpg",
      "/images/hospital-furniture/icu-bed-side.jpg",
      "/images/hospital-furniture/icu-bed-trendelenburg.jpg",
      "/images/hospital-furniture/icu-bed-control-panel.jpg",
      "/images/hospital-furniture/icu-bed-rails.jpg",
    ],
    features: [
      {
        icon: "Settings",
        title: "5-Function Electric Control",
        description:
          "Independent motorised control of head raise, leg raise, height adjustment, Trendelenburg, and reverse Trendelenburg positions via hand pendant and foot panel.",
      },
      {
        icon: "Heart",
        title: "One-Touch CPR Position",
        description:
          "Single-button CPR function immediately flattens the bed to full supine in under 3 seconds, giving clinicians instant access for chest compressions.",
      },
      {
        icon: "Shield",
        title: "Collapsible Safety Side Rails",
        description:
          "Full-length ABS side rails fold down in sections for safe patient access while providing continuous fall protection. Rails lock positively at the raised position.",
      },
      {
        icon: "Activity",
        title: "Integrated Patient Scale",
        description:
          "Optional load-cell-based weighing system provides in-bed patient weight monitoring accurate to ±0.5 kg, eliminating hazardous patient transfers for weighing.",
      },
      {
        icon: "Wifi",
        title: "Nurse Call Integration",
        description:
          "Built-in nurse call socket compatible with standard hospital call systems allows patients to summon nursing staff without removing monitoring leads.",
      },
      {
        icon: "Lock",
        title: "Central Locking Castors",
        description:
          "150 mm diameter castors with central locking mechanism and directional lock keep the bed fixed during procedures and allow single-operator manoeuvring.",
      },
    ],
    specifications: [
      { label: "Bed Functions", value: "5 (Head, Leg, Height, Trendelenburg, Reverse Trendelenburg)" },
      { label: "Trendelenburg / Reverse Trendelenburg", value: "±15°" },
      { label: "Height Adjustment Range", value: "400–750 mm" },
      { label: "Head Section Angle", value: "0–75°" },
      { label: "Leg Section Angle", value: "0–45°" },
      { label: "Safe Working Load", value: "250 kg" },
      { label: "Deck Material", value: "Stainless Steel 304 / ABS Panels" },
      { label: "Frame Material", value: "Epoxy-Coated Mild Steel" },
      { label: "Side Rails", value: "Full-Length ABS, 3-Section Fold" },
      { label: "Mattress Platform", value: "4-Section Articulating" },
      { label: "Power Supply", value: "220V AC, 50 Hz / 24V DC backup" },
      { label: "Motor Drive", value: "Brushless DC, IP44 rated" },
    ],
    variants: [
      {
        id: "micu-01",
        model: "MICU-01",
        capacity: "250 kg SWL",
        dimensions: "2100 × 900 × 500 mm (min height)",
        weight: "145 kg",
        specs: [
          { label: "Functions", value: "3 (Head, Leg, Height)" },
          { label: "Power Consumption", value: "150", unit: "W" },
        ],
      },
      {
        id: "micu-02",
        model: "MICU-02",
        capacity: "250 kg SWL",
        dimensions: "2100 × 900 × 450 mm (min height)",
        weight: "160 kg",
        specs: [
          { label: "Functions", value: "5 (Head, Leg, Height, Trendelenburg, Rev. Trendelenburg)" },
          { label: "Power Consumption", value: "200", unit: "W" },
        ],
      },
      {
        id: "micu-03",
        model: "MICU-03",
        capacity: "280 kg SWL",
        dimensions: "2150 × 950 × 450 mm (min height)",
        weight: "175 kg",
        specs: [
          { label: "Functions", value: "5 + Integrated Patient Scale" },
          { label: "Power Consumption", value: "220", unit: "W" },
        ],
      },
    ],
    certifications: ["CE Marked", "ISO 13485", "ISO 9001", "CDSCO Registered", "BIS Certified"],
    downloads: [
      {
        title: "MICU Series Product Brochure",
        type: "brochure",
        url: "/downloads/micu-brochure.pdf",
        fileSize: "3.1 MB",
      },
      {
        title: "Technical Datasheet — MICU Series",
        type: "datasheet",
        url: "/downloads/micu-datasheet.pdf",
        fileSize: "1.4 MB",
      },
      {
        title: "Installation & Operation Manual",
        type: "manual",
        url: "/downloads/micu-manual.pdf",
        fileSize: "6.2 MB",
      },
      {
        title: "CE Certificate — MICU Series",
        type: "certificate",
        url: "/downloads/micu-ce-certificate.pdf",
        fileSize: "0.4 MB",
      },
    ],
    faqs: [
      {
        question: "What is the safe working load of the MICU Series ICU bed?",
        answer:
          "All MICU Series ICU beds are rated to a safe working load of 250 kg (MICU-01 and MICU-02) or 280 kg (MICU-03). This covers the combined weight of patient, mattress, and clinical accessories.",
      },
      {
        question: "How quickly does the CPR function activate?",
        answer:
          "The one-touch CPR function fully flattens the bed from any position to a horizontal supine position in under 3 seconds, meeting emergency response requirements for resuscitation.",
      },
      {
        question: "Can the bed operate on battery backup during a power failure?",
        answer:
          "Yes. The MICU-02 and MICU-03 models include a 24V DC backup battery system that allows all motor functions to operate for up to 30 minutes during a mains power failure.",
      },
      {
        question: "Are the side rails compatible with standard ICU monitoring accessories?",
        answer:
          "The side rails feature standard 20 mm diameter stainless steel rails with accessory clamp slots. They are compatible with IV poles, monitoring arm brackets, infusion pump holders, and most third-party ICU accessories.",
      },
      {
        question: "What mattress type is recommended?",
        answer:
          "MarKEN recommends 150 mm thick anti-decubitus foam or alternating-pressure air mattresses with medical-grade PU covers. The 4-section articulating deck is compatible with all standard 2100 × 900 mm ICU mattress sizes.",
      },
    ],
    relatedProducts: ["patient-bed", "trolleys-stretchers", "hospital-accessories"],
    seoTitle: "ICU Electric Bed | 5-Function | Trendelenburg | CPR | MarKEN",
    seoDescription:
      "MarKEN MICU Series 5-function electric ICU bed with Trendelenburg, CPR flat, height adjustment, and integrated nurse call. 250 kg SWL. CE & ISO 13485 certified. Made in India.",
    seoKeywords: [
      "ICU electric bed",
      "ICU bed manufacturer India",
      "5 function hospital bed",
      "Trendelenburg bed",
      "critical care bed",
      "ICU bed price India",
    ],
    has3DExperience: false,
  },

  {
    id: "hf-patient-bed-01",
    slug: "patient-bed",
    name: "Hospital Patient Bed",
    shortName: "MPB Series",
    category: "hospital-furniture",
    subcategory: "Patient Beds",
    tagline: "Manual & Semi-Electric Patient Beds — Built for Comfort, Engineered for Care",
    description:
      "MarKEN MPB Series hospital patient beds combine durable mild steel construction with ergonomic articulation designed for general ward, surgical, and post-operative use. Available in fully manual, semi-electric, and fully electric configurations with 2-function or 3-function operation, the beds feature foldable ABS side rails, IV pole sockets, and a centralised castor locking system. The powder-coated frame with epoxy finish resists hospital-grade disinfectants and meets the demands of high-turnover ward environments.",
    heroImage: "/images/hospital-furniture/patient-bed-hero.jpg",
    images: [
      "/images/hospital-furniture/patient-bed-front.jpg",
      "/images/hospital-furniture/patient-bed-side-rails.jpg",
      "/images/hospital-furniture/patient-bed-head-raised.jpg",
      "/images/hospital-furniture/patient-bed-castor.jpg",
    ],
    features: [
      {
        icon: "BedDouble",
        title: "2 & 3-Function Articulation",
        description:
          "Head and knee sections adjust independently via manual crank or electric motor, supporting Fowler's and semi-Fowler's positions for post-operative and respiratory care.",
      },
      {
        icon: "Shield",
        title: "ABS Foldable Side Rails",
        description:
          "ABS plastic side rails fold down in two sections per side, providing fall protection while maintaining nursing access without removing rails entirely.",
      },
      {
        icon: "Settings",
        title: "Height-Adjustable Variants",
        description:
          "Semi-electric and electric variants include motorised height adjustment from 400 mm to 700 mm, reducing nurse back strain during patient care procedures.",
      },
      {
        icon: "Lock",
        title: "Central Castor Lock",
        description:
          "Single-pedal central locking engages all four 125 mm castors simultaneously, preventing accidental bed movement during transfers or procedures.",
      },
      {
        icon: "CheckCircle",
        title: "Corrosion-Resistant Finish",
        description:
          "Epoxy powder coating on all steel surfaces withstands repeated cleaning with hospital-grade disinfectants including sodium hypochlorite and quaternary ammonium compounds.",
      },
      {
        icon: "Activity",
        title: "Drainage Holder & Accessories",
        description:
          "Integrated drainage bag hooks, IV pole sockets, and side accessory rail support catheters, infusion lines, and monitoring cables without cluttering the bedside.",
      },
    ],
    specifications: [
      { label: "Bed Configurations", value: "Manual, Semi-Electric (2F), Fully Electric (3F)" },
      { label: "Head Section Angle", value: "0–75°" },
      { label: "Knee Section Angle", value: "0–40°" },
      { label: "Height Range (electric)", value: "400–700 mm" },
      { label: "Safe Working Load", value: "200 kg" },
      { label: "Frame Material", value: "MS Powder Coated, Epoxy Finish" },
      { label: "Deck Material", value: "ABS Panels, 3-Section" },
      { label: "Side Rails", value: "ABS, 2-Section Foldable per Side" },
      { label: "Castor Size", value: "125 mm with Central Lock" },
      { label: "Mattress Size", value: "1900 × 800 mm (standard)" },
      { label: "Power Supply (electric)", value: "220V AC, 50 Hz" },
      { label: "Motor Rating", value: "24V DC, IP42 rated" },
    ],
    variants: [
      {
        id: "mpb-01",
        model: "MPB-01",
        capacity: "200 kg SWL",
        dimensions: "2050 × 900 × 550 mm",
        weight: "65 kg",
        specs: [
          { label: "Type", value: "Fully Manual, 2-Function" },
          { label: "Crank", value: "Removable ABS Crank Handle" },
        ],
      },
      {
        id: "mpb-02",
        model: "MPB-02",
        capacity: "200 kg SWL",
        dimensions: "2050 × 900 × 450–700 mm",
        weight: "85 kg",
        specs: [
          { label: "Type", value: "Semi-Electric, 2-Function + Electric Height" },
          { label: "Power Consumption", value: "120", unit: "W" },
        ],
      },
      {
        id: "mpb-03",
        model: "MPB-03",
        capacity: "200 kg SWL",
        dimensions: "2100 × 900 × 400–700 mm",
        weight: "98 kg",
        specs: [
          { label: "Type", value: "Fully Electric, 3-Function" },
          { label: "Power Consumption", value: "160", unit: "W" },
        ],
      },
    ],
    certifications: ["CE Marked", "ISO 13485", "ISO 9001", "CDSCO Registered", "BIS Certified"],
    downloads: [
      {
        title: "MPB Series Product Brochure",
        type: "brochure",
        url: "/downloads/mpb-brochure.pdf",
        fileSize: "2.6 MB",
      },
      {
        title: "Technical Datasheet — MPB Series",
        type: "datasheet",
        url: "/downloads/mpb-datasheet.pdf",
        fileSize: "1.2 MB",
      },
      {
        title: "Installation & Operation Manual",
        type: "manual",
        url: "/downloads/mpb-manual.pdf",
        fileSize: "4.8 MB",
      },
    ],
    faqs: [
      {
        question: "What is the difference between 2-function and 3-function beds?",
        answer:
          "A 2-function bed adjusts the head section and knee section independently. A 3-function bed adds motorised height adjustment as the third function, allowing nurses to raise or lower the entire sleeping surface without manual effort.",
      },
      {
        question: "Can the manual crank be locked to prevent accidental position change?",
        answer:
          "Yes. All MPB-01 manual beds include a ratchet-lock crank handle that locks the head and knee sections in position. The crank is removable and can be stored in the bed frame when not in use.",
      },
      {
        question: "What mattress sizes are compatible with the MPB Series?",
        answer:
          "Standard mattress size is 1900 × 800 mm. The platform accepts mattresses up to 150 mm thick. Larger 2050 × 900 mm mattresses can be accommodated on request.",
      },
      {
        question: "Are spare parts readily available across India?",
        answer:
          "Yes. MarKEN maintains a network of 500+ service centres across India. Castors, side rails, ABS deck panels, and motor assemblies are stocked as standard spare parts with typical delivery within 48 hours.",
      },
    ],
    relatedProducts: ["icu-bed", "trolleys-stretchers", "hospital-accessories"],
    seoTitle: "Hospital Patient Bed | Manual & Electric | 2 & 3 Function | MarKEN",
    seoDescription:
      "MarKEN MPB Series hospital beds — manual, semi-electric, and fully electric in 2 and 3-function configurations. 200 kg SWL, ABS side rails, central castor lock. CE & ISO 13485 certified.",
    seoKeywords: [
      "hospital patient bed",
      "hospital bed manufacturer India",
      "semi electric hospital bed",
      "3 function hospital bed",
      "ward bed India",
      "hospital bed price India",
    ],
    has3DExperience: false,
  },

  {
    id: "hf-trolleys-stretchers-01",
    slug: "trolleys-stretchers",
    name: "Trolleys & Stretchers",
    shortName: "MTS Series",
    category: "hospital-furniture",
    subcategory: "Trolleys & Stretchers",
    tagline: "Emergency Stretcher Trolleys — Safe, Swift Patient Transfer from Point of Entry to Care",
    description:
      "MarKEN MTS Series stretcher trolleys are engineered for fast, safe patient movement across emergency departments, surgical corridors, and general wards. The X-frame hydraulic design enables single-hand height adjustment from 560 mm to 850 mm, while the 3-section adjustable backrest and telescoping IV pole support clinical management during transfer. Stainless steel construction, central locking castors, and a 200 kg load rating make the MTS Series the preferred choice for high-volume Indian hospitals.",
    heroImage: "/images/hospital-furniture/stretcher-trolley-hero.jpg",
    images: [
      "/images/hospital-furniture/stretcher-trolley-front.jpg",
      "/images/hospital-furniture/stretcher-trolley-side.jpg",
      "/images/hospital-furniture/stretcher-trolley-head-raised.jpg",
      "/images/hospital-furniture/stretcher-trolley-accessories.jpg",
    ],
    features: [
      {
        icon: "Activity",
        title: "Hydraulic Height Adjustment",
        description:
          "Foot-operated hydraulic pump raises the trolley from 560 mm to 850 mm with a single lever release for lowering, allowing safe patient loading at bed height.",
      },
      {
        icon: "Settings",
        title: "3-Section Adjustable Backrest",
        description:
          "Backrest raises to 75° independently of the leg rest, supporting patients in upright positions for respiratory distress or conscious transfers.",
      },
      {
        icon: "Shield",
        title: "Full-Length Safety Rails",
        description:
          "Tubular stainless steel side rails run the full length of the trolley and fold flat for patient transfer, providing continuous fall protection during transport.",
      },
      {
        icon: "Lock",
        title: "5-Castor Steering System",
        description:
          "Four corner castors plus a central swivel castor (optional) enable precise single-operator steering through narrow hospital corridors and lift doors.",
      },
      {
        icon: "CheckCircle",
        title: "Stainless Steel Deck",
        description:
          "SS 304 mattress platform with raised edge lip prevents mattress migration during rapid transport. Surface is easy to decontaminate between patients.",
      },
      {
        icon: "Zap",
        title: "Rapid Transfer Ready",
        description:
          "X-frame collapse mechanism allows the trolley to transfer patients directly onto CT, MRI, or surgical tables without patient lift, reducing movement-related injury risk.",
      },
    ],
    specifications: [
      { label: "Height Adjustment", value: "560–850 mm (hydraulic)" },
      { label: "Backrest Angle", value: "0–75°" },
      { label: "Platform Length", value: "1950 mm" },
      { label: "Platform Width", value: "560 mm" },
      { label: "Safe Working Load", value: "200 kg" },
      { label: "Frame Material", value: "SS 304 / Epoxy MS" },
      { label: "Platform Material", value: "Stainless Steel 304" },
      { label: "Side Rails", value: "Full-Length SS Tubular, Foldable" },
      { label: "Castor Size", value: "150 mm with Directional & Central Lock" },
      { label: "Mattress Thickness", value: "75 mm (included)" },
      { label: "IV Pole", value: "Telescoping, 4-Hook SS" },
      { label: "Oxygen Cylinder Holder", value: "Optional, Below-Deck Clamp" },
    ],
    variants: [
      {
        id: "mts-01",
        model: "MTS-01",
        capacity: "200 kg SWL",
        dimensions: "1980 × 600 × 560–850 mm",
        weight: "52 kg",
        specs: [
          { label: "Type", value: "Standard Emergency Stretcher" },
          { label: "Backrest", value: "2-Section (Head Only)" },
        ],
      },
      {
        id: "mts-02",
        model: "MTS-02",
        capacity: "200 kg SWL",
        dimensions: "1980 × 600 × 560–850 mm",
        weight: "60 kg",
        specs: [
          { label: "Type", value: "3-Section Emergency Stretcher" },
          { label: "Backrest", value: "3-Section (Head + Leg)" },
        ],
      },
      {
        id: "mts-03",
        model: "MTS-03",
        capacity: "250 kg SWL",
        dimensions: "2050 × 650 × 560–850 mm",
        weight: "72 kg",
        specs: [
          { label: "Type", value: "Bariatric Transfer Trolley" },
          { label: "Backrest", value: "3-Section, Reinforced Frame" },
        ],
      },
    ],
    certifications: ["CE Marked", "ISO 13485", "ISO 9001", "CDSCO Registered"],
    downloads: [
      {
        title: "MTS Series Product Brochure",
        type: "brochure",
        url: "/downloads/mts-brochure.pdf",
        fileSize: "2.2 MB",
      },
      {
        title: "Technical Datasheet — MTS Series",
        type: "datasheet",
        url: "/downloads/mts-datasheet.pdf",
        fileSize: "1.0 MB",
      },
      {
        title: "Operation & Maintenance Manual",
        type: "manual",
        url: "/downloads/mts-manual.pdf",
        fileSize: "3.5 MB",
      },
    ],
    faqs: [
      {
        question: "What is the maximum height of the MTS Series stretcher?",
        answer:
          "The MTS Series hydraulic stretcher adjusts from a low loading height of 560 mm to 850 mm at its maximum, accommodating standard hospital bed height for lateral patient transfer.",
      },
      {
        question: "Can the stretcher be used for CT or MRI transfers?",
        answer:
          "Yes. The MTS-01 and MTS-02 are built with non-magnetic SS 304 frames. For MRI-safe use, specify the MRI-compatible variant at the time of order, which substitutes aluminium alloy castors for the standard steel ones.",
      },
      {
        question: "How is the mattress secured during rapid transport?",
        answer:
          "The SS 304 platform features a 30 mm raised edge lip around the perimeter that prevents the mattress from shifting. Optional Velcro straps provide additional security for bariatric patients.",
      },
      {
        question: "What types of trolleys are available beyond the emergency stretcher?",
        answer:
          "MarKEN MTS Series includes emergency stretchers, instrument trolleys, dressing trolleys, medicine trolleys, crash carts, and procedure trolleys. Contact us for the full accessory trolley catalogue.",
      },
    ],
    relatedProducts: ["icu-bed", "patient-bed", "hospital-accessories"],
    seoTitle: "Hospital Stretcher Trolley | Emergency Stretcher | Hydraulic | MarKEN",
    seoDescription:
      "MarKEN MTS Series hydraulic emergency stretcher trolleys. 560–850 mm height range, 200 kg SWL, SS 304 deck, 3-section backrest. CE & ISO 13485 certified. Manufactured in Nashik, India.",
    seoKeywords: [
      "hospital stretcher trolley",
      "emergency stretcher India",
      "patient transfer trolley",
      "hydraulic stretcher",
      "medical trolley manufacturer India",
      "stretcher trolley price",
    ],
    has3DExperience: false,
  },

  {
    id: "hf-hospital-accessories-01",
    slug: "hospital-accessories",
    name: "Hospital Accessories",
    shortName: "MHA Series",
    category: "hospital-furniture",
    subcategory: "Hospital Accessories",
    tagline: "Bedside Lockers, Overbed Tables, IV Stands & Nurse Call — Complete Ward Infrastructure",
    description:
      "MarKEN MHA Series hospital accessories provide the complete ecosystem of ward furniture needed around every patient bed. The range includes bedside lockers with lockable storage, height-adjustable overbed tables with tilting tops, single and double hook IV stands, and wired nurse call handsets. All items share a common epoxy powder-coated mild steel or stainless steel construction, ensuring long service life and compatibility with hospital-grade cleaning protocols.",
    heroImage: "/images/hospital-furniture/hospital-accessories-hero.jpg",
    images: [
      "/images/hospital-furniture/bedside-locker.jpg",
      "/images/hospital-furniture/overbed-table.jpg",
      "/images/hospital-furniture/iv-stand.jpg",
      "/images/hospital-furniture/nurse-call.jpg",
    ],
    features: [
      {
        icon: "Lock",
        title: "Secure Bedside Locker",
        description:
          "Mild steel bedside locker with key-locked upper drawer, open shelf, and lower cupboard. Anti-tip brackets secure the locker to the wall or bed frame.",
      },
      {
        icon: "Settings",
        title: "Height-Adjustable Overbed Table",
        description:
          "Gas-spring or screw-column height adjustment from 720 mm to 1050 mm with a 500 × 350 mm melamine or laminate top that tilts ±30° for reading and eating.",
      },
      {
        icon: "Activity",
        title: "IV Stand — Single & Double Hook",
        description:
          "Telescoping stainless steel IV pole adjusts from 900 mm to 2100 mm, available with 4-hook or 6-hook top and a 5-castor base for stability on uneven floors.",
      },
      {
        icon: "Wifi",
        title: "Wired Nurse Call System",
        description:
          "Bedside call unit with patient handset, corridor light, and nurse station annunciator. Compatible with leading nurse call system brands for new or retrofit installations.",
      },
      {
        icon: "CheckCircle",
        title: "Corrosion-Resistant Construction",
        description:
          "All MHA Series items use epoxy powder-coated MS or SS 304 construction, resisting bleach, phenol, and quaternary ammonium compound disinfectants.",
      },
      {
        icon: "Gauge",
        title: "Modular Accessory Rail System",
        description:
          "Optional 25 mm SS accessory rail on bedside lockers and overbed tables accommodates clamp-on accessories including tissue dispensers, tablet holders, and remote controls.",
      },
    ],
    specifications: [
      { label: "Bedside Locker Dimensions", value: "450 × 400 × 820 mm (H)" },
      { label: "Locker Material", value: "Epoxy-Coated MS, 1.2 mm thick" },
      { label: "Locker Storage", value: "Upper Drawer (locked) + Open Shelf + Lower Cupboard" },
      { label: "Overbed Table Height Range", value: "720–1050 mm" },
      { label: "Overbed Table Top Size", value: "500 × 350 mm" },
      { label: "Table Top Tilt", value: "±30°" },
      { label: "IV Stand Height Range", value: "900–2100 mm (telescoping)" },
      { label: "IV Stand Base", value: "5-Castor, 500 mm diameter" },
      { label: "IV Stand Hooks", value: "4 or 6 (SS 304)" },
      { label: "Nurse Call Voltage", value: "12V DC (safety extra low voltage)" },
      { label: "Nurse Call Cable Length", value: "3 m (patient handset)" },
      { label: "Surface Finish", value: "Epoxy Powder Coat / SS 304 Brushed" },
    ],
    variants: [
      {
        id: "mha-01",
        model: "MHA-01",
        capacity: "Bedside Locker",
        dimensions: "450 × 400 × 820 mm",
        weight: "12 kg",
        specs: [
          { label: "Compartments", value: "3 (drawer, shelf, cupboard)" },
          { label: "Finish", value: "Epoxy Powder Coat — 20 colour options" },
        ],
      },
      {
        id: "mha-02",
        model: "MHA-02",
        capacity: "Overbed Table",
        dimensions: "500 × 350 × 720–1050 mm",
        weight: "8 kg",
        specs: [
          { label: "Height Adjustment", value: "Gas-spring column" },
          { label: "Top Surface", value: "Melamine laminate, easy-clean" },
        ],
      },
      {
        id: "mha-03",
        model: "MHA-03",
        capacity: "IV Stand (4-Hook)",
        dimensions: "500 mm base diameter × 900–2100 mm height",
        weight: "4.5 kg",
        specs: [
          { label: "Hooks", value: "4 × SS 304" },
          { label: "Base", value: "5-castor, 500 mm diameter" },
        ],
      },
      {
        id: "mha-04",
        model: "MHA-04",
        capacity: "Nurse Call System (per bed unit)",
        dimensions: "Bedhead Panel: 250 × 100 mm",
        weight: "0.8 kg",
        specs: [
          { label: "Voltage", value: "12V DC SELV" },
          { label: "Handset Cable", value: "3 m coiled" },
        ],
      },
    ],
    certifications: ["CE Marked", "ISO 9001", "CDSCO Registered", "BIS Certified"],
    downloads: [
      {
        title: "MHA Series Hospital Accessories Brochure",
        type: "brochure",
        url: "/downloads/mha-brochure.pdf",
        fileSize: "2.8 MB",
      },
      {
        title: "Technical Datasheet — MHA Series",
        type: "datasheet",
        url: "/downloads/mha-datasheet.pdf",
        fileSize: "1.1 MB",
      },
      {
        title: "Nurse Call Installation Guide",
        type: "manual",
        url: "/downloads/mha-nurse-call-manual.pdf",
        fileSize: "2.0 MB",
      },
    ],
    faqs: [
      {
        question: "Can the bedside locker be fixed to the bed frame?",
        answer:
          "Yes. The MHA-01 bedside locker includes a bolt-on anti-tip bracket that secures it to the side rail socket of MarKEN MPB and MICU series beds, as well as a wall-mount option for fixed ward installations.",
      },
      {
        question: "What is the weight capacity of the overbed table?",
        answer:
          "The MHA-02 overbed table supports up to 15 kg distributed load on the table top, sufficient for meal trays, laptops, books, and bedside monitoring equipment.",
      },
      {
        question: "Is the nurse call system compatible with existing hospital call networks?",
        answer:
          "The MHA-04 nurse call unit operates at 12V DC SELV and uses a standard 2-wire loop protocol. It is compatible with most existing nurse call system backbones including Ackermann, WesCall, and Aiphone systems.",
      },
      {
        question: "Are accessories available in different colour options?",
        answer:
          "Yes. Bedside lockers and overbed tables are available in 20 standard epoxy powder coat colours to match hospital interior schemes. Custom RAL colours are available for orders of 50 units or more.",
      },
      {
        question: "Do you supply complete ward packages?",
        answer:
          "Yes. MarKEN offers complete ward fit-out packages including patient beds, bedside lockers, overbed tables, IV stands, and nurse call systems as a single turnkey supply. Contact our projects team for ward-level pricing.",
      },
    ],
    relatedProducts: ["icu-bed", "patient-bed", "trolleys-stretchers"],
    seoTitle: "Hospital Accessories | Bedside Locker, Overbed Table, IV Stand | MarKEN",
    seoDescription:
      "MarKEN MHA Series hospital accessories — bedside lockers, height-adjustable overbed tables, IV stands, and nurse call systems. CE & ISO 9001 certified. Complete ward infrastructure from India.",
    seoKeywords: [
      "hospital bedside locker",
      "overbed table",
      "IV stand hospital",
      "nurse call system India",
      "hospital accessories manufacturer",
      "ward furniture India",
    ],
    has3DExperience: false,
  },
];
