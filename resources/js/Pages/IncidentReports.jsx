import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import IncidentStats from '@/Components/IncidentReports/IncidentStats';
import CommunityIssueMap from '@/Components/IncidentReports/CommunityIssueMap';
import RecentReportsSidebar from '@/Components/IncidentReports/RecentReportsSidebar';
import MyReportsTable from '@/Components/IncidentReports/MyReportsTable';

export default function IncidentReports() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-xl font-bold leading-tight text-gray-900">
                        Incident Reports
                    </h2>
                </div>
            }
        >
            <Head title="Incident Reports" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                {/* Top Section with Title and CTA button */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold text-[#1B385D] mb-1">Incident Reporting</h1>
                        <p className="text-gray-500 text-xs sm:text-sm max-w-2xl leading-relaxed">
                            Help us maintain a safe and clean community. Report issues directly to the barangay office and track their resolution in real-time.
                        </p>
                    </div>
                    <button className="bg-[#041933] text-white font-semibold px-5 py-3 rounded-lg text-xs hover:bg-blue-950 transition-colors shadow-xs flex items-center gap-2">
                        <span>➕</span> REPORT AN INCIDENT
                    </button>
                </div>

                {/* Statistics Row */}
                <IncidentStats />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <CommunityIssueMap />
                    </div>
                    <div>
                        <RecentReportsSidebar />
                    </div>
                </div>

                {/* History Table */}
                <MyReportsTable />
            </div>
        </AuthenticatedLayout>
    );
}