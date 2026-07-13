import { HeartIcon , BellAlertIcon, SunIcon} from "@heroicons/react/24/outline";



export default function BarangayStatus() {
    return (
        <div className="bg-white border rounded-md border-gray-200 p-6 shadow-sm space-y-4">
            <h2 className="text-md font-semibold text-[#1B385D] ">Barangay Status</h2>
            <div className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
                <div>
                    <p className="text-xs text-gray-500">
                        <SunIcon className="w-4 h-4 inline-block mr-1" />
                        Sunny
                    </p>
                    <p className="text-xs font-semibold text-gray-900">Today in V&G</p>
                </div>
                <span className="text-lg font-semibold text-gray-900">31&deg;C</span>
            </div>
            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-xs font-semibold text-red-900 flex items-center gap-1">
                    <BellAlertIcon className="w-4 h-4 inline-block mr-1" />
                    Local Alert
                </p>
                <p className="text-[11px] text-red-800 mt-1">Temporary water interruption scheduled for Zone 4 from 10 PM to 4 AM.</p>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-md">
                <span className="text-xs font-semibold text-green-900">
                    <HeartIcon className="w-4 h-4 inline-block mr-1" />
                     Health Protocol</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 bg-green-200 text-green-900 rounded-md">NORMAL</span>
            </div>
        </div>
    );
}