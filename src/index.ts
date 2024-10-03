import express from  'express';
import dotenv from  'dotenv';

dotenv.config()

const PORT =  process.env.PORT || 8080;

const app = express()
app.get('/', (request, response) => {
response.send('server up 2')
})
app.listen(PORT, () => {
  console.log('server  is running on port', PORT);

})
