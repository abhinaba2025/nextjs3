export interface MagazineArticle {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  coverImage: string;
  images: string[];
  category: string;
  issue: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

export const magazineArticles: MagazineArticle[] = [
  {
    id: 1,
    slug: 'future-of-sustainable-fashion',
    title: 'The Future of Sustainable Fashion',
    subtitle: 'How eco-conscious brands are reshaping the industry',
    excerpt: 'An in-depth look at how the fashion industry is transforming to meet environmental challenges and consumer demands for sustainability.',
    content: `
      <p class="lead">The fashion industry stands at a crossroads. With growing awareness of its environmental impact, brands are reimagining everything from materials to manufacturing processes.</p>
      
      <h2>The Environmental Wake-Up Call</h2>
      <p>Fashion is one of the world's most polluting industries, responsible for 10% of global carbon emissions and massive water consumption. But change is happening—fast.</p>
      
      <blockquote>"We're seeing a fundamental shift in how fashion thinks about its relationship with the planet. It's no longer optional—it's essential for survival." — Anna Wintour, Vogue Editor-in-Chief</blockquote>
      
      <h2>Revolutionary Materials</h2>
      <p>Innovation labs around the world are developing alternatives to traditional fabrics. Mushroom leather, algae-based textiles, and recycled ocean plastics are moving from concept to commercial reality.</p>
      
      <p>Stella McCartney has pioneered the use of Mylo, a mushroom-based leather alternative. "It feels just like leather but with a fraction of the environmental footprint," says McCartney. "This is the future."</p>
      
      <h2>Circular Fashion</h2>
      <p>The traditional linear model—make, use, dispose—is giving way to circular approaches. Brands like Patagonia, Eileen Fisher, and H&M are implementing take-back programs, repair services, and resale platforms.</p>
      
      <p>Rent-the-Runway and similar platforms are changing how consumers think about ownership. Why buy a dress you'll wear once when you can rent it?</p>
      
      <h2>Transparency and Traceability</h2>
      <p>Blockchain technology is enabling unprecedented supply chain transparency. Consumers can now trace a garment's journey from raw material to finished product, ensuring ethical practices at every step.</p>
      
      <h2>The Role of Technology</h2>
      <p>3D printing, AI-powered design, and virtual fitting rooms are reducing waste by enabling made-to-order production and eliminating returns from poor fit.</p>
      
      <h2>What Consumers Can Do</h2>
      <p>Every purchase is a vote. By choosing sustainable brands, buying secondhand, caring for clothes properly, and demanding transparency, consumers are driving industry change.</p>
      
      <h2>Looking Ahead</h2>
      <p>The fashion industry of 2030 will look dramatically different. Sustainability won't be a marketing angle—it will be the baseline expectation. The brands that adapt will thrive; those that don't will disappear.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=900&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop'
    ],
    category: 'Fashion',
    issue: 'January 2026',
    author: {
      name: 'Isabella Romano',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
      role: 'Fashion Director'
    },
    date: '2026-01-20',
    readTime: '15 min read',
    tags: ['Fashion', 'Sustainability', 'Environment', 'Innovation'],
    featured: true
  },
  {
    id: 2,
    slug: 'ai-revolution-everyday-life',
    title: 'The AI Revolution in Everyday Life',
    subtitle: 'How artificial intelligence is quietly transforming our daily routines',
    excerpt: 'From smart assistants to personalized recommendations, AI has become an invisible yet integral part of modern life.',
    content: `
      <p class="lead">You may not realize it, but you probably interact with artificial intelligence dozens of times a day. This technology, once the realm of science fiction, has become seamlessly woven into our daily routines.</p>
      
      <h2>Morning Routine, Powered by AI</h2>
      <p>Your day starts with AI before you even get out of bed. Your smartphone's alarm learned your sleep patterns to wake you at the optimal moment. The thermostat has already adjusted to your preferred temperature based on your schedule.</p>
      
      <blockquote>"AI's greatest achievement isn't its complexity—it's its invisibility. The best AI makes life better without demanding attention." — Sundar Pichai, Google CEO</blockquote>
      
      <h2>The Personalization Engine</h2>
      <p>Every scroll through Netflix, Spotify, or Amazon is curated by AI algorithms analyzing your preferences. These systems process billions of data points to predict what you'll want before you know you want it.</p>
      
      <p>Netflix estimates its recommendation system saves the company $1 billion annually by keeping subscribers engaged. But more importantly, it's changed how we discover content.</p>
      
      <h2>Healthcare Transformation</h2>
      <p>AI is revolutionizing medicine, from diagnosing diseases to developing new drugs. Machine learning models can detect certain cancers with accuracy exceeding human doctors.</p>
      
      <p>Wearable devices continuously monitor our health, alerting us to potential issues before they become serious. Your Apple Watch might save your life one day.</p>
      
      <h2>The Workplace Evolution</h2>
      <p>AI assistants schedule meetings, summarize documents, and automate repetitive tasks. Creative professionals use AI to generate ideas, edit content, and accelerate their workflows.</p>
      
      <p>Rather than replacing workers, AI is augmenting human capabilities, allowing us to focus on higher-value, creative work.</p>
      
      <h2>Transportation and Mobility</h2>
      <p>GPS navigation uses AI to predict traffic and optimize routes. Ride-sharing apps match drivers with passengers efficiently. Self-driving cars are moving from testing to reality.</p>
      
      <h2>Privacy and Ethical Considerations</h2>
      <p>With great power comes great responsibility. AI's reliance on data raises important questions about privacy, bias, and accountability that society must address.</p>
      
      <h2>The Future Is Now</h2>
      <p>We're still in the early days of the AI revolution. The technology will only become more sophisticated, more integrated, and more essential to our lives.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop'
    ],
    category: 'Technology',
    issue: 'January 2026',
    author: {
      name: 'Marcus Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      role: 'Technology Editor'
    },
    date: '2026-01-18',
    readTime: '12 min read',
    tags: ['Technology', 'AI', 'Innovation', 'Future'],
    featured: true
  },
  {
    id: 3,
    slug: 'architecture-of-tomorrow',
    title: 'The Architecture of Tomorrow',
    subtitle: 'Visionary buildings that are redefining urban landscapes',
    excerpt: 'Explore the cutting-edge architectural projects that blend sustainability, technology, and bold aesthetics.',
    content: `
      <p class="lead">Architecture has always reflected humanity's aspirations. Today's most innovative buildings are reaching for the sky while rooting themselves in sustainability and community.</p>
      
      <h2>Vertical Forests</h2>
      <p>Milan's Bosco Verticale pioneered the concept of buildings as living ecosystems. These residential towers host 900 trees, 5,000 shrubs, and 11,000 plants, absorbing CO2 and producing oxygen.</p>
      
      <blockquote>"A building should be a machine for living, yes—but also a living machine." — Stefano Boeri, Architect</blockquote>
      
      <h2>Net-Zero and Beyond</h2>
      <p>The Edge in Amsterdam is often called the world's greenest office building. Solar panels generate more energy than the building uses, and smart systems optimize everything from lighting to parking.</p>
      
      <p>Buildings are evolving from energy consumers to energy producers, becoming positive contributors to the grid.</p>
      
      <h2>Biomimicry in Design</h2>
      <p>Nature has solved many problems that architects face. The Eastgate Centre in Zimbabwe mimics termite mounds for natural ventilation, using 90% less energy than conventional buildings.</p>
      
      <h2>Adaptive and Responsive</h2>
      <p>Buildings are becoming dynamic, responding to weather, occupancy, and energy availability in real-time. Façades that adjust to sunlight, walls that shift configurations—architecture is coming alive.</p>
      
      <h2>Community-Centered Design</h2>
      <p>The best new buildings prioritize human experience. Courtyards, gardens, gathering spaces, and connections to nature are no longer afterthoughts but central design elements.</p>
      
      <h2>Material Innovation</h2>
      <p>Mass timber is enabling tall wooden buildings that sequester carbon. Self-healing concrete, transparent solar panels, and recycled materials are transforming what's possible.</p>
      
      <h2>The Cities of 2050</h2>
      <p>Tomorrow's cities will be greener, smarter, and more human-centered. The buildings going up today are prototypes for this future—and they're already proving what's possible.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=900&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop'
    ],
    category: 'Design',
    issue: 'January 2026',
    author: {
      name: 'Sophie Nakamura',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
      role: 'Architecture Correspondent'
    },
    date: '2026-01-15',
    readTime: '14 min read',
    tags: ['Architecture', 'Design', 'Sustainability', 'Urban'],
    featured: false
  },
  {
    id: 4,
    slug: 'wellness-revolution-2026',
    title: 'The Wellness Revolution of 2026',
    subtitle: 'From biohacking to mindfulness, the new frontiers of personal health',
    excerpt: 'Explore the cutting-edge wellness trends that are helping people optimize their physical and mental health.',
    content: `
      <p class="lead">Wellness has evolved far beyond gym memberships and green smoothies. Today's health-conscious consumers are embracing a holistic approach that encompasses body, mind, and spirit.</p>
      
      <h2>The Rise of Biohacking</h2>
      <p>Biohackers are using data, technology, and self-experimentation to optimize their biology. From continuous glucose monitors to cold plunges, people are taking control of their health metrics.</p>
      
      <blockquote>"Your body is the most sophisticated technology you own. Learn to read its signals and optimize its performance." — Dave Asprey, Biohacker</blockquote>
      
      <h2>Sleep as a Priority</h2>
      <p>Sleep is no longer something to sacrifice for productivity—it's recognized as the foundation of health. Sleep tracking, optimized environments, and circadian rhythm management are mainstream.</p>
      
      <p>High-profile executives now brag about their eight hours of sleep rather than their five.</p>
      
      <h2>Mental Health Takes Center Stage</h2>
      <p>The stigma around mental health has diminished dramatically. Therapy apps, meditation programs, and corporate mental health benefits are now normal expectations.</p>
      
      <h2>Movement Over Exercise</h2>
      <p>The focus is shifting from intense gym sessions to consistent daily movement. Walking meetings, standing desks, and movement snacks throughout the day are replacing the "workout or nothing" mentality.</p>
      
      <h2>Nutrition Gets Personal</h2>
      <p>One-size-fits-all diets are giving way to personalized nutrition based on genetics, microbiome analysis, and individual response data. What works for you may not work for someone else.</p>
      
      <h2>Nature as Medicine</h2>
      <p>Forest bathing, outdoor exercise, and nature exposure are being prescribed by doctors. Research confirms what we intuitively knew: nature heals.</p>
      
      <h2>Community and Connection</h2>
      <p>Loneliness is recognized as a health crisis. Wellness now includes nurturing relationships, participating in community, and finding belonging.</p>
      
      <h2>The Future of Wellness</h2>
      <p>Wellness is becoming increasingly personalized, data-driven, and holistic. The goal isn't just absence of disease—it's optimal flourishing.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&h=900&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop'
    ],
    category: 'Wellness',
    issue: 'January 2026',
    author: {
      name: 'Dr. Elena Vasquez',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop',
      role: 'Wellness Editor'
    },
    date: '2026-01-12',
    readTime: '11 min read',
    tags: ['Wellness', 'Health', 'Mindfulness', 'Lifestyle'],
    featured: true
  },
  {
    id: 5,
    slug: 'rise-of-remote-work-culture',
    title: 'The Rise of Remote Work Culture',
    subtitle: 'How distributed teams are redefining the modern workplace',
    excerpt: 'Remote work has evolved from a pandemic necessity to a permanent shift in how companies operate and employees live.',
    content: `
      <p class="lead">The office as we knew it is over. Remote and hybrid work have become permanent fixtures of the professional landscape, reshaping cities, careers, and lives.</p>
      
      <h2>The Great Untethering</h2>
      <p>Millions of workers discovered during the pandemic that they could be just as productive—or more so—working from home. Many are refusing to return to traditional offices.</p>
      
      <blockquote>"Remote work isn't the future of work. It's the present. Companies that don't adapt will lose the talent war." — Darren Murph, GitLab</blockquote>
      
      <h2>The Hybrid Compromise</h2>
      <p>Many organizations are settling on hybrid models—some days in office, some at home. But getting this balance right is proving challenging, with coordination and culture concerns.</p>
      
      <h2>Digital Nomads Go Mainstream</h2>
      <p>Working from anywhere has enabled a new lifestyle. Digital nomads work from beaches, mountains, and cities around the world, untethered from any single location.</p>
      
      <h2>The Tools That Enable It</h2>
      <p>Zoom, Slack, Notion, Figma—a new generation of collaborative tools has made distributed work seamless. Virtual whiteboarding, async communication, and cloud everything have become standard.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>Isolation, burnout, and communication gaps are real challenges. Successful remote companies are intentional about culture, connection, and boundaries.</p>
      
      <h2>Impact on Real Estate</h2>
      <p>As workers leave expensive cities, smaller towns are booming. Commercial real estate is being reimagined, with offices becoming collaboration hubs rather than daily destinations.</p>
      
      <h2>The Future Workspace</h2>
      <p>The future is flexible. Workers will choose where and when they work based on the task at hand. The best talent will go to companies that offer this freedom.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=900&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&h=600&fit=crop'
    ],
    category: 'Business',
    issue: 'December 2023',
    author: {
      name: 'James Morrison',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      role: 'Business Editor'
    },
    date: '2026-01-08',
    readTime: '10 min read',
    tags: ['Business', 'Remote Work', 'Future', 'Technology'],
    featured: false
  },
  {
    id: 6,
    slug: 'culinary-travel-world-flavors',
    title: 'Culinary Travel: A Journey Through World Flavors',
    subtitle: 'Exploring destinations through their iconic dishes and food cultures',
    excerpt: 'Food is the ultimate cultural connector. Join us on a gastronomic journey across continents.',
    content: `
      <p class="lead">Every destination tells its story through food. The spices, techniques, and traditions on a plate reveal centuries of history, geography, and culture.</p>
      
      <h2>Japan: The Art of Simplicity</h2>
      <p>Japanese cuisine is about respect—for ingredients, seasons, and presentation. From the precision of sushi to the comfort of ramen, every dish reflects a philosophy of harmony.</p>
      
      <blockquote>"In Japan, cooking is not just about feeding people. It's a form of meditation, an expression of gratitude for nature's gifts." — Jiro Ono, Master Sushi Chef</blockquote>
      
      <h2>Italy: The Soul of Family</h2>
      <p>Italian food is inseparable from family. Recipes passed through generations, Sunday dinners lasting hours, and the fundamental belief that food is love made tangible.</p>
      
      <h2>Mexico: Bold and Ancient</h2>
      <p>Mexican cuisine is a UNESCO-recognized cultural treasure. Complex moles, fresh salsas, and centuries-old techniques create one of the world's most diverse and vibrant food cultures.</p>
      
      <h2>India: A Symphony of Spices</h2>
      <p>Indian cuisine is a kaleidoscope of flavors, with each region offering distinct traditions. From the creamy curries of the north to the coconut-rich dishes of the south, it's a lifetime of exploration.</p>
      
      <h2>France: The Art of Technique</h2>
      <p>French cuisine established the foundations of Western cooking. Buttery sauces, delicate pastries, and the concept of terroir—the taste of place—continue to influence chefs worldwide.</p>
      
      <h2>Thailand: Balance in Every Bite</h2>
      <p>Thai food masters the balance of sweet, sour, salty, and spicy. Street food culture here is among the world's best, with incredible flavors available on every corner.</p>
      
      <h2>Travel Through Your Palate</h2>
      <p>You don't need a passport to explore these cuisines. Seek out authentic restaurants, cook traditional recipes, and let food be your guide to understanding the world.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=900&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop'
    ],
    category: 'Travel',
    issue: 'December 2023',
    author: {
      name: 'Maria Santos',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      role: 'Food & Travel Writer'
    },
    date: '2026-01-05',
    readTime: '13 min read',
    tags: ['Travel', 'Food', 'Culture', 'Culinary'],
    featured: false
  },
  {
    id: 7,
    slug: 'evolution-of-street-style',
    title: 'The Evolution of Street Style',
    subtitle: 'From subculture to mainstream fashion influence',
    excerpt: 'How street fashion went from underground rebellion to the most influential force in contemporary style.',
    content: `
      <p class="lead">Street style has completed one of fashion's most remarkable journeys—from outsider rebellion to industry trendsetter. Today, the streets inspire the runways, not the other way around.</p>
      
      <h2>Origins in Subculture</h2>
      <p>Street style emerged from communities ignored by mainstream fashion. Hip-hop in the Bronx, punk in London, skate culture in California—each created its own aesthetic as an expression of identity.</p>
      
      <blockquote>"We didn't dress to follow trends. We dressed to be ourselves. Fashion houses eventually realized our style had something they couldn't manufacture." — Dapper Dan</blockquote>
      
      <h2>The Japanese Influence</h2>
      <p>Tokyo's Harajuku district became a global street style mecca. Japanese youth combined influences from around the world with local sensibilities, creating looks that captured imaginations globally.</p>
      
      <h2>Hip-Hop's Fashion Revolution</h2>
      <p>From Run-DMC's Adidas to Pharrell's collaborations, hip-hop transformed from a music genre to a fashion powerhouse. Luxury brands now compete for rapper endorsements.</p>
      
      <h2>The Sneaker Phenomenon</h2>
      <p>Sneakers evolved from athletic equipment to coveted collector's items. Limited releases sell out instantly and resell for multiples of retail. Sneaker culture is now a billion-dollar industry.</p>
      
      <h2>Instagram and Democratization</h2>
      <p>Social media removed fashion's gatekeepers. Anyone with style and a smartphone could become an influencer. Street style photographers became celebrities themselves.</p>
      
      <h2>Luxury Meets Street</h2>
      <p>The appointment of Virgil Abloh at Louis Vuitton symbolized street style's ultimate victory. High fashion now regularly incorporates streetwear elements, from hoodies to sneakers.</p>
      
      <h2>What's Next?</h2>
      <p>As street style becomes mainstream, new subcultures are emerging. The cycle continues—rebellion, adoption, absorption, and new rebellion.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&h=900&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&h=600&fit=crop'
    ],
    category: 'Fashion',
    issue: 'December 2023',
    author: {
      name: 'Tyler Jackson',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
      role: 'Street Style Editor'
    },
    date: '2026-01-02',
    readTime: '12 min read',
    tags: ['Fashion', 'Street Style', 'Culture', 'Trends'],
    featured: false
  },
  {
    id: 8,
    slug: 'art-of-interior-design',
    title: 'The Art of Interior Design',
    subtitle: 'Creating spaces that inspire and nurture',
    excerpt: 'Interior design is about more than aesthetics—it\'s about crafting environments that enhance how we live, work, and feel.',
    content: `
      <p class="lead">Our spaces shape us as much as we shape them. Great interior design doesn't just look beautiful—it creates environments where people thrive.</p>
      
      <h2>Beyond Decoration</h2>
      <p>Interior design is often confused with decoration, but it goes much deeper. It considers flow, function, psychology, and how spaces make people feel at a fundamental level.</p>
      
      <blockquote>"Design is not just what it looks like and feels like. Design is how it works." — Steve Jobs</blockquote>
      
      <h2>The Psychology of Space</h2>
      <p>Colors affect mood. Ceiling height influences thinking. Natural light impacts well-being. Great designers understand these psychological principles and apply them intentionally.</p>
      
      <h2>Biophilic Design</h2>
      <p>Humans have an innate need to connect with nature. Incorporating plants, natural materials, water features, and views of nature reduces stress and improves cognitive function.</p>
      
      <h2>The Minimalism Movement</h2>
      <p>Less is more in contemporary design. Clean lines, uncluttered spaces, and thoughtful reduction create calm environments that allow the mind to rest.</p>
      
      <h2>Maximalism's Return</h2>
      <p>But for some, more is more. Bold colors, mixed patterns, and collections of meaningful objects create spaces rich with personality and story.</p>
      
      <h2>Sustainable Interiors</h2>
      <p>Conscious designers source vintage and antique pieces, use sustainable materials, and create spaces designed to last rather than follow fleeting trends.</p>
      
      <h2>Designing for Wellness</h2>
      <p>Modern interiors consider air quality, acoustics, lighting, and ergonomics. The spaces where we spend most of our time should actively contribute to our health.</p>
      
      <h2>Your Space, Your Story</h2>
      <p>The best interiors reflect the people who live in them. Collect what you love, arrange it thoughtfully, and create a space that tells your unique story.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&h=900&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
    ],
    category: 'Design',
    issue: 'November 2023',
    author: {
      name: 'Olivia Anderson',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop',
      role: 'Design Director'
    },
    date: '2023-12-28',
    readTime: '10 min read',
    tags: ['Design', 'Interior', 'Home', 'Lifestyle'],
    featured: false
  }
];

export const magazineCategories = [
  'All',
  'Fashion',
  'Technology',
  'Design',
  'Wellness',
  'Business',
  'Travel'
];
