export default function ServicesGrid() {
    const services = [
        { title: 'Document Requests', desc: 'Request Barangay Certificates, Indigency, and Clearances online with digital payment options.' },
        { title: 'Incident Reporting', desc: 'Quickly report community issues like streetlights, potholes, or safety concerns directly to the council.' },
        { title: 'Community News', desc: 'Stay updated with real-time announcements, holiday schedules, and local project progress.' },
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Digital Services</h2>
                <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">Streamlined access to essential barangay functions, designed for convenience and efficiency.</p>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((svc, idx) => (
                    <div key={idx} className="p-8 border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all flex flex-col justify-between bg-white group">
                        <div>
                            <div className="w-12 h-12 bg-blue-50 text-blue-900 flex items-center justify-center font-bold mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                                0{idx + 1}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{svc.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">{svc.desc}</p>
                        </div>
                        <span className="text-sm font-semibold text-blue-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Learn more &rarr;
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}