export const siteConfig = {
  name: "Storia",
  tagline: "Author your own story.",
  description:
    "Your daily rhythm for clarity, confidence, and growth. A 5-minute journaling ritual guided by Sunny.",
  url: "https://storia.app",
  appStoreUrl:
    "https://apps.apple.com/us/app/storia-future-self-coach/id6455785300",
  privacyUrl: "/privacy",
  termsUrl: "/terms",
  social: {
    instagram:
      "https://www.instagram.com/storia_world?igsh=MXJxN3JkNGoxYW1ieg==",
    tiktok: "https://www.tiktok.com/@storiaworld",
    linkedin: "https://uk.linkedin.com/company/storiaworld",
  },
};

export const navLinks = [
  { href: "/#about-the-app", label: "How it works" },
  { href: "/#features", label: "Experience" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#founder", label: "Founder" },
  { href: "/#faq", label: "FAQ" },
];
export const footerLinks = [
  // Product
  [
    { href: "/#about-the-app", label: "How it works" },
    { href: "/#features", label: "Experience" },
  ],
  // Company
  [
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#founder", label: "Founder" },
    { href: "/#faq", label: "FAQ" },
  ],
  // Legal & Download
  [
    { href: siteConfig.privacyUrl, label: "Privacy" },
    { href: siteConfig.termsUrl, label: "Terms" },
    { href: siteConfig.appStoreUrl, label: "Download" }
  ],
];

export const communityTestimonials = [
  {
    featured: true,
    name: "Jess",
    detail: "Member for 6 months",
    quote:
      "I've never stuck with journaling before. Storia made five minutes feel doable — and now my mornings don't feel right without it. Sunny feels like a friend who actually listens.",
    profilePicture: "/testimonial1.png",
  },
  {
    name: "Grace",
    detail: "Career transition",
    quote:
      "Sunny helped me see patterns I'd been repeating for years. The Echo feature made everything click.",
    profilePicture: "/testimonial2.png",
  },
  {
    name: "Sienna",
    detail: "Burnout recovery",
    quote:
      "This isn't a blank page staring back at you. It's a gentle conversation that actually helps.",
    profilePicture: "/testimonial3.png",
  },
  {
    name: "Liz",
    detail: "3-month streak",
    quote:
      "I've tried every journaling app. Storia is the first one that feels made for real humans.",
    profilePicture: "/testimonial4.png",
  },
  {
    name: "Alex",
    detail: "New to journaling",
    quote:
      "Five minutes a day changed how I talk to myself. Small ritual, big difference.",
    profilePicture: "/testimonial5.png",
  },
];

export const homepageFaq = [
  {
    question: "Is my journal really private?",
    answer:
      "Yes. Your entries are encrypted on your device. We never sell your data, and Sunny only processes your reflections within your private account.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "Sunny isn't a general chatbot. He's a companion who knows your story over time — your patterns, your growth, your rituals. He guides reflection, not conversation for its own sake.",
  },
  {
    question: "How much time does it take?",
    answer:
      "Five minutes a day. The Magic 3 — Check-in, Daily Storia, and Gratitude — is designed to fit into a real morning, not replace it.",
  },
  {
    question: "What's included in Storia Plus?",
    answer:
      "Plus unlocks deeper insights, Life Arc, Weekly Review, Monthly Recap, Ask Sunny Anything, and Future Self letters. Daily journaling stays free.",
  },
  {
    question: "Do I need journaling experience?",
    answer:
      "Not at all. 70% of our members are new to journaling. Sunny guides you through every step — no blank-page paralysis.",
  },
];
