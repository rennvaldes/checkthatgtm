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
    <div className="flex flex-wrap xl:flex-nowrap pl-4 md:pl-5 gap-y-2">
      {companies.map((company, index) => {
        // Show all logos on all screen sizes
        // Mobile-Desktop: wraps to multiple lines as needed
        // XL (xl): single line (no wrap)

        return (
          <div
            key={company.name}
            className="w-fit -ml-4 md:-ml-5 pr-4 md:pr-5 rounded-full border-[0.5px] border-border bg-background flex items-center gap-1 md:gap-1.5 flex-shrink-0"
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
