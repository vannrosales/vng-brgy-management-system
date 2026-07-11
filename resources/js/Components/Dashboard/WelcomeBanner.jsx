import React from 'react';

export default function WelcomeBanner({ userName, pendingCount, meetingTitle }) {
    return (
        <div className="bg-[#1B385D] text-white p-8 shadow-sm relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6 rounded-lg">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome back, {userName}!</h1>
                <p className="text-blue-200 text-sm max-w-xl">
                    Your community is active today. You have {pendingCount} pending document requests and one {meetingTitle}.
                </p>
            </div>
            <div className="flex flex-wrap gap-3">
                <button className="bg-white text-[#1B385D] font-semibold px-4 py-2.5 rounded-sm text-sm hover:bg-blue-50 transition-colors shadow-sm">
                    View My Requests
                </button>
                <button className="border border-white text-white font-semibold px-4 py-2.5 rounded-sm text-sm hover:bg-white/20">
                    Barangay Directory
                </button>
            </div>
        </div>
    );
}