// ─── Central placeholder content for SYcon'26 ───────────────────────────────
// Swap the values here (and drop real images into /public/images/...) once
// real assets/copy are ready. Every page reads from this single file.

export const EVENT_DATE = new Date('2026-08-26T09:00:00+05:30')

export const REGISTRATION_LINKS = {
  inside: 'https://forms.gle/DNVuiaduU4yqgQfo9',
  outside: 'https://forms.gle/REPLACE_WITH_OUTSIDE_SSN_FORM',
}

export const FEES = [
  {
    title: 'SSN Students',
    price: '₹299',
    note: 'Valid SSN ID required at check-in',
    perks: ['All talks and workshops', 'Kit and participation certificate', 'Lunch and refreshments'],
    highlight: false,
  },
  {
    title: 'Other Colleges',
    price: '₹499',
    note: 'Open to all engineering and arts colleges',
    perks: ['All talks and workshops', 'Kit and participation certificate', 'Lunch and refreshments', 'Reserved front-half seating'],
    highlight: true,
  },
  {
    title: 'Groups of 4+',
    price: '₹449',
    note: 'Register together, pay per head',
    perks: ['All talks and workshops', 'Kit and participation certificate', 'Lunch and refreshments'],
    highlight: false,
  },
]

export const BENEFITS = [
  {
    title: 'Talks that aren’t recycled',
    desc: 'Six speakers, six different fields — no repeated "future of AI" slide decks. Each session is built for this crowd.',
    icon: 'mic',
  },
  {
    title: 'You leave with something built',
    desc: 'The workshop tracks are hands-on. Bring a laptop, walk out with a working project, not just notes.',
    icon: 'code',
  },
  {
    title: 'A certificate that means attendance, not just a PDF',
    desc: 'Signed and numbered, issued only to students who check in and stay through their track.',
    icon: 'award',
  },
  {
    title: 'Actual conversations',
    desc: 'Lunch and the post-panel mixer are built into the schedule on purpose — that’s where most people exchange numbers.',
    icon: 'users',
  },
  {
    title: 'On-the-spot challenges',
    desc: 'Quick build/pitch rounds between sessions with real prize money, judged live by the speakers.',
    icon: 'trophy',
  },
  {
    title: 'A kit you’ll actually use',
    desc: 'Tee, ID lanyard and notebook — no filler merch, no plastic bag full of flyers.',
    icon: 'gift',
  },
]

export const TIMELINE = [
  { time: '9:00 AM', title: 'Check-in opens', desc: 'Show your registration confirmation, collect your kit and badge.' },
  { time: '10:00 AM', title: 'Opening address', desc: 'Short and on time — chief guest speaks for 15 minutes, not 45.' },
  { time: '11:00 AM', title: 'Keynote', desc: 'Our headline speaker opens the day.' },
  { time: '12:30 PM', title: 'Workshop tracks', desc: 'Pick one: AI/ML, Web3, Product Design, or Robotics. Laptops required.' },
  { time: '2:00 PM', title: 'Lunch', desc: 'Served on the lawn. Speakers eat with everyone else.' },
  { time: '3:00 PM', title: 'Panel discussion', desc: 'Open Q&A in the last 20 minutes — bring hard questions.' },
  { time: '5:00 PM', title: 'Results and closing', desc: 'Challenge winners announced, kits for volunteers, doors close by 6.' },
]

export const GALLERY_IMAGES = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `https://placehold.co/480x320/10141f/f9622c?text=SYCON+%2725+%E2%80%94+${i + 1}`,
  alt: `Photo from a previous SYcon edition, frame ${i + 1}`,
}))

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
    logo: '/Sponsors/CredO.jpeg',
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

// 20-30 committee members, split into Senior Core (SC) and Junior Core (JC)
const verticalDomains = [
  'Creative & PR', 'Editorial', 'Sponsorship', 'Operations',
  'Documentation', 'Marketing', 'Logistics', 'Technical'
]

const verticalHeadsNames = [
  'Simran Gujral', 'Aisha Khan',
  'Karan Malhotra', 'Pooja Iyer',
  'Sneha Kapoor', 'Rohan Desai',
  'Rahul Khanna', 'Vikram Rao',
  'Meera Pillai', 'Aditi Warrier',
  'Kabir Singh', 'Yash Patel',
  'Nikhil Chandran', 'Sanjay Kumar',
  'Ananya Menon', 'Aryan Kapoor'
]
const seniorNames = [
  'Aarav Sharma', 'Meera Pillai', 'Vikram Rao', 'Ishita Bose', 'Rohan Desai',
  'Ananya Menon', 'Kabir Singh', 'Divya Ramesh', 'Nikhil Chandran', 'Tara Nambiar',
]
const juniorNames = [
  'Gokul M', 'J Kamali Shree', 'Shree Vaishnavi', 'JayaSuriya S', 'Nithesh B',
  'Madhu Visagan HT', 'Krishna PV ', 'KK Ridhuvarshini', 'Nathaniel Christian', 'Sara Thomas',
  'Manoj Pillai', 'Nithya Krishnan', 'Aditya Ranganathan', 'Fathima Noor', 'Harish Babu',
]

export const COMMITTEE = {
  vertical: verticalHeadsNames.map((name, i) => {
    const domainIndex = Math.floor(i / 2);
    return {
      id: `vh-${i + 1}`,
      name,
      domain: verticalDomains[domainIndex],
      role: `${verticalDomains[domainIndex]} Head`,
      photo: `https://placehold.co/300x300/171c2b/f9622c?text=${encodeURIComponent(name.split(' ')[0])}`,
      linkedin: 'https://linkedin.com/in/placeholder',
    };
  }),
  senior: seniorNames.map((name, i) => ({
    id: `sc-${i + 1}`,
    name,
    role: i === 0 ? 'Event Head' : i === 1 ? 'Vice Head' : 'Senior Core Member',
    photo: `https://placehold.co/300x300/171c2b/f9622c?text=${encodeURIComponent(name.split(' ')[0])}`,
    linkedin: 'https://linkedin.com/in/placeholder',
  })),
  junior: juniorNames.map((name, i) => ({
    id: `jc-${i + 1}`,
    name,
    role: 'Junior Core Member',
    photo: `https://placehold.co/300x300/171c2b/f9622c?text=${encodeURIComponent(name.split(' ')[0])}`,
    linkedin: 'https://linkedin.com/in/placeholder',
  })),
}
