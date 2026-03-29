import { useMemo, useRef } from "react";
import type { ChangeEvent } from "react";

interface AvatarUploaderProps {
  name: string;
  avatarUrl: string | null;
  isEditing: boolean;
  onAvatarChange: (file: File) => void;
}

export default function AvatarUploader({
  name,
  avatarUrl,
  isEditing,
  onAvatarChange,
}: AvatarUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const initials = useMemo(() => {
    const chunks = name.trim().split(/\s+/).filter(Boolean);
    if (chunks.length === 0) {
      return "CN";
    }

    return chunks
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase() ?? "")
      .join("");
  }, [name]);

  const handleSelectAvatar = () => {
    if (!isEditing) {
      return;
    }

    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    onAvatarChange(file);
    event.target.value = "";
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        type="button"
        className="group relative w-28 h-28 rounded-full border border-[#d6d6de] bg-white shadow-[0px_8px_20px_rgba(15,23,42,0.06)] overflow-hidden"
        onClick={handleSelectAvatar}
        disabled={!isEditing}
        aria-label="Update profile avatar"
      >
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="w-full h-full flex items-center justify-center bg-[#111111] text-white text-xl font-semibold tracking-[0.02em]">
            {initials}
          </span>
        )}

        {isEditing && (
          <span className="absolute inset-0 bg-black/45 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            Change
          </span>
        )}
      </button>

      <div className="text-center">
        <p className="text-sm font-medium text-[#202329]">Profile photo</p>
        <p className="text-xs text-[#7f8896] mt-1">PNG, JPG up to 5MB</p>
      </div>

      {isEditing && (
        <button
          type="button"
          className="h-10 px-4 rounded-xl border border-[#d7dbe2] bg-white text-sm font-medium text-[#111111] hover:bg-[#f8f8fa] transition-colors"
          onClick={handleSelectAvatar}
        >
          Upload new avatar
        </button>
      )}

      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept="image/png,image/jpeg,image/webp"
        onChange={handleFileChange}
      />
    </div>
  );
}
