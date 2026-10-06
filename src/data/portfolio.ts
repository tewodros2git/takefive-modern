export interface PortfolioItem {
  slug: string;
  title: string;
  categories: string[];
  tagline: string;
  highlights: string[];
  category: string;
  client: string;
  date?: string;
  location: string;
}

export const portfolioCategories = ['All', 'AU Commission Events', 'Major International Conferences', 'National & State Events'];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'icasa',
    title: 'International Conference on AIDS and Sexually Transmitted Infections in Africa (ICASA)',
    categories: ['Major International Conferences'],
    tagline: 'Own, Scale-up and sustain',
    highlights: [
      'Emphasizing African ownership, commitment, and sustainability in the HIV/AIDS response.',
      'Brought together global and African stakeholders to discuss HIV/AIDS and STI challenges.',
      'Promoted African-led innovations and strategies for prevention, treatment, and care.',
      'Fostered collaboration among governments, NGOs, researchers, and affected communities.',
    ],
    category: 'Events',
    client: 'ICASA',
    date: 'December 4–8, 2011',
    location: 'Millennium Hall, Addis Ababa, Ethiopia',
  },
  {
    slug: 'state-funeral-of-prime-minister-meles-zenawi',
    title: 'State Funeral of Prime Minister Meles Zenawi',
    categories: ['National & State Events'],
    tagline: '6,000+ delegates',
    highlights: [
      'The Ethiopian government organized the funeral, with a special committee formed to oversee the arrangements.',
      'Over 20 African heads of state in attendance.',
      'Senior international dignitaries, including Susan Rice, U.S. Ambassador to the UN.',
      'Tens of thousands of Ethiopian citizens and religious leaders from the Ethiopian Orthodox Church.',
    ],
    category: 'Funeral',
    client: 'Ethiopian Government',
    date: 'September 2, 2012',
    location: 'Addis Ababa',
  },
  {
    slug: 'comesa-business-dialogue-2015',
    title: 'COMESA Business Dialogue 2015',
    categories: ['Major International Conferences'],
    tagline: '"Taking Action on Illicit Trade – An Industrial Competitiveness Agenda."',
    highlights: [
      'Brought together over 150 policy makers and business leaders from across the COMESA region.',
      'Addressed the adverse impact of illicit trade on industrial competitiveness, government revenue, public health, and consumer safety.',
      'Called for the creation of a Regional Public-Private Framework to combat illicit trade.',
      'Advocated for a regional Anti-Illicit Trade Protocol to harmonize laws and enforcement across member states.',
      'Emphasized the role of SMEs in driving industrialization and economic integration.',
    ],
    category: 'Events',
    client: 'COMESA Business Council (CBC)',
    date: 'March 25–26, 2015',
    location: 'Addis Ababa',
  },
  {
    slug: 'origin-africa-fashion-week-2012',
    title: 'Origin Africa Fashion Week 2012',
    categories: ['Major International Conferences'],
    tagline: 'The fashion week',
    highlights: [
      'Promoted Africa as a sourcing destination for textiles and apparel.',
      'Showcased the creativity and innovation of African designers.',
      'Shifted global perceptions about doing business in Africa.',
      'Featured runway shows, exhibitions, and networking events bringing together designers, buyers, and industry leaders.',
    ],
    category: 'Fashion Event',
    client: 'African Cotton & Textile Industries Federation (ACTIF)',
    date: 'April 24–27, 2012',
    location: 'Addis Ababa',
  },
  {
    slug: 'unesco-equatorial-guinea-international-prize-for-research-in-the-life-sciences-award',
    title: 'UNESCO-Equatorial Guinea International Prize for Research in the Life Sciences award',
    categories: ['Major International Conferences'],
    tagline: '2024 Ceremony',
    highlights: [
      'Honored individuals, institutions, or organizations whose research in life sciences has significantly advanced human well-being.',
      'Covered medicine, biology, agriculture, environmental sciences, and emerging technologies.',
      'Promoted scientific innovation for sustainable development and encouraged researcher collaboration.',
      'Prize value of USD 350,000, shared equally among up to three laureates, plus a certificate of recognition and the "Integracion Tribal" statuette.',
    ],
    category: 'Award',
    client: 'The Republic of Equatorial Guinea',
    date: 'April 23, 2024',
    location: 'Addis Ababa',
  },
  {
    slug: 'au-general-assemblies',
    title: 'AU General Assemblies',
    categories: ['AU Commission Events', 'Major International Conferences'],
    tagline: 'African Union Summit',
    highlights: [
      'Convenes African heads of state at the Nelson Mandela Plenary Hall, African Union Headquarters, Addis Ababa.',
      'The African Union emblem — a golden map of Africa surrounded by radiating lines — symbolizes unity and continental cooperation.',
      'Occurs twice a year: the January/February Ordinary Session of the Assembly, and a June/July Mid-Year Coordination Meeting or Extraordinary Summit.',
    ],
    category: 'Summit',
    client: 'African Union Commission (AUC)',
    location: 'Addis Ababa',
  },
];
