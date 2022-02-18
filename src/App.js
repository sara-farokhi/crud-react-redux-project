import { Provider } from "react-redux";

import Search from "./components/layout/Search";
import Header from "./components/layout/Header";
import Logs from "./components/logs/Logs";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AddLogModal from "./components/modals/AddLogModal";
import AddTechModal from "./components/modals/AddTechModal";
import "./App.css";
import OperationBtns from "./components/operationBtns/OperationBtns";
import EditLogModal from "./components/modals/EditLogModal";
import ShowTechlistModal from "./components/modals/ShowTechlistModal";
import store from "./store";
import DeleteConfirmModal from "./components/modals/DeleteConfirmModal";
import Spinner from "./components/ui/Spinner";

const App = () => {
  return (
    <Provider store={store}>
      <Search />
      <Header />
      <Logs />
      <AddLogModal />
      <EditLogModal />
      <ShowTechlistModal />
      <AddTechModal />
      <DeleteConfirmModal />
      <OperationBtns />
    </Provider>
  );
};

export default App;
