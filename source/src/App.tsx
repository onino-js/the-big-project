import Modal from "./components/Modal/Modal";
import { AppRoutes } from "./pages/AppRoutes";

export const App = () => {
  return (
    <>
      <AppRoutes />
      <Modal>Modal Content</Modal>
    </>
  );
};
