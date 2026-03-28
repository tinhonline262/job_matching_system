interface ProfileHeaderCardProps {
  isEditing: boolean;
  onStartEdit: () => void;
  onCancelEdit: () => void;
}

export default function ProfileHeaderCard({
  isEditing,
  onStartEdit,
  onCancelEdit,
}: ProfileHeaderCardProps) {
  return (
    <header className="bg-white border border-[#e1e4eb] rounded-[24px] px-6 md:px-8 py-6 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
      <div>
        <h1 className="text-[34px] leading-[1.12] tracking-[-0.02em] font-semibold text-[#121827]">
          Profile Settings
        </h1>
        <p className="mt-2 text-[15px] leading-6 text-[#748094] max-w-[560px]">
          Review your personal information and keep your resume profile up to
          date.
        </p>
      </div>

      {isEditing ? (
        <button
          type="button"
          onClick={onCancelEdit}
          className="h-11 px-6 rounded-xl border border-[#d7dbe2] bg-white text-[15px] font-medium text-[#111111] hover:bg-[#f8f8fa] transition-colors"
        >
          Cancel editing
        </button>
      ) : (
        <button
          type="button"
          onClick={onStartEdit}
          className="h-11 px-6 rounded-xl bg-[#121212] text-white text-[15px] font-medium hover:opacity-95 transition-opacity shadow-[0px_10px_24px_rgba(0,0,0,0.16)]"
        >
          Edit profile
        </button>
      )}
    </header>
  );
}
