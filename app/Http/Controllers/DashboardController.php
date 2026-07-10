<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $user = $request->user();
        $pendingRequestsCount = DocumentRequest::where('user_id', $user->id)->where('status', 'pending')->count();
        $upcomingMeeting = Event::where('type', 'town_hall')->where('date', '>=', now())->first();

        return Inertia::render('Dashboard', [
            'pendingRequestsCount' => $pendingRequestsCount,
            'upcomingMeeting' => $upcomingMeeting,
        ]);
        return view('dashboard');
    }
}
