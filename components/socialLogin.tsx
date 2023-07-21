'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/context/user';
import { verifyGoogleUser } from '@/helpers/backend_helper';
import { UserType } from '@/helpers/types';
import { Button } from 'primereact/button';
import firebase from 'firebase/compat';
import { Auth, getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import Image from 'next/image';


const SocialSignIn: React.FC = () => {
    const router = useRouter();
    const {  setLoggedInUser } = useUserContext();
    //initialize  firebase
    const app = initializeApp(firebaseConfig);
    const auth: Auth = getAuth(app);

    // Sign out of Firebase.
    function signOutUser() {
        signOut(getAuth());
    }

    const handleGoogleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(async (res) => {
                const data: UserType = {
                    name: res.user.displayName,
                    image: res.user.photoURL,
                    phone: res.user.phoneNumber,
                    email: res.user.email,
                    access_token: await res.user.getIdToken(),
                    auth_type: 'google',
                };
                // try to verify from server
                try {
                    const { data: user, error, msg, token } = await verifyGoogleUser(data);

                    if (error === true) {
                        //show false notification
                        alert(msg);
                    }
                    if (user?.email && !error) {
                        token && localStorage.setItem('authToken', token);
                        user?.auth_type && localStorage.setItem('auth_type', user?.auth_type);
                        setLoggedInUser(user);
                        switch (user?.role) {
                            case 'admin':
                                await router.push('/admin');
                                break;
                            case 'user':
                                await router.push('/');
                                break;
                            default:
                                await router.push('/');
                        }
                    } else {
                        //collect extra data like phone
                        // token && localStorage.setItem('authToken', token);
                        // user?.auth_type && localStorage.setItem('auth_type', user?.auth_type)
                        // router.push(`/profile/?role=${user?.role}&auth_type=${user?.auth_type}`);
                        // toast.error("You must provide phone number to continue");
                        // setLoading(false)
                    }
                } catch (err) {
                    alert(err.message);
                }
            })
            .catch((err) => {
                console.log('error: ', err.message);
            });
    };

    return (
        <div>
            {/*Sign in with Google with svg*/}
            <button
                onClick={handleGoogleLogin}
                className="px-4 py-2 border-2 border-green-900 shadow flex gap-2 rounded-lg text-slate-700 hover:border-green-500 hover:text-slate-900 hover:shadow-2xl transition duration-150">
                <Image height={6} width={6} className="w-6 h-6" src="/google.svg"
                     alt="google logo"/>
                    <span>Login with Google</span>
            </button>
        </div>
    );
};

export default SocialSignIn;

const firebaseConfig = {
    apiKey: "AIzaSyATFWF0Vt24XyQKuAHmOBS3hcyJy48pa58",
    authDomain: "blog-7885a.firebaseapp.com",
    projectId: "blog-7885a",
    storageBucket: "blog-7885a.appspot.com",
    messagingSenderId: "1085643763397",
    appId: "1:1085643763397:web:21a196b6ecf881c509caac"
};
