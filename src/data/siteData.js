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
    name: 'Hari Prasanth S',
    role: 'Founder, Mahataan Groups',
    topic: 'What actually happens at a million concurrent users',
    tier: 'bottom',
    bio: 'A purpose-driven professional associated with Mahataan, Hari Prasanth S is involved in initiatives focused on creating meaningful social impact and empowering communities through collaborative efforts.',
    photo: '/public/Speakers/hari_prasanth.jpg',
    linkedin: 'https://www.linkedin.com/in/nammahari/',
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
    position: 'center 3%',
    linkedin: 'https://linkedin.com/in/placeholder',
    twitter: 'https://twitter.com/placeholder',
  },
  {
    id: 6,
    name: 'ADD 6TH',
    role: 'Founder, ',
    topic: 'Why the demo works and the real thing doesn’t',
    tier: 'bottom',
    bio: 'A compassionate changemaker and TEDx speaker transforming lives through the power of presence.Empowering hundreds of grieving young girls and marginalized communities as a real-life "Amma"',
    photo: 'https://placehold.co/400x400/171c2b/f9622c?text=KS',
    linkedin: 'https://www.instagram.com/shalini_robert_/',
    twitter: 'https://twitter.com/placeholder',
  },
]

export const SPONSORS = [
  {
    id: 1,
    name: 'Xylotech',
    tier: 'Title Sponsor',
    tagline: 'Engineering the Future',
    // deep ink bg, vivid orange text — brand-true
    logo: 'https://placehold.co/320x140/0b0e14/f9622c?text=XYLOTECH',
  },
  {
    id: 2,
    name: 'Nimbus Systems',
    tier: 'Co-Sponsor',
    tagline: 'Cloud at Scale',
    // white bg, deep teal text
    logo: 'https://placehold.co/280x120/ffffff/0e7490?text=NIMBUS',
  },
  {
    id: 3,
    name: 'StackForge',
    tier: 'Co-Sponsor',
    tagline: 'Build. Deploy. Repeat.',
    // white bg, deep indigo text
    logo: 'https://placehold.co/280x120/ffffff/3730a3?text=STACKFORGE',
  },
  {
    id: 4,
    name: 'Loop Studio',
    tier: 'Gold',
    logo: 'https://placehold.co/320x130/faf8f4/b45309?text=Loop+Studio',
  },
  {
    id: 5,
    name: 'FinEdge',
    tier: 'Gold',
    logo: 'https://placehold.co/320x130/faf8f4/0369a1?text=FinEdge',
  },
  {
    id: 6,
    name: 'VoltCore',
    tier: 'Gold',
    logo: 'https://placehold.co/320x130/faf8f4/059669?text=VoltCore',
  },
  {
    id: 7,
    name: 'ByteWave',
    tier: 'Silver',
    logo: 'https://placehold.co/280x120/faf8f4/7c3aed?text=ByteWave',
  },
  {
    id: 8,
    name: 'Nexora',
    tier: 'Silver',
    logo: 'https://placehold.co/280x120/faf8f4/db2777?text=Nexora',
  },
  {
    id: 9,
    name: 'Orbitron Labs',
    tier: 'Silver',
    logo: 'https://placehold.co/280x120/faf8f4/0e7490?text=Orbitron',
  },
  {
    id: 10,
    name: 'DataSync',
    tier: 'Bronze',
    logo: 'https://placehold.co/260x110/faf8f4/16a34a?text=DataSync',
  },
  {
    id: 11,
    name: 'Luminary AI',
    tier: 'Bronze',
    logo: 'https://placehold.co/260x110/faf8f4/9333ea?text=Luminary',
  },
  {
    id: 12,
    name: 'GridCore',
    tier: 'Bronze',
    logo: 'https://placehold.co/260x110/faf8f4/dc2626?text=GridCore',
  },
  {
    id: 13,
    name: 'Pulsar Tech',
    tier: 'Bronze',
    logo: 'https://placehold.co/260x110/faf8f4/ea580c?text=Pulsar',
  },
  {
    id: 14,
    name: 'Zenith Cloud',
    tier: 'Bronze',
    logo: 'https://placehold.co/260x110/faf8f4/0b0e14?text=Zenith',
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
