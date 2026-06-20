const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Guilherme Esteves",
  url: baseUrl,
  email: "guilherme.o.esteves@gmail.com",
  telephone: "+5511942045202",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js and .NET. Based in São Paulo, Brazil.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Itapecerica da Serra",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.linkedin.com/in/guiest/",
    "https://github.com/EstGui",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    ".NET",
    "TypeScript",
    "C#",
    "Full Stack Development",
    "Web Development",
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
