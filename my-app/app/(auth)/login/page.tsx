'use client'

import { loginUser } from "@/action/userAction";


export default function LoginPage() {

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const something = await loginUser(formData)
        console.log(something)
    }
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 font-sans p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

                {/* Title Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-violet-600 mb-1">
                        Login Page
                    </h1>
                    <p className="text-sm text-gray-o500">
                        Welcome back! Please enter your details
                    </p>
                </div>

                {/* Form Section */}
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Email Address
                        </label>
                        <input
                            type="text"
                            name="email"
                            className="w-full h-11 px-4 rounded-xl border border-gray-300 text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                            placeholder="Email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="w-full h-11 px-4 rounded-xl border border-gray-300 text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                            placeholder="Password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full h-11 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:scale-[0.99] transition-all duration-200 shadow-md shadow-blue-500/10 mt-2"
                    >
                        Login
                    </button>
                </form>

            </div>
        </div>
    )

}