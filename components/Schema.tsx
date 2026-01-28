export default function Schema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Northern Analytics',
    description: 'Microsoft Power Platform consulting services specializing in Power BI, Power Automate, Power Apps, SharePoint, and Excel solutions.',
    url: 'https://northern-analytics.com',
    email: 'jameygulley@northern-analytics.com',
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
    image: 'https://northern-analytics.com/logo.png',
    '@id': 'https://northern-analytics.com',
    url: 'https://northern-analytics.com',
    email: 'jameygulley@northern-analytics.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Fort McMurray',
      addressRegion: 'AB',
      postalCode: '',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 56.7267,
      longitude: -111.3790,
    },
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
