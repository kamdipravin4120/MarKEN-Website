import type { Product } from "@/types";
import { bloodBankRefrigerator } from "../products";

// ============================================================
// Blood Collection Monitor — MBCM Series
// ============================================================
const bloodCollectionMonitor: Product = {
  id: "bbm-01",
  slug: "blood-collection-monitor",
  name: "Blood Collection Monitor",
  shortName: "MBCM Series",
  category: "blood-bank-equipment",
  subcategory: "Collection",
  tagline: "Precise Weighing & Gentle Mixing — Safer Blood Donation Every Time",
  description:
    "The MarKEN Blood Collection Monitor provides accurate electronic weighing and automatic bag agitation during whole blood collection. It continuously monitors the volume of blood collected, gently mixes the anticoagulant in the bag, and triggers an audio-visual alarm when the target weight is reached, preventing overfilling and hemolysis. Designed to meet NABH and WHO blood bank standards for voluntary blood donation centers.",
  heroImage: "/images/mbcm-hero.jpg",
  images: [
    "/images/mbcm-front.jpg",
    "/images/mbcm-agitation.jpg",
    "/images/mbcm-display.jpg",
    "/images/mbcm-arm-holder.jpg",
  ],
  features: [
    {
      icon: "Scale",
      title: "Precision Electronic Weighing",
      description:
        "High-accuracy load cell with ±1 g resolution monitors blood volume in real time. Automatic stop alarm at preset collection weight (default 450 g).",
    },
    {
      icon: "RotateCcw",
      title: "Automatic Bag Agitation",
      description:
        "Motorized rocking platform gently inverts the blood bag 8–12 times per minute to ensure thorough anticoagulant mixing and prevent clot formation.",
    },
    {
      icon: "BellRing",
      title: "Audio-Visual End-Point Alarm",
      description:
        "Distinct buzzer and LED flash alert the phlebotomist when target volume is reached. Mixing automatically stops to protect donor and sample.",
    },
    {
      icon: "Timer",
      title: "Collection Time Monitoring",
      description:
        "Integrated timer records donation duration. Prolonged collection beyond preset limit (default 12 min) triggers a separate slow-flow alarm.",
    },
    {
      icon: "Sliders",
      title: "Adjustable Target Weight",
      description:
        "Operator-configurable collection target from 200 g to 600 g accommodates pediatric, single, and double blood unit collections.",
    },
    {
      icon: "Plug",
      title: "Dual Power Operation",
      description:
        "Operates on 220V AC mains or built-in rechargeable battery, enabling uninterrupted use during mobile blood donation camps.",
    },
  ],
  specifications: [
    { label: "Weighing Range", value: "0 – 700 g", unit: "g" },
    { label: "Weighing Resolution", value: "±1 g" },
    { label: "Collection Target (default)", value: "450 g" },
    { label: "Target Weight Range", value: "200 – 600 g" },
    { label: "Agitation Frequency", value: "8 – 12 cycles/min" },
    { label: "Slow-Flow Alarm Threshold", value: "Configurable 5–15 min" },
    { label: "Display", value: "4-digit LED, weight + time" },
    { label: "Power Supply", value: "220V ± 10%, 50 Hz / Battery" },
    { label: "Battery Backup", value: "8 hours continuous use" },
    { label: "Arm Holder", value: "Integrated adjustable IV stand clamp" },
    { label: "Bag Holder Platform", value: "Stainless steel SS 304" },
    { label: "Ambient Temperature", value: "+15°C to +35°C" },
  ],
  variants: [
    {
      id: "mbcm-01",
      model: "MBCM-01",
      capacity: "Single Unit (450 mL)",
      dimensions: "220 × 180 × 80 mm",
      weight: "1.8 kg",
      specs: [
        { label: "Power Consumption", value: "15", unit: "W" },
        { label: "Battery Life", value: "8", unit: "hours" },
      ],
    },
    {
      id: "mbcm-02",
      model: "MBCM-02",
      capacity: "Single Unit with Printer (450 mL)",
      dimensions: "260 × 200 × 120 mm",
      weight: "2.4 kg",
      specs: [
        { label: "Power Consumption", value: "25", unit: "W" },
        { label: "Battery Life", value: "6", unit: "hours" },
        { label: "Printer", value: "Thermal label printer (built-in)" },
      ],
    },
    {
      id: "mbcm-03",
      model: "MBCM-03",
      capacity: "Double Unit (900 mL)",
      dimensions: "260 × 220 × 120 mm",
      weight: "2.7 kg",
      specs: [
        { label: "Power Consumption", value: "30", unit: "W" },
        { label: "Battery Life", value: "6", unit: "hours" },
        { label: "Dual Bag Support", value: "Simultaneous apheresis mode" },
      ],
    },
  ],
  certifications: ["CE Marked", "ISO 13485", "ISO 9001", "CDSCO"],
  downloads: [
    {
      title: "Blood Collection Monitor Brochure",
      type: "brochure",
      url: "/downloads/mbcm-brochure.pdf",
      fileSize: "1.8 MB",
    },
    {
      title: "Technical Datasheet — MBCM Series",
      type: "datasheet",
      url: "/downloads/mbcm-datasheet.pdf",
      fileSize: "0.9 MB",
    },
    {
      title: "Installation & Operation Manual",
      type: "manual",
      url: "/downloads/mbcm-manual.pdf",
      fileSize: "3.2 MB",
    },
    {
      title: "CE Certificate — MBCM Series",
      type: "certificate",
      url: "/downloads/mbcm-ce.pdf",
      fileSize: "0.2 MB",
    },
  ],
  faqs: [
    {
      question: "What happens when the target weight is reached?",
      answer:
        "The monitor triggers a loud audio alarm and flashes the LED indicator. The agitation motor stops automatically. The phlebotomist must then clamp the donation line — the unit does not clamp automatically.",
    },
    {
      question: "Can the device operate during blood donation camps?",
      answer:
        "Yes. The MBCM-01 and MBCM-02 include a built-in rechargeable battery rated for 8 and 6 hours respectively, making them fully functional at mobile camps without mains power.",
    },
    {
      question: "Is the target weight adjustable per donor?",
      answer:
        "The target weight can be set between 200 g and 600 g by the operator before each donation session. The default is 450 g (approximately 450 mL whole blood).",
    },
    {
      question: "How often should the load cell be calibrated?",
      answer:
        "Calibration is recommended every 6 months or after any mechanical impact. The unit features a built-in calibration routine accessible via the front panel with a certified calibration weight.",
    },
    {
      question: "Does it support integration with blood bank software?",
      answer:
        "The MBCM-02 variant includes an RS-232 output for interfacing with blood bank information systems (BBIS). Donation weight, time, and donor ID can be auto-transmitted at collection end.",
    },
  ],
  relatedProducts: ["blood-bank-refrigerator", "refrigerated-centrifuge", "sterile-connecting-device"],
  seoTitle: "Blood Collection Monitor | MBCM Series | MarKEN India",
  seoDescription:
    "MarKEN MBCM Blood Collection Monitor — electronic weighing with ±1 g accuracy, automatic bag agitation, and end-point alarm for safe blood donation. Battery operable for camps.",
  seoKeywords: [
    "blood collection monitor",
    "blood bag weighing mixer",
    "blood donation monitor india",
    "blood bag agitator",
    "blood bank equipment",
  ],
  has3DExperience: false,
};

// ============================================================
// Refrigerated Centrifuge — MRC Series
// ============================================================
const refrigeratedCentrifuge: Product = {
  id: "rc-01",
  slug: "refrigerated-centrifuge",
  name: "Refrigerated Centrifuge",
  shortName: "MRC Series",
  category: "blood-bank-equipment",
  subcategory: "Processing",
  tagline: "Precise Component Separation — From Whole Blood to Platelet-Rich Plasma",
  description:
    "The MarKEN Refrigerated Centrifuge is engineered for high-throughput blood component separation in blood banks, apheresis centers, and transfusion medicine departments. Its powerful brushless motor delivers precise RPM and RCF control from +4°C to ambient temperature, enabling safe preparation of packed red cells, fresh frozen plasma, platelet concentrates, and cryoprecipitate. A microprocessor-controlled refrigeration system keeps the chamber temperature stable throughout the run, protecting labile blood components from thermal damage.",
  heroImage: "/images/mrc-hero.jpg",
  images: [
    "/images/mrc-front.jpg",
    "/images/mrc-rotor.jpg",
    "/images/mrc-chamber.jpg",
    "/images/mrc-control-panel.jpg",
    "/images/mrc-blood-bags.jpg",
  ],
  features: [
    {
      icon: "Gauge",
      title: "Variable Speed & RCF Control",
      description:
        "Stepless speed control from 200 to 6,000 RPM. Direct RCF entry mode automatically calculates speed from rotor radius — eliminates calculation errors.",
    },
    {
      icon: "Thermometer",
      title: "Refrigerated Chamber (+4°C to +25°C)",
      description:
        "Compressor-based chamber cooling maintains set temperature ±1°C throughout the run, protecting heat-labile plasma proteins and platelets.",
    },
    {
      icon: "Shield",
      title: "Imbalance Detection & Lid Lock",
      description:
        "Electronic imbalance sensor auto-stops the rotor if load asymmetry is detected. Electromagnetic lid lock prevents opening at speeds above 100 RPM.",
    },
    {
      icon: "Timer",
      title: "Programmable Profiles",
      description:
        "Store up to 20 user-defined separation programs (speed, time, temperature, acceleration/deceleration ramp) for PRC, FFP, platelet, and cryoprecipitate protocols.",
    },
    {
      icon: "Zap",
      title: "Brushless Induction Motor",
      description:
        "Oil-free brushless induction motor provides maintenance-free operation with minimal vibration and noise. Suitable for 24/7 blood bank operation.",
    },
    {
      icon: "Wind",
      title: "Aerosol-Tight Rotor Design",
      description:
        "Sealed rotor bowl with aerosol-tight O-ring contains any accidental tube rupture, protecting operators from biological contamination.",
    },
  ],
  specifications: [
    { label: "Maximum Speed", value: "6,000 RPM" },
    { label: "Maximum RCF", value: "5,000 × g" },
    { label: "Speed Accuracy", value: "±20 RPM" },
    { label: "Temperature Range", value: "+4°C to +25°C" },
    { label: "Temperature Accuracy", value: "±1°C" },
    { label: "Timer Range", value: "1 – 99 min" },
    { label: "Acceleration Profiles", value: "9 levels (0 – max)" },
    { label: "Deceleration Profiles", value: "9 levels (0 = free coast)" },
    { label: "Motor Type", value: "Brushless AC Induction" },
    { label: "Rotor Capacity", value: "4 × 600 mL blood bags (swing-out)" },
    { label: "Programs Stored", value: "20 user-defined" },
    { label: "Power Supply", value: "220V ± 10%, 50 Hz" },
    { label: "Noise Level", value: "< 60 dB(A) at max speed" },
  ],
  variants: [
    {
      id: "mrc-04",
      model: "MRC-04",
      capacity: "4 × 600 mL bags",
      dimensions: "480 × 550 × 350 mm",
      weight: "62 kg",
      specs: [
        { label: "Max Speed", value: "5,000", unit: "RPM" },
        { label: "Power Consumption", value: "1,200", unit: "W" },
        { label: "Rotor Type", value: "Swing-out 4-bucket" },
      ],
    },
    {
      id: "mrc-06",
      model: "MRC-06",
      capacity: "6 × 600 mL bags",
      dimensions: "560 × 600 × 380 mm",
      weight: "75 kg",
      specs: [
        { label: "Max Speed", value: "6,000", unit: "RPM" },
        { label: "Power Consumption", value: "1,600", unit: "W" },
        { label: "Rotor Type", value: "Swing-out 6-bucket" },
      ],
    },
    {
      id: "mrc-06f",
      model: "MRC-06F",
      capacity: "6 × 600 mL bags (floor model)",
      dimensions: "620 × 650 × 900 mm",
      weight: "110 kg",
      specs: [
        { label: "Max Speed", value: "6,000", unit: "RPM" },
        { label: "Power Consumption", value: "2,000", unit: "W" },
        { label: "Rotor Type", value: "Swing-out 6-bucket + angle rotor" },
        { label: "Floor Standing", value: "Yes" },
      ],
    },
  ],
  certifications: ["CE Marked", "ISO 13485", "ISO 9001", "CDSCO"],
  downloads: [
    {
      title: "Refrigerated Centrifuge Brochure",
      type: "brochure",
      url: "/downloads/mrc-brochure.pdf",
      fileSize: "2.1 MB",
    },
    {
      title: "Technical Datasheet — MRC Series",
      type: "datasheet",
      url: "/downloads/mrc-datasheet.pdf",
      fileSize: "1.0 MB",
    },
    {
      title: "Installation & Operation Manual",
      type: "manual",
      url: "/downloads/mrc-manual.pdf",
      fileSize: "6.5 MB",
    },
    {
      title: "CE Certificate — MRC Series",
      type: "certificate",
      url: "/downloads/mrc-ce.pdf",
      fileSize: "0.3 MB",
    },
  ],
  faqs: [
    {
      question: "What blood components can be separated with this centrifuge?",
      answer:
        "The MRC series supports preparation of packed red cells (PRC), platelet-rich plasma (PRP), platelet concentrates (PC), fresh frozen plasma (FFP), and cryoprecipitate, using standard hard-spin and soft-spin protocols.",
    },
    {
      question: "Can I program custom centrifugation protocols?",
      answer:
        "Yes. Up to 20 programs can be stored with custom speed, time, temperature, and ramp profiles. Standard AABB and WHO blood component protocols are pre-loaded at the factory.",
    },
    {
      question: "What safety features prevent rotor failure?",
      answer:
        "The unit includes electronic imbalance detection, over-speed protection, over-temperature shutdown, electromagnetic lid lock (opens only below 100 RPM), and a motor thermal cutout.",
    },
    {
      question: "What is the minimum temperature the chamber can reach?",
      answer:
        "The refrigerated chamber can be set as low as +4°C with ±1°C accuracy, suitable for plasma and PRC component processing without cold-activating platelet aggregation.",
    },
  ],
  relatedProducts: ["blood-bank-refrigerator", "platelet-incubator-agitator", "plasma-thawing-bath"],
  seoTitle: "Refrigerated Centrifuge for Blood Bank | MRC Series | MarKEN",
  seoDescription:
    "MarKEN MRC Refrigerated Centrifuge — up to 6,000 RPM, +4°C chamber, swing-out 4–6 blood bag rotors. Ideal for PRC, FFP, platelet, and cryoprecipitate preparation.",
  seoKeywords: [
    "refrigerated centrifuge blood bank",
    "blood component separation centrifuge",
    "blood bag centrifuge india",
    "refrigerated centrifuge price india",
    "blood bank processing equipment",
  ],
  has3DExperience: false,
};

// ============================================================
// Platelet Incubator Agitator — MPI Series
// ============================================================
const plateletIncubatorAgitator: Product = {
  id: "pia-01",
  slug: "platelet-incubator-agitator",
  name: "Platelet Incubator Agitator",
  shortName: "MPI Series",
  category: "blood-bank-equipment",
  subcategory: "Incubation",
  tagline: "Uninterrupted Platelet Viability — Constant Agitation at +22°C",
  description:
    "The MarKEN Platelet Incubator Agitator maintains platelet concentrates and apheresis platelets at the WHO-recommended storage temperature of +20°C to +24°C with continuous 60–70 cycle-per-minute flat-bed or elliptical agitation. Continuous movement prevents platelet aggregation, extends shelf life to 5–7 days, and ensures transfusion efficacy. Its forced-air incubation chamber provides exceptional uniformity across all bag positions, while audible-visual alarms protect against temperature and agitation failure.",
  heroImage: "/images/mpi-hero.jpg",
  images: [
    "/images/mpi-front.jpg",
    "/images/mpi-tray.jpg",
    "/images/mpi-control-panel.jpg",
    "/images/mpi-interior.jpg",
  ],
  features: [
    {
      icon: "Thermometer",
      title: "Precision +20°C to +24°C Control",
      description:
        "Microprocessor PID controller maintains temperature within ±0.5°C of setpoint, preventing cold storage activation of platelet aggregation pathways.",
    },
    {
      icon: "RotateCcw",
      title: "Continuous Flat-Bed Agitation",
      description:
        "60–70 cycles per minute flat agitation keeps platelets uniformly suspended. Elliptical motion option prevents edge accumulation in large-volume bags.",
    },
    {
      icon: "Wind",
      title: "Forced-Air Uniformity",
      description:
        "Microprocessor-controlled blower ensures temperature uniformity of ±0.5°C across all tray positions — no warm spots even at maximum load.",
    },
    {
      icon: "BellRing",
      title: "Motion Failure Alarm",
      description:
        "Dedicated agitation-stop sensor triggers an alarm within 5 seconds of motor failure — critical for protecting platelet viability in large-inventory units.",
    },
    {
      icon: "Layers",
      title: "Stackable Tray Design",
      description:
        "Removable SS trays accommodate standard adult, pediatric, and leukoreduced platelet bags. Capacity expandable by adding tray modules.",
    },
    {
      icon: "Activity",
      title: "Continuous Data Logging",
      description:
        "Built-in USB data port logs time-stamped temperature and agitation status for regulatory compliance and blood bank audit trails.",
    },
  ],
  specifications: [
    { label: "Temperature Range", value: "+20°C to +24°C" },
    { label: "Temperature Accuracy", value: "±0.5°C" },
    { label: "Agitation Mode", value: "Flat-bed / Elliptical (selectable)" },
    { label: "Agitation Speed", value: "60 – 70 cycles/min" },
    { label: "Chamber Uniformity", value: "±0.5°C" },
    { label: "Interior Material", value: "Stainless Steel 304" },
    { label: "Exterior Material", value: "Powder Coated MS" },
    { label: "Alarm Types", value: "High/Low temp, agitation stop, power fail, door open" },
    { label: "Data Logging", value: "USB export, 60-day rolling log" },
    { label: "Power Supply", value: "220V ± 10%, 50 Hz" },
    { label: "Ambient Operating Range", value: "+15°C to +30°C" },
  ],
  variants: [
    {
      id: "mpi-16",
      model: "MPI-16",
      capacity: "16 bags (standard)",
      dimensions: "560 × 480 × 420 mm",
      weight: "28 kg",
      specs: [
        { label: "Tray Count", value: "2 trays × 8 bags" },
        { label: "Power Consumption", value: "250", unit: "W" },
      ],
    },
    {
      id: "mpi-32",
      model: "MPI-32",
      capacity: "32 bags",
      dimensions: "560 × 480 × 650 mm",
      weight: "42 kg",
      specs: [
        { label: "Tray Count", value: "4 trays × 8 bags" },
        { label: "Power Consumption", value: "350", unit: "W" },
      ],
    },
    {
      id: "mpi-48",
      model: "MPI-48",
      capacity: "48 bags",
      dimensions: "560 × 480 × 900 mm",
      weight: "58 kg",
      specs: [
        { label: "Tray Count", value: "6 trays × 8 bags" },
        { label: "Power Consumption", value: "420", unit: "W" },
      ],
    },
  ],
  certifications: ["CE Marked", "ISO 13485", "ISO 9001", "CDSCO"],
  downloads: [
    {
      title: "Platelet Incubator Agitator Brochure",
      type: "brochure",
      url: "/downloads/mpi-brochure.pdf",
      fileSize: "1.9 MB",
    },
    {
      title: "Technical Datasheet — MPI Series",
      type: "datasheet",
      url: "/downloads/mpi-datasheet.pdf",
      fileSize: "0.8 MB",
    },
    {
      title: "Installation & Operation Manual",
      type: "manual",
      url: "/downloads/mpi-manual.pdf",
      fileSize: "4.1 MB",
    },
    {
      title: "CE Certificate — MPI Series",
      type: "certificate",
      url: "/downloads/mpi-ce.pdf",
      fileSize: "0.2 MB",
    },
  ],
  faqs: [
    {
      question: "Why must platelets be continuously agitated?",
      answer:
        "Continuous agitation maintains platelets in suspension, ensures gas exchange through the permeable bag, and prevents irreversible platelet aggregation. Without agitation, platelet function deteriorates within hours.",
    },
    {
      question: "What is the maximum storage duration for platelet concentrates?",
      answer:
        "Platelet concentrates stored at +20°C to +24°C with continuous agitation can be stored for up to 5 days (7 days with FDA-approved bacterial detection methods) in compliant storage bags.",
    },
    {
      question: "What happens if the agitation motor fails?",
      answer:
        "A dedicated motion sensor detects agitation loss within 5 seconds and triggers an audible alarm plus visual indicator. The unit also sends a relay output for centralized alarm integration.",
    },
    {
      question: "Can the unit maintain temperature during a power outage?",
      answer:
        "The unit maintains temperature passively for approximately 30–45 minutes depending on ambient conditions. An optional UPS interface alarm output is available for all models.",
    },
    {
      question: "Are the trays easy to clean and decontaminate?",
      answer:
        "Yes. All SS 304 trays are removable and autoclavable. The interior surfaces have no sharp edges and can be wiped with standard hospital disinfectants (70% IPA, chlorine-based solutions).",
    },
  ],
  relatedProducts: ["blood-bank-refrigerator", "refrigerated-centrifuge", "plasma-thawing-bath"],
  seoTitle: "Platelet Incubator Agitator | MPI Series | MarKEN India",
  seoDescription:
    "MarKEN MPI Platelet Incubator Agitator — +20°C to +24°C with ±0.5°C accuracy, 60–70 cycles/min agitation, 16 to 48 bag capacity. CE and ISO 13485 certified.",
  seoKeywords: [
    "platelet incubator agitator",
    "platelet storage incubator india",
    "blood bank platelet equipment",
    "platelet bag agitator",
    "blood component storage",
  ],
  has3DExperience: false,
};

// ============================================================
// Plasma Thawing Bath — MPTB Series
// ============================================================
const plasmaThawingBath: Product = {
  id: "ptb-01",
  slug: "plasma-thawing-bath",
  name: "Plasma Thawing Bath",
  shortName: "MPTB Series",
  category: "blood-bank-equipment",
  subcategory: "Thawing",
  tagline: "Safe, Rapid FFP Thawing — Protecting Clotting Factor Activity",
  description:
    "The MarKEN Plasma Thawing Bath rapidly thaws Fresh Frozen Plasma, cryoprecipitate, and other frozen blood components in a sterile +37°C water bath with gentle agitation. Controlled temperature prevents overheating that degrades labile clotting factors (V, VIII, and vWF), while the closed-compartment design reduces contamination risk. Compliant with AABB, BCSH, and WHO guidelines for FFP thawing, the MPTB series is an essential instrument in every hospital blood bank and transfusion service.",
  heroImage: "/images/mptb-hero.jpg",
  images: [
    "/images/mptb-front.jpg",
    "/images/mptb-water-chamber.jpg",
    "/images/mptb-control.jpg",
    "/images/mptb-bag-holder.jpg",
  ],
  features: [
    {
      icon: "Thermometer",
      title: "Precise +37°C Water Bath",
      description:
        "Microprocessor PID maintains bath at +37°C ±0.5°C throughout the thaw cycle, protecting labile Factors V and VIII from heat degradation.",
    },
    {
      icon: "Waves",
      title: "Gentle Agitation System",
      description:
        "Motorized bag cradle oscillates at 15–20 strokes per minute for uniform heat transfer. Complete FFP thaw achieved in 8–12 minutes for a 200 mL bag.",
    },
    {
      icon: "Shield",
      title: "Sealed Compartment — Infection Control",
      description:
        "Transparent lid over the water bath minimizes aerosolization of bath water. UV sterilization of bath water (optional) reduces microbial load.",
    },
    {
      icon: "BellRing",
      title: "Thaw-Complete Alarm",
      description:
        "Programmable countdown timer with audible alarm signals when thaw cycle is complete, preventing accidental warm storage of thawed plasma.",
    },
    {
      icon: "Droplets",
      title: "Auto Water Level Detection",
      description:
        "Capacitive water level sensor prevents dry-run heating element damage. Low-level alarm and auto-shutdown protect the unit and the product.",
    },
    {
      icon: "LayoutGrid",
      title: "Multi-Bag Capacity",
      description:
        "Simultaneously thaws 2–6 plasma bags (200–400 mL each) using individual bag holders, supporting high-volume emergency transfusion centers.",
    },
  ],
  specifications: [
    { label: "Bath Temperature", value: "+37°C (fixed setpoint)" },
    { label: "Temperature Accuracy", value: "±0.5°C" },
    { label: "Thaw Time (200 mL FFP)", value: "8 – 12 min" },
    { label: "Thaw Time (400 mL FFP)", value: "12 – 18 min" },
    { label: "Agitation Speed", value: "15 – 20 strokes/min" },
    { label: "Bath Volume", value: "4 Liters" },
    { label: "Heating Element", value: "Stainless Steel immersion heater" },
    { label: "Water Type", value: "Sterile water / distilled water" },
    { label: "Bag Capacity", value: "2 – 6 bags (200–400 mL)" },
    { label: "Timer Range", value: "1 – 60 min" },
    { label: "Power Supply", value: "220V ± 10%, 50 Hz" },
    { label: "Interior Material", value: "Stainless Steel 304" },
  ],
  variants: [
    {
      id: "mptb-02",
      model: "MPTB-02",
      capacity: "2 bags simultaneously",
      dimensions: "340 × 280 × 260 mm",
      weight: "8 kg",
      specs: [
        { label: "Power Consumption", value: "500", unit: "W" },
        { label: "Bath Volume", value: "2.5", unit: "Liters" },
      ],
    },
    {
      id: "mptb-04",
      model: "MPTB-04",
      capacity: "4 bags simultaneously",
      dimensions: "440 × 320 × 280 mm",
      weight: "12 kg",
      specs: [
        { label: "Power Consumption", value: "750", unit: "W" },
        { label: "Bath Volume", value: "4", unit: "Liters" },
      ],
    },
    {
      id: "mptb-06",
      model: "MPTB-06",
      capacity: "6 bags simultaneously",
      dimensions: "540 × 360 × 300 mm",
      weight: "16 kg",
      specs: [
        { label: "Power Consumption", value: "1,000", unit: "W" },
        { label: "Bath Volume", value: "6", unit: "Liters" },
        { label: "UV Sterilization", value: "Built-in (optional)" },
      ],
    },
  ],
  certifications: ["CE Marked", "ISO 13485", "ISO 9001", "CDSCO"],
  downloads: [
    {
      title: "Plasma Thawing Bath Brochure",
      type: "brochure",
      url: "/downloads/mptb-brochure.pdf",
      fileSize: "1.5 MB",
    },
    {
      title: "Technical Datasheet — MPTB Series",
      type: "datasheet",
      url: "/downloads/mptb-datasheet.pdf",
      fileSize: "0.7 MB",
    },
    {
      title: "Installation & Operation Manual",
      type: "manual",
      url: "/downloads/mptb-manual.pdf",
      fileSize: "3.8 MB",
    },
    {
      title: "CE Certificate — MPTB Series",
      type: "certificate",
      url: "/downloads/mptb-ce.pdf",
      fileSize: "0.2 MB",
    },
  ],
  faqs: [
    {
      question: "What temperature should FFP be thawed at?",
      answer:
        "AABB, BCSH, and WHO guidelines specify thawing at +30°C to +37°C. MarKEN MPTB is factory-set to +37°C ±0.5°C, which achieves the fastest safe thaw while preserving clotting factor activity.",
    },
    {
      question: "How long does it take to thaw a 200 mL FFP bag?",
      answer:
        "At +37°C with continuous agitation, a 200 mL FFP bag thaws completely in 8–12 minutes. A 400 mL bag requires 12–18 minutes. Thaw time varies slightly with initial product temperature.",
    },
    {
      question: "Can the same unit be used for cryoprecipitate?",
      answer:
        "Yes. Cryoprecipitate is thawed using the same +37°C protocol as FFP. The bag holder accommodates standard 50 mL cryoprecipitate bags.",
    },
    {
      question: "How is bath water hygiene maintained?",
      answer:
        "The bath should use distilled or sterile water, changed after each working session or when turbid. The MPTB-06 includes an optional built-in UV sterilization cycle for water decontamination between uses.",
    },
    {
      question: "What happens if the water level drops during a thaw cycle?",
      answer:
        "A capacitive water level sensor detects low level and triggers an alarm plus heating element auto-shutoff, protecting both the product and the heating element from damage.",
    },
  ],
  relatedProducts: ["blood-bank-refrigerator", "refrigerated-centrifuge", "contact-shock-freezer"],
  seoTitle: "Plasma Thawing Bath | FFP Thawing | MPTB Series | MarKEN",
  seoDescription:
    "MarKEN MPTB Plasma Thawing Bath — +37°C ±0.5°C, 2 to 6 bag capacity, 8–12 min FFP thaw. Protects labile clotting factors. CE and ISO 13485 certified.",
  seoKeywords: [
    "plasma thawing bath",
    "FFP thawing equipment",
    "blood bank thawing unit",
    "fresh frozen plasma thawer india",
    "blood bank equipment",
  ],
  has3DExperience: false,
};

// ============================================================
// Contact Shock Freezer — MCSF Series
// ============================================================
const contactShockFreezer: Product = {
  id: "csf-01",
  slug: "contact-shock-freezer",
  name: "Contact Shock Freezer",
  shortName: "MCSF Series",
  category: "blood-bank-equipment",
  subcategory: "Freezing",
  tagline: "Rapid Plasma Freezing to -40°C — Preserving Labile Factor Activity",
  description:
    "The MarKEN Contact Shock Freezer rapidly freezes fresh plasma to -40°C or below within 60 minutes of separation, meeting AABB and European Directorate of Quality Medicines (EDQM) requirements for Fresh Frozen Plasma. Direct metal-plate contact ensures maximum heat transfer efficiency, freezing plasma in thin flat bags far faster than chest freezers. Quick freezing minimizes ice crystal formation, maximizing the recovery of Factors V, VIII, and von Willebrand Factor upon thawing.",
  heroImage: "/images/mcsf-hero.jpg",
  images: [
    "/images/mcsf-front.jpg",
    "/images/mcsf-plates.jpg",
    "/images/mcsf-chamber.jpg",
    "/images/mcsf-control.jpg",
    "/images/mcsf-plasma-bags.jpg",
  ],
  features: [
    {
      icon: "Snowflake",
      title: "Reaches -40°C Within 60 Minutes",
      description:
        "Dual-compressor cascade refrigeration brings chamber temperature to -40°C within 45 minutes from ambient, meeting the 60-minute FFP processing window mandated by international standards.",
    },
    {
      icon: "Layers",
      title: "Aluminium Contact Plate Technology",
      description:
        "High-conductivity aluminium freezing plates press directly against flat plasma bags, conducting heat 10× faster than air-blast methods and ensuring uniform through-bag freezing.",
    },
    {
      icon: "Gauge",
      title: "Dual-Compressor Cascade System",
      description:
        "Two-stage refrigeration cascade achieves -50°C ultimate temperature, providing headroom for -40°C plasma storage compliance even in +40°C ambient environments.",
    },
    {
      icon: "Thermometer",
      title: "Precision Temperature Control",
      description:
        "Microprocessor PID controller with PT100 sensor maintains freezing plate temperature to ±1°C accuracy. Data logger records freeze curve for each batch.",
    },
    {
      icon: "BellRing",
      title: "Freeze-Complete Alarm",
      description:
        "Product temperature probe (optional) or time-based alarm notifies operator when plasma core temperature reaches -30°C for transfer to long-term plasma freezer.",
    },
    {
      icon: "Archive",
      title: "Compact Footprint",
      description:
        "Benchtop and floor-standing models available. Compact width fits standard blood bank bench space. No special ventilation required beyond 15 cm clearance on all sides.",
    },
  ],
  specifications: [
    { label: "Ultimate Temperature", value: "-50°C" },
    { label: "Operational Storage Temperature", value: "-40°C to -45°C" },
    { label: "Pull-Down Time (ambient to -40°C)", value: "< 45 min" },
    { label: "Freezing Time (200 mL plasma bag)", value: "30 – 45 min" },
    { label: "Freezing System", value: "Dual compressor cascade" },
    { label: "Refrigerants", value: "R404A / R23 (CFC-free)" },
    { label: "Plate Material", value: "Anodised aluminium alloy" },
    { label: "Temperature Accuracy", value: "±1°C" },
    { label: "Insulation", value: "80mm CFC-free PUF" },
    { label: "Interior Material", value: "Stainless Steel 304" },
    { label: "Power Supply", value: "220V ± 10%, 50 Hz" },
    { label: "Ambient Operating", value: "+10°C to +43°C" },
  ],
  variants: [
    {
      id: "mcsf-06",
      model: "MCSF-06",
      capacity: "6 plasma bags (200–400 mL each)",
      dimensions: "500 × 480 × 400 mm (benchtop)",
      weight: "52 kg",
      specs: [
        { label: "Plate Positions", value: "3 pairs × 2 bags" },
        { label: "Power Consumption", value: "900", unit: "W" },
        { label: "Format", value: "Benchtop" },
      ],
    },
    {
      id: "mcsf-12",
      model: "MCSF-12",
      capacity: "12 plasma bags (200–400 mL each)",
      dimensions: "560 × 540 × 850 mm (floor)",
      weight: "85 kg",
      specs: [
        { label: "Plate Positions", value: "6 pairs × 2 bags" },
        { label: "Power Consumption", value: "1,500", unit: "W" },
        { label: "Format", value: "Floor standing" },
      ],
    },
    {
      id: "mcsf-24",
      model: "MCSF-24",
      capacity: "24 plasma bags (200–400 mL each)",
      dimensions: "680 × 600 × 1000 mm (floor)",
      weight: "120 kg",
      specs: [
        { label: "Plate Positions", value: "12 pairs × 2 bags" },
        { label: "Power Consumption", value: "2,200", unit: "W" },
        { label: "Format", value: "Floor standing, high volume" },
      ],
    },
  ],
  certifications: ["CE Marked", "ISO 13485", "ISO 9001", "CDSCO"],
  downloads: [
    {
      title: "Contact Shock Freezer Brochure",
      type: "brochure",
      url: "/downloads/mcsf-brochure.pdf",
      fileSize: "2.2 MB",
    },
    {
      title: "Technical Datasheet — MCSF Series",
      type: "datasheet",
      url: "/downloads/mcsf-datasheet.pdf",
      fileSize: "1.2 MB",
    },
    {
      title: "Installation & Operation Manual",
      type: "manual",
      url: "/downloads/mcsf-manual.pdf",
      fileSize: "5.4 MB",
    },
    {
      title: "CE Certificate — MCSF Series",
      type: "certificate",
      url: "/downloads/mcsf-ce.pdf",
      fileSize: "0.3 MB",
    },
  ],
  faqs: [
    {
      question: "Why does plasma need to be frozen within 60 minutes?",
      answer:
        "To qualify as Fresh Frozen Plasma (FFP), plasma must be frozen to -30°C or below within 60 minutes of separation from whole blood. This preserves labile clotting factors V and VIII at clinically effective levels.",
    },
    {
      question: "What is the difference between contact freezing and chest freezer storage?",
      answer:
        "Contact plate freezers transfer heat through direct metal contact with the bag, achieving freeze times of 30–45 minutes. Chest freezers rely on air convection and can take 2–4 hours for the same bag — too slow for FFP qualification.",
    },
    {
      question: "Can the shock freezer also store plasma long-term?",
      answer:
        "No. The contact shock freezer is designed exclusively for the rapid freeze cycle. Once frozen, plasma should be transferred to a dedicated plasma freezer rated for -25°C to -30°C long-term storage.",
    },
    {
      question: "How many batches can be processed per shift?",
      answer:
        "After each freeze cycle, the plates return to -40°C in approximately 15–20 minutes. The MCSF-06 can process approximately 6–8 batches of 6 bags in an 8-hour shift.",
    },
    {
      question: "Is the unit suitable for cryoprecipitate production?",
      answer:
        "Yes. Cryoprecipitate production begins with FFP frozen in a contact shock freezer. The rapid freeze is a prerequisite for adequate cryoprecipitate yield on controlled thaw.",
    },
  ],
  relatedProducts: ["plasma-thawing-bath", "blood-bank-refrigerator", "refrigerated-centrifuge"],
  seoTitle: "Contact Shock Freezer for Plasma | MCSF Series | MarKEN",
  seoDescription:
    "MarKEN MCSF Contact Shock Freezer — freezes FFP to -40°C in under 45 min using aluminium contact plates. 6 to 24 bag capacity. CE and ISO 13485 certified.",
  seoKeywords: [
    "contact shock freezer blood bank",
    "plasma shock freezer india",
    "FFP freezing equipment",
    "fresh frozen plasma freezer",
    "blood bank equipment",
  ],
  has3DExperience: false,
};

// ============================================================
// Sterile Connecting Device — MSCD Series
// ============================================================
const sterileConnectingDevice: Product = {
  id: "scd-01",
  slug: "sterile-connecting-device",
  name: "Sterile Connecting Device",
  shortName: "MSCD Series",
  category: "blood-bank-equipment",
  subcategory: "Processing",
  tagline: "Sterile Tube Welding — Maintaining Closed-System Integrity",
  description:
    "The MarKEN Sterile Connecting Device enables sterile tubing connections between blood bags and processing circuits without breaking the closed system, eliminating the leading cause of bacterial contamination in blood component preparation. Using a heated wafer element to melt and re-fuse PVC tubing, the MSCD creates a hermetic, particle-free weld in seconds. Validated for all standard 3.0 mm and 4.5 mm blood bag tubing, it is an essential instrument in modern apheresis, irradiation, and leukoreduction workflows.",
  heroImage: "/images/mscd-hero.jpg",
  images: [
    "/images/mscd-front.jpg",
    "/images/mscd-weld-head.jpg",
    "/images/mscd-operation.jpg",
    "/images/mscd-tubing.jpg",
  ],
  features: [
    {
      icon: "Link",
      title: "Closed-System Sterile Welding",
      description:
        "Fuses two PVC tubes in a sterile seal without opening either circuit. No cutting, no needles, no contamination pathway — validated to sterility assurance level 10⁻⁶.",
    },
    {
      icon: "Zap",
      title: "4-Second Weld Cycle",
      description:
        "Automated thermal weld cycle completes in 4 seconds. Weld quality indicator confirms successful fusion before the operator releases tubing.",
    },
    {
      icon: "CheckCircle",
      title: "Automatic Weld Verification",
      description:
        "Built-in weld integrity sensor detects incomplete fusions and alerts the operator before the tubing is released, preventing defective connections from reaching the patient.",
    },
    {
      icon: "Sliders",
      title: "Universal Tubing Compatibility",
      description:
        "Supports 3.0 mm inner diameter (standard blood bag tubing) and 4.5 mm inner diameter (apheresis circuit tubing) using interchangeable jaw inserts — no additional tools required.",
    },
    {
      icon: "PlugZap",
      title: "Wafer Exchange System",
      description:
        "Single-use wafer cassettes (100 welds per cassette) provide consistent thermal energy per weld. Low-wafer warning ensures uninterrupted high-volume operations.",
    },
    {
      icon: "Activity",
      title: "Weld Counter & Log",
      description:
        "Onboard display tracks total weld count, wafer use count, and last-weld status, supporting regulatory traceability for blood component manufacturing.",
    },
  ],
  specifications: [
    { label: "Tubing Compatibility", value: "3.0 mm ID and 4.5 mm ID PVC" },
    { label: "Weld Cycle Time", value: "4 seconds" },
    { label: "Sterility Assurance Level", value: "SAL 10⁻⁶" },
    { label: "Wafer Capacity per Cassette", value: "100 welds" },
    { label: "Weld Verification", value: "Automatic pass/fail indicator" },
    { label: "Display", value: "LED weld counter and status" },
    { label: "Wafer Type", value: "Single-use thermal wafer (proprietary)" },
    { label: "Jaw Material", value: "PEEK + stainless steel" },
    { label: "Dimensions", value: "280 × 160 × 120 mm" },
    { label: "Weight", value: "2.1 kg" },
    { label: "Power Supply", value: "220V ± 10%, 50 Hz" },
    { label: "Power Consumption", value: "120 W peak, 15 W idle" },
  ],
  variants: [
    {
      id: "mscd-01",
      model: "MSCD-01",
      capacity: "Standard (3.0 mm tubing)",
      dimensions: "280 × 160 × 120 mm",
      weight: "2.1 kg",
      specs: [
        { label: "Tubing Size", value: "3.0 mm ID blood bag tubing" },
        { label: "Welds per Wafer Cassette", value: "100" },
      ],
    },
    {
      id: "mscd-02",
      model: "MSCD-02",
      capacity: "Universal (3.0 mm + 4.5 mm tubing)",
      dimensions: "300 × 180 × 130 mm",
      weight: "2.4 kg",
      specs: [
        { label: "Tubing Sizes", value: "3.0 mm and 4.5 mm ID (interchangeable jaws)" },
        { label: "Welds per Wafer Cassette", value: "100" },
        { label: "Data Output", value: "USB weld log export" },
      ],
    },
  ],
  certifications: ["CE Marked", "ISO 13485", "ISO 9001", "CDSCO", "USFDA Listed"],
  downloads: [
    {
      title: "Sterile Connecting Device Brochure",
      type: "brochure",
      url: "/downloads/mscd-brochure.pdf",
      fileSize: "1.6 MB",
    },
    {
      title: "Technical Datasheet — MSCD Series",
      type: "datasheet",
      url: "/downloads/mscd-datasheet.pdf",
      fileSize: "0.9 MB",
    },
    {
      title: "Installation & Operation Manual",
      type: "manual",
      url: "/downloads/mscd-manual.pdf",
      fileSize: "4.0 MB",
    },
    {
      title: "Validation & Sterility Certificate",
      type: "certificate",
      url: "/downloads/mscd-validation.pdf",
      fileSize: "0.5 MB",
    },
  ],
  faqs: [
    {
      question: "What is a sterile connecting device used for in a blood bank?",
      answer:
        "It allows blood bank staff to connect or extend tubing between blood bags and processing circuits (leukoreduction filters, irradiation bags, apheresis circuits) without exposing the fluid path to the environment, maintaining the closed sterile system.",
    },
    {
      question: "How is sterility maintained during the weld?",
      answer:
        "The heated wafer melts both tube walls simultaneously. Tube ends are pressed together under controlled pressure while molten, fusing them into a homogeneous seal. No opening of the tube lumen occurs at any point in the cycle.",
    },
    {
      question: "Are the wafer cassettes single-use?",
      answer:
        "Yes. Each cassette provides 100 individual welds using factory-calibrated single-use wafer elements. Reuse of cassettes is not supported and voids the sterility validation.",
    },
    {
      question: "Can the device weld different tubing diameters together?",
      answer:
        "The MSCD-01 is optimised for 3.0 mm blood bag tubing. The MSCD-02 supports both 3.0 mm and 4.5 mm tubing with interchangeable jaws but cannot weld a 3.0 mm to a 4.5 mm tube — both sides must be the same diameter.",
    },
    {
      question: "What happens if a weld fails verification?",
      answer:
        "The instrument displays a FAIL indicator and locks the jaws open for 30 seconds. The operator must discard the welded tubing section and repeat the weld with a fresh section of tubing.",
    },
  ],
  relatedProducts: ["blood-collection-monitor", "refrigerated-centrifuge", "platelet-incubator-agitator"],
  seoTitle: "Sterile Connecting Device | Tube Welder | MSCD Series | MarKEN",
  seoDescription:
    "MarKEN MSCD Sterile Connecting Device — 4-second PVC tube weld, SAL 10⁻⁶, automatic weld verification, 3.0 mm & 4.5 mm tubing. CE, ISO 13485, USFDA listed.",
  seoKeywords: [
    "sterile connecting device",
    "blood bag tube welder",
    "sterile tubing connection",
    "closed system blood bag",
    "blood bank equipment india",
  ],
  has3DExperience: false,
};

// ============================================================
// Bio Safety Cabinet — MBSC Series
// ============================================================
const bioSafetyCabinet: Product = {
  id: "bsc-01",
  slug: "bio-safety-cabinet",
  name: "Bio Safety Cabinet",
  shortName: "MBSC Series",
  category: "blood-bank-equipment",
  subcategory: "Containment",
  tagline: "Class II Biological Safety — Protecting Operator, Product, and Environment",
  description:
    "The MarKEN Class II Type A2 Bio Safety Cabinet provides simultaneous protection for the operator, product, and surrounding environment during open blood sample handling, serology testing, and blood component preparation. HEPA-filtered inflow and downflow curtains maintain a sterile work zone, while re-circulated and exhausted air passes through separate HEPA filters rated H14 (99.995% DOP efficiency). Designed to NSF/ANSI 49 and EN 12469 standards, MBSC cabinets are the standard of care for blood bank molecular testing and cross-match laboratories.",
  heroImage: "/images/mbsc-hero.jpg",
  images: [
    "/images/mbsc-front.jpg",
    "/images/mbsc-interior.jpg",
    "/images/mbsc-hepa-filter.jpg",
    "/images/mbsc-control-panel.jpg",
    "/images/mbsc-uv-lamp.jpg",
  ],
  features: [
    {
      icon: "ShieldCheck",
      title: "Class II Type A2 Biosafety",
      description:
        "70% air recirculation through supply HEPA filter, 30% exhaust through separate HEPA filter. Protects operator from splatter and aerosols at all open-front face velocities.",
    },
    {
      icon: "Wind",
      title: "HEPA H14 Dual Filtration",
      description:
        "Both supply and exhaust HEPA filters rated H14 (99.995% at 0.3 µm MPPS). NSF/ANSI 49 certified filter integrity testing with scan port access for field verification.",
    },
    {
      icon: "Gauge",
      title: "Inflow Velocity Monitoring",
      description:
        "Continuous microprocessor-monitored inflow velocity with alarm when face velocity drops below 0.38 m/s, ensuring containment integrity at all times.",
    },
    {
      icon: "Lamp",
      title: "UV Decontamination Lamp",
      description:
        "Built-in UV-C germicidal lamp (254 nm) for work surface decontamination between sessions. Automatic shutoff when sash is raised for operator safety.",
    },
    {
      icon: "Lightbulb",
      title: "LED Illumination",
      description:
        "High-CRI LED worksurface lighting provides shadow-free illumination with minimal UV emission, eliminating sample photodegradation.",
    },
    {
      icon: "Sliders",
      title: "Ergonomic Sash Design",
      description:
        "Motorized counterbalanced sash with integrated airflow interlock. Front opening height adjustable from 150 mm to 350 mm, with alarm above the safe working sash height.",
    },
  ],
  specifications: [
    { label: "Safety Class", value: "Class II Type A2 (NSF/ANSI 49 / EN 12469)" },
    { label: "HEPA Filter Efficiency", value: "H14, ≥ 99.995% at MPPS" },
    { label: "Inflow Velocity", value: "0.38 – 0.50 m/s" },
    { label: "Downflow Velocity", value: "0.25 – 0.35 m/s" },
    { label: "Air Recirculation", value: "70% recirculated, 30% exhausted" },
    { label: "UV Lamp Wavelength", value: "254 nm, 15 W" },
    { label: "Worksurface Material", value: "Stainless Steel 304" },
    { label: "Interior Lining", value: "Powder-coated steel (white)" },
    { label: "Sash Opening", value: "150 – 350 mm" },
    { label: "Fluorescent / LED Lighting", value: "LED, ≥ 1,000 lux at work surface" },
    { label: "Noise Level", value: "< 65 dB(A)" },
    { label: "Power Supply", value: "220V ± 10%, 50 Hz" },
  ],
  variants: [
    {
      id: "mbsc-090",
      model: "MBSC-090",
      capacity: "900 mm interior width",
      dimensions: "1,010 × 680 × 2,050 mm",
      weight: "185 kg",
      specs: [
        { label: "Work Surface Area", value: "0.54", unit: "m²" },
        { label: "Power Consumption", value: "750", unit: "W" },
        { label: "Nominal Interior Width", value: "900 mm" },
      ],
    },
    {
      id: "mbsc-120",
      model: "MBSC-120",
      capacity: "1,200 mm interior width",
      dimensions: "1,310 × 680 × 2,050 mm",
      weight: "230 kg",
      specs: [
        { label: "Work Surface Area", value: "0.72", unit: "m²" },
        { label: "Power Consumption", value: "900", unit: "W" },
        { label: "Nominal Interior Width", value: "1,200 mm" },
      ],
    },
    {
      id: "mbsc-180",
      model: "MBSC-180",
      capacity: "1,800 mm interior width",
      dimensions: "1,910 × 680 × 2,050 mm",
      weight: "310 kg",
      specs: [
        { label: "Work Surface Area", value: "1.08", unit: "m²" },
        { label: "Power Consumption", value: "1,200", unit: "W" },
        { label: "Nominal Interior Width", value: "1,800 mm" },
      ],
    },
  ],
  certifications: ["NSF/ANSI 49", "EN 12469", "CE Marked", "ISO 13485", "ISO 9001", "CDSCO"],
  downloads: [
    {
      title: "Bio Safety Cabinet Brochure",
      type: "brochure",
      url: "/downloads/mbsc-brochure.pdf",
      fileSize: "2.5 MB",
    },
    {
      title: "Technical Datasheet — MBSC Series",
      type: "datasheet",
      url: "/downloads/mbsc-datasheet.pdf",
      fileSize: "1.3 MB",
    },
    {
      title: "Installation & Operation Manual",
      type: "manual",
      url: "/downloads/mbsc-manual.pdf",
      fileSize: "7.2 MB",
    },
    {
      title: "NSF/ANSI 49 Certification",
      type: "certificate",
      url: "/downloads/mbsc-nsf.pdf",
      fileSize: "0.4 MB",
    },
  ],
  faqs: [
    {
      question: "What is a Class II Type A2 BSC and why is it used in blood banks?",
      answer:
        "A Class II Type A2 cabinet provides three-way protection: operator (from splash/aerosol), product (from environmental contamination), and environment (exhaust HEPA). It is the WHO and NABH recommended containment for open blood sample handling, serology, and NAT testing.",
    },
    {
      question: "How often do HEPA filters need to be replaced?",
      answer:
        "HEPA filter life depends on usage and particulate load. Annual filter integrity testing by a qualified certifier is mandatory under NSF/ANSI 49. Typical filter service life is 5–10 years in a blood bank environment.",
    },
    {
      question: "Can the cabinet be used for cell culture or cytotoxic drugs?",
      answer:
        "The MBSC series is designed and certified for blood bank and diagnostic laboratory use (BSL-1 and BSL-2 agents). For cytotoxic drug preparation, a Class II Type B2 cabinet with 100% exhaust is required.",
    },
    {
      question: "What happens if the blower motor fails?",
      answer:
        "The continuous airflow monitoring system detects velocity drop within seconds and triggers a loud alarm plus sash-interlock — the sash cannot be raised above 100 mm when inflow velocity is below the safe threshold.",
    },
    {
      question: "How is the cabinet decontaminated before HEPA filter changes?",
      answer:
        "The interior is fumigated with formaldehyde vapour or hydrogen peroxide vapour (VHP) using the cabinet's exhaust port. Decontamination must be performed by trained personnel wearing appropriate PPE before any filter maintenance.",
    },
  ],
  relatedProducts: ["laminar-air-flow", "blood-bank-refrigerator", "refrigerated-centrifuge"],
  seoTitle: "Bio Safety Cabinet Class II | MBSC Series | MarKEN India",
  seoDescription:
    "MarKEN MBSC Class II Type A2 Bio Safety Cabinet — HEPA H14 filtration, 900–1800 mm widths, NSF/ANSI 49 certified. For blood bank testing and component preparation.",
  seoKeywords: [
    "bio safety cabinet class II",
    "biological safety cabinet india",
    "BSC blood bank",
    "HEPA cabinet blood testing",
    "blood bank equipment",
  ],
  has3DExperience: false,
};

// ============================================================
// Laminar Air Flow — MLAF Series
// ============================================================
const laminarAirFlow: Product = {
  id: "laf-01",
  slug: "laminar-air-flow",
  name: "Laminar Air Flow",
  shortName: "MLAF Series",
  category: "blood-bank-equipment",
  subcategory: "Containment",
  tagline: "ISO 5 Clean Zone for Blood Component Preparation — Horizontal & Vertical Models",
  description:
    "The MarKEN Laminar Air Flow workstation provides an ISO Class 5 (Class 100) unidirectional airflow environment for blood component labeling, pooling, irradiation bag sealing, and reagent preparation. HEPA H14-filtered air is delivered across the work surface as a uniform laminar sheet, sweeping particles and contaminants away from the product zone. Available in horizontal and vertical airflow configurations, MLAF units are engineered to operate continuously in blood bank, transfusion medicine, and hospital pharmacy environments to ISO 14644-1 standards.",
  heroImage: "/images/mlaf-hero.jpg",
  images: [
    "/images/mlaf-horizontal-front.jpg",
    "/images/mlaf-vertical-front.jpg",
    "/images/mlaf-hepa-filter.jpg",
    "/images/mlaf-interior.jpg",
  ],
  features: [
    {
      icon: "Wind",
      title: "HEPA H14 Unidirectional Flow",
      description:
        "H14-rated HEPA filter (99.995% at 0.3 µm) delivers ISO Class 5 air across the full working surface at 0.36–0.54 m/s, equivalent to Class 100 conditions.",
    },
    {
      icon: "ArrowRight",
      title: "Horizontal & Vertical Configurations",
      description:
        "Horizontal LAF sweeps air toward the operator — ideal for non-hazardous product protection. Vertical LAF directs flow downward — preferred when operator splash protection is also desired.",
    },
    {
      icon: "Gauge",
      title: "Magnehelic Pressure Gauge",
      description:
        "Continuous filter loading indicator shows static pressure drop across the HEPA filter. Colour-coded zones alert maintenance when filter replacement is due.",
    },
    {
      icon: "Lamp",
      title: "UV-C Germicidal Lamp",
      description:
        "254 nm UV-C lamp for surface decontamination between work sessions. Automatic interlock prevents UV lamp and blower from operating simultaneously.",
    },
    {
      icon: "Lightbulb",
      title: "High-Intensity LED Lighting",
      description:
        "Shadow-free LED illumination (≥ 1,000 lux at work surface) with high colour rendering index for accurate visual inspection of blood components and labels.",
    },
    {
      icon: "Construction",
      title: "All Stainless Steel Work Surface",
      description:
        "SS 304 perforated work surface on horizontal models allows particulate washout. Smooth SS 304 work surface on vertical models supports direct product placement.",
    },
  ],
  specifications: [
    { label: "ISO Class", value: "ISO Class 5 (Class 100)" },
    { label: "HEPA Filter Efficiency", value: "H14, ≥ 99.995% at MPPS" },
    { label: "Air Velocity at Work Surface", value: "0.36 – 0.54 m/s" },
    { label: "Flow Direction", value: "Horizontal or Vertical (specify at order)" },
    { label: "Pre-filter", value: "G4 panel filter (washable)" },
    { label: "UV Lamp", value: "UV-C 254 nm, 15 W" },
    { label: "Work Surface", value: "SS 304 perforated (H) / smooth (V)" },
    { label: "Interior Lining", value: "SS 304" },
    { label: "Noise Level", value: "< 60 dB(A)" },
    { label: "LED Illumination", value: "≥ 1,000 lux at work surface" },
    { label: "Power Supply", value: "220V ± 10%, 50 Hz" },
    { label: "Ambient Operating Range", value: "+15°C to +30°C" },
  ],
  variants: [
    {
      id: "mlaf-h090",
      model: "MLAF-H090",
      capacity: "900 mm work surface (Horizontal)",
      dimensions: "1,000 × 600 × 700 mm",
      weight: "72 kg",
      specs: [
        { label: "Flow Direction", value: "Horizontal" },
        { label: "Work Surface Area", value: "0.54", unit: "m²" },
        { label: "Power Consumption", value: "400", unit: "W" },
      ],
    },
    {
      id: "mlaf-h120",
      model: "MLAF-H120",
      capacity: "1,200 mm work surface (Horizontal)",
      dimensions: "1,300 × 600 × 700 mm",
      weight: "95 kg",
      specs: [
        { label: "Flow Direction", value: "Horizontal" },
        { label: "Work Surface Area", value: "0.72", unit: "m²" },
        { label: "Power Consumption", value: "550", unit: "W" },
      ],
    },
    {
      id: "mlaf-v090",
      model: "MLAF-V090",
      capacity: "900 mm work surface (Vertical)",
      dimensions: "1,000 × 650 × 2,000 mm",
      weight: "130 kg",
      specs: [
        { label: "Flow Direction", value: "Vertical" },
        { label: "Work Surface Area", value: "0.54", unit: "m²" },
        { label: "Power Consumption", value: "500", unit: "W" },
        { label: "Sash", value: "Motorized glass sash" },
      ],
    },
    {
      id: "mlaf-v120",
      model: "MLAF-V120",
      capacity: "1,200 mm work surface (Vertical)",
      dimensions: "1,300 × 700 × 2,050 mm",
      weight: "165 kg",
      specs: [
        { label: "Flow Direction", value: "Vertical" },
        { label: "Work Surface Area", value: "0.72", unit: "m²" },
        { label: "Power Consumption", value: "650", unit: "W" },
        { label: "Sash", value: "Motorized glass sash" },
      ],
    },
  ],
  certifications: ["ISO 14644-1", "CE Marked", "ISO 13485", "ISO 9001", "CDSCO"],
  downloads: [
    {
      title: "Laminar Air Flow Brochure",
      type: "brochure",
      url: "/downloads/mlaf-brochure.pdf",
      fileSize: "1.8 MB",
    },
    {
      title: "Technical Datasheet — MLAF Series",
      type: "datasheet",
      url: "/downloads/mlaf-datasheet.pdf",
      fileSize: "0.9 MB",
    },
    {
      title: "Installation & Operation Manual",
      type: "manual",
      url: "/downloads/mlaf-manual.pdf",
      fileSize: "4.8 MB",
    },
    {
      title: "ISO 14644-1 Qualification Report",
      type: "certificate",
      url: "/downloads/mlaf-iso14644.pdf",
      fileSize: "0.6 MB",
    },
  ],
  faqs: [
    {
      question: "What is the difference between a Laminar Air Flow and a Bio Safety Cabinet?",
      answer:
        "An LAF workstation protects the product from contamination but does NOT protect the operator from aerosols or splatter. A Bio Safety Cabinet (Class II) protects both product and operator. For open blood bag manipulation, a BSC is required; for closed-system labeling and non-aerosolizing tasks, an LAF is sufficient.",
    },
    {
      question: "What ISO class does the MLAF achieve at the work surface?",
      answer:
        "With HEPA H14 filtration and laminar flow at 0.36–0.54 m/s, the MLAF achieves ISO Class 5 (formerly Class 100) at the work surface — fewer than 3,520 particles ≥ 0.5 µm per cubic metre.",
    },
    {
      question: "How often should the pre-filter and HEPA filter be replaced?",
      answer:
        "The G4 pre-filter (washable) should be cleaned monthly and replaced every 6–12 months. The HEPA filter typically lasts 3–5 years; replacement is indicated when the magnehelic gauge reads in the red zone or when particle count testing fails.",
    },
    {
      question: "Can the LAF operate continuously 24/7?",
      answer:
        "Yes. MLAF motors and HEPA filter housings are rated for continuous 24/7 operation. Continuous operation is recommended in high-usage blood banks to avoid re-contamination during warmup periods.",
    },
    {
      question: "Is annual qualification required?",
      answer:
        "Yes. ISO 14644-2 requires periodic qualification (particle count test, airflow velocity test, HEPA filter integrity test) at intervals not exceeding 12 months for ISO Class 5 environments used in critical pharmaceutical and blood component preparation.",
    },
  ],
  relatedProducts: ["bio-safety-cabinet", "blood-bank-refrigerator", "sterile-connecting-device"],
  seoTitle: "Laminar Air Flow Workstation | MLAF Series | MarKEN India",
  seoDescription:
    "MarKEN MLAF Laminar Air Flow — ISO Class 5, HEPA H14, horizontal and vertical models, 900–1200 mm widths. For blood component preparation and blood bank clean rooms.",
  seoKeywords: [
    "laminar air flow blood bank",
    "laminar flow cabinet india",
    "ISO Class 5 workstation",
    "clean air workstation blood bank",
    "blood bank equipment",
  ],
  has3DExperience: false,
};

// ============================================================
// Exported array — BBR + 8 new products
// ============================================================
export const bloodBankEquipmentProducts: Product[] = [
  bloodBankRefrigerator,
  bloodCollectionMonitor,
  refrigeratedCentrifuge,
  plateletIncubatorAgitator,
  plasmaThawingBath,
  contactShockFreezer,
  sterileConnectingDevice,
  bioSafetyCabinet,
  laminarAirFlow,
];
