export default function WelcomeBanner() {
    return (
        <div className="bg-blue-950 text-white p-8 shadow-sm relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome back, Juan!</h1>
                <p className="text-blue-200 text-sm max-w-xl">
                    Your community is active today. You have 2 pending document requests and one upcoming town hall meeting.
                </p>
            </div>
            <div className="flex flex-wrap gap-3">
                <button className="bg-white text-blue-950 font-semibold px-4 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors shadow-sm">
                    View My Requests
                </button>
                <button className="border border-blue-800 text-white font-semibold px-4 py-2.5 rounded-xl text-sm hover:bg-blue-900/50 transition-colors">
                    Barangay Directory
                </button>
            </div>
        </div>
    );
}