export const services = [
  {
    title: 'Process Automation',
    tagline: 'Power Automate workflows that cut cycle times by up to 80%.',
    description: 'Stop doing the same thing over and over. Power Automate connects your systems, handles approvals, and runs processes the same way every time without anyone babysitting them.',
    benefits: [
      'Reduce manual data entry and file handling',
      'Automate approval workflows and notifications',
      'Connect disparate systems seamlessly',
      'Ensure compliance with automated audit trails',
      'Scale operations without adding headcount',
    ],
    icon: 'bolt',
  },
  {
    title: 'Custom Applications',
    tagline: 'Low-code Power Apps built in weeks, not months.',
    description: 'Need an app for your team? We build them with Power Apps. They work on phones, connect to your existing data, and ship in weeks instead of months.',
    benefits: [
      'Deploy mobile-ready apps in weeks',
      'Integrate seamlessly with Microsoft 365',
      'Empower users with intuitive interfaces',
      'Iterate quickly based on user feedback',
      'Maintain security and governance standards',
    ],
    icon: 'phone',
  },
  {
    title: 'Business Intelligence',
    tagline: 'Interactive dashboards and automated reporting with Power BI.',
    description: 'Your data is already telling you something. Power BI turns it into dashboards your team will actually use, reports that send themselves, and answers you can act on.',
    benefits: [
      'Visualize KPIs in real-time dashboards',
      'Automate report generation and distribution',
      'Enable self-service analytics for teams',
      'Uncover trends and patterns in your data',
      'Make faster, data-driven decisions',
    ],
    icon: 'chart',
  },
  {
    title: 'SharePoint Solutions',
    tagline: 'Modern intranets and document automation. Secure, integrated, end-to-end.',
    description: 'A place for your documents, your team, and your processes. We build SharePoint sites that people actually want to use, not just another portal that collects dust.',
    benefits: [
      'Centralize document storage and management',
      'Enable secure external collaboration',
      'Automate document workflows and approvals',
      'Create branded intranet portals',
      'Integrate with Microsoft 365 ecosystem',
    ],
    icon: 'link',
  },
  {
    title: 'Spreadsheet Engineering',
    tagline: 'Robust Excel models that scale with your data and governance policies.',
    description: "Your critical spreadsheet shouldn't break when someone looks at it wrong. We build Excel models that are documented, validated, and tough enough for real-world use.",
    benefits: [
      'Build complex financial and operational models',
      'Implement data validation and error checking',
      'Create reusable templates and tools',
      'Document formulas and business logic',
      'Integrate Excel with Power Platform services',
    ],
    icon: 'table',
  },
  {
    title: 'Data Integration & Migration',
    tagline: 'Connect your systems and move old data into platforms that actually work.',
    description: 'Your systems need to talk to each other. We connect them, move your data where it needs to go, and make sure nothing gets lost along the way.',
    benefits: [
      'Connect legacy systems to modern platforms',
      'Migrate data with zero loss',
      'Build automated data pipelines',
      'Ensure data quality and consistency',
      'Reduce manual data transfer work',
    ],
    icon: 'arrows',
  },
];

export const serviceIcons: Record<string, import('react').ReactElement> = {};

// Navigation links shared between Header and Footer
export const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Process', href: '/process' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];
