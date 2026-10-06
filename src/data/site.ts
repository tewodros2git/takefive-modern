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
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'About us', href: '/about/', icon: 'info' },
  { label: 'Services', href: '/services/', icon: 'handshake' },
  { label: 'Gallery', href: '/gallery/', icon: 'photo_library' },
  { label: 'Contact Us', href: '/#contact', icon: 'call' },
];

export const trustStats = [
  { icon: 'history_edu', value: '17+ Years', label: 'In event management' },
  { icon: 'event_available', value: '100+', label: 'High-profile events and conferences delivered' },
  { icon: 'diversity_3', value: '6,000+', label: 'Delegates served in a single event' },
  { icon: 'handshake', value: 'Trusted by', label: 'AU, UN agencies, WHO, DFID, COMESA' },
];

export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: 'event-planning-coordination',
    title: 'Event Planning & Coordination',
    summary: 'We combine creativity with precision planning to bring your vision to life.',
    description:
      'We manage every detail of your event from initial concept through execution, coordinating vendors, schedules, and logistics so your conference or summit runs seamlessly from start to finish.',
    icon: 'edit_calendar',
  },
  {
    slug: 'venue-sourcing-setup',
    title: 'Venue Sourcing & Setup',
    summary: 'We create event spaces that inspire, engage, and impress.',
    description:
      'Our team sources venues that match your event requirements and budget, then manages the full setup — seating, staging, signage, and technical requirements — for a polished result.',
    icon: 'location_city',
  },
  {
    slug: 'accommodation-coordination',
    title: 'Accommodation Coordination',
    summary: "Your guests' comfort and convenience are our priority.",
    description:
      'We coordinate accommodation for delegates and guests, negotiating rates and managing bookings so your attendees are comfortably housed for the duration of the event.',
    icon: 'hotel',
  },
  {
    slug: 'transportation-management',
    title: 'Transportation Management',
    summary: 'Punctual, safe, and reliable transport every time.',
    description:
      'From airport pickups to delegate shuttles, we plan and manage transportation logistics to keep every participant moving smoothly throughout the event.',
    icon: 'directions_car',
  },
  {
    slug: 'branding-event-materials',
    title: 'Branding & Event Materials',
    summary: "Every detail reflects your brand's professionalism and values.",
    description:
      'We design and produce brochures, banners, delegate kits, ID badges, and signage so every touchpoint reflects your brand and the professionalism of your event.',
    icon: 'palette',
  },
  {
    slug: 'conference-on-site-management',
    title: 'Conference & On-Site Management',
    summary: 'Flawless execution so you can focus on your guests.',
    description:
      'Our on-site teams manage registration desks, AV and interpretation booths, and real-time logistics, ensuring your conference runs smoothly from the opening session to the close.',
    icon: 'meeting_room',
  },
  {
    slug: 'post-event-services',
    title: 'Post-Event Services',
    summary: 'Clear reporting and follow-up once the event concludes.',
    description:
      'Once the event concludes, we manage vendor settlements, collect feedback, and deliver evaluation reports that help you measure impact and plan future events.',
    icon: 'fact_check',
  },
  {
    slug: 'catering-services',
    title: 'Catering Services',
    summary: 'Quality dining tailored to your delegates and schedule.',
    description:
      'We coordinate catering partners to deliver quality dining experiences for your delegates, tailored to group size, dietary requirements, and event schedule.',
    icon: 'restaurant',
  },
];
