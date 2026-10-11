/* Entirely fictional demonstration records; missing source hierarchy is documented. */
const REFERENCE_DATE='2026-10-09';
const entities=[
  {
    id:'semolemo',
    name:'Semolemo'
  },
  {
    id:'mogobe',
    name:'Mogobe'
  },
  {
    id:'pressure',
    name:'Pressure Mates'
  },
  {
    id:'lerude',
    name:'Lerude'
  }
];
const properties=[
  [
    'semolemo',
    'Gaborone West'
  ],
  [
    'semolemo',
    'Broadhurst'
  ],
  [
    'semolemo',
    'Phakalane'
  ],
  [
    'mogobe',
    'Main Mall (MOP)'
  ],
  [
    'mogobe',
    'Commerce Park'
  ],
  [
    'mogobe',
    'Fairgrounds'
  ],
  [
    'mogobe',
    'Mogoditshane'
  ],
  [
    'pressure',
    'New Town Ward'
  ],
  [
    'pressure',
    'Industrial South'
  ],
  [
    'pressure',
    'Tlokweng'
  ],
  [
    'pressure',
    'Extension 10'
  ],
  [
    'lerude',
    'Kanye'
  ]
].map(([
  entityId,
  name
],
i)=>({
  id:'p'+i,
  entityId,
  name
}));
const tenantNames=[
  'Kgetsi Design Co.',
  'Acacia Advisory',
  'Metsi Wellness',
  'Pula Office Supplies',
  'The Daily Grind',
  'Kgale Consulting',
  'Molelo Design Lab',
  'Savanna Logistics',
  'Naledi Interiors',
  'Kopano Legal',
  'Tshimo Trading',
  'Bokamoso Learning',
  'Dumela Printworks',
  'Marula Technologies',
  'Tsela Travel',
  'Ubuntu Accounting',
  'Motse Architects',
  'Lerato Boutique',
  'Thuto Partners',
  'Noka Engineering',
  'Sega Medical',
  'Kalahari Foods',
  'Tlotlo Media',
  'Maitlamo Services',
  'Lentswe Studio',
  'Morula Pharmacy',
  'Blue Crane Consulting',
  'Pelo Dental',
  'Delta Workspace',
  'Tau Security',
  'Tuli Textiles',
  'Tholo Insurance',
  'Dikgosi Retail',
  'Sable Design',
  'Mabogo Hardware',
  'Kukama Projects',
  'Lefika Partners',
  'Mopane Holdings',
  'Botho Creative',
  'Serowe Crafts',
  'Kgori Systems',
  'Aloe Beauty'
];
const units=[
];
let occupiedIndex=0;
properties.forEach((p,
pi)=>{
  const count=pi===3?10:pi===11?6:3;
  for(let j=0;
  j<count;
  j++){
    const vacant=j===count-1&&[
      0,
      3,
      7,
      9,
      11,
      5
    ].includes(pi);
    const n=occupiedIndex;
    const rent=pi===7&&j===0?7800:3500+((pi*7+j*3)%19)*450;
    const expiryMonth=n%18;
    const expiry=new Date(Date.UTC(2026,
    9+expiryMonth,
    15));
    const expiryStr=expiry.toISOString().slice(0,
    10);
    const occupation=String(expiry.getUTCFullYear()-2)+expiryStr.slice(4);
    const escalationMonth=n%12;
    const escalation=new Date(Date.UTC(2026,
    9+escalationMonth,
    12)).toISOString().slice(0,
    10);
    const parking=j%3===0?250:0,
    other=j%4===0?150:0;
    units.push({
      id:p.id+'-u'+j,
      entityId:p.entityId,
      propertyId:p.id,
      unit:'Unit '+String(j+1).padStart(2,
      '0'),
      tenant:vacant?'VACANT':pi===7&&j===0?'Molelo Creative Studio':tenantNames[
        n%tenantNames.length
      ],
      rent,
      levy:rent*.05,
      parking,
      other,
      escalationRate:vacant?0:[
        .07,
        .08,
        .1
      ][
        n%3
      ],
      occupationDate:vacant?null:occupation,
      nextEscalationDate:vacant?null:escalation<=expiryStr?escalation:null,
      leaseDuration:vacant?null:24,
      leaseExpiry:vacant?null:expiryStr,
      status:vacant?'Vacant':'Occupied',
      totalMonthlyCharges:rent+rent*.05+parking+other
    });
    if(!vacant)occupiedIndex++;
  }
});
const originalBaseline={
  verificationStatus:'Unverified: source workbook and Dummy Data Guide not supplied',
  entities:4,
  properties:12,
  units:15,
  occupied:14,
  vacant:1,
  rent:92000,
  levy:4600,
  parkingAndOther:4300,
  totalMonthlyCharges:100900
};
