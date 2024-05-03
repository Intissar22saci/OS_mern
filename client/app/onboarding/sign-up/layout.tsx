import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
  description: "AI & expert managed growth platform",
};
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
          <main>{children}</main>
    )
  }
