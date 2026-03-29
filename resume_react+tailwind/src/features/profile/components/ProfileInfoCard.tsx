import type { ProfileFormValues } from "@/types";

interface ProfileInfoCardProps {
  values: ProfileFormValues;
}

const infoItems: Array<{ label: string; key: keyof ProfileFormValues }> = [
  { label: "Full name", key: "fullName" },
  { label: "Email", key: "email" },
  { label: "Phone", key: "phone" },
  { label: "Role", key: "jobTitle" },
  { label: "Location", key: "location" },
];

export default function ProfileInfoCard({ values }: ProfileInfoCardProps) {
  return (
    <article className="bg-white border border-[#e1e4eb] rounded-[24px] p-6 md:p-7">
      <h2 className="text-[22px] font-semibold text-[#121827] tracking-[-0.01em]">
        Personal Details
      </h2>

      <div className="mt-6 space-y-4">
        {infoItems.map((item) => (
          <div
            key={item.key}
            className="border border-[#e9ecf3] rounded-xl px-4 py-3 bg-[#fbfcfe]"
          >
            <p className="text-xs font-medium uppercase tracking-[0.06em] text-[#8b93a2]">
              {item.label}
            </p>
            <p className="text-[15px] mt-1 font-medium text-[#1f2430] break-words">
              {values[item.key] || "-"}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 border border-[#e9ecf3] rounded-xl px-4 py-3 bg-[#fbfcfe]">
        <p className="text-xs font-medium uppercase tracking-[0.06em] text-[#8b93a2]">
          Professional Summary
        </p>
        <p className="text-[15px] leading-6 mt-2 text-[#3f4757] min-h-[96px]">
          {values.bio || "No summary added."}
        </p>
      </div>
    </article>
  );
}
