import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`chess`, `Middlebury`, `Vermont`, `Addison County`]}
        title="Home"
      />
      <article className="prose">

        <section className="text-left">

          <p className="leading-loose">
            Welcome to Middlebury chess.
            We play regularly on Wednesday afternoons and Saturday mornings in Marble Works.
            Players of all levels are welcome to come out and play.
            Check the calendar for more information about when and where we will be playing.
          </p>
        </section>

        <section className="text-left">
          <h3>Upcoming Meeting Times</h3>
          <ul>
            <li>Wednesday, July 14, 1:30 AM to 4:00 PM at <a href="https://g.page/11th-Hour-Botanicals?share">11th Hour Botanicals</a>.</li>
            <li>Saturday, July 17, 9:30 AM to 12:30 PM at <a href="https://g.page/11th-Hour-Botanicals?share">11th Hour Botanicals</a>.</li>
          </ul>
        </section>
      </article>
    </Layout>
  );
}

export default IndexPage;
