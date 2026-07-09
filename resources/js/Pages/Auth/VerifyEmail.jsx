import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthLayout from '@/Components/AuthLayout';
import PrimaryButton from '@/Components/PrimaryButton';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <AuthLayout 
            title="Email Verification" 
            subtitle="Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."
        >
            <Head title="Email Verification" />

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    A new verification link has been sent to the email address you provided during registration.
                </div>
            )}

            <form onSubmit={submit} className="space-y-4">
                <PrimaryButton className="w-full bg-blue-950 text-white font-semibold py-3 rounded-lg hover:bg-blue-900 transition-colors justify-center" disabled={processing}>
                    Resend Verification Email
                </PrimaryButton>

                <div className="text-center pt-2">
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="text-sm text-blue-900 font-semibold underline hover:text-blue-950 focus:outline-none"
                    >
                        Log Out
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}