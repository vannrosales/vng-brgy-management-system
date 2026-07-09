export default function StatsBar() {
    const stats = [
        { label: 'Registered Residents', value: '12k+' },
        { label: 'Requests Processed', value: '5k+' },
        { label: 'System Availability', value: '24/7' },
        { label: 'Digital Transparency', value: '100%' },
    ];

    return (
        <section className="bg-slate-100 py-10 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <span className="text-3xl lg:text-4xl font-black text-blue-950 mb-1">{stat.value}</span>
                            <span className="text-xs lg:text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}