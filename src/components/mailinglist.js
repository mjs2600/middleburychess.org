import React from "react";
import {Helmet} from "react-helmet";

function MailingList() {

  return (
    <Helmet
      script={[{
        id: "mcjs",
        innerHTML: 'function(c, h, i, m, p) {m = c.createElement(h), p = c.getElementsByTagName(h)[0], m.async = 1, m.src = i, p.parentNode.insertBefore(m, p)}(document, "script", "https://chimpstatic.com/mcjs-connected/js/users/9e1e19951632a9dcd390ae66e/03a7ff2c205a22b9d3abf670c.js");'
      }]}
    />
  );
}

export default MailingList;
