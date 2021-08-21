import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function MailingListPage() {
  return (
    <Layout>
      <SEO
        keywords={[`chess`, `Middlebury`, `Vermont`, `Addison County`, `chess equipment`, `chess boards`, `chess clocks`]}
        title="Chess Equipement"
      />
      <article className="prose">
        <p>
          Parker &ldquo;Monty&rdquo; Montgomery has chess equipment for sale, including several types of chess clocks. Contact him if you might be a buyer. His contact information is available on <a href={'http://vtchess.info/Clubs/Middlebury.htm'}>vtchess.info</a>. Every dollar that he collects will be given to his favorite local 501(c)(3) organization: Bridge School, Inc.
        </p>
      </article>
    </Layout>
  );
}

export default MailingListPage;

