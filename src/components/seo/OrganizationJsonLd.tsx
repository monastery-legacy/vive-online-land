import { SITE_NAME, SITE_URL } from "@/lib/seo";

const LOGO_URL = `${SITE_URL}/icons/new-icon-udreamms.png`;

export default function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    sameAs: [
      "https://www.facebook.com/profile.php?id=61593817282601",
      "https://www.instagram.com/match_app_/",
      "https://api.whatsapp.com/send/?phone=393342451123&text&type=phone_number&app_absent=0",
      "https://api.whatsapp.com/send/?phone=393342451123&text&type=phone_number&app_absent=0",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
