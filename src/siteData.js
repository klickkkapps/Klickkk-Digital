const services = [
  {
    slug: 'influencer-marketing',
    title: 'Influencer Marketing',
    shortTitle: 'Influencer Marketing',
    description: "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers.",
    cta: 'Collaborate Now',
    meta: "Connect your brand with the right influencers. Klickkk Digital's influencer marketing services drive authentic reach, engagement, and measurable ROI for your brand.",
    hero: 'Build Trust Through the Right Creators',
    sub: 'Creator partnerships planned around audience fit, authenticity, and measurable business outcomes.',
    offers: ['Creator Discovery', 'Campaign Strategy', 'Content Coordination', 'Performance Tracking'],
    process: ['Research', 'Shortlist', 'Collaborate', 'Report']
  },
  {
    slug: 'marketplaces-management',
    title: 'Marketplaces Management',
    shortTitle: 'Marketplace Management',
    description: "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers.",
    cta: 'Manage My Store',
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
    description: "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers.",
    cta: 'Run My Ads',
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
    description: 'Our content marketing services include creating informative blog posts, engaging videos, and shareable infographics to captivate your audience and drive traffic to your website.',
    cta: 'Improve My Ranking',
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
    description: 'Our content marketing services include creating informative blog posts, engaging videos, and shareable infographics to captivate your audience and drive traffic to your website.',
    cta: 'Grow My Socials',
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
    description: 'Our design experts craft visually stunning and user-friendly websites built to convert. From concept to launch, we ensure every pixel enhances your brand and drives results.',
    cta: 'Start Your Website',
    meta: 'Web design and development services for high-converting websites, landing pages, and digital experiences.',
    hero: 'Websites That Look Sharp and Convert',
    sub: 'Fast, responsive websites and landing pages designed around brand clarity and conversion.',
    offers: ['Website Design', 'Landing Pages', 'Frontend Development', 'Conversion UX'],
    process: ['Discover', 'Design', 'Develop', 'Launch']
  }
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Academy', href: '/academy' },
  { label: 'Reviews', href: '/reviews' },
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

const framerImages = {
  footerLogo: 'https://framerusercontent.com/images/DJRLQssvka4ltKDQRGaRZJVJfI.png?height=513&width=1413',
  hero: 'https://framerusercontent.com/images/tVDg230sxN3guk1uVhxlFkIu1s.png?width=1500',
  stamp: 'https://framerusercontent.com/images/b4IW2nPWxHJ6UTAoq3A4u5d56ps.png?width=512',
  portraits: [
    'https://framerusercontent.com/images/dUseUtuxWZALl1W4o3xjq8KWc.jpg?scale-down-to=512',
    'https://framerusercontent.com/images/K6cUNifhQFa6qEX3kqNwfqMkiY.jpg?scale-down-to=512',
    'https://framerusercontent.com/images/KuIBzI0VbhnNU4FBscAHrIRO2DQ.jpg?scale-down-to=512',
    'https://framerusercontent.com/images/hn4bVCIy3rXGNQvvwT9Qi3YKiKU.jpg?scale-down-to=512'
  ],
  about: 'https://framerusercontent.com/images/QHwiFG8CdFS1wdIHWtWHvAuzLAM.jpg?scale-down-to=1024',
  specialty: 'https://framerusercontent.com/images/xOz91BrLMifZXksr8HqpgNMqqEc.jpg?scale-down-to=1024',
  projects: [
    'https://framerusercontent.com/images/zCsWlZqG20gmR0iYicyO9zoOg0.jpg?width=971',
    'https://framerusercontent.com/images/UDxttKeT0c9Ju6za1EBtNrrx9jU.jpg?width=971',
    'https://framerusercontent.com/images/4WtNsxV0y8qdMhrSAPWM99WmSpM.jpg?width=971',
    'https://framerusercontent.com/images/tpbW8SIi5ra8nVMEwdsyHi8dw.jpg?width=1000'
  ],
  blogs: [
    'https://framerusercontent.com/images/N1xmhoSfYxdo123jcROGRg29X4Y.png?width=1920&height=1080',
    'https://framerusercontent.com/images/HWCL65p2lHhL3yvqZXWEcJSnlKM.png?width=1920&height=1080',
    'https://framerusercontent.com/images/ZtJhBXlFAQMX7GllUSqLDHWqEYQ.png?width=1920&height=1080'
  ],
  logos: [
    'https://framerusercontent.com/images/HtNOvy5spiFjxciDATmaZhCH9U.svg?width=132',
    'https://framerusercontent.com/images/YuN93JWcWdSzH0odGho5bcZyHOg.svg?width=186',
    'https://framerusercontent.com/images/oOpuDU7egRCE7Z1D3eJKZYWJs50.svg?width=105',
    'https://framerusercontent.com/images/or0Wlg5UKFRZGfVPFnLR5bath6I.svg?width=163',
    'https://framerusercontent.com/images/qgI0hIf34aPuuJedXqVNVWx1gI.svg?width=171'
  ]
};

const caseStudies = [
  {
    client: '&Balanced',
    title: "How Wordsmith Web Design Transformed a Copywriter's Portfolio",
    image: 'https://framerusercontent.com/images/zCsWlZqG20gmR0iYicyO9zoOg0.jpg?width=971&height=971',
    metrics: [['80%', 'Increase in inquiries']]
  },
  {
    client: 'Acme Signs & Prints',
    title: "How Furry Friends Pet Grooming Elevated its Brand with Digital Marketing",
    image: 'https://framerusercontent.com/images/4WtNsxV0y8qdMhrSAPWM99WmSpM.jpg?width=971&height=971',
    metrics: [['60%', 'Online bookings surged'], ['25%', 'Increase in repeat business']]
  },
  {
    client: 'Acme Stamp',
    title: "How Stellar Scripts Elevated a Videographer's Portfolio Website",
    image: 'https://framerusercontent.com/images/UDxttKeT0c9Ju6za1EBtNrrx9jU.jpg?width=971&height=971',
    metrics: [['40%', 'Increase in website traffic'], ['70%', 'Target keywords ranked']]
  },
  {
    client: 'Ancient Lost Remedy',
    title: "How Furry Friends Pet Grooming Elevated its Brand with Digital Marketing",
    image: 'https://framerusercontent.com/images/4WtNsxV0y8qdMhrSAPWM99WmSpM.jpg?width=971&height=971',
    metrics: [['60%', 'Online bookings surged'], ['25%', 'Increase in repeat business']]
  }
];

const testimonials = [
  ['S. Power', 'BlueSky Ventures', "Working with Celestial Solutions has been a game-changer for our business. Their tailored strategies and deep expertise in digital marketing have propelled our brand to new heights. Their commitment to transparency and communication has made them a true partner in our success. We couldn't be happier with the results!"],
  ['Mark Chen', 'M.D. BrightStar Technologies', "Choosing Celestial Solutions was one of the best decisions we made for our company. Their innovative approach and dedication to understanding our unique needs resulted in a tailored marketing strategy that exceeded our expectations. Their team's unwavering support and consistent communication made the entire process seamless. We're thrilled with the outcome and look forward to continued success together."],
  ['Michael Johnson', 'CEO, Brightsun', 'Celestial Solutions has been instrumental in transforming our online presence. Their expertise across various digital marketing channels, coupled with their data-driven approach, has significantly boosted our visibility and engagement.'],
  ['Magnus Hawthorne', 'Owner, Bayleaf', 'The team brought clarity, speed, and measurable progress to our marketing work.'],
  ['Thaddeus Montgomery', 'Owner, GoldGarden', 'A reliable partner for campaigns, reporting, and creative growth.']
];

const pricingPlans = [
  ['Starter Plan', '83', ['Basic SEO Optimization', 'Social Media Management (2 Platforms)', 'Monthly Performance Reports', 'Email Support']],
  ['Growth Plan', '208', ['Comprehensive SEO Strategy', 'Social Media Management (3 Platforms)', 'Content Creation (2 Blog Posts/Month)', 'Monthly Analytics Review', 'Priority Email and Phone Support'], 'Best Value'],
  ['Pro Plan', '420', ['Advanced SEO Optimization and Strategy', 'Social Media Management (4 Platforms)', 'Content Creation (4 Blog Posts per Month)', 'Customized Marketing Campaigns', 'Quarterly Strategy Sessions', 'Dedicated Account Manager', '24/7 Priority Support']]
];

const blogPosts = [
  {
    date: 'Nov 15, 2025',
    category: 'Insights',
    title: 'How Can Businesses Compete with Big Brands in a Digital World?',
    image: 'https://framerusercontent.com/images/N1xmhoSfYxdo123jcROGRg29X4Y.png?width=1920&height=1080'
  },
  {
    date: 'Feb 7, 2024',
    category: 'Insights',
    title: 'The Ultimate Guide to Choosing the Right Digital Marketing Agency',
    image: 'https://framerusercontent.com/images/HWCL65p2lHhL3yvqZXWEcJSnlKM.png?width=1920&height=1080'
  },
  {
    date: 'Feb 7, 2024',
    category: 'Insights',
    title: 'Top eCommerce Web Design Tips',
    image: 'https://framerusercontent.com/images/ZtJhBXlFAQMX7GllUSqLDHWqEYQ.png?width=1920&height=1080'
  }
];

const faqs = [
  'How quickly will your team respond after I submit the contact form?',
  'Do I need to provide all details in the contact form?',
  'Can I schedule a call before starting the project?',
  'Do you offer support to clients outside India and the USA?',
  'What should I include if I’m reaching out for a website project?',
  'Can I contact you directly on WhatsApp instead of filling the form?',
  'How soon can you start working after we connect?',
  'Do you offer free consultations?'
];

module.exports = {
  services,
  navLinks,
  socials,
  framerImages,
  caseStudies,
  testimonials,
  pricingPlans,
  blogPosts,
  faqs
};
