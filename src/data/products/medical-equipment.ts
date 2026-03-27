import type { Product } from "@/types";

export const medicalEquipmentProducts: Product[] = [
  {
    id: "me-anesthesia-ventilator-01",
    slug: "anesthesia-ventilator",
    name: "Anesthesia Ventilator",
    shortName: "MAV Series",
    category: "medical-equipment",
    subcategory: "Anesthesia Ventilator",
    tagline: "ICU & OT Ventilator with Integrated Anesthesia Delivery — Precision Ventilation for Every Patient",
    description:
      "MarKEN MAV Series combines a full-featured ICU ventilator with an integrated anaesthesia delivery workstation, supporting volume control, pressure control, SIMV, CPAP, and manual bagging modes from a single platform. The colour touchscreen interface, low-compliance breathing circuit, and precision vaporiser mounting accommodate all major agent-specific vaporisers. Built-in spirometry, capnography input, and an integrated suction system make the MAV Series a comprehensive solution for modern operation theatres and critical care units.",
    heroImage: "/images/medical-equipment/anesthesia-ventilator-hero.jpg",
    images: [
      "/images/medical-equipment/anesthesia-ventilator-front.jpg",
      "/images/medical-equipment/anesthesia-ventilator-touchscreen.jpg",
      "/images/medical-equipment/anesthesia-ventilator-vaporiser.jpg",
      "/images/medical-equipment/anesthesia-ventilator-breathing-circuit.jpg",
      "/images/medical-equipment/anesthesia-ventilator-back.jpg",
    ],
    features: [
      {
        icon: "Activity",
        title: "Multi-Mode Ventilation",
        description:
          "Supports VCV, PCV, SIMV-VC, SIMV-PC, CPAP/PSV, and manual/spontaneous modes. Paediatric and neonatal modes extend the range to patients as small as 3 kg.",
      },
      {
        icon: "Gauge",
        title: "Precision Vaporiser Integration",
        description:
          "Dual vaporiser mounting with interlock system prevents simultaneous activation. Compatible with Drager, GE, and standard agent-specific vaporisers for sevoflurane, isoflurane, and desflurane.",
      },
      {
        icon: "Monitor",
        title: "12-inch Colour Touchscreen",
        description:
          "High-resolution 12-inch touchscreen displays real-time waveforms, loops, and numerical parameters. Configurable layout with trend data up to 72 hours.",
      },
      {
        icon: "AlertTriangle",
        title: "Comprehensive Alarm System",
        description:
          "Over 40 priority-classified alarms covering ventilation parameters, gas supply, circuit integrity, and agent delivery. Alarm delay settings prevent nuisance alerts during routine procedures.",
      },
      {
        icon: "Shield",
        title: "Low-Compliance Breathing Circuit",
        description:
          "Proprietary low-compliance circle absorber system with CO₂ absorbent canister provides accurate tidal volume delivery even at high respiratory rates for paediatric patients.",
      },
      {
        icon: "Zap",
        title: "Integrated Backup Ventilation",
        description:
          "Internal backup battery sustains ventilation for 90 minutes during power failure. Automatic switch-over prevents ventilation interruption during mains power transitions.",
      },
    ],
    specifications: [
      { label: "Ventilation Modes", value: "VCV, PCV, SIMV-VC, SIMV-PC, CPAP/PSV, Manual" },
      { label: "Tidal Volume Range", value: "20–1500 mL" },
      { label: "Respiratory Rate", value: "2–80 breaths/min" },
      { label: "PEEP Range", value: "0–30 cmH₂O" },
      { label: "Inspiratory Pressure", value: "5–80 cmH₂O" },
      { label: "I:E Ratio", value: "4:1 to 1:8" },
      { label: "FiO₂ Range", value: "21–100%" },
      { label: "Fresh Gas Flow Range", value: "0.2–15 L/min" },
      { label: "Gas Supply Pressure", value: "O₂, N₂O, Air: 280–600 kPa" },
      { label: "Vaporiser Mounts", value: "Dual (Interlock, Agent-Specific)" },
      { label: "Display", value: "12-inch Colour Touchscreen" },
      { label: "Battery Backup", value: "90 min at typical settings" },
    ],
    variants: [
      {
        id: "mav-01",
        model: "MAV-01",
        capacity: "Adult & Paediatric (3–100 kg)",
        dimensions: "550 × 480 × 1350 mm",
        weight: "68 kg",
        specs: [
          { label: "Vaporiser Mounts", value: "Single" },
          { label: "Spirometry", value: "Integrated D-Lite sensor" },
        ],
      },
      {
        id: "mav-02",
        model: "MAV-02",
        capacity: "Adult, Paediatric & Neonatal (3–100 kg)",
        dimensions: "580 × 510 × 1380 mm",
        weight: "78 kg",
        specs: [
          { label: "Vaporiser Mounts", value: "Dual with Interlock" },
          { label: "Spirometry + Capnography", value: "Integrated, sidestream" },
        ],
      },
      {
        id: "mav-03",
        model: "MAV-03",
        capacity: "Adult, Paediatric & Neonatal (1–100 kg)",
        dimensions: "600 × 530 × 1400 mm",
        weight: "88 kg",
        specs: [
          { label: "Vaporiser Mounts", value: "Dual with Interlock + Gas Monitor" },
          { label: "Integrated Suction", value: "Vacuum-regulated, 0–600 mmHg" },
        ],
      },
    ],
    certifications: ["CE Marked", "ISO 13485", "ISO 80601-2-13", "CDSCO Registered", "IEC 60601-1"],
    downloads: [
      {
        title: "MAV Series Product Brochure",
        type: "brochure",
        url: "/downloads/mav-brochure.pdf",
        fileSize: "3.8 MB",
      },
      {
        title: "Technical Datasheet — MAV Series",
        type: "datasheet",
        url: "/downloads/mav-datasheet.pdf",
        fileSize: "1.9 MB",
      },
      {
        title: "Operator Manual — MAV Series",
        type: "manual",
        url: "/downloads/mav-operator-manual.pdf",
        fileSize: "9.2 MB",
      },
      {
        title: "CE Certificate — MAV Series",
        type: "certificate",
        url: "/downloads/mav-ce-certificate.pdf",
        fileSize: "0.5 MB",
      },
    ],
    faqs: [
      {
        question: "Which anaesthetic agents are compatible with the MAV Series vaporisers?",
        answer:
          "The MAV Series accepts agent-specific, colour-coded vaporisers for sevoflurane, isoflurane, and desflurane. The dual-mount interlock on the MAV-02 and MAV-03 physically prevents two vaporisers from being open simultaneously.",
      },
      {
        question: "Can the MAV Series be used as a standalone ICU ventilator?",
        answer:
          "Yes. The MAV Series includes a ventilator-only mode that bypasses the anaesthesia delivery circuit, allowing the machine to function as an ICU ventilator for post-operative or critical care ventilation.",
      },
      {
        question: "How long does the internal battery sustain ventilation during power failure?",
        answer:
          "The integrated battery provides 90 minutes of ventilation at typical adult settings (VT 500 mL, RR 12). During transport within the hospital, the battery is sufficient for inter-department patient movement.",
      },
      {
        question: "What CO₂ absorbent is compatible with the circle absorber?",
        answer:
          "The MAV Series circle absorber is compatible with standard granular CO₂ absorbents including soda lime and calcium hydroxide lime. The transparent canister allows visual monitoring of colour-change exhaustion.",
      },
      {
        question: "Does the machine require piped gas or can it run on cylinders?",
        answer:
          "The MAV Series is designed for piped wall gas supply (O₂, N₂O, Air at 280–600 kPa) but includes standard DISS cylinder yokes as backup. Gas supply failure alarms activate when pipeline pressure drops below 250 kPa.",
      },
    ],
    relatedProducts: ["patient-monitors", "diagnostic-equipment", "neonatal-care"],
    seoTitle: "Anesthesia Ventilator | ICU & OT | Multi-Mode | MAV Series | MarKEN",
    seoDescription:
      "MarKEN MAV Series anaesthesia ventilator with integrated gas delivery, dual vaporiser mounts, and 12-inch touchscreen. VCV, PCV, SIMV, CPAP modes. CE, ISO 13485, CDSCO certified.",
    seoKeywords: [
      "anesthesia ventilator India",
      "ICU ventilator manufacturer",
      "anesthesia machine India",
      "OT ventilator",
      "anaesthesia workstation India",
      "ventilator price India",
    ],
    has3DExperience: false,
  },

  {
    id: "me-patient-monitors-01",
    slug: "patient-monitors",
    name: "Patient Monitors",
    shortName: "MPM Series",
    category: "medical-equipment",
    subcategory: "Patient Monitors",
    tagline: "Multi-Parameter Vital Signs Monitor — ECG, SpO₂, NIBP, Temperature & More at a Glance",
    description:
      "MarKEN MPM Series multi-parameter patient monitors deliver continuous, real-time vital signs surveillance from a single bedside unit. The high-brightness TFT display presents up to 8 waveforms simultaneously — ECG (3/5/12-lead), SpO₂ plethysmogram, respiration, NIBP trend, end-tidal CO₂, temperature, and invasive pressure. With a built-in thermal printer, central monitoring connectivity, and HL7 EMR interface, the MPM Series integrates seamlessly into modern hospital information systems across ICU, HDU, OT, and general wards.",
    heroImage: "/images/medical-equipment/patient-monitor-hero.jpg",
    images: [
      "/images/medical-equipment/patient-monitor-front.jpg",
      "/images/medical-equipment/patient-monitor-waveforms.jpg",
      "/images/medical-equipment/patient-monitor-alarm-panel.jpg",
      "/images/medical-equipment/patient-monitor-accessories.jpg",
    ],
    features: [
      {
        icon: "Heart",
        title: "12-Lead ECG & Arrhythmia Analysis",
        description:
          "5-lead resting ECG with real-time arrhythmia detection covering 30+ rhythm types. Optional 12-lead diagnostic ECG with ST-segment analysis and automated interpretation.",
      },
      {
        icon: "Activity",
        title: "Masimo SET SpO₂ Technology",
        description:
          "Masimo SET pulse oximetry provides accurate SpO₂ readings even during low perfusion, high motion artefact, and dysfunctional haemoglobin conditions common in critically ill patients.",
      },
      {
        icon: "Gauge",
        title: "Oscillometric NIBP Measurement",
        description:
          "Automated NIBP measurement from 5 to 60-minute intervals with manual mode. Neonatal, paediatric, and adult cuff sizes supported with overpressure protection.",
      },
      {
        icon: "Thermometer",
        title: "Dual-Channel Temperature",
        description:
          "Simultaneous skin and core temperature monitoring via two independent thermistor channels. Displays temperature difference (ΔT) for peripheral perfusion assessment.",
      },
      {
        icon: "Monitor",
        title: "15.6-inch High-Brightness Display",
        description:
          "1366 × 768 TFT display with 500 cd/m² brightness, readable in direct sunlight. Touch interface with configurable waveform colour coding for each monitoring parameter.",
      },
      {
        icon: "Wifi",
        title: "Central Monitoring & EMR Integration",
        description:
          "Ethernet and Wi-Fi connectivity to MarKEN Central Station for up to 32 beds per station. HL7/FHIR interface for direct data push to hospital EMR and HMIS systems.",
      },
    ],
    specifications: [
      { label: "Display Size", value: "15.6-inch TFT Touchscreen" },
      { label: "ECG Leads", value: "3 / 5 / 12-lead (model dependent)" },
      { label: "Heart Rate Range", value: "15–350 bpm" },
      { label: "SpO₂ Range", value: "1–100%" },
      { label: "SpO₂ Accuracy", value: "±2% (70–100%)" },
      { label: "NIBP Range", value: "10–270 mmHg systolic" },
      { label: "Temperature Range", value: "0–50°C (dual channel)" },
      { label: "Respiration Rate", value: "0–120 breaths/min" },
      { label: "EtCO₂ Range", value: "0–99 mmHg (optional module)" },
      { label: "IBP Channels", value: "2 (optional)" },
      { label: "Trend Memory", value: "72 hours, all parameters" },
      { label: "Battery Backup", value: "4 hours at full monitoring" },
    ],
    variants: [
      {
        id: "mpm-01",
        model: "MPM-01",
        capacity: "5-Parameter (ECG, SpO₂, NIBP, Resp, Temp)",
        dimensions: "340 × 280 × 180 mm",
        weight: "3.8 kg",
        specs: [
          { label: "Display", value: "12.1-inch TFT" },
          { label: "ECG", value: "3/5-lead" },
        ],
      },
      {
        id: "mpm-02",
        model: "MPM-02",
        capacity: "7-Parameter (+ EtCO₂ + IBP)",
        dimensions: "380 × 310 × 200 mm",
        weight: "4.5 kg",
        specs: [
          { label: "Display", value: "15.6-inch TFT Touchscreen" },
          { label: "ECG", value: "3/5/12-lead" },
        ],
      },
      {
        id: "mpm-03",
        model: "MPM-03",
        capacity: "9-Parameter (+ BIS + Dual IBP)",
        dimensions: "400 × 330 × 210 mm",
        weight: "5.2 kg",
        specs: [
          { label: "Display", value: "15.6-inch TFT Touchscreen" },
          { label: "BIS Module", value: "Medtronic BIS compatible" },
        ],
      },
    ],
    certifications: ["CE Marked", "ISO 13485", "IEC 60601-1", "IEC 60601-2-49", "CDSCO Registered"],
    downloads: [
      {
        title: "MPM Series Product Brochure",
        type: "brochure",
        url: "/downloads/mpm-brochure.pdf",
        fileSize: "3.4 MB",
      },
      {
        title: "Technical Datasheet — MPM Series",
        type: "datasheet",
        url: "/downloads/mpm-datasheet.pdf",
        fileSize: "1.7 MB",
      },
      {
        title: "Operator Manual — MPM Series",
        type: "manual",
        url: "/downloads/mpm-operator-manual.pdf",
        fileSize: "7.5 MB",
      },
      {
        title: "CE Certificate — MPM Series",
        type: "certificate",
        url: "/downloads/mpm-ce-certificate.pdf",
        fileSize: "0.4 MB",
      },
    ],
    faqs: [
      {
        question: "What is the maximum number of beds supported by one central station?",
        answer:
          "Each MarKEN Central Monitoring Station supports up to 32 beds simultaneously, displaying all waveforms and numerical parameters from every connected MPM Series monitor in real time.",
      },
      {
        question: "Can the monitor be used for neonatal patients?",
        answer:
          "Yes. The MPM-01 and MPM-02 include a neonatal monitoring mode that adjusts NIBP cuff pressure limits, ECG gain, and alarm thresholds for patients down to 1 kg. Neonatal SpO₂ sensors and blood pressure cuffs are available as accessories.",
      },
      {
        question: "How long does the internal battery sustain monitoring?",
        answer:
          "The built-in rechargeable lithium battery provides 4 hours of monitoring at full parameter set. The battery charges fully in 3 hours and automatically switches to battery power when mains is disconnected.",
      },
      {
        question: "Is the monitor compatible with our hospital's EMR system?",
        answer:
          "The MPM-02 and MPM-03 support HL7 and FHIR standard interfaces for integration with major EMR platforms including Epic, Meditech, and Indian HMIS systems. Our implementation team can assist with integration during installation.",
      },
      {
        question: "What SpO₂ technology is used and how accurate is it?",
        answer:
          "The MPM Series uses Masimo SET pulse oximetry, which maintains ±2% accuracy (70–100% SpO₂) even in the presence of motion artefact and low perfusion conditions that cause conventional pulse oximeters to fail or alarm falsely.",
      },
    ],
    relatedProducts: ["anesthesia-ventilator", "diagnostic-equipment", "neonatal-care"],
    seoTitle: "Multi-Parameter Patient Monitor | ECG, SpO₂, NIBP | MPM Series | MarKEN",
    seoDescription:
      "MarKEN MPM Series multi-parameter patient monitor. ECG, SpO₂ (Masimo SET), NIBP, EtCO₂, temperature, IBP. 15.6-inch touchscreen, 72-hour trends, Wi-Fi, HL7 EMR integration. CE certified.",
    seoKeywords: [
      "patient monitor India",
      "multi parameter monitor",
      "bedside patient monitor",
      "ICU monitor manufacturer India",
      "vital signs monitor price India",
      "patient monitoring system",
    ],
    has3DExperience: false,
  },

  {
    id: "me-diagnostic-equipment-01",
    slug: "diagnostic-equipment",
    name: "Diagnostic Equipment",
    shortName: "MDE Series",
    category: "medical-equipment",
    subcategory: "Diagnostic Equipment",
    tagline: "Clinical Chemistry & Haematology Analysers — Rapid, Reliable In-House Diagnostics",
    description:
      "MarKEN MDE Series diagnostic equipment brings laboratory-grade clinical chemistry and full blood count analysis to hospital laboratories, blood banks, and point-of-care settings. The fully automated clinical chemistry analyser delivers up to 400 photometric tests per hour with a 90-position sample carousel, while the 5-part differential haematology analyser processes 60 CBC samples per hour using optical flow cytometry and impedance counting. Both platforms feature touchscreen operation, LIS connectivity, and QC management tools compliant with NABL and CAP requirements.",
    heroImage: "/images/medical-equipment/diagnostic-equipment-hero.jpg",
    images: [
      "/images/medical-equipment/clinical-chemistry-analyser.jpg",
      "/images/medical-equipment/haematology-analyser.jpg",
      "/images/medical-equipment/analyser-reagent-bay.jpg",
      "/images/medical-equipment/analyser-report-screen.jpg",
    ],
    features: [
      {
        icon: "Activity",
        title: "400-Test/Hour Clinical Chemistry",
        description:
          "Fully automated random-access analyser with continuous sample loading, 400 photometric assays per hour, and a 90-position sample carousel supporting STAT and routine prioritisation.",
      },
      {
        icon: "Stethoscope",
        title: "5-Part Differential Haematology",
        description:
          "Optical flow cytometry combined with impedance counting delivers a full 26-parameter CBC with 5-part differential, reticulocyte count, and NRBC flagging in 60 samples per hour.",
      },
      {
        icon: "CheckCircle",
        title: "Onboard Quality Control",
        description:
          "Integrated 3-level QC management with Levey-Jennings charts, Westgard rules, and cumulative CV statistics ensures results meet NABL and ISO 15189 accreditation requirements.",
      },
      {
        icon: "Monitor",
        title: "10.4-inch Touchscreen Interface",
        description:
          "Colour touchscreen with intuitive menu navigation, patient demographics entry, and graphical result display. Operator-configurable reference ranges by age, sex, and clinical unit.",
      },
      {
        icon: "Wifi",
        title: "Bidirectional LIS Connectivity",
        description:
          "RS-232, USB, and Ethernet ports support bidirectional interface with laboratory information systems. HL7 protocol for automatic order download and result upload without manual transcription.",
      },
      {
        icon: "Shield",
        title: "Closed-Tube Sampling",
        description:
          "Onboard barcode reader and closed-tube sampling needle pierce primary collection tubes (EDTA, heparin, SST) without opening, eliminating aerosol exposure risk for laboratory staff.",
      },
    ],
    specifications: [
      { label: "Chemistry Throughput", value: "400 tests/hour (photometric)" },
      { label: "Chemistry Carousel", value: "90 sample positions + 20 STAT" },
      { label: "Chemistry Reagent Positions", value: "45 on-board reagent positions" },
      { label: "Chemistry Detection", value: "Photometry, Turbidimetry, Latex Agglutination" },
      { label: "Haematology Throughput", value: "60 samples/hour" },
      { label: "Haematology Parameters", value: "26-part CBC + 5-part Diff + NRBC" },
      { label: "Haematology Detection", value: "Optical Flow Cytometry + Impedance" },
      { label: "Sample Volume (Haem.)", value: "9 µL whole blood" },
      { label: "Sample Types", value: "Serum, Plasma, Urine, EDTA Blood" },
      { label: "LIS Interface", value: "RS-232, USB, Ethernet, HL7" },
      { label: "Power Supply", value: "220V AC, 50 Hz, <800 W (chemistry)" },
      { label: "Operating Temperature", value: "+15°C to +32°C" },
    ],
    variants: [
      {
        id: "mde-01",
        model: "MDE-01",
        capacity: "Clinical Chemistry Analyser — 200 tests/hour",
        dimensions: "680 × 550 × 560 mm",
        weight: "55 kg",
        specs: [
          { label: "Throughput", value: "200 tests/hour" },
          { label: "Sample Positions", value: "40 samples + 10 STAT" },
        ],
      },
      {
        id: "mde-02",
        model: "MDE-02",
        capacity: "Clinical Chemistry Analyser — 400 tests/hour",
        dimensions: "870 × 620 × 580 mm",
        weight: "78 kg",
        specs: [
          { label: "Throughput", value: "400 tests/hour" },
          { label: "Sample Positions", value: "90 samples + 20 STAT" },
        ],
      },
      {
        id: "mde-03",
        model: "MDE-03",
        capacity: "5-Part Differential Haematology Analyser — 60 samples/hour",
        dimensions: "450 × 420 × 480 mm",
        weight: "32 kg",
        specs: [
          { label: "Throughput", value: "60 samples/hour" },
          { label: "Parameters", value: "26 (CBC + 5-part diff + NRBC)" },
        ],
      },
    ],
    certifications: ["CE Marked", "ISO 13485", "ISO 15189 compliant", "CDSCO Registered", "NABL qualified"],
    downloads: [
      {
        title: "MDE Series Diagnostic Equipment Brochure",
        type: "brochure",
        url: "/downloads/mde-brochure.pdf",
        fileSize: "4.1 MB",
      },
      {
        title: "Clinical Chemistry Analyser Datasheet",
        type: "datasheet",
        url: "/downloads/mde-chemistry-datasheet.pdf",
        fileSize: "2.0 MB",
      },
      {
        title: "Haematology Analyser Datasheet",
        type: "datasheet",
        url: "/downloads/mde-haematology-datasheet.pdf",
        fileSize: "1.8 MB",
      },
      {
        title: "Operator Manual — MDE Series",
        type: "manual",
        url: "/downloads/mde-operator-manual.pdf",
        fileSize: "11.4 MB",
      },
    ],
    faqs: [
      {
        question: "How many reagents can be loaded simultaneously on the chemistry analyser?",
        answer:
          "The MDE-02 clinical chemistry analyser has 45 on-board refrigerated reagent positions. Reagents are stored at 4–8°C onboard, and the system alerts the operator when any reagent falls below a user-defined minimum volume.",
      },
      {
        question: "What is the minimum sample volume required for the haematology analyser?",
        answer:
          "The MDE-03 haematology analyser requires only 9 µL of whole blood in closed-tube mode, making it suitable for paediatric and neonatal samples collected in micro-EDTA tubes.",
      },
      {
        question: "Can results be sent directly to the hospital LIS without manual entry?",
        answer:
          "Yes. Both the MDE-01/02 chemistry analysers and the MDE-03 haematology analyser support bidirectional HL7 LIS connectivity. Patient orders are downloaded automatically and results are uploaded as soon as they are validated.",
      },
      {
        question: "What QC standards does the MDE Series support?",
        answer:
          "The MDE Series has built-in Westgard rules (1-2S, 1-3S, 2-2S, R-4S, 4-1S, 10x), Levey-Jennings charts, and peer group comparison. This satisfies NABL, ISO 15189, and CAP accreditation documentation requirements.",
      },
      {
        question: "What reagent brands are compatible with the chemistry analyser?",
        answer:
          "The MDE Series uses an open reagent system compatible with major reagent brands available in India. A validated reagent list with instrument-specific calibration factors is provided at installation. This reduces reagent cost significantly compared to closed-system analysers.",
      },
    ],
    relatedProducts: ["anesthesia-ventilator", "patient-monitors", "neonatal-care"],
    seoTitle: "Clinical Chemistry & Haematology Analyser | Diagnostic Equipment | MarKEN",
    seoDescription:
      "MarKEN MDE Series diagnostic equipment — 400 test/hour clinical chemistry analyser and 5-part differential haematology analyser. LIS integration, NABL compliance, open reagent system. CE certified.",
    seoKeywords: [
      "clinical chemistry analyser India",
      "haematology analyser India",
      "CBC analyser manufacturer",
      "hospital laboratory equipment",
      "diagnostic equipment manufacturer India",
      "blood analyser price India",
    ],
    has3DExperience: false,
  },

  {
    id: "me-neonatal-care-01",
    slug: "neonatal-care",
    name: "Neonatal Care Equipment",
    shortName: "MNC Series",
    category: "medical-equipment",
    subcategory: "Neonatal Care",
    tagline: "Baby Warmer, Phototherapy & NICU Incubator — Comprehensive Neonatal Care from Birth",
    description:
      "MarKEN MNC Series neonatal care equipment provides the complete clinical environment for premature and critically ill newborns. The servo-controlled radiant warmer maintains skin temperature within ±0.1°C, the LED phototherapy unit delivers over 30 µW/cm²/nm irradiance for effective neonatal jaundice treatment, and the double-walled transport incubator provides a stable 36–38°C microenvironment for the most vulnerable NICU patients. All three products share intuitive touchscreen controls, comprehensive alarms, and RS-232 nurse monitoring connectivity.",
    heroImage: "/images/medical-equipment/neonatal-care-hero.jpg",
    images: [
      "/images/medical-equipment/radiant-warmer.jpg",
      "/images/medical-equipment/phototherapy-unit.jpg",
      "/images/medical-equipment/nicu-incubator.jpg",
      "/images/medical-equipment/neonatal-monitor-accessories.jpg",
    ],
    features: [
      {
        icon: "Baby",
        title: "Servo-Controlled Radiant Warmer",
        description:
          "Skin-temperature servo control adjusts heater output automatically to maintain the set skin temperature within ±0.1°C, preventing both hypothermia and hyperthermia in newborns.",
      },
      {
        icon: "Zap",
        title: "LED Phototherapy — >30 µW/cm²/nm",
        description:
          "High-irradiance LED phototherapy head delivers over 30 µW/cm²/nm in the 460–490 nm therapeutic range. Eye protection servo and irradiance display ensure safe, effective bilirubin photoisomerisation.",
      },
      {
        icon: "Shield",
        title: "Double-Wall Transport Incubator",
        description:
          "Double-walled acrylic incubator chamber with inner air curtain reduces heat loss during door opening. Air temperature stability within ±0.5°C from set point, down to 32°C for extreme prematurity.",
      },
      {
        icon: "Activity",
        title: "Integrated SpO₂ & Temperature Monitoring",
        description:
          "Built-in neonatal SpO₂ monitoring with Masimo SET technology and skin/rectal temperature channels are displayed on the warmer and incubator control panels without requiring a separate bedside monitor.",
      },
      {
        icon: "AlertTriangle",
        title: "Multi-Parameter Alarm System",
        description:
          "Priority-classified alarms cover skin temperature deviation, air temperature deviation, sensor disconnection, heater failure, power failure, and overtemperature cutout to protect the neonate at all times.",
      },
      {
        icon: "Timer",
        title: "Bilirubin Hour Counter",
        description:
          "Built-in treatment hour counter on the phototherapy unit tracks cumulative irradiance exposure time and alerts when the LED array approaches end-of-life to maintain therapeutic effectiveness.",
      },
    ],
    specifications: [
      { label: "Radiant Warmer Heater Power", value: "650 W quartz halogen (max)" },
      { label: "Warmer Skin Temp Control Range", value: "34–38°C (servo mode)" },
      { label: "Warmer Air Temp Stability", value: "±0.1°C at set point" },
      { label: "Phototherapy Irradiance", value: ">30 µW/cm²/nm (460–490 nm)" },
      { label: "Phototherapy LED Life", value: ">20,000 hours" },
      { label: "Incubator Air Temp Range", value: "25–38°C (±0.5°C stability)" },
      { label: "Incubator Humidity Range", value: "40–95% RH (optional)" },
      { label: "Incubator Chamber Volume", value: "∼ 7 litres (double-wall)" },
      { label: "SpO₂ Technology", value: "Masimo SET (neonatal sensor)" },
      { label: "Alarm Types", value: "Audio-Visual, Priority Classified" },
      { label: "Power Supply", value: "220V AC, 50 Hz; battery backup (warmer & incubator)" },
      { label: "Certifications", value: "CE, ISO 13485, IEC 60601-2-21 (incubator)" },
    ],
    variants: [
      {
        id: "mnc-01",
        model: "MNC-01",
        capacity: "Radiant Baby Warmer — 650 W",
        dimensions: "700 × 500 × 1450 mm (working height)",
        weight: "42 kg",
        specs: [
          { label: "Control Mode", value: "Manual & Servo (skin sensor)" },
          { label: "SpO₂ Monitoring", value: "Integrated neonatal SpO₂" },
        ],
      },
      {
        id: "mnc-02",
        model: "MNC-02",
        capacity: "LED Phototherapy Unit",
        dimensions: "Photo Head: 450 × 280 × 120 mm",
        weight: "8 kg (head unit)",
        specs: [
          { label: "Irradiance", value: ">30 µW/cm²/nm" },
          { label: "LED Lifespan", value: ">20,000 hours" },
        ],
      },
      {
        id: "mnc-03",
        model: "MNC-03",
        capacity: "NICU Transport Incubator — Double Wall",
        dimensions: "820 × 560 × 1050 mm",
        weight: "56 kg",
        specs: [
          { label: "Wall Construction", value: "Double-wall acrylic, inner air curtain" },
          { label: "Humidity Control", value: "Integrated active humidifier, 40–95% RH" },
        ],
      },
    ],
    certifications: [
      "CE Marked",
      "ISO 13485",
      "IEC 60601-2-21",
      "IEC 60601-2-50",
      "CDSCO Registered",
      "BIS Certified",
    ],
    downloads: [
      {
        title: "MNC Series Neonatal Care Brochure",
        type: "brochure",
        url: "/downloads/mnc-brochure.pdf",
        fileSize: "3.6 MB",
      },
      {
        title: "Radiant Baby Warmer Datasheet — MNC-01",
        type: "datasheet",
        url: "/downloads/mnc-warmer-datasheet.pdf",
        fileSize: "1.5 MB",
      },
      {
        title: "NICU Incubator Datasheet — MNC-03",
        type: "datasheet",
        url: "/downloads/mnc-incubator-datasheet.pdf",
        fileSize: "1.8 MB",
      },
      {
        title: "Operator Manual — MNC Series",
        type: "manual",
        url: "/downloads/mnc-operator-manual.pdf",
        fileSize: "8.3 MB",
      },
    ],
    faqs: [
      {
        question: "What is servo control mode on the radiant warmer and why is it important?",
        answer:
          "In servo control mode, the warmer's skin temperature sensor continuously measures the neonate's abdominal skin temperature and automatically adjusts heater output to maintain the set skin temperature within ±0.1°C. This prevents overheating and insensible water loss, which are critical risks for premature infants.",
      },
      {
        question: "How often should the phototherapy LED array be checked for irradiance?",
        answer:
          "MarKEN recommends weekly irradiance measurement with a calibrated radiometer at the treatment distance of 30–35 cm. The MNC-02 built-in hour counter alerts the operator when cumulative hours approach the 20,000-hour LED life threshold, at which point irradiance may fall below therapeutic levels.",
      },
      {
        question: "Can the NICU incubator maintain humidity for extremely premature infants?",
        answer:
          "Yes. The MNC-03 double-wall incubator includes an active sterile water humidification system adjustable from 40% to 95% RH. High humidity (≥80% RH) is essential in the first week of life for infants below 28 weeks gestation to prevent transepidermal water loss.",
      },
      {
        question: "Is the radiant warmer compatible with X-ray cassette positioning?",
        answer:
          "Yes. The MNC-01 radiant warmer mattress tray has a cassette slot and radiolucent mattress deck, allowing bedside chest X-rays without moving the neonate. The X-ray grid is included as a standard accessory.",
      },
      {
        question: "Do you provide training for nursing staff on neonatal equipment?",
        answer:
          "Yes. MarKEN provides structured in-service training at the time of installation, covering device operation, alarm management, infection control, and scheduled preventive maintenance. Annual refresher training and 24/7 service support are available under MarKEN service contracts.",
      },
    ],
    relatedProducts: ["anesthesia-ventilator", "patient-monitors", "diagnostic-equipment"],
    seoTitle: "Neonatal Care Equipment | Baby Warmer, Phototherapy, Incubator | MarKEN",
    seoDescription:
      "MarKEN MNC Series neonatal care — servo-controlled radiant baby warmer, >30 µW/cm²/nm LED phototherapy unit, and double-wall NICU transport incubator. CE, ISO 13485, IEC 60601 certified.",
    seoKeywords: [
      "neonatal care equipment India",
      "radiant baby warmer manufacturer",
      "phototherapy unit neonatal",
      "NICU incubator India",
      "neonatal equipment price India",
      "newborn warmer manufacturer India",
    ],
    has3DExperience: false,
  },
];
