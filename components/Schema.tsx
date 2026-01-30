export default function Schema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Northern Analytics',
    description: 'Microsoft Power Platform consulting. Power BI dashboards, Power Automate workflows, Power Apps, SharePoint, and Excel solutions for businesses across Alberta.',
    url: 'https://northern-analytics.com',
    email: 'contact@northern-analytics.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fort McMurray',
      addressRegion: 'AB',
      addressCountry: 'CA',
    },
    founder: {
      '@type': 'Person',
      name: 'Jamey Gulley',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Canada',
    },
    serviceType: [
      'Power BI Consulting',
      'Power Automate Consulting',
      'Power Apps Development',
      'SharePoint Solutions',
      'Excel Consulting',
      'Business Intelligence',
      'Process Automation',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Northern Analytics',
    // image: 'https://northern-analytics.com/logo.png', // TODO: add logo file
    '@id': 'https://northern-analytics.com',
    url: 'https://northern-analytics.com',
    email: 'contact@northern-analytics.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fort McMurray',
      addressRegion: 'AB',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 56.7267,
      longitude: -111.3790,
    },
    sameAs: ['https://www.linkedin.com/company/northern-analytics-ca/'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026'),
        }}
      />
    </>
  );
}
