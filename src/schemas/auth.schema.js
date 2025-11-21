import {z} from 'zod';
export const registerSchema = z.object({
    username: z.string({
        error: issue => issue.input === undefined ? "Username is required" : "Invalid username"
    }),
    email: z.email({
        error: issue => issue.input === undefined ? "Email is required" : "Invalid email"
    }),
    password: z.string({
        error: issue => issue.input === undefined ? "Password is required" : "Invalid password"
    }).min(6, {
        message: 'Password must be at least 6 characters'
    }),
});

export const loginSchema = z.object({
    email: z.email({
        error: issue => issue.input === undefined ? "Email is required" : "Invalid email"
    }),
    password: z.string({
        error: issue => issue.input === undefined ? "Password is required" : "Invalid password"
    }).min(6, {
        message: 'Password must be at least 6 characters'
    }),
});