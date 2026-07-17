interface QuestionnaireLayoutProps {
  children: React.ReactNode;
}

export default function QuestionnaireLayout({
  children,
}: QuestionnaireLayoutProps) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      {children}
    </main>
  );
}