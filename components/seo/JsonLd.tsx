import Script from 'next/script';

export default function JsonLd() {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Jesreel',
          url: 'https://jesreel.me',
          jobTitle: 'Software Engineer',
          knowsAbout: ['Web Development', 'Next.js', 'React', 'TypeScript', 'AWS', 'Serverless'],
          sameAs: [
            'https://github.com/jesreel01',
            "https://linkedin.com/in/jesreel01"
          ],
        }),
      }}
    />
  );
}
