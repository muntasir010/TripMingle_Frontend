interface AuthInputProps {
  label: string;
  type?: string;
  placeholder?: string;
}

export default function AuthInput({
  label,
  type = "text",
  placeholder,
}: AuthInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-md border px-3 py-2 text-sm outline-none focus:border-blue-500"
      />
    </div>
  );
}
