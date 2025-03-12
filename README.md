# Task Manager API

![Screenshot 2025-03-12 134833](https://github.com/user-attachments/assets/3ad8d700-89a2-410d-8bfd-a592c1674ba4)


## Overview
This is a **Task Manager API** built with **NestJS**, designed to manage tasks efficiently. The API provides features such as user authentication, task creation, updates, and deletion.

## Features
- **User Authentication** (JWT-based)
- **CRUD operations** for tasks
- **Role-based access control**
- **Firestore Database Integration**
- **Logging & Error Handling**
- **Swagger API Documentation**

## Installation

Clone the repository:
```sh
git clone https://github.com/iamprathameshmore/taskmanager.git
cd taskmanager
```

Install dependencies:
```sh
npm install
```

## Environment Setup
Create a `.env` file in the root directory and configure the following variables:
```env
PORT=3000
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY=your_private_key
```

## Running the Application

Start the development server:
```sh
npm run start:dev
```

Start in production mode:
```sh
npm run build
npm run start:prod
```

## API Documentation
After starting the server, access **Swagger UI** at:
```
http://localhost:3000/api
```

## Testing
Run unit and e2e tests:
```sh
npm run test
npm run test:e2e
```

## Deployment
For deploying on a cloud platform, set up environment variables accordingly and use Docker if needed.

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch and submit a PR

## License
This project is licensed under the MIT License.

---
Developed by [Prathamesh More](https://github.com/iamprathameshmore)
