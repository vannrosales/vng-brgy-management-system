export default function ServiceCards() {
    const services = [
        {
            title: 'Barangay Clearance',
            desc: 'For employment, identification, and general legal purposes within the local jurisdiction.',
            icon: '🛡️',
            bgIcon: 'bg-slate-900 text-white',
        },
        {
            title: 'Residency Cert',
            desc: 'Formal certification of your domicile within the barangay for utility applications and bank requirements.',
            icon: '📍',
            bgIcon: 'bg-emerald-400 text-emerald-800',
        },
        {
            title: 'Indigency Cert',
            desc: 'For educational assistance, medical aid, and social welfare programs for qualified residents.',
            icon: '🤝',
            bgIcon: 'bg-amber-100 text-amber-800',
        },
        {
            title: 'Business Permit',
            desc: 'Endorsement and clearance for local commercial activities and small enterprise operations.',
            icon: '🏪',
            bgIcon: 'bg-blue-400 text-blue-900',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, idx) => (
                <div key={idx} className={'bg-white border border-gray-200/80 p-6 flex flex-col justify-between shadow-xs hover:bg-sky-100 hover:border-sky-800 hover:border-solid hover:transcaleform hover:scale-105 transition-transform'}>
                    <div>
                        <div className={`w-10 h-10 flex items-center justify-center text-lg mb-4 ${svc.bgIcon}`}>
                            {svc.icon}
                        </div>
                        <h3 className="font-bold text-lg text-[#1B385D] mb-2 leading-snug">{svc.title}</h3>
                        <p className="text-xs text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                    </div>
                    <button className="w-full bg-[#041933] text-white font-medium py-2.5 text-xs hover:bg-blue-950 transition-colors shadow-xs">
                        Request
                    </button>
                </div>
            ))}
        </div>
    );
}