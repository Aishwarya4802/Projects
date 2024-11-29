About the project --->
Starting with  frontend:
I have created frontend using react where i have crated a navbar in which i there is regiter and login 
 //Login Component
login component  is a React functional component for a user login form. It uses the 
useState hook to manage the form's input fields (email and password) and updates their values dynamically
via the signHandler function. On form submission (submithandler), it sends the input data to a backend 
API using axios and checks the response. If a token is received, it saves it in localStorage and navigates
the user to the /admin page using the useNavigate hook from React Router. The component includes a 
responsiv and styled form using Tailwind CSS.

//Signup component
The Signup component is also a React functional component that provides a registration form for new users.
It uses the useState hook to manage the form's input fields (firstName, lastName, email, and password), 
storing them in an input state object. The signHandler function updates the state dynamically as users 
type into the form.
On form submission, the submithandler function is triggered, preventing the default browser behavior.
It sends the form data to a backend API endpoint using axios. If the request is successful, the user is
redirected to the /login page using the useNavigate hook from React Router.
The form is styled using Tailwind CSS for a clean and responsive UI. At the bottom, there's a link to 
the login page for users who already have an account, enhancing navigation within the app.

//Logout 
for logout i simply deleted the token which contains the information of the user including role of the 
user form local storage 

Coming to backend:
I have created backend using node.js and express.js
This Node.js backend application, built with Express.js and Mongoose, handles user authentication and 
role-based access control. It connects to a MongoDB database using Mongoose for managing user data and 
bcryptjs for securely hashing passwords. The application uses JWT (jsonwebtoken) to generate tokens for 
authenticated users and to verify their roles for restricted routes.

The server has routes for registration (/create), login (/login), and role-based pages (/admin for 
admins , /user for users and /moderator for moderators). During registration, user details are saved with a hashed password after
verifying the email's uniqueness. Login verifies the email and password, generating a token on success. 
Middleware functions, including cheackRole, validate tokens and restrict access based on user roles.
The app uses CORS for cross-origin requests and EJS for rendering dynamic pages. 
It runs on port 8000 locally , listening for incoming requests.