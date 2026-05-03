import { Suspense } from "react";
import "./App.css";
import Countries from "./assets/components/Countries/Countries";

const CountryPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());
function App() {
  return (
    <>
      <Suspense fallback={<p>Tarin is loading.....</p>}>
        <Countries CountryPromise={CountryPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
