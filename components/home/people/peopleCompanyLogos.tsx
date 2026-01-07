import { CloudflareImage } from "@/components/ui/CloudflareImage";

interface Company {
  name: string;
  logo: string;
}

interface PeopleCompanyLogosProps {
  companies: Company[];
}

export function PeopleCompanyLogos({ companies }: PeopleCompanyLogosProps) {
  return (
    <div className="flex flex-wrap xl:flex-nowrap gap-[10px] gap-y-2">
      {companies.map((company) => {
        // Show all logos on all screen sizes
        // Mobile-Desktop: wraps to multiple lines as needed
        // XL (xl): single line (no wrap)

        return (
          <div
            key={company.name}
            className="group w-fit rounded-full border-[0.5px] border-border bg-background flex items-center overflow-hidden transition-all duration-300 ease-in-out shrink-0 cursor-pointer hover:pr-3 md:hover:pr-4"
          >
            <CloudflareImage
              src={company.logo}
              alt={company.name}
              width={48}
              height={48}
              className="size-9 md:size-12 shrink-0"
              sizes="48px"
              placeholder={false}
            />
            <span className="text-foreground text-xs md:text-sm whitespace-nowrap max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-300 ease-in-out group-hover:ml-1 md:group-hover:ml-1.5">
              {company.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
