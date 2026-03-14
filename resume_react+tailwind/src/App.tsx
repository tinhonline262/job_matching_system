import { QueryProvider } from "@/providers";
import { AppRoutes } from "@/routes";

function App() {
  return (
    <QueryProvider>
      <AppRoutes />
    </QueryProvider>
  );
}

export default App;
