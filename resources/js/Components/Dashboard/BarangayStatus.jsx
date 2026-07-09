export default function BarangayStatus() {
    return (
        <div className="bg-white border border-gray-200 p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-gray-900">Barangay Status</h2>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                    <p className="text-xs text-gray-500">Sunny</p>
                    <p className="text-xs font-semibold text-gray-900">Today in V&G</p>
                </div>
                <span className="text-2xl font-black text-gray-900">31&deg;C</span>
            </div>
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-xs font-bold text-amber-900 flex items-center gap-1">&#9888; Local Alert</p>
                <p className="text-[11px] text-amber-800 mt-1">Temporary water interruption scheduled for Zone 4 from 10 PM to 4 AM.</p>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-xl">
                <span className="text-xs font-bold text-green-900">&#129658; Health Protocol</span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 bg-green-200 text-green-900 rounded-md">NORMAL</span>
            </div>
        </div>
    );
}