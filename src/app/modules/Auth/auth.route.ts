import express from 'express';
import validateRequest, {
  validateRequestCookies,
} from '../../middlewares/validateRequest';
import { AuthControllers } from './auth.controller';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/register',
  validateRequest(AuthValidation.registerValidationSchema),
  AuthControllers.registerUser
);

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser
);

router.post(
  '/change-password',
  validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthControllers.changePassword
);

router.post(
  '/forget-password',
  validateRequest(AuthValidation.forgetPasswordSchema),
  AuthControllers.forgetPassword
);

router.post(
  '/reset-password/:token',
  validateRequest(AuthValidation.resetPasswordSchema),
  AuthControllers.resetPassword
);

router.post(
  '/refresh-token',
  validateRequestCookies(AuthValidation.refreshTokenValidationSchema),
  AuthControllers.refreshToken
);

export const AuthRoutes = router;
