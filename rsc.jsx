import { renderToReadableStream } from "react-server-dom-webpack/server.edge";
import * as OS from "node:os";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function Rsc() {
  // Using a hook here will cause an error since this is a server component
  await delay(5000);
  return (
    <div style={{border: '2px solid red', margin: '5px', padding: '5px'}}>
      <h1>This is a server component</h1>
      <p>It used a 5 second delay to simulate loading</p>
      <h2>
        {OS.type()} {OS.arch()} {OS.release()}
      </h2>
      {new Date().toISOString()}
    </div>
  );
}

export async function render() {
  return renderToReadableStream(<Rsc />);
}
