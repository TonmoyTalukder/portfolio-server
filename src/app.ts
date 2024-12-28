/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import cors from 'cors';
import express, { Application, Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import cookieParser from 'cookie-parser';
import notFound from './app/middlewares/notFound';

const app: Application = express();

// Configure CORS options
const corsOptions = {
  origin: [
    'https://tonmoy-portfolio-dashboard.vercel.app',
    'http://localhost:3000', // Allow localhost for development
  ],
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Cookie parser middleware
app.use(cookieParser());

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Preflight request handler for all routes
app.options('*', cors(corsOptions));

// Application routes
app.get('/', (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Welcome to the Portfolio Management API',
  });
});

app.use('/api', routes);

// Global error handler
app.use(globalErrorHandler);

// Handle 404 (Not Found) errors
app.use(notFound);

// Error logging for debugging (Optional)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  next(err); // Forward the error to the globalErrorHandler
});

export default app;