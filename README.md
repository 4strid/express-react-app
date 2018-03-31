# express-react-app
Guide on setting up an Express app with a React frontend using create-react-app

## The gist:
- Your Express server lives in the top level directory. Everything "backend" will go in there, including models, routes, etc.
- The Express server consists basically entirely of API endpoints (though it will also serve React in production)
- Your React app lives in `client`. Everything "frontend" will go in here, like components, pages, etc.
- To run both your Express server and the react dev server at once, use the `concurrently` package in an npm script
- To make it so your React app points its API requests to your Express server, add `"proxy": "localhost:3001"` to your client package.json

Watch the videos here

[Setting up the development environment](https://www.youtube.com/watch?v=7NQztDKkaTI)

[Live coding the application](https://youtu.be/F5m8sjtMjE8)
