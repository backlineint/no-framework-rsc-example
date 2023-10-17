import { useEffect } from "react";

export default function Client() {
  useEffect(() => {
    console.log('Client Component Rendered, useEffect ran');
  }, []);
  return (
    <div style={{border: '2px solid green', margin: '5px', padding: '5px'}}>
      <p>This is a client component that logs to the console in a useEffect hook.</p>
    </div>
  );
}