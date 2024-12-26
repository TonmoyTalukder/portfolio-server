// auth.controller.ts 
import httpStatus from 'http-status';
import config from '../../config';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';
import { catchAsync } from '../../utils/catchAsync';
import { Request, Response } from 'express'; // Import Request and Response types from express

const registerUser = catchAsync(async (req: Request, res: Response) => {
  // Create the payload with the file included
  const payload = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    displayPicture: req.body.displayPicture,
  };

  // Pass the file from the request as the second argument
  const result = await AuthServices.registerUser(payload); // Ensure req.file is defined correctly
  const { refreshToken, accessToken } = result;

  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User registered successfully!',
    data: {
      accessToken,
      refreshToken,
    },
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.loginUser(req.body);
  const { refreshToken, accessToken } = result;

  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully!',
    data: {
      accessToken,
      refreshToken,
    },
  });
});

const changePassword = catchAsync(async (req: Request, res: Response) => {
  const { ...passwordData } = req.body;

  const result = await AuthServices.changePassword(passwordData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password updated successfully!',
    data: result,
  });
});



const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;
  const result = await AuthServices.refreshToken(refreshToken);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Access token retrieved successfully!',
    data: result,
  });
});

const forgetPassword = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const response = await AuthServices.forgetPassword(email);
    res.status(200).json(response);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

const resetPassword = async (req: Request, res: Response): Promise<void> => {
  const { token, newPassword } = req.body;

  console.log(req.body);

  // Check if token is provided
  if (!token) {
    res.status(400).json({ error: 'Token is required' });
    return; // Early return
  }

  try {
    const response = await AuthServices.resetPassword(token, newPassword);
    res.status(200).json(response);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};



export const AuthControllers = {
  registerUser,
  loginUser,
  changePassword,
  refreshToken,
  forgetPassword,
  resetPassword,
};
