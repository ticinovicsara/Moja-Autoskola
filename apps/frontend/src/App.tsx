import { AppRouter } from "@/router";
import { AuthProvider } from "./contexts/AuthContext/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
