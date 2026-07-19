import Logo from "@/components/common/Logo";
import FloatingControls from "@/components/common/FloatingControls";

interface NavbarProps {
  visible: boolean;
}

export default function Navbar({
  visible,
}: NavbarProps) {
  return (
    <header
      className={`
    fixed top-0 left-0 right-0 z-20

    transition-all
    duration-700
    ease-out
    transition-colors
    duration-500
    ease-in-out

    ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
        }
  `}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />
        <FloatingControls />
      </div>
    </header>
  );
}