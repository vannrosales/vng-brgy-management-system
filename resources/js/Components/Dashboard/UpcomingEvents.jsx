export default function UpcomingEvents() {
    const events = [
        { date: 'OCT 28', title: 'Town Hall Assembly', time: '09:00 AM • Main Court' },
        { date: 'NOV 02', title: 'Waste Segregation Seminar', time: '02:00 PM • Multi-purpose Hall' },
        { date: 'NOV 15', title: 'Barangay Sports Festival', time: '08:00 AM • Plaza' },
    ];

    return (
        <div className="bg-white border border-gray-200 p-6 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Upcoming Events</h2>
                <span className="text-gray-400">&#128197;</span>
            </div>
            <div className="space-y-3">
                {events.map((event, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2.5 bg-gray-50">
                        <div className="bg-blue-900 text-white rounded-lg p-2 text-center w-12 shrink-0">
                            <p className="text-[9px] uppercase tracking-wider font-bold">{event.date.split(' ')[0]}</p>
                            <p className="text-xs font-black">{event.date.split(' ')[1]}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-900">{event.title}</p>
                            <p className="text-[11px] text-gray-500">{event.time}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-xl text-xs hover:bg-gray-50 transition-colors">
                Open Calendar
            </button>
        </div>
    );
}