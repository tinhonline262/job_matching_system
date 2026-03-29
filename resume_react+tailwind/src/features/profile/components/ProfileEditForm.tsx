import type { ChangeEvent, FormEvent } from "react";
import type { ProfileFormValues } from "@/types";

interface ProfileEditFormProps {
  values: ProfileFormValues;
  isEditing: boolean;
  onChange: (field: keyof ProfileFormValues, value: string) => void;
  onSubmit: () => void;
}

const inputBaseClass =
  "h-11 w-full rounded-xl border px-4 text-[15px] leading-6 transition-colors";

export default function ProfileEditForm({
  values,
  isEditing,
  onChange,
  onSubmit,
}: ProfileEditFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isEditing) {
      return;
    }

    onSubmit();
  };

  const handleTextInput =
    (field: keyof ProfileFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onChange(field, event.target.value);
    };

  const readOnlyStyle = isEditing
    ? "border-[#d7dbe2] bg-white text-[#111111]"
    : "border-[#e5e8ef] bg-[#f6f7fb] text-[#6f7786]";

  return (
    <article className="bg-white border border-[#e1e4eb] rounded-[24px] p-6 md:p-7">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[22px] font-semibold text-[#121827] tracking-[-0.01em]">
          Account Information
        </h2>
        {!isEditing && (
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#f1f3f8] text-[#6b7382]">
            Read-only
          </span>
        )}
      </div>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[#313949]">Full name</span>
            <input
              value={values.fullName}
              onChange={handleTextInput("fullName")}
              disabled={!isEditing}
              className={`${inputBaseClass} ${readOnlyStyle}`}
              placeholder="Your full name"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[#313949]">Email</span>
            <input
              type="email"
              value={values.email}
              onChange={handleTextInput("email")}
              disabled={!isEditing}
              className={`${inputBaseClass} ${readOnlyStyle}`}
              placeholder="name@example.com"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[#313949]">Phone</span>
            <input
              value={values.phone}
              onChange={handleTextInput("phone")}
              disabled={!isEditing}
              className={`${inputBaseClass} ${readOnlyStyle}`}
              placeholder="+84 000 000 000"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[#313949]">Current role</span>
            <input
              value={values.jobTitle}
              onChange={handleTextInput("jobTitle")}
              disabled={!isEditing}
              className={`${inputBaseClass} ${readOnlyStyle}`}
              placeholder="Frontend Engineer"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[#313949]">Location</span>
            <input
              value={values.location}
              onChange={handleTextInput("location")}
              disabled={!isEditing}
              className={`${inputBaseClass} ${readOnlyStyle}`}
              placeholder="Ho Chi Minh City"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[#313949]">LinkedIn</span>
            <input
              value={values.linkedin}
              onChange={handleTextInput("linkedin")}
              disabled={!isEditing}
              className={`${inputBaseClass} ${readOnlyStyle}`}
              placeholder="https://linkedin.com/in/your-profile"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[#313949]">GitHub</span>
            <input
              value={values.github}
              onChange={handleTextInput("github")}
              disabled={!isEditing}
              className={`${inputBaseClass} ${readOnlyStyle}`}
              placeholder="https://github.com/your-profile"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[#313949]">Website</span>
            <input
              value={values.website}
              onChange={handleTextInput("website")}
              disabled={!isEditing}
              className={`${inputBaseClass} ${readOnlyStyle}`}
              placeholder="https://your-portfolio.com"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-[#313949]">Professional summary</span>
          <textarea
            value={values.bio}
            onChange={handleTextInput("bio")}
            disabled={!isEditing}
            className={`w-full min-h-[120px] rounded-xl border px-4 py-3 text-[15px] leading-6 resize-y transition-colors ${readOnlyStyle}`}
            placeholder="Tell recruiters about your strengths and experience..."
          />
        </label>

        {isEditing && (
          <div className="flex justify-end pt-1">
            <button
              type="submit"
              className="h-11 px-6 rounded-xl bg-[#121212] text-white text-[15px] font-medium hover:opacity-95 transition-opacity shadow-[0px_10px_24px_rgba(0,0,0,0.16)]"
            >
              Save changes
            </button>
          </div>
        )}
      </form>
    </article>
  );
}
