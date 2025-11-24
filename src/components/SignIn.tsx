import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const SignIn = () => {
  return (
    <div className="auth-container">
      <div className="auth-welcome">
        <div className="auth-logo">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L19 7L12 12L5 7L12 2Z" fill="white" />
            <path d="M12 12L19 7L12 22L5 7L12 12Z" fill="white" />
          </svg>
        </div>
        <h1>Welcome Back</h1>
        <p>Sign in to access your account</p>
      </div>
      
      <div className="auth-form-container">
        <div className="auth-form">
          <h2>Welcome Back</h2>
          <p>Sign in to access your account</p>
          
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input 
                type="email" 
                id="email" 
                className="form-control" 
                placeholder="Enter your email" 
                defaultValue="veeresh123@gmail.com"
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                className="form-control" 
                placeholder="Enter your password" 
                defaultValue="••••••••" 
                required 
              />
            </div>
            
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" name="remember" /> Remember me
              </label>
              <a href="#" className="forgot-password">Forgot your password?</a>
            </div>
            
            <button type="submit" className="btn btn-primary">Sign in</button>
            
            <button type="button" className="btn btn-google">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.72 1.22 9.16 3.22l6.83-6.83C34.6 2.7 29.64 0 24 0 14.62 0 6.31 5.4 2.48 13.3l7.94 6.17C12.43 14.1 17.75 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.5 24c0-1.6-.14-3.14-.4-4.63H24v9.12h12.7c-.55 3-2.23 5.55-4.76 7.28l7.7 6.01C43.9 36.6 46.5 30.8 46.5 24z" />
                <path fill="#FBBC05" d="M10.42 28.7c-.5-1.5-.8-3.1-.8-4.7s.3-3.2.8-4.7L2.48 13.3C.9 16.2 0 19.9 0 24s.9 7.8 2.48 10.7l7.94-6z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.94-2.14 15.92-5.8l-7.7-6.01c-2.16 1.45-4.95 2.3-8.22 2.3-6.25 0-11.57-4.6-13.46-10.8L2.48 34.7C6.31 42.6 14.62 48 24 48z" />
              </svg>
              Continue with Google
            </button>
            
            <div className="auth-footer">
              <hr />
              <p>New to our platform? <Link to="/signup">Create an account</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
