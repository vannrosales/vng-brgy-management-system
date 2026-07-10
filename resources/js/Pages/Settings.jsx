import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { UserIcon, ShieldCheckIcon, BellIcon, PencilSquareIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Settings() {
    const { data, setData, post, processing } = useForm({
        name: 'Juan Dela Cruz',
        resident_id: 'VGB-2023-0892',
        contact_number: '+63 917 123 4567',
        email: 'juan.delacruz@example.com',
        address: '123 Molave Street, Phase 3, V&G Subdivision, Barangay 96, Tacloban City',
        notifications: {
            emergency_email: true,
            emergency_sms: true,
            community_email: true,
            community_sms: false,
            request_email: true,
            request_sms: true,
        }
    });

    const [savedToast, setSavedToast] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setSavedToast(true);
        setTimeout(() => setSavedToast(false), 4000);
    };

    const toggleNotification = (key) => {
        setData('notifications', {
            ...data.notifications,
            [key]: !data.notifications[key]
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Settings" />

            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-extrabold text-[#1B385D] tracking-tight">Settings</h1>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    {/* Profile Settings Card */}
                    <div className="bg-white border border-gray-200/80  p-6 sm:p-8 shadow-xs space-y-6">
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
                            <UserIcon className="w-5 h-5 text-[#1B385D]" />
                            <h2 className="font-bold text-base text-[#1B385D]">Profile Settings</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                            {/* Profile Photo Upload Placeholder */}
                            <div className="flex flex-col items-center justify-center space-y-3">
                                <div className="relative w-28 h-28  bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shadow-inner">
                                    <img 
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" 
                                        alt="Profile Preview" 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-1.5 right-1.5 bg-[#4F2F00] text-white p-1.5 rounded-lg shadow-md cursor-pointer hover:bg-[#3d2400]">
                                        <PencilSquareIcon className="w-3.5 h-3.5" />
                                    </div>
                                </div>
                                <span className="text-[11px] font-semibold text-gray-500 text-center">Change profile photo</span>
                            </div>

                            {/* Form Fields */}
                            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name</label>
                                    <input 
                                        type="text" 
                                        value={data.name} 
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-[#1B385D] focus:border-[#1B385D]" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Resident ID</label>
                                    <input 
                                        type="text" 
                                        value={data.resident_id} 
                                        disabled
                                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Contact Number</label>
                                    <input 
                                        type="text" 
                                        value={data.contact_number} 
                                        onChange={(e) => setData('contact_number', e.target.value)}
                                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-[#1B385D] focus:border-[#1B385D]" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address</label>
                                    <input 
                                        type="email" 
                                        value={data.email} 
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-[#1B385D] focus:border-[#1B385D]" 
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Residential Address</label>
                                    <textarea 
                                        rows="2"
                                        value={data.address} 
                                        onChange={(e) => setData('address', e.target.value)}
                                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-[#1B385D] focus:border-[#1B385D]" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security Card */}
                    <div className="bg-white border border-gray-200/80 p-6 sm:p-8 shadow-xs space-y-6">
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
                            <ShieldCheckIcon className="w-5 h-5 text-[#1B385D]" />
                            <h2 className="font-bold text-base text-[#1B385D]">Security</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2.5 border-b border-gray-100 gap-4">
                                <div>
                                    <h3 className="text-xs font-bold text-slate-800">Account Password</h3>
                                    <p className="text-[11px] text-gray-500">Last changed 3 months ago</p>
                                </div>
                                <button type="button" className="border border-slate-300 text-slate-700 font-semibold px-4 py-2 rounded-xl text-xs hover:bg-slate-50 transition-colors">
                                    Change Password
                                </button>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2.5 gap-4">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-xs font-bold text-slate-800">Two-Factor Authentication (2FA)</h3>
                                        <span className="text-[10px] font-bold text-[#2D6A4F] bg-emerald-50 px-2 py-0.5 rounded-md">Enabled</span>
                                    </div>
                                    <p className="text-[11px] text-gray-500">Protect your account with an extra layer of security via SMS or Auth App.</p>
                                </div>
                                <button type="button" className="border border-slate-300 text-slate-700 font-semibold px-4 py-2 rounded-xl text-xs hover:bg-slate-50 transition-colors">
                                    Manage
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Notification Preferences Card */}
                    <div className="bg-white border border-gray-200/80 p-6 sm:p-8 shadow-xs space-y-6">
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
                            <BellIcon className="w-5 h-5 text-[#1B385D]" />
                            <h2 className="font-bold text-base text-[#1B385D]">Notification Preferences</h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead>
                                    <tr className="border-b border-gray-200 text-[#64748B] font-bold uppercase text-[10px] tracking-wider">
                                        <th className="pb-3">Category</th>
                                        <th className="pb-3 text-center w-20">Email</th>
                                        <th className="pb-3 text-center w-20">SMS</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="py-4 space-y-0.5">
                                            <p className="font-bold text-[#1B385D]">Emergency Alerts</p>
                                            <p className="text-[11px] text-[#64748B] font-normal">Immediate notifications for disasters and safety warnings</p>
                                        </td>
                                        <td className="py-4 text-center">
                                            <input 
                                                type="checkbox" 
                                                checked={data.notifications.emergency_email} 
                                                onChange={() => toggleNotification('emergency_email')}
                                                className="w-4 h-4 rounded text-[#2D6A4F] border-slate-300 focus:ring-[#2D6A4F] cursor-pointer" 
                                            />
                                        </td>
                                        <td className="py-4 text-center">
                                            <input 
                                                type="checkbox" 
                                                checked={data.notifications.emergency_sms} 
                                                onChange={() => toggleNotification('emergency_sms')}
                                                className="w-4 h-4 rounded text-[#2D6A4F] border-slate-300 focus:ring-[#2D6A4F] cursor-pointer" 
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 space-y-0.5">
                                            <p className="font-bold text-[#1B385D]">Community News</p>
                                            <p className="text-[11px] text-[#64748B] font-normal">Weekly updates on barangay events and programs</p>
                                        </td>
                                        <td className="py-4 text-center">
                                            <input 
                                                type="checkbox" 
                                                checked={data.notifications.community_email} 
                                                onChange={() => toggleNotification('community_email')}
                                                className="w-4 h-4 rounded text-[#2D6A4F] border-slate-300 focus:ring-[#2D6A4F] cursor-pointer" 
                                            />
                                        </td>
                                        <td className="py-4 text-center">
                                            <input 
                                                type="checkbox" 
                                                checked={data.notifications.community_sms} 
                                                onChange={() => toggleNotification('community_sms')}
                                                className="w-4 h-4 rounded text-[#2D6A4F] border-slate-300 focus:ring-[#2D6A4F] cursor-pointer" 
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 space-y-0.5">
                                            <p className="font-bold text-[#1B385D]">Request Updates</p>
                                            <p className="text-[11px] text-[#64748B] font-normal">Status changes for documents and service requests</p>
                                        </td>
                                        <td className="py-4 text-center">
                                            <input 
                                                type="checkbox" 
                                                checked={data.notifications.request_email} 
                                                onChange={() => toggleNotification('request_email')}
                                                className="w-4 h-4 rounded text-[#2D6A4F] border-slate-300 focus:ring-[#2D6A4F] cursor-pointer" 
                                            />
                                        </td>
                                        <td className="py-4 text-center">
                                            <input 
                                                type="checkbox" 
                                                checked={data.notifications.request_sms} 
                                                onChange={() => toggleNotification('request_sms')}
                                                className="w-4 h-4 rounded text-[#2D6A4F] border-slate-300 focus:ring-[#2D6A4F] cursor-pointer" 
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end items-center gap-3 pt-2">
                        <button type="button" className="border border-slate-300 text-slate-700 font-semibold px-6 py-2.5 rounded-xl text-xs hover:bg-slate-50 transition-colors">
                            Cancel
                        </button>
                        <button type="submit" disabled={processing} className="bg-[#1B385D] text-white font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-[#142945] transition-all shadow-md">
                            Save Changes
                        </button>
                    </div>
                </form>

                {/* Toast Notification */}
                {savedToast && (
                    <div className="fixed bottom-6 right-6 z-50 bg-[#2D6A4F] text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-2.5 text-xs font-bold animate-bounce">
                        <CheckCircleIcon className="w-5 h-5 text-emerald-200" /> Changes saved successfully!
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}