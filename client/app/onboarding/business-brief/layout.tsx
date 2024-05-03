import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Brief",
  description: "AI & expert managed growth platform",
};

export default function VisitLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <main>
        {children}
      </main>
    )
  }