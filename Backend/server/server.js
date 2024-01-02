const app = require('../app');
const router = require('../router/router');

const server = app.listen(3002,'127.0.0.1',()=>{
    console.log("listen a server !");
});

app.use('/api',router);