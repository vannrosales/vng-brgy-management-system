import React from 'react';
import { DocumentTextIcon, ExclamationTriangleIcon, CreditCardIcon } from '@heroicons/react/24/outline';

export default function QuickActions() {
    const actions = [
        { title: 'Apply for Clearance', icon: DocumentTextIcon, color: 'text-blue-900' },
        { title: 'Report Incident', icon: ExclamationTriangleIcon, color: 'text-red-600' },
        { title: 'Pay Fees', icon: CreditCardIcon, color: 'text-emerald-700' },
    ];

    return (
        <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {actions.map((action, idx) => {
                    const IconComponent = action.icon;
                    return (
                        <div key={idx} className="p-6 bg-white border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer text-center flex flex-col items-center justify-center rounded-xl">
                            <IconComponent className={`w-8 h-8 mb-2 ${action.color}`} />
                            <h3 className="font-semibold text-sm text-gray-900">{action.title}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}