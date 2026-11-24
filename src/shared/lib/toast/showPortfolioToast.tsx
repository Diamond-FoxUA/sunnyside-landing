import { toast } from "sonner";
import Link from "next/link";

export function showPortfolioToast() {
  toast.info(
    <span>
      Like what you see? Explore more in my{" "}
      <Link
        href="https://my-portfolio-main-eta-jade.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono font-semibold text-emerald-600 underline underline-offset-4 hover:text-emerald-500"
      >
        portfolio
      </Link>
      .
    </span>,
  );
}
