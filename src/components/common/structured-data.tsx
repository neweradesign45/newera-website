import { BASE_URL, OG_IMAGE } from "@/lib/constants";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NewEra Automations",
    url: BASE_URL,
    image: OG_IMAGE,
    description:
      "AI automation agency building intelligent workflows, chatbots, and lead generation systems for businesses.",
    founder: {
      "@type": "Person",
      name: "Krishna Prajapati",
    },
    sameAs: [
      "https://wa.me/917078994915",
    ],
    knowsAbout: [
      "AI Automation",
      "Workflow Design",
      "WhatsApp Chatbots",
      "Lead Generation",
      "Cold Email Infrastructure",
      "n8n Pipelines",
      "Business Process Automation",
    ],
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NewEra Automations",
    url: BASE_URL,
    description:
      "AI automation agency building intelligent workflows and systems for business growth.",
    author: {
      "@type": "Organization",
      name: "NewEra Automations",
    },
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NewEra Automations",
    image: OG_IMAGE,
    "@id": BASE_URL,
    url: BASE_URL,
    telephone: "+917078994915",
    email: "neweraagents45@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "21:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
    </>
  );
}
