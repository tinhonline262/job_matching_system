import { useEffect, useMemo, useState } from "react";
import {
  AvatarUploader,
  ProfileEditForm,
  ProfileHeaderCard,
  ProfileInfoCard,
} from "@/features/profile";
import type { ProfileFormValues } from "@/types";

const defaultProfileValues: ProfileFormValues = {
  fullName: "Cong Nguyen",
  email: "cong.nguyen@example.com",
  phone: "+84 901 234 567",
  jobTitle: "Frontend Engineer",
  location: "Ho Chi Minh City, Vietnam",
  bio: "Frontend engineer with 5+ years of experience building scalable products in React and TypeScript. Focused on performance, UX quality, and collaboration across design and product teams.",
  linkedin: "https://linkedin.com/in/cong-nguyen",
  github: "https://github.com/congnguyen",
  website: "https://cong-portfolio.dev",
};

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [values, setValues] = useState<ProfileFormValues>(defaultProfileValues);
  const [draftValues, setDraftValues] =
    useState<ProfileFormValues>(defaultProfileValues);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const currentValues = isEditing ? draftValues : values;

  const stats = useMemo(
    () => [
      { label: "Reports Generated", value: "12" },
      { label: "Avg Match Score", value: "84%" },
      { label: "Profile Completeness", value: "93%" },
    ],
    [],
  );

  const handleFieldChange = (field: keyof ProfileFormValues, value: string) => {
    setDraftValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleStartEdit = () => {
    setDraftValues(values);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setDraftValues(values);
    setIsEditing(false);
  };

  const handleSave = () => {
    setValues(draftValues);
    setIsEditing(false);
  };

  const handleAvatarChange = (file: File) => {
    const nextAvatarUrl = URL.createObjectURL(file);
    setAvatarUrl((prev) => {
      if (prev) {
        URL.revokeObjectURL(prev);
      }

      return nextAvatarUrl;
    });
  };

  useEffect(() => {
    return () => {
      if (avatarUrl) {
        URL.revokeObjectURL(avatarUrl);
      }
    };
  }, [avatarUrl]);

  return (
    <section className="px-4 md:px-8 py-6 md:py-8 bg-app-bg min-h-[calc(100vh-73px)]">
      <div className="max-w-[1240px] mx-auto space-y-6">
        <ProfileHeaderCard
          isEditing={isEditing}
          onStartEdit={handleStartEdit}
          onCancelEdit={handleCancelEdit}
        />

        <div className="grid grid-cols-1 xl:grid-cols-[340px_1fr] gap-6">
          <aside className="space-y-6">
            <article className="bg-white border border-[#e1e4eb] rounded-[24px] p-6 md:p-7">
              <AvatarUploader
                name={currentValues.fullName}
                avatarUrl={avatarUrl}
                isEditing={isEditing}
                onAvatarChange={handleAvatarChange}
              />
            </article>

            <article className="bg-white border border-[#e1e4eb] rounded-[24px] p-6 md:p-7">
              <h3 className="text-lg font-semibold text-[#121827]">Your Stats</h3>
              <div className="mt-5 space-y-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-[#e9ecf3] bg-[#fbfcfe] px-4 py-3"
                  >
                    <p className="text-xs uppercase tracking-[0.06em] font-medium text-[#8b93a2]">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-xl font-semibold text-[#1f2430]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <ProfileInfoCard values={currentValues} />
          </aside>

          <ProfileEditForm
            values={draftValues}
            isEditing={isEditing}
            onChange={handleFieldChange}
            onSubmit={handleSave}
          />
        </div>
      </div>
    </section>
  );
}
