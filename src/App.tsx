import AppRouter from "./Navigation/AppRouter";
import { queryClient } from "src/Utils/ReactQueryConfig";
import { QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
