'use server'

import { createUserInDB, getUserByEmail } from "../services/userServices";

export async function registerUser(data: FormData) {
    const username = data.get('username')?.toString();
    const email = data.get('email')?.toString();
    const password = data.get('password')?.toString();

    if (!username || !email || !password) {
        throw new Error('Missing required fields');
    }
    const newUser = { username, email, password };
    await createUserInDB(newUser);

    console.log('Registering user:', { username, email });
    return { message: 'User registered successfully' };
}
export async function loginUser(data: FormData) {
    try {
        const email = data.get('email')?.toString();
        const password = data.get('password')?.toString();

        if (!email || !password) {
            return { success: false, message: 'Missing required fields' };
        }
        const newLogin = { email, password };
        const result: any = await getUserByEmail(newLogin);

        const dbUser = Array.isArray(result) ? result[0] : result;

        if (!dbUser || !dbUser.password) {
            return { success: false, message: 'User not found! Please register first.' };
        }

        if (dbUser.password !== password) {
            return { success: false, message: 'Invalid password!' };
        }
        console.log('Login successful:', { email });
        return { success: true, message: 'User login successfully', user: dbUser };

    } catch (error: any) {
        console.error("Login server action error:", error);
        return { success: false, message: error.message || "Login failed" };
    }
}