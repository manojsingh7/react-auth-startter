import AuthContextProvider from "./Contexts/AuthContextProvider";
import AppRouter from "./Navigation/AppRouter";

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
