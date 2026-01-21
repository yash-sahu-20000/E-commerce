function StatCard({ title, value, icon, color }) {
  return (
    <div
      className="flex items-center justify-between
                 bg-white dark:bg-gray-900
                 border rounded-xl p-4
                 min-w-[220px] flex-1"
    >
      <div className="flex flex-col gap-1">
        <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {value}
        </h3>
      </div>

      <div className={`text-3xl ${color}`}>
        {icon}
      </div>
    </div>
  );
}

export default StatCard;