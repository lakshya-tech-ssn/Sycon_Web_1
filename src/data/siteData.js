// ─── Central placeholder content for SYcon'26 ───────────────────────────────
// Swap the values here (and drop real images into /public/images/...) once
// real assets/copy are ready. Every page reads from this single file.

export const EVENT_DATE = new Date('2026-09-01T23:59:00+05:30')

export const REGISTRATION_LINKS = {
  inside: 'https://forms.gle/DNVuiaduU4yqgQfo9',
  outside: 'https://forms.gle/REPLACE_WITH_OUTSIDE_SSN_FORM',
}

export const FEES = [
  {
    title: 'SSN Students',
    price: '₹150',
    note: 'Valid SSN ID required at check-in',
    perks: ['Access to all speaker sessions', 'Kit and participation certificate', 'Lunch and refreshments'],
    highlight: false,
  },
  {
    title: 'Other Colleges',
    price: '₹200',
    note: 'Open to all engineering and arts colleges',
    perks: ['Access to all speaker sessions', 'Kit and participation certificate', 'Lunch and refreshments', 'Reserved front-half seating'],
    highlight: true,
  },
]

export const BENEFITS = [
  {
    title: 'Talks that aren’t recycled',
    desc: 'Six speakers, six different fields — no repeated "future of AI" slide decks. Each session is built for this crowd.',
    icon: 'mic',
  },
  {
    title: 'Direct access to the speakers',
    desc: 'Live Q&A after every session, plus the post-panel mixer — this isn’t a one-way broadcast.',
    icon: 'users',
  },
  {
    title: 'A certificate that means attendance, not just a PDF',
    desc: 'Signed and numbered, issued only to students who check in and stay for the sessions.',
    icon: 'award',
  },
  {
    title: 'Actual conversations',
    desc: 'Lunch and the post-panel mixer are built into the schedule on purpose — that’s where most people exchange numbers.',
    icon: 'trophy',
  },
]

export const TIMELINE = [
  { time: '9:00 AM', title: 'Check-in opens', desc: 'Show your registration confirmation, collect your kit and badge.' },
  { time: '10:00 AM', title: 'Opening address', desc: 'Short and on time — chief guest speaks for 15 minutes, not 45.' },
  { time: '11:00 AM', title: 'Keynote', desc: 'Our headline speaker opens the day.' },
  { time: '12:30 PM', title: 'Speaker sessions', desc: 'Back-to-back talks from the rest of the lineup, with live Q&A after each.' },
  { time: '2:00 PM', title: 'Lunch', desc: 'Served on the lawn. Speakers eat with everyone else.' },
  { time: '3:00 PM', title: 'Panel discussion', desc: 'Open Q&A in the last 20 minutes — bring hard questions.' },
  { time: '5:00 PM', title: 'Closing', desc: 'Certificates handed out, doors close by 6.' },
]

export const GALLERY_IMAGES = [
  { id: 1, src: '/SYCON24/DSC07043.JPG', alt: 'SYCON \'24 Photo 1' },
  { id: 2, src: '/SYCON24/DSC07123.JPG', alt: 'SYCON \'24 Photo 2' },
  { id: 3, src: '/SYCON24/DSC07157.JPG', alt: 'SYCON \'24 Photo 3' },
  { id: 4, src: '/SYCON24/DSC07216.JPG', alt: 'SYCON \'24 Photo 4' },
  { id: 5, src: '/SYCON24/DSC07247.JPG', alt: 'SYCON \'24 Photo 5' }
];

export const SPEAKERS = [
  {
    id: 1,
    name: 'Mr. K Abdul Nabeel',
    role: 'Founder & MD, Arabian Garden group of restaurants',
    topic: 'What actually breaks when you scale an LLM product',
    tier: 'top',
    bio: 'An entrepreneur and community-driven professional associated with Arabian Gardens, known for his work in building meaningful experiences, hospitality, and people-focused initiatives.',
    photo: '/public/Speakers/abdul_nabeel.jpg',
    linkedin: 'https://www.linkedin.com/in/abdul-nabeel-k-616aa21ba/',
    twitter: 'https://twitter.com/placeholder',
  },
  {
    id: 2,
    name: 'Deepak Kumar',
    role: 'Founder, DNA Community',
    topic: 'The eight months before StackForge had a single paying customer',
    tier: 'top',
    bio: 'Founder of DNA Community and popularly known as The Community Man, Deepak is a community builder, entrepreneur, and author focused on bringing founders, creators, and changemakers together to learn, collaborate, and grow.',
    photo: '/public/Speakers/deepak_kumar.jpeg',
    linkedin: 'https://www.linkedin.com/in/deepak910k/',
    position: 'center 4%',
    twitter: 'https://twitter.com/placeholder',
  },
  {
    id: 3,
    name: 'Tharun Kumar',
    role: 'Founder & Athlete, Fitx120',
    topic: 'Design systems for teams that hate design systems',
    tier: 'top',
    bio: 'A fitness coach, athlete, and fitness educator, Tharun Kumar focuses on helping people build sustainable fitness habits, improve their physique, and develop a stronger mindset toward health and training.',
    photo: '/public/Speakers/tharun_kumar.jpg',
    linkedin: 'https://www.linkedin.com/in/tharun-kumar-fitness-coach/',
    twitter: 'https://twitter.com/placeholder',
  },
  {
    id: 4,
    name: 'Mr. Vishal',
    role: 'Founder, CredO',
    topic: 'What actually happens at a million concurrent users',
    tier: 'bottom',
    bio: 'Vishal Nandakumar is a cybersecurity expert with over 15 years of industry experience and the Founder and CEO of CredO, an AI-driven, real-time security intelligence platform.',
    photo: '/public/Speakers/vishal_nandakumar.jpg',
    linkedin: 'https://in.linkedin.com/in/vishal-nandakumar-00516a1aa',
    twitter: 'https://twitter.com/placeholder',
  },
  {
    id: 5,
    name: 'Shalini Robert',
    role: 'Founder, Robert Trust Foundation',
    topic: 'The roadmap decisions nobody puts in the retro deck',
    tier: 'bottom',
    bio: 'A compassionate changemaker and TEDx speaker transforming lives through the power of presence.Empowering hundreds of grieving young girls and marginalized communities as a real-life "Amma".',
    photo: '/public/Speakers/shalini_robert.jpg',
    linkedin: 'https://instagram.com/shalini_robert_',
    twitter: 'https://twitter.com/placeholder',
  },
  {
    id: 6,
    name: 'Hari Prasanth S',
    role: 'Founder, Mahataan Groups',
    topic: 'Why the demo works and the real thing doesn’t',
    tier: 'bottom',
    bio: 'A purpose-driven professional associated with Mahataan, Hari Prasanth S is involved in initiatives focused on creating meaningful social impact and empowering communities through collaborative efforts.',
    photo: '/public/Speakers/hari_prasanth.jpg',
    linkedin: 'https://www.linkedin.com/in/nammahari/',
    twitter: 'https://twitter.com/placeholder',
  },
]

export const SPONSORS = [
  {
    id: 1,
    name: 'Shana Events',
    tier: 'Associate Sponsor',
    category: 'Shana Events',
    tagline: 'Exceed your imagination and elevate your events to extraordinary heights',
    description: 'Exceed your imagination and elevate your events to extraordinary heights',
    logo: '/Sponsors/shana_events.jpg',
    perks: ['Lead Associate Sponsor', 'Stage & Tech Infrastructure', 'Security Operations'],
    website: 'https://shanaevemts.ai',
  },
  {
    id: 2,
    name: 'Srinivas Elaastomers',
    tier: 'Platinum Sponsor',
    category: 'Srinivas Elastomers',
    tagline: 'Manufacturer of auto components',
    description: 'Srinivas Elastomers India Pvt Ltd has been rendering service to various Automobile industries in supplying best quality rubber components & plastic moulded components, manufactured out of synthetic and Natural rubber polymers.',
    logo: '/Sponsors/srinivas_elastomers.png',
    perks: ['Title Workshop Host', 'Main Auditorium Naming Rights', 'Full Student Kit Branding'],
    website: 'https://srinivaselastomers.com/',
  },
  {
    id: 3,
    name: 'Finaltics',
    tier: 'Gold Sponsor',
    category: 'Finaltics',
    tagline: 'Experiential learning and career acceleration platform',
    description: ' Provides hands-on experience programs (such as Financial Analyst, Investment Banking, Business Analyst, and Data Science programs) featuring live projects and self-paced learning structures.',
    logo: '/Sponsors/finaltics.jpeg',
    perks: ['Official Catering Partner', 'Lawn Pavilion Branding', 'VIP Delegate Lounge'],
    website: 'https://www.finlatics.com',
  },
  {
    id: 4,
    name: 'Bell Institute of Hotel Management',
    tier: 'Silver Sponsor',
    category: '',
    tagline: 'Healthy Snacks & Premium Makhana Partner',
    description: 'Fueling participants with wholesome, healthy snack kits across workshops and challenge tracks.',
    logo: '/Sponsors/bell_institute.jpeg',
    perks: ['Official Snack Partner', 'Participant Kit Insertion', 'Refreshment Zone'],
    website: 'https://farmley.com',
  },
  {
    id: 5,
    name: 'CredO',
    tier: 'Silver Sponsor',
    category: '',
    tagline: 'High-Performance Power Solutions & Smart Hardware',
    description: 'Providing mobile fast-charging stations and continuous power infrastructure for workshop halls.',
    logo: '/Sponsors/CredO.jpeg',
    perks: ['Charging Station Host', 'Hardware Tech Support', 'Digital Hall Signage'],
    website: 'https://credo.ai',
  },
  {
    id: 6,
    name: 'EECI Gate Academy',
    tier: 'Silver Sponsor',
    category: '',
    tagline: 'Scalable Cloud Infrastructure & Developer API',
    description: 'Granting cloud credits, API keys, and sandbox computing environments for workshop attendees.',
    logo: '/Sponsors/eeci_gate.jpeg',
    perks: ['$500 Cloud Credits/Student', 'Developer Sandbox Access', 'AI Track Partner'],
    website: 'https://nexoracloud.com',
  },
  // ─── 8 PARTNERS & STALLS ──────────────────────────────────────────────────
  {
    id: 7,
    name: 'Farmleys',
    tier: 'Partners and Stalls',
    category: 'Refreshment Partner',
    stallNumber: 'STALL #01',
    location: 'Justice Prathap Auditorium',
    tagline: 'Gourmet Culinary Delights & Refreshing Drinks',
    description: 'Specialty culinary booth offering artisanal rolls, kebabs, and cold coolers throughout the day.',
    logo: '/Sponsors/Farmley_Makha_Shaka.png',
    host: 'Mr. K Abdul Nabeel',
    highlights: ['Live Barbecue Grill', 'Exclusive Delegate Discount', 'Signature Beverage Station'],
  },
  {
    id: 8,
    name: 'Red Bull',
    tier: 'Partners and Stalls',
    category: 'Energy Drink Partner',
    stallNumber: 'STALL #02',
    location: 'Main Audi Lawn',
    tagline: 'Gives You Wings',
    description: 'Interactive networking hub connecting student entrepreneurs with mentors, investors, and peers.',
    logo: '/Sponsors/red_bull.jpg',
    host: 'Deepak Kumar',
    highlights: ['1-on-1 Founder Office Hours', 'Free Ecosystem Swag', 'Community Onboarding Desk'],
  },
  {
    id: 9,
    name: 'FitX120',
    tier: 'Partners and Stalls',
    category: 'Fitness & Health Stall',
    stallNumber: 'STALL #03',
    location: 'Outdoor Expo Zone',
    tagline: 'Sustainable Athletic Fitness & Posture Analysis',
    description: 'On-site posture screenings, grip-strength challenges, and custom wellness guidance for students.',
    logo: '/Speakers/tharun_kumar.jpg',
    host: 'Tharun Kumar',
    highlights: ['Grip Strength Challenge', 'Instant Body Comp Assessment', 'Fitness Goodie Bags'],
  },
  {
    id: 10,
    name: 'Mahataan Groups',
    tier: 'Partners and Stalls',
    category: 'Social Impact Pavilion',
    stallNumber: 'STALL #04',
    location: 'Innovation Corridor',
    tagline: 'Purpose-Driven Social Change & Youth Outreach',
    description: 'Showcasing community outreach projects, sustainability drives, and volunteering initiatives.',
    logo: '/Speakers/hari_prasanth.jpg',
    host: 'Hari Prasanth S',
    highlights: ['Impact Project Showcase', 'Volunteer Sign-up Desk', 'Eco Badge Distribution'],
  },
  {
    id: 11,
    name: 'Robert Trust Foundation',
    tier: 'Partners and Stalls',
    category: 'Mentorship & Youth Care',
    stallNumber: 'STALL #05',
    location: 'Student Lounge',
    tagline: 'Transforming Lives Through Compassion & Mentorship',
    description: 'Providing confidential youth counselling, career guidance, and emotional resilience workshops.',
    logo: '/Speakers/shalini_robert.jpg',
    host: 'Shalini Robert',
    highlights: ['Quiet Reflection Zone', 'Career & Life Mentorship', 'TEDx Talk Booklet Drop'],
  },
  {
    id: 12,
    name: 'ByteWave Media',
    tier: 'Partners and Stalls',
    category: 'Media & Live Streaming',
    stallNumber: 'STALL #06',
    location: 'Media Lounge',
    tagline: 'Student Podcast Studio & Event Broadcasting',
    description: 'Pop-up broadcast booth interviewing speakers, delegates, and prize winners live during the summit.',
    logo: 'https://placehold.co/280x120/111827/a855f7?text=ByteWave+Media',
    host: 'ByteWave Media Crew',
    highlights: ['Pop-up Podcast Recording', 'Red Carpet Photo Wall', 'Social Media Shoutouts'],
  },
  {
    id: 13,
    name: 'DevCraft Hardware Arcade',
    tier: 'Partners and Stalls',
    category: 'Hardware & Maker Stall',
    stallNumber: 'STALL #07',
    location: 'Tech Workshop Corridor',
    tagline: 'Microcontrollers, IoT Boards & Soldering Demo',
    description: 'Hands-on hardware workbench featuring ESP32 boards, sensors, and live electronics demonstrations.',
    logo: 'https://placehold.co/280x120/111827/10b981?text=DevCraft+Hardware',
    host: 'DevCraft Team',
    highlights: ['Microcontroller Tryout Zone', 'Soldering Workshop Demo', 'Free Sensor Components'],
  },
  {
    id: 14,
    name: 'Redline Esports & Energy Bar',
    tier: 'Partners and Stalls',
    category: 'Gaming Lounge & Energy Stall',
    stallNumber: 'STALL #08',
    location: 'Activity Arena',
    tagline: 'VR Simulators, Beat-the-Pro & Energy Fuel',
    description: 'High-octane gaming corner featuring VR racing setups, mini gaming tournaments, and energy drinks.',
    logo: 'https://placehold.co/280x120/111827/ef4444?text=Redline+Esports',
    host: 'Redline Crew',
    highlights: ['VR Racing Simulator', '1v1 FIFA & Tekken Battles', 'Energy Drink Sampling'],
  },
]

// ─── COMMITTEE MEMBER DATA ─────────────────────────────────────────────────────
// HOW TO ADD PHOTOS:
//   Paste a Google Drive file link for each member's 'photo' field.
//   Supported formats:
//     • https://drive.google.com/file/d/FILE_ID/view?usp=sharing
//     • https://drive.google.com/open?id=FILE_ID
//   The CommitteeCard component auto-converts these to direct image URLs.
//   Make sure each file is shared as "Anyone with the link can view".
// ───────────────────────────────────────────────────────────────────────────────

const verticalHeadsData = [
  // Operations and Logistics
  { name: 'Thuhin B', domain: 'Operations & Logistics', photo: 'https://drive.google.com/file/d/1sN2HNbfailOne69rna8EctnBXCs5KEGv/view?usp=sharing', linkedin: '' },
  { name: 'Aditya Kumar', domain: 'Operations & Logistics', photo: 'https://drive.google.com/file/d/10D0Pr7jmLD_7csbeZPcJ5QpURnqsFZ9N/view?usp=sharing', linkedin: '' },
  { name: 'Harish Karthick M', domain: 'Operations & Logistics', photo: 'https://drive.google.com/file/d/1zg0qkEWAp48AI-RyNfWSLYYtpqgiG3uj/view?usp=sharing', linkedin: '' },
  { name: 'Guruprakash M', domain: 'Operations & Logistics', photo: 'https://drive.google.com/file/d/14A9hANDgOmnWbN56mlvTKuf8MuH1rtle/view?usp=sharing', linkedin: '' },

  // Marketing
  { name: 'Avantheka Srinivasan', domain: 'Marketing', photo: 'https://drive.google.com/file/d/1Jd943DW_447K582zqqSR7TACjMUkySjN/view?usp=sharing', linkedin: '' },
  { name: 'Hansika NM', domain: 'Marketing', photo: 'https://drive.google.com/file/d/1_OdyyfAYi8q4r2hGmPlWBAgpmfjDH2mx/view?usp=sharing', linkedin: '' },

  // Sponsorship and Finance
  { name: 'Swathi P', domain: 'Sponsorship & Finance', photo: 'https://drive.google.com/file/d/1xMvar9kU0YhLEa_79cbFOhn851fpW5IM/view?usp=sharing', linkedin: '' },
  { name: 'Rishi Rithesh', domain: 'Sponsorship & Finance', photo: 'https://drive.google.com/file/d/1quGZGId9MT4RVj7yk6aX0b7ncQrvJliW/view?usp=sharing', linkedin: '' },

  // Technical
  { name: 'Rishi Rithesh', domain: 'Technical', photo: 'https://drive.google.com/file/d/1quGZGId9MT4RVj7yk6aX0b7ncQrvJliW/view?usp=sharing', linkedin: '' },
  { name: 'Radesh L', domain: 'Technical', photo: 'https://drive.google.com/file/d/17OFDbtmAO1ni11WCtgvSYW_H2NRF4QOU/view?usp=sharing', linkedin: '' },
  { name: 'Balamuthukrishnan B', domain: 'Technical', photo: '', linkedin: '' },

  // Design and Editorial
  { name: 'Pranav Karthik A', domain: 'Design & Editorial', photo: 'https://drive.google.com/file/d/1mN0kpMlrCWfgcjt9xenouvMKvpafCikm/view?usp=sharing', linkedin: '' },
  { name: 'Shree Vaishali K', domain: 'Design & Editorial', photo: 'https://drive.google.com/file/d/1ryk-wI_ES2kFwUZ51p6MsxXb2vFRCb-p/view?usp=sharing', linkedin: '' },
  { name: 'Rakshith', domain: 'Design & Editorial', photo: 'https://drive.google.com/file/d/13EBCBjZ0XZOrR3012pdB6EBhQC2vvo1x/view?usp=sharing', linkedin: '' },

  // Documentation
  { name: 'Sanjana Desigan', domain: 'Documentation', photo: 'https://drive.google.com/file/d/1ciz6j_V_MJ5AjS-ibuPyIKelQjOb6pdZ/view?usp=sharing', linkedin: '' },
  { name: 'Dhanyalalitha S', domain: 'Documentation', photo: 'https://drive.google.com/file/d/1Z6YPdNpHuTrz3tf_dOyiXY5Q24xF4hsM/view?usp=sharing', linkedin: '' },
];

// ─── SENIOR CORE TEAM ──────────────────────────────────────────────────────────
// Paste each member's Google Drive photo link in the 'photo' field.
const seniorCoreData = [
  { name: 'Bharath Ram', role: 'Event Head', photo: '', linkedin: '' },
  { name: 'Anbuselvam B', role: 'Vice Head', photo: '', linkedin: '' },
  { name: 'Akaspathan R', role: 'Senior Core Member', photo: '', linkedin: '' },
  { name: 'Madhangi Karimanal', role: 'Senior Core Member', photo: '', linkedin: '' },
  { name: 'Dakshata Senthil', role: 'Senior Core Member', photo: '', linkedin: '' },
  { name: 'Krthikia', role: 'Senior Core Member', photo: '', linkedin: '' },
  { name: 'Saranathan Iyengar', role: 'Senior Core Member', photo: '', linkedin: '' },
  { name: 'Saikirtan Srinivasan', role: 'Senior Core Member', photo: '', linkedin: '' },
  { name: 'Deepan Bomb', role: 'Senior Core Member', photo: '', linkedin: '' },
  { name: 'Bharathi Asok', role: 'Senior Core Member', photo: '', linkedin: '' },
  { name: 'Prawin Kumar S', role: 'Senior Core Member', photo: '', linkedin: '' },
  { name: 'Nanditha S', role: 'Senior Core Member', photo: '', linkedin: '' },
];

// ─── JUNIOR CORE TEAM ──────────────────────────────────────────────────────────
// Paste each member's Google Drive photo link in the 'photo' field.
const juniorCoreData = [
  { name: 'J Kamali Shree', role: 'Junior Core Member', photo: '', linkedin: '' },
  { name: 'Shree Vaishnavi S', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/1E1zV-r4jgFLDDzOxDAjk_KNJ6HPQEq8i/view?usp=sharing', linkedin: '' },
  { name: 'Krishna PV', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/1EnPi5eyo78FmwUhGvWvJ0ZG3Gqxk6WD1/view?usp=sharing', linkedin: '' },
  { name: 'Nithyashri', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/1YJvD6FG28cDlRp-SKEglDDQPdwScCT3I/view?usp=sharing', linkedin: '' },
  { name: 'Madhu Visagan HT', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/1zZkmNV8etl0g2JXo3iAciqSaFOtb8hBS/view?usp=sharing', linkedin: '' },
  { name: 'Nithin R', role: 'Junior Core Member', photo: '', linkedin: '' },
  { name: 'Sanjana Shankar', role: 'Junior Core Member', photo: '', linkedin: '' },
  { name: 'Gokul M', role: 'Junior Core Member', photo: '', linkedin: '' },
  { name: 'Harshith Venkatesh', role: 'Junior Core Member', photo: '', linkedin: '' },
  { name: 'Darshana R', role: 'Junior Core Member', photo: '', linkedin: '' },
  { name: 'Kanduja S', role: 'Junior Core Member', photo: '', linkedin: '' },
  { name: 'Mohammed Afzal AR', role: 'Junior Core Member', photo: '', linkedin: '' },
  { name: 'Jayasuriya S', role: 'Junior Core Member', photo: '', linkedin: '' },
  { name: 'Nathaniel Christian', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/144FxyN-EBaJlEZL7HOCBUFftOYbxx9xG/view?usp=sharing', linkedin: '' },
  { name: 'Nithesh B', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/1zXYAXxrmTfymJNvC-lxzLV7gasUWBmve/view?usp=sharing', linkedin: '' },
  { name: 'KK Ridhuvarshini', role: 'Junior Core Member', photo: '', linkedin: '' },
  { name: 'Jeevan', role: 'Junior Core Member', photo: '', linkedin: '' },
];

// ─── FACULTY MENTOR ────────────────────────────────────────────────────────────
const facultyData = [
  { name: 'Vimal Samsingh', role: 'Mechanical Department', photo: '', linkedin: '' },
];

// Helper: returns a name-initial placeholder if no Google Drive link is provided
const fallbackPhoto = (name) =>
  `https://placehold.co/300x300/171c2b/f9622c?text=${encodeURIComponent(name.split(' ')[0])}`;

export const COMMITTEE = {
  vertical: verticalHeadsData.map((item, i) => ({
    id: `vh-${i + 1}`,
    name: item.name,
    domain: item.domain,
    role: `${item.domain} Head`,
    photo: item.photo || fallbackPhoto(item.name),
    linkedin: item.linkedin || 'https://linkedin.com/in/placeholder',
  })),
  senior: seniorCoreData.map((item, i) => ({
    id: `sc-${i + 1}`,
    name: item.name,
    role: item.role,
    photo: item.photo || fallbackPhoto(item.name),
    linkedin: item.linkedin || 'https://linkedin.com/in/placeholder',
  })),
  junior: juniorCoreData.map((item, i) => ({
    id: `jc-${i + 1}`,
    name: item.name,
    role: item.role,
    photo: item.photo || fallbackPhoto(item.name),
    linkedin: item.linkedin || 'https://linkedin.com/in/placeholder',
  })),
  faculty: facultyData.map((item, i) => ({
    id: `fm-${i + 1}`,
    name: item.name,
    role: item.role,
    photo: item.photo || fallbackPhoto(item.name),
    linkedin: item.linkedin || 'https://linkedin.com/in/placeholder',
  })),
}
