import { AppRouter } from "@/router";
import { AuthProvider } from "./contexts/AuthContext/AuthProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <Toaster />
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
