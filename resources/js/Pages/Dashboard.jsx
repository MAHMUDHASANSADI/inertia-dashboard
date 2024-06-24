import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="container mt-5">
                <h1>Welcome, {user.name}!</h1>
                <div className="row mt-4">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Users</h5>
                                <p className="card-text">Manage users</p>
                                <InertiaLink href="/users" className="btn btn-primary">Go to Users</InertiaLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Settings</h5>
                                <p className="card-text">Application settings</p>
                                <InertiaLink href="/settings" className="btn btn-primary">Go to Settings</InertiaLink>
                            </div>
                        </div>
                    </div>
                    {/* Add more sections as needed */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
