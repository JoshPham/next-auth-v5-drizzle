import SessionProvider from "@/components/session-provider";
import { ReactNode } from "react";
import { auth } from "@/lib/auth";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <div>{children}</div>
    </SessionProvider>
  );
}
