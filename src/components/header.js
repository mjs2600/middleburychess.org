import {graphql, useStaticQuery, Link} from "gatsby";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChessRook} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const {site} = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          shortTitle
        }
      }
    }
  `);


  return (
    <header className="bg-green-700">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <span className="hidden sm:inline text-xl font-bold tracking-tight">
              <FontAwesomeIcon icon={faChessRook} /> {site.siteMetadata.title} <FontAwesomeIcon icon={faChessRook} />
            </span>
            <span className="sm:hidden text-xl font-bold tracking-tight">
              <FontAwesomeIcon icon={faChessRook} /> {site.siteMetadata.shortTitle} <FontAwesomeIcon icon={faChessRook} />
            </span>
          </h1>
        </Link>

        <button
          className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${isExpanded ? `block` : `hidden`
            } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/equipment`,
              title: `Chess Equipment`,
            },
            {
              route: `/mailing-list`,
              title: `Subscribe to Our Mailing List`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
