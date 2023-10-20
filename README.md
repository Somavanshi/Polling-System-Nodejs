Polling System API
This project implements a polling system API that allows users to create questions, add options, and cast votes. It is built using Node.js and utilizes a database of your choice. Authentication is not required, making it an open application.

Setup Instructions
Follow these steps to set up the project on your local system:

Clone the Repository

bash
Copy code
git clone <repository_url>
Install Dependencies

Navigate to the project directory and install the required dependencies using npm:

npm install


Configure the database connection in the ./config/mongoose.ts file.

Start the Server

npm run dev

Start the Node.js server:

npm start
The API will be accessible at http://localhost:8081.

API Endpoints
Create a Question

Endpoint: POST /questions/create
Request Body: { "text": "Your question text" }
Add Options to a Question

Endpoint: POST /questions/:id/options/create
Request Body: { "text": "Option text" }
Delete a Question

Endpoint: DELETE /questions/:id
Delete an Option

Endpoint: DELETE /options/:id
Increment the Count of Votes

Endpoint: POST /options/:id/add_vote
View a Question with Options and Votes

Endpoint: GET /questions/:id
Additional Notes
The API utilizes dynamic link_to_vote generation for viewing and voting on questions.
Authentication is not implemented, but can be added for user identity if desired.
Deleting a question or option may be restricted if there are associated votes (optional).
Extra Points
The code is well-commented for easy understanding and maintenance.
Project Completion Time
Approximately 5 hours were spent on this project, including setup, coding, testing, and documentation. This may vary based on individual proficiency and familiarity with the technologies used.