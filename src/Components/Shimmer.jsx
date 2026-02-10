export default function Shimmer() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array(6)
          .fill("")
          .map((_, i) => (
            <div key={i} className="animate-pulse rounded-2xl shadow-md p-4">
              <div className="h-40 bg-gray-300 rounded-xl mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          ))}
      </div>
    </div>
  );
}
