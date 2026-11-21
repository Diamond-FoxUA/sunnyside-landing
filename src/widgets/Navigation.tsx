import { NAV_ITEMS } from "@/shared/constants/navigation";

type NavigationProps = {
  onClose?: () => void;
};

export default function Navigation({ onClose }: NavigationProps) {
  return (
    <nav>
      <ul className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
        {NAV_ITEMS.map((navItem) => (
          <li key={navItem.id}>
            <a
              href={`#${navItem.id}`}
              onClick={onClose}
              className="lg:text-white text-[20px] lg:text-[18px] text-center font-semibold leading-[125%] lg:leading-[165%] lg:py-5 hover:opacity-50 active:opacity-25 transition-opacity duration-300"
            >
              {navItem.title}
            </a>
          </li>
        ))}
        <li>
          <button
            type="button"
            aria-label="Show author contacts via notification"
            className="font-fraunces text-gray-950 text-[15px] font-black leading-[165%] tracking-[0.07em] uppercase bg-yellow-500 lg:bg-white py-3.75 px-9.25 lg:px-[27.5px] rounded-[28px] hover:opacity-50 active:opacity-25 transition-opacity duration-300 cursor-pointer"
            onClick={() => {
              alert("My contact info");
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
