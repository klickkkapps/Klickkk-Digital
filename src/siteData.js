const services = [
  {
    slug: 'influencer-marketing',
    title: 'Influencer Marketing',
    shortTitle: 'Influencer Marketing',
    description: 'Connect your brand with the right voices. We identify, engage, and manage influencer partnerships that amplify reach and drive authentic engagement.',
    meta: "Connect your brand with the right influencers. Klickkk Digital's influencer marketing services drive authentic reach, engagement, and measurable ROI for your brand.",
    hero: 'Build Trust Through the Right Creators',
    sub: 'Creator partnerships planned around audience fit, authenticity, and measurable business outcomes.',
    offers: ['Creator Discovery', 'Campaign Strategy', 'Content Coordination', 'Performance Tracking'],
    process: ['Research', 'Shortlist', 'Collaborate', 'Report']
  },
  {
    slug: 'marketplace-management',
    title: 'Marketplace Management',
    shortTitle: 'Marketplace Management',
    description: 'Dominate every marketplace. From Amazon to Flipkart, we optimize listings, manage ads, and maximize your marketplace revenue with proven strategies.',
    meta: 'Full-service marketplace management on Amazon, Flipkart, and beyond. Klickkk Digital handles listings, ads, and operations to maximise your marketplace revenue.',
    hero: 'Marketplace Growth Managed End to End',
    sub: 'Listings, advertising, catalog hygiene, and performance tracking built to improve marketplace revenue.',
    offers: ['Listing Optimization', 'Marketplace Ads', 'Catalog Management', 'Sales Reporting'],
    process: ['Audit', 'Optimize', 'Advertise', 'Scale']
  },
  {
    slug: 'performance-marketing',
    title: 'Performance Marketing',
    shortTitle: 'Performance Marketing',
    description: 'Results-driven campaigns powered by data. We craft paid advertising strategies across Google, Meta, and more to maximise your ROI and grow conversions.',
    meta: "Data-driven paid advertising across Google, Meta, and more. Klickkk Digital's performance marketing services maximise your ROI and convert clicks into customers.",
    hero: 'Maximum ROI on Every Rupee You Spend',
    sub: 'Data-driven paid advertising across Google, Meta, and more, built to convert clicks into customers and maximise your returns.',
    offers: ['Google Ads', 'Meta Ads', 'Retargeting Campaigns', 'Conversion Rate Optimisation'],
    process: ['Research', 'Launch', 'Optimise', 'Scale'],
    featured: true
  },
  {
    slug: 'search-engine-optimization',
    title: 'Search Engine Optimization',
    shortTitle: 'SEO',
    description: "Rank higher, grow faster. Our SEO experts build strategies that boost organic visibility, drive qualified traffic, and establish your brand's authority.",
    meta: 'SEO services by Klickkk Digital that improve search visibility, organic traffic, technical health, and brand authority.',
    hero: 'Organic Visibility That Compounds',
    sub: 'Technical, content, and authority work that helps your brand rank for searches that matter.',
    offers: ['Technical SEO', 'Keyword Strategy', 'Content Optimization', 'Authority Building'],
    process: ['Audit', 'Plan', 'Optimize', 'Monitor']
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortTitle: 'Social Media Marketing',
    description: 'Build a loyal community around your brand. We craft compelling content strategies and manage your social presence to grow engagement and brand awareness.',
    meta: 'Social media marketing services for content strategy, community growth, engagement, and brand visibility.',
    hero: 'Social Content Built for Consistency',
    sub: 'Content calendars, campaign ideas, publishing, and reporting that keep your brand visible and useful.',
    offers: ['Content Strategy', 'Creative Direction', 'Publishing Calendar', 'Community Management'],
    process: ['Position', 'Create', 'Publish', 'Improve']
  },
  {
    slug: 'web-design-development',
    title: 'Web Design & Development',
    shortTitle: 'Web Design & Development',
    description: 'Beautiful, high-converting websites that work. We design and develop digital experiences that represent your brand and turn visitors into customers.',
    meta: 'Web design and development services for high-converting websites, landing pages, and digital experiences.',
    hero: 'Websites That Look Sharp and Convert',
    sub: 'Fast, responsive websites and landing pages designed around brand clarity and conversion.',
    offers: ['Website Design', 'Landing Pages', 'Frontend Development', 'Conversion UX'],
    process: ['Discover', 'Design', 'Develop', 'Launch']
  }
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Academy', href: '/academy' },
  { label: 'Blogs', href: '/blogs' }
];

const socials = [
  { label: 'Facebook', text: 'Fb', href: 'https://www.facebook.com/klickdigital4' },
  { label: 'Instagram', text: 'Ig', href: 'https://www.instagram.com/klickkk.digital' },
  { label: 'X', text: 'X', href: 'https://x.com/klickkk_digital' },
  { label: 'Threads', text: 'Th', href: 'https://www.threads.net/klickkk.digital/' },
  { label: 'LinkedIn', text: 'In', href: 'https://www.linkedin.com/company/klickkkdigital' },
  { label: 'Pinterest', text: 'Pi', href: 'https://in.pinterest.com/klickkkdigital' }
];

module.exports = {
  services,
  navLinks,
  socials
};
