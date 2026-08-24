import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/disclaimer")({
  head: () => ({ meta: [{ title: "Disclaimer. Stream Stick Hub" }, { name: "description", content: "Disclaimer for Stream Stick Hub — an independent service provider not affiliated with any ISP." }] }),
  component: () => (
    <LegalLayout
      title="Disclaimer"
      updated="June 2026"
      sections={[
        {
          id: "isp-affiliation",
          heading: "No affiliation with any ISP",
          body: (
            <div className="space-y-3">
              <p><strong>Stream Stick Hub is an independent service provider and is NOT affiliated with, endorsed by, or in any way connected to any internet service provider (ISP), cable company, or telecom carrier.</strong></p>
              <p>This includes any internet service provider, cable company, or telecom carrier.</p>
              <p>Stream Stick Hub does not represent any such company, cannot access their systems or accounts on your behalf, and is not a customer service channel for any ISP.</p>
            </div>
          ),
        },
        {
          id: "paid-service",
          heading: "Paid assistance services",
          body: (
            <p>The services offered on this website are <strong>paid assistance services</strong>. We are not a free government program, a charitable service, or a helpline subsidized by any carrier. Service fees range from <strong>$4.99 to $49.99</strong> depending on the request. Fees are disclosed before any charge is made.</p>
          ),
        },
        {
          id: "general",
          heading: "General information",
          body: <p>The information on this site is provided for general informational purposes only. We make no warranties of any kind regarding completeness or accuracy of the information provided.</p>,
        },
        {
          id: "third-party",
          heading: "Third party content",
          body: <p>Stream Stick Hub services may involve assistance with third-party streaming applications and devices. We are not responsible for the availability, terms, or content of those third-party platforms. Subscriptions to third-party streaming services are separate from our assistance fees and are governed by those providers' own terms.</p>,
        },
        {
          id: "external",
          heading: "External links",
          body: <p>Links to external sites are provided for convenience only. We do not endorse the content or practices of any external sites.</p>,
        },
        {
          id: "professional",
          heading: "No professional advice",
          body: <p>Nothing on this site constitutes legal, financial, or professional advice. For questions about ISP accounts, billing, or services, please contact your ISP directly.</p>,
        },
        {
          id: "contact",
          heading: "Contact",
          body: (
            <div>
              <p>For questions or concerns about this disclaimer:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Email: <a href="mailto:support@streamsstickhub.com" className="underline">support@streamsstickhub.com</a></li>
                <li>Business owner: BYUSED PARTS LLC</li>
                <li>Address: 534 Mono St, Manteca, CA 95337</li>
              </ul>
            </div>
          ),
        },
      ]}
    />
  ),
});
