// ---------------------------------------------------------------------------
// Legal page content (/privacy and /terms). Written to satisfy A2P 10DLC
// campaign review: the SMS section carries the required consent, STOP/HELP,
// and no-third-party-sharing language carriers look for. Edit here.
// ---------------------------------------------------------------------------

export type LegalSection = { heading: string; paragraphs: string[] };

export type LegalDoc = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
};

const COMPANY =
  "Xtreme Kleen Wash & Rental LLC, doing business as Xtreme Kleen (“Xtreme Kleen,” “we,” “us,” or “our”)";

export const privacyPolicy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  metaTitle: "Privacy Policy | Xtreme Kleen",
  metaDescription:
    "How Xtreme Kleen (Xtreme Kleen Wash & Rental LLC) collects, uses, and protects your information, including SMS/text messaging consent and opt-out.",
  effectiveDate: "July 12, 2026",
  intro:
    `This Privacy Policy explains how ${COMPANY} collects, uses, and protects information when you visit this website or contact us about our services. We are based in Portland, Texas and serve the Coastal Bend.`,
  sections: [
    {
      heading: "Information We Collect",
      paragraphs: [
        "When you request a quote or contact us — through our website forms, by phone, by text, or by email — we collect the information you provide: your name, phone number, email address, service address or city, the service you're interested in, details about the job, and your preferred contact method.",
        "Like most websites, our hosting and form providers automatically log basic technical information such as IP address, browser type, and pages visited. We do not use this information to personally identify visitors.",
      ],
    },
    {
      heading: "How We Use Your Information",
      paragraphs: [
        "We use the information you provide to respond to your quote request, schedule and perform work, send service-related communications (confirmations, reminders, follow-ups), request feedback or a review after a completed job, and keep records of our customer relationships.",
        "We do not sell your personal information.",
      ],
    },
    {
      heading: "SMS / Text Messaging Consent",
      paragraphs: [
        "By providing your phone number through our website forms or by texting us, you consent to receive calls and text messages from Xtreme Kleen related to your inquiry, quotes, scheduling, service updates, and follow-ups. Message frequency varies based on your interaction with us. Message and data rates may apply.",
        "Consent to receive text messages is not a condition of purchasing any goods or services. You can opt out at any time by replying STOP to any message. Reply HELP for help, or contact us at 361-947-7811 or Xtreme.Kleen2023@gmail.com.",
        "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with or sold to any third parties.",
      ],
    },
    {
      heading: "How We Share Information",
      paragraphs: [
        "We share information only with service providers that help us operate — such as our website hosting and form provider, and the customer relationship management (CRM) and messaging platform we use to manage customer communication. These providers process information on our behalf and are not permitted to use it for their own marketing.",
        "We may also disclose information if required by law, court order, or governmental request, or to protect our legal rights.",
      ],
    },
    {
      heading: "Data Retention",
      paragraphs: [
        "We keep customer and inquiry records for as long as needed to serve you, meet legal and accounting obligations, and maintain our business records. You may request deletion of your information at any time (see Your Choices below).",
      ],
    },
    {
      heading: "Your Choices",
      paragraphs: [
        "You may opt out of text messages at any time by replying STOP. You may ask us to correct or delete the information we hold about you by calling or texting 361-947-7811 or emailing Xtreme.Kleen2023@gmail.com. We will honor your request unless we are required to keep certain records by law.",
      ],
    },
    {
      heading: "Children's Privacy",
      paragraphs: [
        "Our website and services are directed at adults. We do not knowingly collect personal information from children under 13.",
      ],
    },
    {
      heading: "Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The effective date at the top of this page shows when it was last revised. Continued use of the website after changes means you accept the updated policy.",
      ],
    },
    {
      heading: "Contact Us",
      paragraphs: [
        "Xtreme Kleen Wash & Rental LLC (dba Xtreme Kleen) — Portland, Texas. Phone: 361-947-7811 (call or text). Email: Xtreme.Kleen2023@gmail.com.",
      ],
    },
  ],
};

export const termsOfService: LegalDoc = {
  slug: "terms",
  title: "Terms of Service",
  metaTitle: "Terms of Service | Xtreme Kleen",
  metaDescription:
    "Terms of service for the Xtreme Kleen website and exterior cleaning services — quotes, scheduling, customer responsibilities, and limitations.",
  effectiveDate: "July 12, 2026",
  intro:
    `These Terms of Service (“Terms”) govern your use of this website and your engagement of ${COMPANY} for exterior cleaning services. By using this website or booking our services, you agree to these Terms.`,
  sections: [
    {
      heading: "Quotes and Pricing",
      paragraphs: [
        "Quotes are free and provided in person after we assess the property. Prices shown, discussed, or implied anywhere on this website are not binding offers; the price for any job is the price we agree on in your written or verbal quote for that specific job.",
        "A quote covers the scope described in it. Work discovered or requested beyond that scope may be quoted and billed separately with your approval.",
      ],
    },
    {
      heading: "Scheduling and Weather",
      paragraphs: [
        "Exterior cleaning is weather-dependent. We may need to reschedule work for rain, wind, lightning, or other conditions that make the work unsafe or reduce its quality. We will communicate schedule changes as early as we can.",
      ],
    },
    {
      heading: "Customer Responsibilities",
      paragraphs: [
        "Before scheduled work, please provide reasonable access to the areas being cleaned and to an exterior water source unless we have agreed otherwise, secure pets, close windows and doors, and move vehicles or fragile items away from the work area.",
        "Please tell us in advance about anything sensitive on the property — koi ponds, gardens, fresh paint, damaged surfaces, failing seals, or similar conditions. Pre-existing damage or defects (such as oxidized paint, brittle seals, or aged surfaces) may become more visible after cleaning; identifying them ahead of time lets us plan the safest method.",
      ],
    },
    {
      heading: "Results",
      paragraphs: [
        "We use professional methods matched to each surface and are straightforward about expected outcomes before we start. Some conditions — deeply set stains, permanent etching, hard-water glass etching, or surface damage that predates our work — may not be fully correctable, and we will tell you so when we see them.",
      ],
    },
    {
      heading: "Website Content",
      paragraphs: [
        "The content on this website is provided for general information about our services. While we work to keep it accurate, it is provided “as is” without warranties of any kind. Photos and videos on this site are of our own work unless noted otherwise, and site content may not be copied for commercial use without our permission.",
      ],
    },
    {
      heading: "Communications",
      paragraphs: [
        "By submitting your contact information through this website, you agree to be contacted by phone, text, or email about your request. Text messaging consent and opt-out are described in our Privacy Policy.",
      ],
    },
    {
      heading: "Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by law, Xtreme Kleen Wash & Rental LLC's total liability arising out of or related to any service is limited to the amount paid for that service, and we are not liable for indirect, incidental, or consequential damages. Nothing in these Terms limits liability that cannot be limited under applicable law.",
      ],
    },
    {
      heading: "Governing Law",
      paragraphs: [
        "These Terms are governed by the laws of the State of Texas. Any dispute arising under them will be resolved in the courts of San Patricio County, Texas.",
      ],
    },
    {
      heading: "Changes to These Terms",
      paragraphs: [
        "We may update these Terms from time to time. The effective date above shows the latest revision. Continued use of the website or our services after changes means you accept the updated Terms.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "Xtreme Kleen Wash & Rental LLC (dba Xtreme Kleen) — Portland, Texas. Phone: 361-947-7811 (call or text). Email: Xtreme.Kleen2023@gmail.com.",
      ],
    },
  ],
};
