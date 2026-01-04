type Props = {
  title: string;
  value: number;
};

export default function StatCard({ title, value }: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <p className="text-sm text-gray-500">
        {title}
      </p>
      <p className="text-3xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}
