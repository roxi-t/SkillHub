import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import defaultOptions from "configs/reactQuery";

function App() {
  const queryClient = new QueryClient({ defaultOptions });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
