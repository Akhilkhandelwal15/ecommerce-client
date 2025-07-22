# E-Commerce App Client (Frontend)

Notes:

1. withCredentials inside axios: 
🔍 What withCredentials Does
When set to true, it tells the browser to include credentials (cookies, authorization headers, TLS client certificates, etc.) in cross-origin HTTP requests.

It allows cookies to be sent along with your requests from the frontend to the backend.

✅ When You Need It
You need withCredentials: true if all of the following are true:

You're using cookies for authentication (e.g., storing JWT tokens in cookies).

Your frontend and backend are on different origins (e.g., React app on localhost:3000, backend on localhost:5000).

You want the browser to include the authToken (or any cookie) in the request to your backend.