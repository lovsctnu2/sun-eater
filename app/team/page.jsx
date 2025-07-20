
import TeamGrid from "@/components/teamGrid";
import teamMembers from "@/data/teamMembers";
import talentsData from "@/data/talentsData";

export const metadata = {
  title: "Our Team & Talents - Sun Eater",
  description: "Temui tim dan talent Sun Eater.",
};

export default function TeamPage() {
  return (
    <div className="py-12">
      <TeamGrid title="Our Core Team" members={teamMembers} isTalent={false} />
      <TeamGrid title="Our Talents" members={talentsData} isTalent={true} />
    </div>
  );
}