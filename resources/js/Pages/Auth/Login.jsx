import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthLayout from '@/Components/AuthLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Login({ status, canResetPassword }) {
    const [activeTab, setActiveTab] = useState('resident');
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout 
            title="Welcome Back" 
            subtitle="Please select your login type and enter your credentials."
        >
            <Head title="Login" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            {/* Tabs */}
            <div className="flex border-b border-slate-200 mb-6">
                <button 
                    type="button"
                    onClick={() => setActiveTab('resident')}
                    className={`flex-1 py-3 text-sm font-medium ${activeTab === 'resident' ? 'text-blue-900 border-b-2 border-blue-900' : 'text-slate-400'}`}
                >
                    Resident Login
                </button>
                <button 
                    type="button"
                    onClick={() => setActiveTab('admin')}
                    className={`flex-1 py-3 text-sm font-medium ${activeTab === 'admin' ? 'text-blue-900 border-b-2 border-blue-900' : 'text-slate-400'}`}
                >
                    Admin Portal
                </button>
            </div>

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <InputLabel htmlFor="email" value="Email or Username" className="block text-sm font-semibold text-slate-700 mb-1" />
                    <TextInput
                        id="email"
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full px-4 py-2.5 rounded-lg border border-slate-300"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Enter your registered identifier"
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>
                
                <div>
                    <div className="flex justify-between items-center mb-1">
                        <InputLabel htmlFor="password" value="Password" className="block text-sm font-semibold text-slate-700" />
                        {canResetPassword && (
                            <Link href={route('password.request')} className="text-xs text-blue-900 font-medium">
                                Forgot Password?
                            </Link>
                        )}
                    </div>
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full px-4 py-2.5 rounded-lg border border-slate-300"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center">
                    <input 
                        type="checkbox" 
                        id="remember" 
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData('remember', e.target.checked)}
                        className="rounded border-slate-300 text-blue-900 focus:ring-blue-900" 
                    />
                    <label htmlFor="remember" className="ml-2 text-sm text-slate-600">Remember me on this device</label>
                </div>

                <PrimaryButton className="w-full bg-blue-950 text-white font-semibold py-3 rounded-lg hover:bg-blue-900 transition-colors justify-center" disabled={processing}>
                    Login to Account →
                </PrimaryButton>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
                New resident? <Link href={route('register')} className="text-blue-900 font-semibold underline">Register for an Account</Link>
            </p>
        </AuthLayout>
    );
}