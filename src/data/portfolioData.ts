import { Project, SkillItem, TimelineItem, ToolItem } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'fashion-campaign',
    number: '01',
    title: 'AURA COUTURE',
    subtitle: 'Editorial Fashion Campaign & Lookbook',
    category: 'Digital Campaign',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'wide',
    accentColor: '#F4B63E',
    role: 'Creative Direction × Social Media Strategist',
    tools: ['Adobe Photoshop', 'Figma', 'Lightroom', 'CapCut'],
    client: 'Aura Studio Paris',
    objective: 'Launch the autumn capsule collection to high-intent Gen-Z luxury buyers with zero initial organic ad spend, driving pre-orders via visual storytelling.',
    creativeApproach: 'Created a high-contrast editorial campaign blending stark black-and-white film textures with warm solarized highlights, pairing short-form video vignettes with typographic poster carousels.',
    marketingApproach: 'Engineered a 3-phase teaser release: "The Tease" (macro texture reels), "The Reveal" (lookbook carousel with interactive poll stickers), and "The Drop" (exclusive DM signup link).',
    finalOutput: '18 high-resolution social assets, 4 TikTok/Reels micro-films, digital lookbook PDF, and email launch blast graphics.',
    results: '+140% spike in organic reach, 4,200+ direct lookbook downloads, and collection sold out in 72 hours.',
    galleryImages: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'social-media-design',
    number: '02',
    title: 'MODERN PULSE',
    subtitle: 'High-Retention Social Creatives',
    category: 'Social Media',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'vertical',
    role: 'Social Media Designer & Content Strategist',
    tools: ['Canva Pro', 'Adobe Illustrator', 'Photoshop'],
    client: 'Pulse Lifestyle Media',
    objective: 'Transform flat static Instagram feeds into scroll-stopping editorial carousels that double save rates and drive profile visits.',
    creativeApproach: 'Utilized bold neo-grotesque typography, seamless panorama swipe layouts, and high-contrast editorial photography with purposeful callouts.',
    marketingApproach: 'Designed every slide to answer one specific micro-question, ending with a high-conversion save trigger ("Bookmark this prompt").',
    finalOutput: 'Monthly system of 24 reusable carousel templates, 15 story templates, and animated highlight covers.',
    results: '+320% increase in carousel saves, 45k profile visits generated within 30 days.',
    galleryImages: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'brand-identity',
    number: '03',
    title: 'SOLARIS BOTANICALS',
    subtitle: 'Luxury Identity & Sustainable Packaging',
    category: 'Branding',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'square',
    accentColor: '#F4B63E',
    role: 'Brand Identity Designer',
    tools: ['Adobe Illustrator', 'Figma', 'Photoshop', 'Blender'],
    client: 'Solaris Skincare Co.',
    objective: 'Establish a distinctive, organic luxury brand identity for a premium botanical skincare startup positioned for international retail expansion.',
    creativeApproach: 'Created a minimal typographic wordmark paired with earth-tone palettes, bespoke sunburst icon stamps, and embossed warm-gold tactile packaging.',
    marketingApproach: 'Conducted competitor positioning analysis to identify white space between clinical dermatological brands and bohemian organic lines.',
    finalOutput: 'Complete brand guide (60 pages), packaging system for 5 SKUs, typography pairing guidelines, and social identity kit.',
    results: 'Secured placement in 12 boutique concept stores across Mumbai & Dubai.',
    galleryImages: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'video-editing',
    number: '04',
    title: 'CINEMATIC HORIZONS',
    subtitle: 'Viral Reels & Short-Form Video Marketing',
    category: 'Video Marketing',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'vertical',
    role: 'Video Editor & Motion Designer',
    tools: ['CapCut Pro', 'Premiere Pro', 'After Effects'],
    client: 'Velvet Studios',
    objective: 'Re-edit raw campaign footage into rhythmic, audio-synced 9:16 short-form video ads optimized for TikTok and Instagram Reels algorithms.',
    creativeApproach: 'Incorporated vintage VHS motion textures, quick jump cuts matched to trending beats, dynamic kinetic subtitles, and editorial flash transitions.',
    marketingApproach: 'Built a 3-second hook structure with bold opening text overlay to reduce initial scroll-away drop-off to under 18%.',
    finalOutput: 'Suite of 12 high-impact 9:16 video ads with varying hooks and CTA variations for A/B split testing.',
    results: 'Over 850,000 total organic views, 18,400+ shares, and 4.2x ROAS on paid test flights.',
    galleryImages: [
      'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'content-strategy',
    number: '05',
    title: 'ARCHITECTURAL LINES',
    subtitle: 'Visual Content Strategy & Brand Storytelling',
    category: 'Content Strategy',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'wide',
    role: 'Content Strategist & Visual Designer',
    tools: ['Figma', 'Canva', 'Notion', 'Google Analytics'],
    client: 'Atelier K Architects',
    objective: 'Bridge the gap between sterile technical blueprint showcases and consumer-accessible luxury architectural storytelling.',
    creativeApproach: 'Framed structural concrete and glass geometry like museum art pieces, weaving narrative captions about light, shadows, and human living.',
    marketingApproach: 'Created content pillars focusing 40% on design philosophy, 40% on finished projects, and 20% on behind-the-scenes material exploration.',
    finalOutput: 'Quarterly content calendar, 48 custom social posts, architectural print portfolio, and web hero graphics.',
    results: 'Doubled inbound consultation inquiries from luxury villa owners within two quarters.',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'digital-campaign-palm',
    number: '06',
    title: 'SUMMER ARCHIVES',
    subtitle: 'Omnichannel Digital Creative Direction',
    category: 'Digital Campaign',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'arch',
    accentColor: '#F4B63E',
    role: 'Lead Visual Designer',
    tools: ['Photoshop', 'Meta Ads Manager', 'Illustrator', 'CapCut'],
    client: 'Soleil Resort Wear',
    objective: 'Generate pre-summer buzz and direct-to-consumer sales for an eco-conscious vacation lifestyle line.',
    creativeApproach: 'Monochrome and sun-drenched amber imagery with playful palm fronds, minimalist sans typography, and bold discount callouts that felt editorial rather than transactional.',
    marketingApproach: 'Targeted lookalike audiences of conscious luxury shoppers with dynamic product carousel ads and retargeting story cards.',
    finalOutput: '30+ ad creatives across Facebook, Instagram, Pinterest, and promotional newsletter headers.',
    results: '+210% ROAS improvement compared to previous agency benchmarks.',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1538329972958-465d6d2144ed?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const SKILLS: SkillItem[] = [
  {
    number: '01',
    title: 'GRAPHIC DESIGN',
    description: 'Bespoke editorial layouts, magazine-grade typography, poster art, and print & digital visual systems crafted with millimeter precision.',
    deliverables: ['Editorial Typography', 'Posters & Lookbooks', 'Vector Illustration', 'Print & Digital Assets'],
    tools: ['Adobe Photoshop', 'Illustrator', 'Figma'],
    previewImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80'
  },
  {
    number: '02',
    title: 'SOCIAL MEDIA CREATIVES',
    description: 'Scroll-stopping Instagram carousels, Pinterest pins, and story frameworks engineered to maximize algorithmic watch time and saves.',
    deliverables: ['Seamless Carousels', 'Story Systems', 'Grid Art Direction', 'Engagement Hooks'],
    tools: ['Canva Pro', 'Figma', 'Photoshop'],
    previewImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  },
  {
    number: '03',
    title: 'BRANDING & IDENTITY',
    description: 'Distinctive brand identities, logos, color theory, iconography, and comprehensive style guides that carve an unmistakable presence.',
    deliverables: ['Brand Guidelines', 'Logo Design', 'Packaging Concepts', 'Visual Identity Systems'],
    tools: ['Illustrator', 'Figma', 'Photoshop'],
    previewImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80'
  },
  {
    number: '04',
    title: 'CONTENT CREATION',
    description: 'Conceptualizing, scripting, and executing creative brand storytelling that speaks directly to Gen-Z and modern aesthetic consumers.',
    deliverables: ['Content Pillars', 'Aesthetic Moodboards', 'Narrative Copywriting', 'Creative Assets'],
    tools: ['Notion', 'Figma', 'Canva'],
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
  },
  {
    number: '05',
    title: 'VIDEO EDITING',
    description: 'Fast-paced, rhythm-synced video editing for short-form platforms featuring dynamic kinetic typography and audio transitions.',
    deliverables: ['Reels & TikTok Cuts', 'Audio Syncing', 'Color Grading', 'Sound Design'],
    tools: ['CapCut Pro', 'Premiere Pro', 'After Effects'],
    previewImage: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=600&q=80'
  },
  {
    number: '06',
    title: 'VIDEO MARKETING',
    description: 'Strategic video funnels that convert viewers into followers and buyers using 3-second hooks, retention loops, and clear CTAs.',
    deliverables: ['Hook Generation', 'Ad Variations', 'Trend Adaptation', 'Retention Analytics'],
    tools: ['Meta Ads Manager', 'TikTok Creative Studio', 'CapCut'],
    previewImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80'
  },
  {
    number: '07',
    title: 'DIGITAL MARKETING',
    description: 'Data-informed campaign strategy connecting visual design with real business goals, conversion funnels, and performance marketing.',
    deliverables: ['Audience Segmentation', 'Ad Creative Testing', 'Campaign Setup', 'Performance Reports'],
    tools: ['Google Analytics', 'Meta Ads', 'SEO Tools'],
    previewImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
  },
  {
    number: '08',
    title: 'CREATIVE STRATEGY',
    description: 'Bridging the divide between artistic ambition and commercial KPIs so every visual output moves the needle for brand growth.',
    deliverables: ['Competitor Audits', 'Creative Positioning', 'Launch Roadmaps', 'Brand DNA Decks'],
    tools: ['Figma', 'Miro', 'Notion'],
    previewImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    number: '01',
    year: '2026',
    title: 'DIGITAL MARKETING MASTERY',
    organization: 'Skill Circle',
    location: 'India',
    description: 'Intensive digital marketing specialization covering performance marketing, meta campaigns, SEO, Google analytics, and conversion funnels.',
    tag: 'Certification & Applied Strategy'
  },
  {
    number: '02',
    year: '2026',
    title: 'CREATIVE DESIGN & VISUAL CONTENT',
    organization: 'Freelance & Studio Projects',
    location: 'Remote / Global',
    description: 'Art directing social campaigns, high-fashion brand assets, video edits, and identity systems for independent brands and creators.',
    tag: 'Client Practice'
  },
  {
    number: '03',
    year: '2025–2026',
    title: 'COMMERCE & APPLIED MATHEMATICS',
    organization: 'Class XII Senior Secondary',
    location: 'India',
    description: 'Rigorous foundation in financial principles, quantitative logic, consumer behavior models, and statistical analysis.',
    tag: 'Academic Foundation'
  },
  {
    number: '04',
    year: '2024–2025',
    title: 'VISUAL ARTS & DIGITAL MEDIA EXPLORATION',
    organization: 'Self-Directed Studio Lab',
    location: 'Digital',
    description: 'Exploration of editorial magazine aesthetics, typography hierarchy, video pacing, and modern Gen-Z visual culture.',
    tag: 'Creative Foundations'
  }
];

export const TOOLS: ToolItem[] = [
  { name: 'Canva Pro', category: 'Design', level: 'Expert', description: 'Rapid template systems & high-retention carousels' },
  { name: 'Adobe Photoshop', category: 'Design', level: 'Advanced', description: 'Editorial photo manipulation & texture design' },
  { name: 'Adobe Illustrator', category: 'Design', level: 'Advanced', description: 'Bespoke vector marks, typography & icons' },
  { name: 'Figma', category: 'Design', level: 'Advanced', description: 'UI mockups, moodboards & social design systems' },
  { name: 'CapCut Pro', category: 'Video & Motion', level: 'Advanced', description: 'Short-form kinetic editing, effects & audio sync' },
  { name: 'Premiere Pro', category: 'Video & Motion', level: 'Proficient', description: 'Color grading & multi-cam editorial cuts' },
  { name: 'Meta Ads Manager', category: 'Marketing & Analytics', level: 'Advanced', description: 'Audience testing, budget pacing & ROAS tracking' },
  { name: 'Google Analytics 4', category: 'Marketing & Analytics', level: 'Proficient', description: 'Traffic attribution, engagement & event tracking' },
  { name: 'SEO Tools', category: 'Marketing & Analytics', level: 'Proficient', description: 'Keyword research, meta optimization & ranking audits' },
  { name: 'AI Creative Tools', category: 'AI & Strategy', level: 'Advanced', description: 'Concept generation, prompt engineering & asset enhancement' }
];
