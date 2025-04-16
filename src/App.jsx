import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Trans, useLingui } from "@lingui/react/macro";

function App() {
  const [count, setCount] = useState(0);
  const { t } = useLingui();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt={t`Vite logo`} />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt={t`React logo`} />
        </a>
      </div>
      <h1>{t`Vite + React`}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <Trans>count is {count}</Trans>
        </button>
        <p>
          <Trans>
            Edit <code>src/App.jsx</code> and save to test HMR{" "}
          </Trans>
        </p>
      </div>
      <p className="read-the-docs">
        <Trans>Click on the Vite and React logos to learn more</Trans>
      </p>
    </>
  );
}

export default App;
