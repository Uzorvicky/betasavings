import React, { useState, Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Recovery from "./components/auth/recovery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Fallback from "./shared/Spinner/fallback";
const Dashboard = lazy(() => import("./features/dashboard/index"))
export default function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            gcTime: 24 * 60 * 60 * 1000,
          },
        },
      })
  );
  return (<main className="w-full h-full">
    <QueryClientProvider
      client={queryClient}>
      <Routes>
        <Route
          exact
          path="/"
          element={<Login />}
        />

        <Route
          exact
          path="/login"
          element={<Login />}

        />
        <Route
          exact
          path="/login"
          element={<Login />}
        />

        <Route
          exact
          path="/account/recovery"
          element={<Recovery />}
        />
        <Route
          exact
          path="/dashboard/*"
          element={<Suspense fallback={<Fallback />}>
            <Dashboard />
          </Suspense>}
        />
        <Route
          path="*"
          element={
            <Navigate to={"/login"} replace />
          }
        />
      </Routes>
      <ReactQueryDevtools initialIsOpen={import.meta.env.VITE_NODE_ENV === "development" ? true : false}
        position='bottom'
        buttonPosition='bottom-left' />
    </QueryClientProvider>
  </main>)
}
