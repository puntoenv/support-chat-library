import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import { AuthLayout } from "@/auth/layout/AuthLayout";
import { Navigate } from "react-router";
import { LoginPage } from "@/auth/pages/LoginPage";
import { RegisterPage } from "@/auth/pages/RegisterPage";
import { lazy, Suspense } from "react";
import { sleep } from "@/lib/sleep";
import { Loader } from "@/components/Loader";

const ChatLayout = lazy(async () => {
  await sleep(1500);
  return import("@/chat/layout/ChatLayout");
});
const ChatPage = lazy(() => import("@/chat/pages/ChatPage"));
const NoChatSelectedPage = lazy(
  () => import("@/chat/pages/NoChatSelectedPage"),
);

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          {/* <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} /> */}
        </Route>
        <Route
          path="/chat"
          element={
            <Suspense fallback={<Loader message="Cargando chat..." />}>
              <ChatLayout />
            </Suspense>
          }
        >
          <Route index element={<NoChatSelectedPage />} />
          <Route path="/chat/:clientId" element={<ChatPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};
