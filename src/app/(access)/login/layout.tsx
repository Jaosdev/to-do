export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="login-layout  min-h-screen bg-gray-100 bg-linear-to-tr/increasing  from-red-950 to-yellow-500">
      {/* Diseño exclusivo para login */}
      <div>{children}</div>
    </div>
  );
}
