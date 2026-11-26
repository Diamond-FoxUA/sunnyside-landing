import Navigation from "./Navigation";

type MobileMenuProps = {
  isMenuOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isMenuOpen, onClose }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      inert={!isMenuOpen}
      className={`absolute z-50 lg:hidden top-18 px-6 md:px-10 w-full ${isMenuOpen ? "max-h-fit pt-10 md:pt-15 opacity-100 pointer-events-auto" : "max-h-0 pt-0 opacity-0 pointer-events-none"} transition-all duration-300`}
    >
      <div
        className="relative flex flex-col gap-8 items-center justify-center px-6 py-10 bg-white 
            before:content-['']
            before:absolute
            before:-top-6.75
            before:right-0
            before:w-0
            before:h-0
            before:border-l-28
            before:border-l-transparent 
            before:border-b-28
          before:border-b-white
            lg:hidden
          "
      >
        <Navigation onClose={onClose} />
      </div>
    </div>
  );
}
