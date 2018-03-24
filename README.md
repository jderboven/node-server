# Mock Server
This server aimes to create a full FAKE API of what the back-end api's send back to any client.

## Launch mock server
Every API endpoints lies under the localhost:3000 by default. 
## Install everything
~~~
yarn install 
~~~
Or 
~~~
npm install
~~~

## Launch the API you want to mock
If you want to launch `la` api, type the following command : 
~~~
node server.js la 
~~~

## Add a new API
In order for everyone to follow the same rules, we created a script which will scaffold everything you need
when creating a new mock-api under this project.

To create it, just type the following : 
~~~
npm run create-api -- --name=my-lovely-api-name
~~~
Where `my-lovely-api-name` is the name of your nearly worldwide famous api mock

# Technologies used
* NodeJS
* NodeJS plugins : 
    - CORS
    - Lodash
    - Morgan for logging purposes
