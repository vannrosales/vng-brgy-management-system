import React from 'react';

export default function RecentReportsSidebar() {
    const reports = [
        { 
            status: 'PENDING', 
            time: 'Just now', 
            title: 'Uncollected Garbage', 
            desc: 'Corner of Rizal St. and Bonifacio...', 
            badge: 'bg-[#fef3c7] text-[#d97706]',
            metaText: '2 PHOTOS' 
        },
        { 
            status: 'RESOLVED', 
            time: '4h ago', 
            title: 'Broken Street Light', 
            desc: 'Block 4, Phase 2, Near the Chapel', 
            badge: 'bg-[#d1fae5] text-[#059669]',
            metaText: 'ISSUE CLOSED' 
        },
        { 
            status: 'URGENT', 
            time: '1d ago', 
            title: 'Blocked Drainage', 
            desc: 'San Jose St., Flood prone area', 
            badge: 'bg-[#fee2e2] text-[#dc2626]',
            metaText: '' 
        },
    ];

    return (
        <div className="bg-white border border-gray-200/80 rounded-xl p-5 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-gray-900 tracking-tight">Recent Reports</h2>
            <div className="space-y-3">
                {reports.map((rep, idx) => (
                    <div key={idx} className="p-3.5 bg-white border border-gray-200/80 rounded-lg shadow-2xs space-y-1.5 hover:border-gray-300 transition-all">
                        <div className="flex justify-between items-center text-[10px]">
                            <span className={`font-bold px-2.5 py-0.5 rounded-full tracking-wider ${rep.badge}`}>{rep.status}</span>
                            <span className="text-gray-400 font-normal text-[11px]">{rep.time}</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-[13px] text-gray-900 leading-snug">{rep.title}</h3>
                            <p className="text-[11px] text-gray-500 font-normal truncate mt-0.5">{rep.desc}</p>
                        </div>
                        {rep.metaText && (
                            <p className="text-[10px] text-gray-500 font-semibold pt-0.5">{rep.metaText}</p>
                        )}
                    </div>
                ))}
            </div>
            <button className="w-full py-2.5 border border-gray-200 text-gray-800 font-bold rounded-lg text-xs hover:bg-gray-50/80 transition-colors shadow-2xs">
                View All Public Reports
            </button>
        </div>
    );
}