// import Modal from "./components/Modal/Modal";
import { useEffect, useState } from "react";
import { BreveModal } from "./components/BreveModal/BreveModal";
import { AppRoutes } from "./pages/AppRoutes";

export const App = () => {
  // useEffect(() => {
  //   const listener = (ev: KeyboardEvent) => {
  //     ev.preventDefault();
  //     if (ev.code === "Space") {
  //       showBreve();
  //     }
  //   };
  //   window.addEventListener("keydown", listener);
  //   return () => window.removeEventListener("keydown", listener);
  // }, []);

  //   const showRandomBreve = () => {
  //     setState({ showBreve: true });
  //   };

  return (
    <>
      <AppRoutes />
    </>
  );
};
