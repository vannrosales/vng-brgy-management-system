import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ServiceCards from '@/Components/DigitalServices/ServiceCards';
import RequestsTable from '@/Components/DigitalServices/RequestsTable';

export default function DigitalServices() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-xl font-bold leading-tight text-gray-900">
                        Digital Services
                    </h2>
                </div>
            }
        >
            <Head title="Digital Services" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                {/* Intro Section */}
                <div>
                    <h1 className="text-2xl font-black text-gray-900 mb-1">Digital Services</h1>
                    <p className="text-gray-500 text-xs sm:text-sm max-w-2xl leading-relaxed">
                        Request official documents, permits, and certifications through our streamlined digital gateway. Track your application status in real-time.
                    </p>
                </div>

                {/* Available Services Grid */}
                <ServiceCards />

                {/* History / Tracking Table */}
                <RequestsTable />
            </div>
        </AuthenticatedLayout>
    );
}