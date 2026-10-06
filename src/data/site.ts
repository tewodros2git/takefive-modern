export const siteConfig = {
  name: 'Take Five Events',
  legalName: 'Take Five Conference and Event',
  description:
    'Take Five Events is a leading event organizer in Addis Ababa, Ethiopia. Your trusted event planner for conferences and corporate events across Ethiopia.',
  url: 'https://takefiveevents.com',
  phone: '+251 11 662 0087',
  phoneAlt: '+251930000330',
  email: 'info@takefiveevents.com',
  emailAlt: 'contact@takefiveevents.com',
  address: 'New Bright Tower, 5th Floor, Room 505, Bole Medhanialem, Addis Ababa, Ethiopia',
  hours: 'Mon – Sat: 8 am – 5 pm, Sunday: CLOSED',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Contact Us', href: '/#contact' },
];

export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
}

export const services: Service[] = [
  {
    slug: 'event-planning-coordination',
    title: 'Event Planning & Coordination',
    summary: 'End-to-end planning and on-the-ground coordination for conferences, summits, and ceremonies.',
    description:
      'We manage every detail of your event from initial concept through execution, coordinating vendors, schedules, and logistics so your conference or summit runs seamlessly from start to finish.',
  },
  {
    slug: 'venue-sourcing-setup',
    title: 'Venue Sourcing & Setup',
    summary: 'Finding and preparing the right venue for the scale and tone of your event.',
    description:
      'Our team sources venues that match your event requirements and budget, then manages the full setup — seating, staging, signage, and technical requirements — for a polished result.',
  },
  {
    slug: 'accommodation-coordination',
    title: 'Accommodation Coordination',
    summary: 'Hotel bookings and delegate accommodation managed from one point of contact.',
    description:
      'We coordinate accommodation for delegates and guests, negotiating rates and managing bookings so your attendees are comfortably housed for the duration of the event.',
  },
  {
    slug: 'transportation-management',
    title: 'Transportation Management',
    summary: 'Reliable transport logistics for delegates, VIPs, and event materials.',
    description:
      'From airport pickups to delegate shuttles, we plan and manage transportation logistics to keep every participant moving smoothly throughout the event.',
  },
  {
    slug: 'branding-event-materials',
    title: 'Branding & Event Materials',
    summary: 'Branded materials and signage that reflect your organization professionally.',
    description:
      'We design and produce brochures, banners, delegate kits, ID badges, and signage so every touchpoint reflects your brand and the professionalism of your event.',
  },
  {
    slug: 'conference-on-site-management',
    title: 'Conference & On-Site Management',
    summary: 'Dedicated on-site teams managing registration, AV, and real-time logistics.',
    description:
      'Our on-site teams manage registration desks, AV and interpretation booths, and real-time logistics, ensuring your conference runs smoothly from the opening session to the close.',
  },
  {
    slug: 'post-event-services',
    title: 'Post-Event Services',
    summary: 'Vendor settlements, feedback surveys, and evaluation reporting after the event.',
    description:
      'Once the event concludes, we manage vendor settlements, collect feedback, and deliver evaluation reports that help you measure impact and plan future events.',
  },
  {
    slug: 'catering-services',
    title: 'Catering Services',
    summary: 'Catering coordination tailored to delegate numbers and dietary needs.',
    description:
      'We coordinate catering partners to deliver quality dining experiences for your delegates, tailored to group size, dietary requirements, and event schedule.',
  },
];
