import React from 'react';

export default function MyReportsTable() {
    const myReports = [
        { type: 'Waste Management', location: '124 Maple St.', filed: 'Oct 24, 2023', status: 'Processing', badge: 'bg-amber-100 text-amber-800' },
        { type: 'Street Lights', location: 'Quezon Circle', filed: 'Oct 20, 2023', status: 'Resolved', badge: 'bg-emerald-100 text-emerald-800' },
        { type: 'Public Safety', location: 'Market Plaza', filed: 'Oct 15, 2023', status: 'Resolved', badge: 'bg-emerald-100 text-emerald-800' },
    ];

    return (
        <div className="bg-white border border-gray-300/80 rounded-lg shadow-xs overflow-hidden">
            <div className="p-6 pb-4">
                <h2 className="text-lg font-semibold text-[#1B385D]">History of My Reports</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-[#1B385D] text-[11px] font-semibold uppercase tracking-wider border-solid border-b border-blue-900">
                            <th className="py-3 px-6">Incident Type</th>
                            <th className="py-3 px-6">Location</th>
                            <th className="py-3 px-6">Date Filed</th>
                            <th className="py-3 px-6">Status</th>
                            <th className="py-3 px-6">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-xs">
                        {myReports.map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-6 font-semibold text-gray-900 flex items-center gap-2">
                                    <span className="text-gray-400 font-normal">○</span> {row.type}
                                </td>
                                <td className="py-4 px-6 text-gray-700">{row.location}</td>
                                <td className="py-4 px-6 text-gray-500">{row.filed}</td>
                                <td className="py-4 px-6">
                                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full inline-block ${row.badge}`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="py-4 px-6">
                                    <button className="text-gray-900 font-semibold hover:underline">
                                        Details
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