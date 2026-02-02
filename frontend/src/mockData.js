// Reset Rituals - Complete Website Data

export const navigation = {
  logo: "Reset Rituals",
  menuItems: [
    { label: "Homepage", href: "#" },
    { label: "Solutions", href: "#solutions" },
    { label: "How it works", href: "#how-it-works" }
  ],
  cta: "Book a Ritual"
};

export const heroData = {
  headline: "12 Minutes to Reset Your Workplace",
  subheadline: "Combat burnout with science-backed micro-rituals. Designed for the modern hybrid team to restore focus, energy, and well-being.",
  primaryCTA: "Start Your Pilot",
  trustIndicators: [
    "No app download required",
    "Integrates with Outlook & Google"
  ]
};

export const problemData = {
  title: "The Modern Workplace Crisis",
  stats: [
    {
      icon: "flame",
      title: "Burnout Epidemic",
      stat: "76%",
      description: "of employees experience burnout",
      source: "Deloitte 2022"
    },
    {
      icon: "brain",
      title: "Multitasking Impact",
      stat: "40%",
      description: "productivity loss from task switching",
      source: "American Psychological Association (APA)"
    },
    {
      icon: "dollar-sign",
      title: "Economic Toll",
      stat: "$300B",
      description: "annual cost of workplace stress to US employers",
      source: "American Institute of Stress (AIS)"
    },
    {
      icon: "alert-triangle",
      title: "Global Recognition",
      stat: "WHO",
      description: "'Occupational Phenomenon' classification (2019)",
      source: "Legitimizing the crisis globally"
    }
  ],
  indiaStats: {
    title: "India's Workforce Health Toll",
    stats: [
      {
        stat: "80%",
        description: "report work stress (42% severe)",
        source: "ASSOCHAM 2024"
      },
      {
        stat: "1 in 5",
        description: "with anxiety/depression; 18% seek help",
        source: "NIMHANS 2025"
      },
      {
        stat: "60%",
        description: "sleep <6 hours/night",
        source: "Wakefit 2025"
      },
      {
        stat: "45%",
        description: "at diabetes/hypertension risk by 40",
        source: "ICMR 2024"
      },
      {
        stat: "3 in 4",
        description: "IT workers with musculoskeletal pain",
        source: "Apollo 2024"
      },
      {
        stat: "₹1L Cr",
        description: "lost to absenteeism",
        source: "Deloitte 2025"
      }
    ]
  },
  challenges: {
    overline: "Consolidated Research",
    title: "Key Workplace Wellness Challenges",
    citation: "Source: Consolidated Workplace Wellness Research 2024-2025",
    employeeBarriers: {
      title: "Employee Barriers",
      icon: "users",
      color: "blue",
      items: [
        {
          percentage: "37%",
          title: "LOW PARTICIPATION",
          description: "Participation is low despite availability. Most employees don't engage regularly."
        },
        {
          percentage: "40%",
          title: "TIME BARRIER",
          description: "Employees cite lack of time or availability as the biggest reason for not taking part."
        },
        {
          percentage: "80%",
          title: "PERSONALIZATION",
          description: "Employees believe initiatives should be personalized, not 'one-size-fits-all'."
        }
      ]
    },
    organizationalHurdles: {
      title: "Organizational Hurdles",
      icon: "building",
      color: "teal",
      items: [
        {
          icon: "settings",
          title: "OPERATIONAL COMPLEXITY",
          description: "Multiple vendors, tools, and formats make wellness difficult to manage and sustain for HR."
        },
        {
          icon: "pie-chart",
          title: "LACK OF MEASURABLE ROI",
          description: "HR is expected to justify spend without clear engagement or impact data."
        },
        {
          icon: "repeat",
          title: "SUSTAINING MOMENTUM",
          description: "One-time initiatives fail to build long-term habits or cultural change."
        }
      ]
    }
  }
};

export const solutionData = {
  title: "Introducing Reset Rituals",
  subtitle: "A day in the life with Reset Rituals",
  journeyMap: [
    {
      time: "9:00 AM",
      label: "Start Day",
      icon: "coffee",
      description: "Arrive at desk, morning energy",
      energyLevel: "medium",
      isReset: false
    },
    {
      time: "11:45 AM",
      label: "First Reset",
      icon: "activity",
      description: "12-min Posture Correction",
      energyLevel: "boosted",
      isReset: true,
      highlight: true
    },
    {
      time: "1:00 PM",
      label: "Post-Lunch",
      icon: "target",
      description: "Working focused",
      energyLevel: "high",
      isReset: false
    },
    {
      time: "3:30 PM",
      label: "Second Reset",
      icon: "wind",
      description: "12-min Breathwork",
      energyLevel: "recharged",
      isReset: true,
      highlight: true
    },
    {
      time: "5:00 PM",
      label: "End Day",
      icon: "smile",
      description: "Finishing energized",
      energyLevel: "high",
      isReset: false
    }
  ],
  energyCurve: {
    title: "Energy Throughout Your Day",
    points: [
      { time: "9:00", energy: 60, label: "Morning Start" },
      { time: "11:00", energy: 45, label: "Pre-Reset Dip" },
      { time: "11:45", energy: 85, label: "Reset Boost" },
      { time: "1:00", energy: 75, label: "Post-Lunch Focus" },
      { time: "3:00", energy: 40, label: "Afternoon Slump" },
      { time: "3:30", energy: 80, label: "Reset Recharge" },
      { time: "5:00", energy: 75, label: "Strong Finish" }
    ]
  },
  howItWorks: {
    title: "How It Works",
    subtitle: "12 minutes. That's all it takes.",
    trustSignals: ["Camera Optional", "No Prep", "Desk-Friendly"],
    statLine: "Join 500+ companies resetting daily",
    steps: [
      { 
        number: "1", 
        title: "Connect Your Calendar",
        description: "One-click integration with Google, Outlook, or Teams"
      },
      { 
        number: "2", 
        title: "Choose Your Rituals", 
        description: "Select from movement, breathwork, meditation, or energy sessions"
      },
      { 
        number: "3", 
        title: "Reset & Recharge",
        description: "Join live sessions or access on-demand—12 minutes that transform your day"
      }
    ],
    cta: {
      text: "Book a Demo",
      url: "https://brightbreaks.com/learn/"
    },
    testimonial: "The calendar integration is genius. No friction, no excuses—just consistent wellness.",
    testimonialAuthor: "Sarah M., Head of People"
  }
};

export const featuresData = {
  liveRituals: {
    title: "12-Minute Live Rituals",
    tagline: "No disruption. No prep. Just reset.",
    modules: [
      { icon: "user-check", title: "Posture Correction", description: "Desk-friendly stretches" },
      { icon: "wind", title: "Breathwork", description: "Calm your nervous system" },
      { icon: "activity", title: "Movement", description: "Energize your body" },
      { icon: "coffee", title: "Nutrition Modules", description: "Smart eating habits" },
      { icon: "heart", title: "Meditation", description: "Mental clarity & focus" },
      { icon: "smile", title: "Gratitude", description: "Positive mindset shifts" }
    ]
  },
  workshops: {
    title: "In-Office Workshops",
    subtitle: "Quarterly community-building experiences",
    items: [
      {
        title: "Yoga + Zumba",
        subtitle: "Wellness & Workplace Vibe",
        description: "Energetic sessions combining mindfulness and movement"
      },
      {
        title: "Yoga + Nutrition",
        subtitle: "Wellness & Nutrition Awareness",
        description: "Holistic approach to physical and dietary health"
      },
      {
        title: "Yoga + Social Wellness",
        subtitle: "Community Building",
        description: "Strengthen team bonds through shared wellness"
      }
    ]
  },
  powerOfBoth: {
    title: "The Power of Both",
    daily: {
      title: "Daily Digital Micro-Resets",
      description: "12-minute rituals throughout the week"
    },
    quarterly: {
      title: "Quarterly In-Person Activation",
      description: "Deep-dive workshops for team bonding"
    },
    synthesis: "Daily regulation + Quarterly activation = Sustained wellness"
  }
};

export const comparisonData = {
  title: "The Evolution of Workplace Wellness",
  subtitle: "From traditional programs to modern micro-rituals",
  metrics: [
    {
      category: "Time",
      standard: "60m Sessions",
      modern: "12m Micro-rituals",
      recommended: true
    },
    {
      category: "Flexibility",
      standard: "Fixed Schedule",
      modern: "Hybrid & On-Demand"
    },
    {
      category: "Access",
      standard: "Separate Portal",
      modern: "Calendar Integrated",
      recommended: true
    },
    {
      category: "Engagement",
      standard: "Passive Viewing",
      modern: "Active Movement"
    },
    {
      category: "Personalization",
      standard: "Standard Programs",
      modern: "Choice-Led Experience"
    },
    {
      category: "Frequency",
      standard: "Weekly Classes",
      modern: "Daily Habits + Quarterly Workshops"
    }
  ]
};

export const impactData = {
  hrDashboard: {
    title: "HR Dashboard",
    subtitle: "Wellness data — without invading privacy",
    kpis: [
      { title: "Participation & Repeat Usage", value: "87%", trend: "up" },
      { title: "Feedback & Energy Scores", value: "4.6/5", trend: "up" },
      { title: "Engagement by Team", value: "92%", trend: "stable" }
    ]
  },
  employeeImpact: {
    title: "Impact for Employees",
    heroStatement: "Immediate physical and mental shifts reported by participants after sessions.",
    benefits: [
      { 
        icon: "user-check", 
        title: "Reduced Stress & Stiffness", 
        description: "Physical release of tension in neck and shoulders.",
        color: "#10b981" // Calming green
      },
      { 
        icon: "zap", 
        title: "Better Focus & Energy", 
        description: "Mental clarity boost to overcome the afternoon slump.",
        color: "#f59e0b" // Energizing orange
      },
      { 
        icon: "brain", 
        title: "Mind-Body Awareness", 
        description: "Stronger connection to physical needs and signals.",
        color: "#8b5cf6" // Balanced purple
      },
      { 
        icon: "users", 
        title: "Sense of Shared Pause", 
        description: "Collective reset moment that normalizes rest at work.",
        color: "#ec4899" // Warm pink
      }
    ],
    testimonial: {
      quote: "I came back clearer in just 12 minutes.",
      author: "Product Manager, Tech Startup",
      rating: 5
    },
    ctas: [
      { label: "Experience Your Own Reset", type: "primary" },
      { label: "Bring Reset Rituals to Your Team", type: "secondary" }
    ]
  },
  organizationalBenefits: {
    title: "Organizational Benefits",
    benefits: [
      { icon: "trending-up", title: "Higher Participation & Adoption", description: "85%+ engagement vs 37% industry avg" },
      { icon: "pie-chart", title: "Measurable Engagement & ROI", description: "Real-time data dashboard" },
      { icon: "heart", title: "Stronger Culture & Connection", description: "Shared wellness moments" },
      { icon: "sliders", title: "Simpler Wellness Operations", description: "No vendor juggling" },
      { icon: "globe", title: "Supports Hybrid & Diverse Teams", description: "Works anywhere" },
      { icon: "award", title: "Visible Leadership & Care", description: "Show you prioritize wellbeing" }
    ]
  },
  roiQuote: "Every ₹1 invested in employee well-being saves ₹3–₹5 in healthcare and turnover costs.",
  roiSource: "FICCI Wellness Report 2025"
};

export const finalCTAData = {
  thoughtLine: "What if the best performance metric wasn't output, but how recharged your team feels at day's end?",
  title: "Ready to embed 12-minute resets into your workday?",
  buttons: [
    { label: "Schedule a Pilot", primary: true },
    { label: "Contact Us", primary: false },
    { label: "Download Brochure", primary: false }
  ],
  contact: {
    email: "hello@resetrituals.com",
    phone: "+91 98765 43210",
    linkedin: "linkedin.com/company/reset-rituals"
  }
};

export const footerData = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Methodology", href: "#methodology" },
    { label: "Resources", href: "#resources" },
    { label: "Blog", href: "#blog" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms", href: "#terms" }
  ]
};

export const contactFormFields = [
  { name: "name", label: "Full Name", type: "text", required: true },
  { name: "email", label: "Work Email", type: "email", required: true },
  { name: "company", label: "Company Name", type: "text", required: true },
  { name: "employees", label: "Team Size", type: "select", required: true, options: ["50-100", "100-500", "500-1000", "1000+"] },
  { name: "phone", label: "Phone Number", type: "tel", required: false },
  { name: "message", label: "Tell us about your wellness goals", type: "textarea", required: false }
];
