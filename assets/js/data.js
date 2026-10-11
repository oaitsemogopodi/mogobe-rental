/* Source: 01_Dummy_Data_Guide.pdf, complete table on page 3.
 * Original records preserve supplied amounts, dates and property labels.
 * Expanded records are separate, revised fictional data. */
const REFERENCE_DATE = '2026-10-09';
const entities = [
  {
    "id": "semolemo",
    "name": "Semolemo"
  },
  {
    "id": "mogobe",
    "name": "Mogobe"
  },
  {
    "id": "pressure",
    "name": "Pressure Mates"
  },
  {
    "id": "lerude",
    "name": "Lerude"
  }
];
const originalProperties = [
  {
    "id": "source-p0",
    "entityId": "semolemo",
    "name": "Mogobe Plaza"
  },
  {
    "id": "source-p1",
    "entityId": "semolemo",
    "name": "Riverwalk Plot 54513"
  },
  {
    "id": "source-p2",
    "entityId": "semolemo",
    "name": "Mogheritani Windsor Inn"
  },
  {
    "id": "source-p3",
    "entityId": "mogobe",
    "name": "Main Mall (MOP)"
  },
  {
    "id": "source-p4",
    "entityId": "pressure",
    "name": "Nseng District"
  },
  {
    "id": "source-p5",
    "entityId": "pressure",
    "name": "Disaneng"
  },
  {
    "id": "source-p6",
    "entityId": "pressure",
    "name": "New Town Ward"
  },
  {
    "id": "source-p7",
    "entityId": "pressure",
    "name": "Shashe Ward"
  },
  {
    "id": "source-p8",
    "entityId": "pressure",
    "name": "Maun - Individual Single Unit"
  },
  {
    "id": "source-p9",
    "entityId": "lerude",
    "name": "Kanye - Unit 01"
  },
  {
    "id": "source-p10",
    "entityId": "lerude",
    "name": "Kanye - Unit 02"
  },
  {
    "id": "source-p11",
    "entityId": "lerude",
    "name": "Kanye - Unit 03"
  }
];
const originalUnits = [
  {
    "id": "source-u01",
    "entityId": "semolemo",
    "propertyId": "source-p0",
    "unit": "Unit 01",
    "tenant": "Digital Glow (Pty) Ltd",
    "rent": 3500,
    "levy": 175,
    "parking": 300,
    "other": 0,
    "escalationRate": 0.07,
    "occupationDate": "2025-01-01",
    "nextEscalationDate": "2026-01-01",
    "leaseDuration": 24,
    "sourceLeaseDuration": "2 Years",
    "leaseExpiry": "2028-01-28",
    "sourceExpiryFlagged": true,
    "status": "Occupied",
    "totalMonthlyCharges": 3975
  },
  {
    "id": "source-u02",
    "entityId": "semolemo",
    "propertyId": "source-p1",
    "unit": "Unit 02",
    "tenant": "Praveen LTV (Pty) Ltd",
    "rent": 4450,
    "levy": 222.5,
    "parking": 350,
    "other": 150,
    "escalationRate": 0.08,
    "occupationDate": "2026-02-01",
    "nextEscalationDate": "2027-02-01",
    "leaseDuration": 36,
    "sourceLeaseDuration": "3 Years",
    "leaseExpiry": "2029-02-28",
    "sourceExpiryFlagged": false,
    "status": "Occupied",
    "totalMonthlyCharges": 5172.5
  },
  {
    "id": "source-u03",
    "entityId": "semolemo",
    "propertyId": "source-p2",
    "unit": "Unit 03",
    "tenant": "Kgetsi Consulting",
    "rent": 5400,
    "levy": 270,
    "parking": 400,
    "other": 0,
    "escalationRate": 0.1,
    "occupationDate": "2025-03-01",
    "nextEscalationDate": "2026-03-01",
    "leaseDuration": 60,
    "sourceLeaseDuration": "5 Years",
    "leaseExpiry": "2030-03-28",
    "sourceExpiryFlagged": false,
    "status": "Occupied",
    "totalMonthlyCharges": 6070
  },
  {
    "id": "source-u04",
    "entityId": "mogobe",
    "propertyId": "source-p3",
    "unit": "Unit 01",
    "tenant": "Naledi Business Services",
    "rent": 4700,
    "levy": 235,
    "parking": 300,
    "other": 0,
    "escalationRate": 0.07,
    "occupationDate": "2025-01-01",
    "nextEscalationDate": "2026-01-01",
    "leaseDuration": 24,
    "sourceLeaseDuration": "2 Years",
    "leaseExpiry": "2028-01-28",
    "sourceExpiryFlagged": true,
    "status": "Occupied",
    "totalMonthlyCharges": 5235
  },
  {
    "id": "source-u05",
    "entityId": "mogobe",
    "propertyId": "source-p3",
    "unit": "Unit 02",
    "tenant": "Kgale Advisory",
    "rent": 5650,
    "levy": 282.5,
    "parking": 350,
    "other": 150,
    "escalationRate": 0.08,
    "occupationDate": "2026-02-01",
    "nextEscalationDate": "2027-02-01",
    "leaseDuration": 36,
    "sourceLeaseDuration": "3 Years",
    "leaseExpiry": "2029-02-28",
    "sourceExpiryFlagged": false,
    "status": "Occupied",
    "totalMonthlyCharges": 6432.5
  },
  {
    "id": "source-u06",
    "entityId": "mogobe",
    "propertyId": "source-p3",
    "unit": "Unit 03",
    "tenant": "Botho Technologies",
    "rent": 6600,
    "levy": 330,
    "parking": 400,
    "other": 0,
    "escalationRate": 0.1,
    "occupationDate": "2025-03-01",
    "nextEscalationDate": "2026-03-01",
    "leaseDuration": 60,
    "sourceLeaseDuration": "5 Years",
    "leaseExpiry": "2030-03-28",
    "sourceExpiryFlagged": false,
    "status": "Occupied",
    "totalMonthlyCharges": 7330
  },
  {
    "id": "source-u07",
    "entityId": "mogobe",
    "propertyId": "source-p3",
    "unit": "Unit 04",
    "tenant": "Kalahari Retailers",
    "rent": 7550,
    "levy": 377.5,
    "parking": 450,
    "other": 150,
    "escalationRate": 0.07,
    "occupationDate": "2026-04-01",
    "nextEscalationDate": "2027-04-01",
    "leaseDuration": 24,
    "sourceLeaseDuration": "2 Years",
    "leaseExpiry": "2028-04-28",
    "sourceExpiryFlagged": false,
    "status": "Occupied",
    "totalMonthlyCharges": 8527.5
  },
  {
    "id": "source-u08",
    "entityId": "pressure",
    "propertyId": "source-p4",
    "unit": "Unit 01",
    "tenant": "Delta Property Services",
    "rent": 5900,
    "levy": 295,
    "parking": 0,
    "other": 0,
    "escalationRate": 0.07,
    "occupationDate": "2025-01-01",
    "nextEscalationDate": "2026-01-01",
    "leaseDuration": 24,
    "sourceLeaseDuration": "2 Years",
    "leaseExpiry": "2028-01-28",
    "sourceExpiryFlagged": true,
    "status": "Occupied",
    "totalMonthlyCharges": 6195
  },
  {
    "id": "source-u09",
    "entityId": "pressure",
    "propertyId": "source-p5",
    "unit": "Unit 02",
    "tenant": "Thuto Professional Services",
    "rent": 6850,
    "levy": 342.5,
    "parking": 350,
    "other": 150,
    "escalationRate": 0.08,
    "occupationDate": "2026-02-01",
    "nextEscalationDate": "2027-02-01",
    "leaseDuration": 36,
    "sourceLeaseDuration": "3 Years",
    "leaseExpiry": "2029-02-28",
    "sourceExpiryFlagged": false,
    "status": "Occupied",
    "totalMonthlyCharges": 7692.5
  },
  {
    "id": "source-u10",
    "entityId": "pressure",
    "propertyId": "source-p6",
    "unit": "Unit 03",
    "tenant": "Molelo Creative Studio",
    "rent": 7800,
    "levy": 390,
    "parking": 0,
    "other": 0,
    "escalationRate": 0.1,
    "occupationDate": "2025-03-01",
    "nextEscalationDate": "2026-03-01",
    "leaseDuration": 60,
    "sourceLeaseDuration": "5 Years",
    "leaseExpiry": "2030-03-28",
    "sourceExpiryFlagged": false,
    "status": "Occupied",
    "totalMonthlyCharges": 8190
  },
  {
    "id": "source-u11",
    "entityId": "pressure",
    "propertyId": "source-p7",
    "unit": "Unit 04",
    "tenant": "Northgate Trading",
    "rent": 8750,
    "levy": 437.5,
    "parking": 0,
    "other": 150,
    "escalationRate": 0.07,
    "occupationDate": "2026-04-01",
    "nextEscalationDate": "2027-04-01",
    "leaseDuration": 24,
    "sourceLeaseDuration": "2 Years",
    "leaseExpiry": "2028-04-28",
    "sourceExpiryFlagged": false,
    "status": "Occupied",
    "totalMonthlyCharges": 9337.5
  },
  {
    "id": "source-u12",
    "entityId": "pressure",
    "propertyId": "source-p8",
    "unit": "Unit 05",
    "tenant": "Okavango Insight",
    "rent": 9700,
    "levy": 485,
    "parking": 500,
    "other": 0,
    "escalationRate": 0.08,
    "occupationDate": "2025-05-01",
    "nextEscalationDate": "2026-05-01",
    "leaseDuration": 36,
    "sourceLeaseDuration": "3 Years",
    "leaseExpiry": "2029-05-28",
    "sourceExpiryFlagged": true,
    "status": "Occupied",
    "totalMonthlyCharges": 10685
  },
  {
    "id": "source-u13",
    "entityId": "lerude",
    "propertyId": "source-p9",
    "unit": "Unit 01",
    "tenant": "Southern Business Solutions",
    "rent": 7100,
    "levy": 355,
    "parking": 0,
    "other": 0,
    "escalationRate": 0.07,
    "occupationDate": "2025-01-01",
    "nextEscalationDate": "2026-01-01",
    "leaseDuration": 24,
    "sourceLeaseDuration": "2 Years",
    "leaseExpiry": "2028-01-28",
    "sourceExpiryFlagged": true,
    "status": "Occupied",
    "totalMonthlyCharges": 7455
  },
  {
    "id": "source-u14",
    "entityId": "lerude",
    "propertyId": "source-p10",
    "unit": "Unit 02",
    "tenant": "Kanye Retail Hub",
    "rent": 8050,
    "levy": 402.5,
    "parking": 0,
    "other": 150,
    "escalationRate": 0.08,
    "occupationDate": "2026-02-01",
    "nextEscalationDate": "2027-02-01",
    "leaseDuration": 36,
    "sourceLeaseDuration": "3 Years",
    "leaseExpiry": "2029-02-28",
    "sourceExpiryFlagged": false,
    "status": "Occupied",
    "totalMonthlyCharges": 8602.5
  },
  {
    "id": "source-u15",
    "entityId": "lerude",
    "propertyId": "source-p11",
    "unit": "Unit 03",
    "tenant": "VACANT",
    "rent": 9000,
    "levy": 450,
    "parking": 0,
    "other": 0,
    "escalationRate": 0,
    "occupationDate": null,
    "nextEscalationDate": null,
    "leaseDuration": null,
    "sourceLeaseDuration": null,
    "leaseExpiry": null,
    "sourceExpiryFlagged": false,
    "status": "Vacant",
    "totalMonthlyCharges": 9450
  }
];

const originalBaseline = {
  verificationStatus: 'Verified against all 15 PDF records',
  entities: 4,
  properties: 12,
  units: 15,
  occupied: 14,
  vacant: 1,
  rent: 92000,
  levy: 4600,
  parkingAndOther: 4300,
  totalMonthlyCharges: 100900
};

// Consolidate Lerude's three source property labels into Kanye only in the expanded demo.
const expandedProperties = [
  ...originalProperties.filter(property => property.entityId !== 'lerude'),
  { id: 'demo-kanye', entityId: 'lerude', name: 'Kanye' }
];

function anniversary(date, months) {
  const [year, month, day] = date.split('-').map(Number);
  const endOfMonth = new Date(Date.UTC(year, month + months, 0)).getUTCDate();
  return new Date(Date.UTC(year, month - 1 + months, Math.min(day, endOfMonth)))
    .toISOString().slice(0, 10);
}

const expandedUnits = originalUnits.map(unit => {
  const revised = {
    ...unit,
    id: 'demo-' + unit.id,
    propertyId: unit.entityId === 'lerude' ? 'demo-kanye' : unit.propertyId
  };
  if (unit.status === 'Occupied') {
    revised.leaseExpiry = anniversary(unit.occupationDate, unit.leaseDuration);
    while (revised.nextEscalationDate < REFERENCE_DATE) {
      revised.nextEscalationDate = anniversary(revised.nextEscalationDate, 12);
    }
    if (revised.nextEscalationDate > revised.leaseExpiry) {
      revised.nextEscalationDate = null;
    }
  }
  return revised;
});

const addedTenantNames = [
  'Acacia Advisory', 'Metsi Wellness', 'Pula Office Supplies', 'The Daily Grind',
  'Savanna Logistics', 'Naledi Interiors', 'Kopano Legal', 'Tshimo Trading',
  'Bokamoso Learning', 'Dumela Printworks', 'Marula Technologies', 'Tsela Travel',
  'Ubuntu Accounting', 'Motse Architects', 'Lerato Boutique', 'Thuto Partners',
  'Noka Engineering', 'Sega Medical', 'Kalahari Foods', 'Tlotlo Media',
  'Maitlamo Services', 'Lentswe Studio', 'Morula Pharmacy', 'Blue Crane Consulting',
  'Pelo Dental', 'Delta Workspace', 'Tau Security', 'Tuli Textiles',
  'Tholo Insurance', 'Dikgosi Retail', 'Sable Design', 'Mabogo Hardware',
  'Kukama Projects', 'Lefika Partners', 'Mopane Holdings'
];

let addedIndex = 0;
expandedProperties.forEach((property, propertyIndex) => {
  const existing = expandedUnits.filter(unit => unit.propertyId === property.id);
  const target = property.name === 'Main Mall (MOP)' ? 12 : property.name === 'Kanye' ? 6 : 4;
  for (let index = existing.length; index < target; index++) {
    const vacant = index === target - 1 && [0, 2, 3, 4, 7].includes(propertyIndex);
    const expiry = anniversary('2026-10-15', addedIndex % 18);
    const candidateEscalation = anniversary('2026-10-12', addedIndex % 12);
    const rent = 3800 + ((propertyIndex * 5 + index * 3) % 18) * 400;
    const parking = index % 3 === 0 ? 300 : 0;
    const other = index % 4 === 0 ? 150 : 0;
    // Start after the highest source unit number to avoid duplicate labels within a property.
    const maxSourceUnit = Math.max(...existing.map(unit => Number(unit.unit.replace('Unit ', ''))), 0);
    expandedUnits.push({
      id: 'added-p' + propertyIndex + '-u' + index,
      entityId: property.entityId,
      propertyId: property.id,
      unit: 'Unit ' + String(maxSourceUnit + index - existing.length + 1).padStart(2, '0'),
      tenant: vacant ? 'VACANT' : addedTenantNames[addedIndex],
      rent,
      levy: rent * 0.05,
      parking,
      other,
      escalationRate: vacant ? 0 : [0.07, 0.08, 0.1][addedIndex % 3],
      occupationDate: vacant ? null : anniversary(expiry, -24),
      nextEscalationDate: vacant || candidateEscalation > expiry ? null : candidateEscalation,
      leaseDuration: vacant ? null : 24,
      sourceLeaseDuration: vacant ? null : '2 Years',
      leaseExpiry: vacant ? null : expiry,
      status: vacant ? 'Vacant' : 'Occupied',
      totalMonthlyCharges: rent + rent * 0.05 + parking + other
    });
    addedIndex++;
  }
});

const datasets = {
  original: { label: 'Original PDF data', properties: originalProperties, units: originalUnits },
  expanded: { label: 'Expanded demo', properties: expandedProperties, units: expandedUnits }
};
let activeDataset = 'original';
let properties = datasets.original.properties;
let units = datasets.original.units;

function setDataset(key) {
  if (!datasets[key]) return;
  activeDataset = key;
  properties = datasets[key].properties;
  units = datasets[key].units;
}
