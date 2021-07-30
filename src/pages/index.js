import React from "react";

import Layout from "../components/layout";
import {Schedule} from "../components/schedule";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`chess`, `Middlebury`, `Vermont`, `Addison County`, `Chess Club of Addison County`]}
        title="Home"
      />
      <article className="prose">

        <section className="text-left">

          <p className="leading-loose">
            Welcome to Chess Club of Addison County.
            We play on Saturday mornings in the Marble Works district of Middlebury, Vermont.
            Players of all levels are welcome to come out and play.
            Check the calendar for more information about when and where we will be playing.
          </p>
        </section>

        <Schedule />
      </article>
    </Layout >
  );
}

export default IndexPage;
