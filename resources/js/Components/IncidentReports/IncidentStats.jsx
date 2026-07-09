export default function IncidentStats() {
    const stats = [
        { label: 'Active Reports', value: '12', color: 'text-gray-900' },
        { label: 'Resolved (30 Days)', value: '48', color: 'text-emerald-700' },
        { label: 'Avg. Response Time', value: '2.4h', color: 'text-gray-900' },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
                <div key={idx} className="bg-white border border-gray-200/80 p-6 text-center shadow-xs">
                    <span className={`text-3xl font-black block mb-1 ${stat.color}`}>{stat.value}</span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</span>
                </div>
            ))}
        </div>
    );
}