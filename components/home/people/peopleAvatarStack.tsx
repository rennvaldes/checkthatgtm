import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  image: string;
  initials: string;
}

interface PeopleAvatarStackProps {
  team: TeamMember[];
}

export function PeopleAvatarStack({ team }: PeopleAvatarStackProps) {
  return (
    <div className="flex -space-x-2 w-fit data-[slot=avatar]:*:ring-2 data-[slot=avatar]:*:ring-background">
      {team.map((member) => (
        <Avatar key={member.name} className="h-9 w-9 md:h-12 md:w-12">
          <AvatarImage src={member.image} alt={member.name} />
          <AvatarFallback>{member.initials}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}
