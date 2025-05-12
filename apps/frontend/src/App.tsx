import { AppRouter } from "@/router";
import { AuthProvider } from "./contexts/AuthContext/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        <AppRouter />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
