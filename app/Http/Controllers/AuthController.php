<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    /**
     * Create user account.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users,email|max:255',
            'password' => 'required|string|min:8|confirmed',
        ]);

        // Encrypt the password before saving to the database
        $encryptedPassword = bcrypt($request->password);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $encryptedPassword,
        ]);

        // Generate a 6-digit OTP code
        $otpCode = str_pad(mt_rand(1, 999999), 6, '0', STR_PAD_LEFT);

        // Save the OTP code in the user's record or any other appropriate storage
        $user->otp_code = $otpCode;
        $user->save();

        // Send OTP code to user's email
        $this->sendOTP($user->email, $otpCode);

        return response()->json(['message' => 'User registered successfully. OTP sent to your email.'], 201);
    }

    // Send OTP code to user's email
    private function sendOTP($email, $otpCode)
    {
        $url = 'http://localhost:9000/verify_otp?code=' . $otpCode;

        // Send email containing the OTP code and verification link
        Mail::raw('Your OTP code: ' . $otpCode . '. Click the link to verify your email: ' . $url, function ($message) use ($email) {
            $message->to($email)->subject('Verification OTP');
        });
    }

    /**
     * Verify user credentials and create token/session.
     *
     * @param  \Illuminate\Http\Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if (Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')])) {
            $user = Auth::user();
            $token = $user->createToken('authToken')->accessToken;

            return response()->json(['message' => 'Login successful', 'user' => $user, 'token' => $token]);
        }

        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    /**
     * Verify OTP for email confirmation.
     *
     * @param  \Illuminate\Http\Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function verifyOTP(Request $request)
    {
        $otpFromEmail = $request->input('code');

        // Check if the OTP code matches the one stored in the session
        if ($otpFromEmail && Session::has('otp_code')) {
            $otpFromSession = Session::get('otp_code');

            if ($otpFromEmail === $otpFromSession) {
                // Clear the OTP code from the session
                Session::forget('otp_code');

                return redirect('/login')->with('success', 'Email verified successfully. You may now log in.');
            }
        }

        return redirect('/login')->with('error', 'The link is not valid. You may attempt to register again.');
    }
}
