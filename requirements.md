# Bus Management System

The project is an FYP for students which is directed for students and administration to manage their bus routes, payments and schedule. 

- Node.js
- MongoDB
- TypeScript
- Vue.js

## Models

- departments
- students
- drivers
- admin
- buses
- routes
- feedback

### Department

- departmendId
- title

### student

- studentId
- fullName: String
- department: Department
- systemId (rollno): String
- email: String
- password: String
- phone: String
- gender: 'male'|'female'
- photo: Image
- assignedBus: Bus
- slipPhoto: Image
- paymentVerified: boolean

### driver

- driverId
- fullName
- phone
- photo

### bus

- busId
- busName
- capacity
- assignedRoute

### routes

- routeId
- routeNumber
- stops [geo-point]

## stops


## Feedback 

- feedbackId 
- title
- status
- message

## Platforms

- Admin Dashboard
- Student Dashboard


## Functionality 

- requestAccessForStudent()
- slipUploadThenAdminVerified()
- feedback()

