// import Modal from "./components/Modal/Modal";
import { useEffect, useState } from "react";
import { BreveModal } from "./components/BreveModal/BreveModal";
import { AppRoutes } from "./pages/AppRoutes";

export const App = () => {
  const [state, setState] = useState({
    showBreve: false,
  });
  const showBreve = () => setState({ showBreve: true });
  useEffect(() => {
    const listener = (ev: KeyboardEvent) => {
      ev.preventDefault();
      if (ev.code === "Space") {
        showBreve();
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  //   const showRandomBreve = () => {
  //     setState({ showBreve: true });
  //   };
  const closeBreve = () => {
    setState({ showBreve: false });
  };
  return (
    <>
      <AppRoutes />
      <button id="breve-button" onClick={showBreve}>
        breve
      </button>
      <BreveModal show={state.showBreve} close={closeBreve} />
    </>
  );
};
