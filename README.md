# AE Home Activity
A full stack application using React.js, TypeScript, NestJS and MongoDB.

## Structure
This project is divided in the following structure:
```bash
.
├── ae-activity
|   └── frontend
|   └── backend
|   └── workers
|       └── datalacity
```

## How to run
To start contributing to this project, you need to follow these steps:

### Backend and Worker
To start the backend and also the worker, on the main folder (`ae-activity`) run:
```bash
docker-compose up
```

### Frontend
To start the frontend you should first go to the `frontend folder` and install all dependencies:
```bash
yarn
```

Next, start the project:
```bash
yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

If you want to build the `frontend` for production you can run:
```bash
yarn build
```
and check out the `build` folder.

<br/>

## Technologies

**Frontend:**<br/>
- React.js
- TypeScript

**Backend:**<br/>
- Node.js
- [Nest JS (Framework Javascript based on TypeScript)](https://nestjs.com/)

**Worker:**<br/>
- Javascript
- [Node Schedule (library to manage when the worker should run)](https://github.com/node-schedule/node-schedule)

**Database:**<br/>
- MongoDB

## Assumptions
- Since the Lacity Data was not a possibility, I decided to sync the data in a local mongo database. To do that I created a worker that runs once a day at night.
- To facilitate the demonstration, I'm using MongoDB's `Atlas cloud service`.
