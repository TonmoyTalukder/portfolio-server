import { z } from 'zod';

const registerValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email('Invalid email address'), // Email validation
    password: z.string({
      required_error: 'Password is required',
    }),
    passwordChangedAt: z.date().optional(), // Optional date field
    displayPicture: z
      .string()
      .url('Invalid URL for display picture')
      .optional(), // Optional display picture
  }),
});

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

const changePasswordValidationSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    oldPassword: z.string({
      required_error: 'Old password is required',
    }),
    newPassword: z.string({ required_error: 'Password is required' }),
  }),
});

// Validation schema for forget password
const forgetPasswordSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
  }),
});

// Validation schema for reset password
const resetPasswordSchema = z.object({
  body: z.object({
    newPassword: z.string().min(6, 'Password must be at least 8 characters long'),
    token: z.string(),
  }),
});

const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh token is required!',
    }),
  }),
});

export const AuthValidation = {
  registerValidationSchema,
  loginValidationSchema,
  changePasswordValidationSchema,
  refreshTokenValidationSchema,
  forgetPasswordSchema,
  resetPasswordSchema
};
