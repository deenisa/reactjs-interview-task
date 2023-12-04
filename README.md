How to run;
Make sure you install all the dependencies by running
npm install
To launch the backend navigate to server and run the command:
npm start
To launch the frontend navigate to client and run:
npm start

1. Security Measures:
   - Implement user authentication and authorization using JWT.
   - Ensure secure communication with HTTPS and TLS/SSL.
   - Perform input validation and sanitization to prevent injection attacks.
   - Protect against CSRF and XSS through token implementation and input validation.
   - Apply secure database practices, including parameterized queries and the principle of least privilege.
   - Implement custom error handling and secure session management.
   - Regularly update dependencies and monitor for security events.
   - Secure file uploads and handle them safely.
  
2. Scaling Solutions:
   - Employ database sharding for horizontal data partitioning.
   - Use caching mechanisms (Redis, Memcached) to optimize performance.
   - Implement load balancing to distribute traffic across servers.
   - Utilize CDNs for caching and serving static assets globally.
   - Introduce asynchronous processing for non-immediate tasks.
   - Consider vertical scaling through server resource upgrades.
   - Optimize database queries and ensure appropriate indexing.
   - Set up database replication for read scalability.
   - Explore a microservices architecture for independent scalability.
   - Implement automated scaling based on traffic patterns.
   - Utilize monitoring tools for continuous performance analysis and tuning.
