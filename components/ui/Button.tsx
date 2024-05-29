import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ButtonProps = {
  label: string;
  url: string;
  icon?: boolean;
  iconColor?: string;
  className?: string;
};

const Button = ({
  label,
  url,
  icon = false,
  iconColor,
  className,
}: ButtonProps) => {
  return (
    <Link
      target="_blank"
      href={"https://calendly.com/rundigital/30" || "/"}
      className={cn(
        "relative w-fit block border border-text-color bg-primary text-fontClamp20 font-medium rounded-full px-6 py-3.5 btn hover:text-primary group isolate overflow-hidden",
        className
      )}
    >
      <p className="flex items-center gap-3 transition-all">
        {label || "Click"}
        {icon && (
          <span>
            <ArrowRight size={19} />
          </span>
        )}
      </p>
    </Link>
  );
};

export default Button;
