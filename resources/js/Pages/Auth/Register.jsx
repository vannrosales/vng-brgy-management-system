import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthLayout from '@/Components/AuthLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Register() {
    const [activeTab, setActiveTab] = useState('resident');
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        mobile: '',
        password: '',
        password_confirmation: '',
        terms: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout 
            title="Create an Account" 
            subtitle="Fill in the details to register for the V&G Smart Barangay portal."
        >
            <Head title="Register" />

            <div className="flex border-b border-slate-200 mb-6">
                <button 
                    type="button" 
                    onClick={() => setActiveTab('resident')}
                    className={`flex-1 py-3 text-sm font-medium ${activeTab === 'resident' ? 'text-blue-900 border-b-2 border-blue-900' : 'text-slate-400'}`}
                >
                    Resident Register
                </button>
                <button 
                    type="button" 
                    onClick={() => setActiveTab('admin')}
                    className={`flex-1 py-3 text-sm font-medium ${activeTab === 'admin' ? 'text-blue-900 border-b-2 border-blue-900' : 'text-slate-400'}`}
                >
                    Admin Register
                </button>
            </div>

            <p className="text-xs text-slate-500 mb-4">Please register as a resident or administrator.</p>

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <InputLabel htmlFor="name" value="1. Full Name" className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full px-4 py-2.5 rounded-lg border border-slate-300"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="2. Email or Username" className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1" />
                    <TextInput
                        id="email"
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full px-4 py-2.5 rounded-lg border border-slate-300"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Enter your preferred identifier"
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="mobile" value="3. Mobile Number" className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1" />
                    <TextInput
                        id="mobile"
                        type="tel"
                        name="mobile"
                        value={data.mobile}
                        className="mt-1 block w-full px-4 py-2.5 rounded-lg border border-slate-300"
                        onChange={(e) => setData('mobile', e.target.value)}
                        placeholder="Enter your mobile number"
                        required
                    />
                    <InputError message={errors.mobile} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="4. Password" className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full px-4 py-2.5 rounded-lg border border-slate-300"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password_confirmation" value="5. Confirm Password" className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1" />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full px-4 py-2.5 rounded-lg border border-slate-300"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center pt-2">
                    <input 
                        type="checkbox" 
                        id="terms" 
                        checked={data.terms}
                        onChange={(e) => setData('terms', e.target.checked)}
                        className="rounded border-slate-300 text-blue-900 focus:ring-blue-900" 
                        required
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-slate-600">Agree to Terms and Conditions</label>
                </div>

                <PrimaryButton className="w-full bg-blue-950 text-white font-semibold py-3 rounded-lg hover:bg-blue-900 transition-colors justify-center" disabled={processing}>
                    Register Account
                </PrimaryButton>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
                Already a resident? <Link href={route('login')} className="text-blue-900 font-semibold underline">Log in to Account</Link>
            </p>
        </AuthLayout>
    );
}