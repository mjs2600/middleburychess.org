import React from "react";

import Layout from "../components/layout";
import MailingList from "../components/mailinglist";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <MailingList />
    </Layout>
  );
}

export default ContactPage;
