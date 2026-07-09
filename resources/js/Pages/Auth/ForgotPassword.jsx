import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthLayout from '@/Components/AuthLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <AuthLayout 
            title="Forgot Password" 
            subtitle="Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."
        >
            <Head title="Forgot Password" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <InputLabel htmlFor="email" value="Email" className="block text-sm font-semibold text-slate-700 mb-1" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full px-4 py-2.5 rounded-lg border border-slate-300"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Enter your registered email"
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <PrimaryButton className="w-full bg-blue-950 text-white font-semibold py-3 rounded-lg hover:bg-blue-900 transition-colors justify-center" disabled={processing}>
                    Email Password Reset Link
                </PrimaryButton>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
                Remembered your password? <Link href={route('login')} className="text-blue-900 font-semibold underline">Log in to Account</Link>
            </p>
        </AuthLayout>
    );
}