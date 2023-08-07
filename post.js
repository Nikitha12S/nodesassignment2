const express = require('express');
const app = express();
const port = 3001; 


app.use(express.json());


app.post('/api/data', (req, res) => {
  const jsonData = req.body; 
  const dataArray = processData(jsonData); 

  
  res.json(dataArray);
});


function processData(jsonData) {
 
  const key = 'data'; 
  const dataArray = jsonData[key] || [];
  return dataArray;
}


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});