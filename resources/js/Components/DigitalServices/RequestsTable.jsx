export default function RequestsTable() {
    const requests = [
        { 
            tracking: 'TRK-2023-9842', 
            type: 'Barangay Clearance', 
            date: 'Oct 24, 2023', 
            status: 'PENDING', 
            badge: 'bg-[#FEF3C7] text-[#92400E]', 
            action: 'View Details', 
            actionClass: 'text-gray-900 hover:underline font-medium' 
        },
        { 
            tracking: 'TRK-2023-8105', 
            type: 'Residency Certification', 
            date: 'Oct 21, 2023', 
            status: 'PROCESSING', 
            badge: 'bg-[#DBEAFE] text-[#1E40AF]', 
            action: 'View Details', 
            actionClass: 'text-gray-900 hover:underline font-medium' 
        },
        { 
            tracking: 'TRK-2023-7721', 
            type: 'Business Permit', 
            date: 'Oct 19, 2023', 
            status: 'READY FOR PICKUP', 
            badge: 'bg-[#D1FAE5] text-[#065F46]', 
            action: 'Download Receipt', 
            actionClass: 'bg-[#047857] text-white px-3 py-1.5 rounded-md text-[11px] font-semibold hover:bg-[#065F46] transition-colors shadow-xs' 
        },
    ];

    return (
        <div className="bg-white shadow-xs overflow-hidden">
            <div className="p-6 pb-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-[#1B385D] ">My Requests</h2>
                <span className="text-xs font-semibold text-[#041933] cursor-pointer hover:underline flex items-center gap-1">
                    View All History &rarr;
                </span>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#041933] text-white text-[11px] font-semibold uppercase tracking-wider ">
                            <th className="py-3 px-6 border-r border-red-100">Tracking Number</th>
                            <th className="py-3 px-6 border-r border-red-100 ">Document Type</th>
                            <th className="py-3 px-6 border-r border-red-100">Date Requested</th>
                            <th className="py-3 px-6 border-r border-red-100">Status</th>
                            <th className="py-3 px-6 border-r border-red-100">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-xs">
                        {requests.map((req, idx) => (
                            <tr key={idx} className="hover:bg-blue-100 transition-colors border-b border-gray-100">
                                <td className="py-4 px-6 font-semibold text-gray-900">{req.tracking}</td>
                                <td className="py-4 px-6 text-gray-700">{req.type}</td>
                                <td className="py-4 px-6 text-gray-500">{req.date}</td>
                                <td className="py-4 px-6">
                                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full inline-block tracking-wide ${req.badge}`}>
                                        {req.status}
                                    </span>
                                </td>
                                <td className="py-4 px-6">
                                    <button className={req.actionClass}>
                                        {req.action}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}