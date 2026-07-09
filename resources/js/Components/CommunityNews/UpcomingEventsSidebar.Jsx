import React from 'react';
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function UpcomingEventsSidebar() {
    const events = [
        {
            month: 'OCT', day: '28', color: 'bg-blue-100 text-blue-800',
            title: 'Monthly Town Hall Meeting', time: '14:00 - 16:00', location: 'Main Hall'
        },
        {
            month: 'NOV', day: '05', color: 'bg-emerald-100 text-emerald-800',
            title: 'Tree Planting Activity', time: '07:00 - 11:00', location: 'V&G Eco-Park'
        },
        {
            month: 'NOV', day: '12', color: 'bg-indigo-100 text-indigo-900',
            title: 'Free Legal Clinic', time: '09:00 - 15:00', location: 'Office of the Captain'
        }
    ];

    return (
        <div className="bg-white border border-gray-200/80 rounded-xl p-5 shadow-2xs space-y-4 h-full flex flex-col justify-between">
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-900 font-bold text-sm tracking-tight border-b border-gray-100 pb-3">
                    <CalendarIcon className="w-5 h-5 text-[#041933]" /> Upcoming Events
                </div>
                <div className="space-y-3.5">
                    {events.map((ev, idx) => (
                        <div key={idx} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                            <div className={`w-10 h-11 rounded-lg flex flex-col items-center justify-center font-extrabold text-[10px] leading-tight shrink-0 ${ev.color}`}>
                                <span className="tracking-widest">{ev.month}</span>
                                <span className="text-sm font-black">{ev.day}</span>
                            </div>
                            <div className="space-y-0.5 text-xs">
                                <h4 className="font-bold text-gray-900 leading-tight">{ev.title}</h4>
                                <p className="text-[11px] text-gray-400 flex items-center gap-1 font-medium">
                                    <ClockIcon className="w-3 h-3" /> {ev.time}
                                </p>
                                <p className="text-[11px] text-gray-400 flex items-center gap-1 font-medium">
                                    <MapPinIcon className="w-3 h-3" /> {ev.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="w-full py-2.5 border border-gray-200 text-[#041933] font-bold rounded-lg text-xs hover:bg-gray-50 transition-colors shadow-2xs">
                View Full Calendar
            </button>
        </div>
    );
}