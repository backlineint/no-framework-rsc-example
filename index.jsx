import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createFromFetch } from "react-server-dom-webpack/client.browser";
import Client from "./Client.jsx";

let rsc = null;
function Server() {
  if (!rsc) {
    rsc = createFromFetch(
      fetch("/app", {
        headers: {
          Accept: "text/x-component",
        },
      })
    );
    console.log('RSC Render Started', rsc);
  }
  else {
    console.log('RSC Render', rsc);
  }
  return rsc;
}

const root = createRoot(document.getElementById("root"));
root.render(
    <div style={{border: '2px solid black', margin: '5px', padding: '5px'}}>
    <h1>Non-framework RSC Example</h1>
    <h2>If you can see this, the root page has rendered including headers.</h2>
    <div style={{border: '2px solid blue', margin: '5px', padding: '5px'}}>
    <p>This div contains a suspense boundary</p>
      <Suspense fallback="Awaiting RSC Response...">
        <Server />
      </Suspense>
    </div>
    <Client />
  </div>
);
