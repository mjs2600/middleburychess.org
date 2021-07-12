import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function MailingListPage() {
  return (
    <Layout>
      <SEO
        keywords={[`chess`, `Middlebury`, `Vermont`, `Addison County`, `mailing list`, `email`]}
        title="Mailing List"
      />
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSco5pFzIVlrrC3z_XAC-D5byT5NCWUn-GK_kf3C9yvJkUu0TQ/viewform?embedded=true" width="100%" height="600" frameBorder="0" marginHeight="0" marginWidth="0">
        Loading…
      </iframe>
    </Layout>
  );
}

export default MailingListPage;
