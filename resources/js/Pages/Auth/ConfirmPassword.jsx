import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthLayout from '@/Components/AuthLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout 
            title="Confirm Password" 
            subtitle="This is a secure area of the application. Please confirm your password before continuing."
        >
            <Head title="Confirm Password" />

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <InputLabel htmlFor="password" value="Password" className="block text-sm font-semibold text-slate-700 mb-1" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full px-4 py-2.5 rounded-lg border border-slate-300"
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <PrimaryButton className="w-full bg-blue-950 text-white font-semibold py-3 rounded-lg hover:bg-blue-900 transition-colors justify-center" disabled={processing}>
                    Confirm Password
                </PrimaryButton>
            </form>
        </AuthLayout>
    );
}