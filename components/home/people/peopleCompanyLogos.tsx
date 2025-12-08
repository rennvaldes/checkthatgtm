import Image from "next/image";

interface Company {
  name: string;
  logo: string;
}

interface PeopleCompanyLogosProps {
  companies: Company[];
}

export function PeopleCompanyLogos({ companies }: PeopleCompanyLogosProps) {
  return (
    <div className="flex flex-wrap -space-x-4 gap-y-2">
      {companies.map((company, index) => {
        // Show different counts based on screen size
        // Mobile: show first 3 (index 0-2)
        // Tablet (md): show first 4 (index 0-3)
        // Desktop (lg): show first 5 (index 0-4)
        // XL: show first 6 (index 0-5)
        const getVisibilityClass = () => {
          if (index >= 6) return "hidden"; // Never show 7th+ logo
          if (index >= 5) return "hidden xl:flex"; // 6th: xl only
          if (index >= 4) return "hidden lg:flex"; // 5th: lg+ only
          if (index >= 3) return "hidden md:flex"; // 4th: md+ only
          return ""; // 1st-3rd: always visible
        };

        return (
          <div
            key={company.name}
            className={`w-fit pr-4 md:pr-5 rounded-full border-[0.5px] border-border bg-background flex items-center gap-1 md:gap-1.5 flex-shrink-0 ${getVisibilityClass()}`}
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={48}
              height={48}
              className="size-9 md:size-12 flex-shrink-0"
            />
            <span className="text-foreground text-xs md:text-sm whitespace-nowrap">{company.name}</span>
          </div>
        );
      })}
    </div>
  );
}
