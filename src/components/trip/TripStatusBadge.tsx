export default function TripStatusBadge({
  status,
}: {
  status: 'UPCOMING' | 'RUNNING' | 'COMPLETED';
}) {
  const colorMap = {
    UPCOMING: 'bg-blue-500',
    RUNNING: 'bg-green-500',
    COMPLETED: 'bg-gray-500',
  };

  return (
    <span
      className={`text-white text-xs px-3 py-1 rounded-full ${colorMap[status]}`}
    >
      {status}
    </span>
  );
}
