// ─── Central placeholder content for SYcon'26 ───────────────────────────────
// Swap the values here (and drop real images into /public/images/...) once
// real assets/copy are ready. Every page reads from this single file.

export const EVENT_DATE = new Date('2026-09-01T23:59:00+05:30')

export const REGISTRATION_LINKS = {
  inside: 'https://forms.gle/DNVuiaduU4yqgQfo9',
  outside: 'https://rzp.io/rzp/Syconexternal26',
}

export const FEES = [
  {
    title: 'SSN Students',
    price: '₹150',
    note: 'Valid SSN ID required at check-in',
    perks: ['Access to all founder speaker sessions', 'Interactive panel discussion access', 'Kit and participation certificate', 'Lunch and refreshments'],
    highlight: false,
  },
  {
    title: 'Other Colleges',
    price: '₹250',
    note: 'Open to all engineering and arts colleges',
    perks: ['Access to all founder speaker sessions', 'Interactive panel discussion access', 'Kit and participation certificate', 'Lunch and refreshments', 'Reserved front-half seating'],
    highlight: true,
  },
]

export const BENEFITS = [
  {
    title: 'Talks from inspiring founders',
    desc: 'Six founders, six distinct entrepreneurial journeys. No generic slide decks — honest stories of building from 0 to 1.',
    icon: 'mic',
  },
  {
    title: 'Interactive panel discussion',
    desc: 'Engage with founders on stage during the curated panel discussion with open, unfiltered audience Q&A.',
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
  { time: '10:00 AM', title: 'Opening address', desc: 'Welcome address introducing SYCON \'26 and the day’s vision.' },
  { time: '11:00 AM', title: 'Keynote founder session', desc: 'Our headline founder speaker opens the day.' },
  { time: '12:30 PM', title: 'Founder speaker sessions', desc: 'Back-to-back talks from dynamic startup founders, with live Q&A after each.' },
  { time: '2:00 PM', title: 'Lunch & Networking', desc: 'Served on the lawn. Founders and delegates connect over lunch.' },
  { time: '3:00 PM', title: 'Founder panel discussion', desc: 'A moderated panel discussion tackling hard startup truths with open audience Q&A.' },
  { time: '5:00 PM', title: 'Closing ceremony', desc: 'Certificates handed out and concluding remarks.' },
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
    perks: ['Title Event Host', 'Main Auditorium Naming Rights', 'Full Student Kit Branding'],
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
    description: 'Fueling participants with wholesome, healthy snack kits across speaker sessions and challenge tracks.',
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
    description: 'Providing mobile fast-charging stations and continuous power infrastructure for auditorium halls.',
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
    description: 'Granting cloud credits, API keys, and sandbox computing environments for summit attendees.',
    logo: '/Sponsors/eeci_gate.jpeg',
    perks: ['$500 Cloud Credits/Student', 'Developer Sandbox Access', 'AI Track Partner'],
    website: 'https://nexoracloud.com',
  },
  // ─── PARTNERS & STALLS ──────────────────────────────────────────────────
  {
    id: 7,
    name: 'Farmleys',
    tier: 'Partners and Stalls',
    category: 'Refreshment Partner',
    stallNumber: 'STALL #01',
    location: 'Justice Prathap Auditorium',
    tagline: 'Gourmet Culinary Delights & Refreshing Drinks',
    description: 'Specialty culinary booth offering artisanal rolls, snacks, and cold coolers throughout the day.',
    logo: '/Sponsors/Farmley_Makha_Shaka.png',
    host: 'Farmleys Team',
    highlights: ['Exclusive Delegate Discount', 'Signature Refreshment Station', 'Healthy Snack Packs'],
  },
  {
    id: 8,
    name: 'Red Bull',
    tier: 'Partners and Stalls',
    category: 'Energy Drink Partner',
    stallNumber: 'STALL #02',
    location: 'Main Audi Lawn',
    tagline: 'Gives You Wings',
    description: 'Energy and refreshment partner fueling student delegates, founders, and innovators across SYCON \'26.',
    logo: '/Sponsors/red_bull.jpg',
    host: 'Red Bull Team',
    highlights: ['Energy Fuel Stations', 'Free Ecosystem Swag', 'Interactive Networking Zone'],
  },
  {
    id: 9,
    name: 'SSN Lakshya',
    tier: 'Partners and Stalls',
    category: 'Community Partner',
    stallNumber: 'PARTNER #03',
    location: 'SSN Campus',
    tagline: 'Empowering Student Innovation & Leadership',
    description: 'Official student symposium committee at SSN College of Engineering driving innovation, tech summits, and leadership initiatives.',
    logo: '/Lakshya Logo Transparent.png',
    host: 'Lakshya Organizing Team',
    highlights: ['Student Innovation Hub', 'Flagship Symposium Body', 'Community Networking Desk'],
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
  { name: 'Balamuthukrishnan B', domain: 'Technical', photo: 'https://drive.google.com/file/d/1DT8mqBn9PxLJ-WCEBFo_PUZDcc36HlDI/view?usp=sharing', linkedin: '' },

  // Design and Editorial
  { name: 'Pranav Karthik A', domain: 'Design & Editorial', photo: 'https://drive.google.com/file/d/1mN0kpMlrCWfgcjt9xenouvMKvpafCikm/view?usp=sharing', linkedin: '' },
  { name: 'Shree Vaishali K', domain: 'Design & Editorial', photo: 'https://drive.google.com/file/d/1ryk-wI_ES2kFwUZ51p6MsxXb2vFRCb-p/view?usp=sharing', linkedin: '' },
  { name: 'Rakshith', domain: 'Design & Editorial', photo: 'https://drive.google.com/file/d/13EBCBjZ0XZOrR3012pdB6EBhQC2vvo1x/view?usp=sharing', linkedin: '' },

  // Documentation
  { name: 'Sanjana Desigan', domain: 'Documentation', photo: 'https://drive.google.com/file/d/1ciz6j_V_MJ5AjS-ibuPyIKelQjOb6pdZ/view?usp=sharing', linkedin: '' },
  { name: 'Dhanyalalitha S', domain: 'Documentation', photo: 'https://drive.google.com/file/d/1Z6YPdNpHuTrz3tf_dOyiXY5Q24xF4hsM/view?usp=sharing', linkedin: '' },
];

// ─── SENIOR CORE TEAM ──────────────────────────────────────────────────────────
// Photos from /public/senior_core
const seniorCoreData = [
  { name: 'Bharath Ram', role: 'Event Head', photo: '/senior_core/Bharath Ram S K logistics .jpg', linkedin: '' },
  { name: 'Anbuselvam B', role: 'Vice Head', photo: '/senior_core/Anbuselvam B.jpg', linkedin: '' },
  { name: 'Akaspathan R', role: 'Senior Core Member', photo: '/senior_core/Akaspathan .jpeg', linkedin: '' },
  { name: 'Madhangi Karimanal', role: 'Senior Core Member', photo: '/senior_core/MadhangiKarimanal.jpg', linkedin: '' },
  { name: 'Dakshata Senthil', role: 'Senior Core Member', photo: '', linkedin: '' },
  { name: 'Kiruthika Jayakumar', role: 'Senior Core Member', photo: '/senior_core/Kiruthika Jayakumar .jpg', linkedin: '' },
  { name: 'Saranathan Iyengar', role: 'Senior Core Member', photo: '', linkedin: '' },
  { name: 'Saikirtan Srinivasan', role: 'Senior Core Member', photo: '', linkedin: '' },
  { name: 'Deepan Bomb', role: 'Senior Core Member', photo: '/senior_core/Deepan Bomb_Operations.jpg', linkedin: '' },
  { name: 'Bharathi Asok', role: 'Senior Core Member', photo: '/senior_core/Bharathi.jpeg', linkedin: '' },
  { name: 'Prawin Kumar S', role: 'Senior Core Member', photo: '', linkedin: '' },
  { name: 'Nanditha S', role: 'Senior Core Member', photo: '/senior_core/Nanditha_S.jpg', linkedin: '' },
];

// ─── JUNIOR CORE TEAM ──────────────────────────────────────────────────────────
// Paste each member's Google Drive photo link in the 'photo' field.
const juniorCoreData = [
  { name: 'J Kamali Shree', role: 'Junior Core Member', photo: '', linkedin: '' },
  { name: 'Shree Vaishnavi S', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/1E1zV-r4jgFLDDzOxDAjk_KNJ6HPQEq8i/view?usp=sharing', linkedin: '' },
  { name: 'Krishna PV', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/1EnPi5eyo78FmwUhGvWvJ0ZG3Gqxk6WD1/view?usp=sharing', linkedin: '' },
  { name: 'Nithyashri', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/1YJvD6FG28cDlRp-SKEglDDQPdwScCT3I/view?usp=sharing', linkedin: '' },
  { name: 'Madhu Visagan HT', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/1zZkmNV8etl0g2JXo3iAciqSaFOtb8hBS/view?usp=sharing', linkedin: '' },
  { name: 'Nithin R', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/17GJ_g_guLsQxbM9A9XTktkY2HrINSPyp/view?usp=sharing', linkedin: '' },
  { name: 'Sanjana Shankar', role: 'Junior Core Member', photo: '', linkedin: '' },
  { name: 'Gokul M', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/1CIFaDybUtfXE_TkWyPK8zPwZNZCl-TwA/view?usp=sharing', linkedin: '' },
  { name: 'Harshith Venkatesh', role: 'Junior Core Member', photo: '', linkedin: '' },
  { name: 'Darshana R', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/1yNpMohq0JxDMhza4AWO0i0gHm7NbQu4m/view?usp=sharing', linkedin: '' },
  { name: 'Kanduja S', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/1g5RFsUrjYDkzE3ey1pcgviY-O2PbQM3I/view?usp=sharing', linkedin: '' },
  { name: 'Mohammed Afzal AR', role: 'Junior Core Member', photo: '', linkedin: '' },
  { name: 'Jayasuriya S', role: 'Junior Core Member', photo: '', linkedin: '' },
  { name: 'Nathaniel Christian', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/144FxyN-EBaJlEZL7HOCBUFftOYbxx9xG/view?usp=sharing', linkedin: '' },
  { name: 'Nithesh B', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/1zXYAXxrmTfymJNvC-lxzLV7gasUWBmve/view?usp=sharing', linkedin: '' },
  { name: 'KK Ridhuvarshini', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/1_-_FKk6BfBNvuGuuxXB4BQjQQMXZNoKO/view?usp=sharing', linkedin: '' },
  { name: 'Jeevan', role: 'Junior Core Member', photo: 'https://drive.google.com/file/d/16Bp75b-phJjD648LTSpSlKyZ_Ku7WCvF/view?usp=sharing', linkedin: '' },
];

// ─── FACULTY MENTOR ────────────────────────────────────────────────────────────
const facultyData = [
  { name: 'Dr. Vimal Samsingh', role: 'Faculty Coordinator, Mechanical Department', photo: '/vss_pic.jpg', linkedin: '' },
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
