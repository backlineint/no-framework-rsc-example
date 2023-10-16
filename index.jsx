import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createFromFetch } from "react-server-dom-webpack/client.browser";

let rsc = null;
function App() {
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
  <>
  <h1>Non-framework React Server Components Example</h1>
  <h2>Root page has rendered including headers.</h2>
  <Suspense fallback="Awaiting RSC Response...">
    <App />
  </Suspense>
  </>
);
