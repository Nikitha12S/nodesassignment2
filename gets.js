const express = require('express');
const app = express();
const port = 3000;


app.get('/api/:id', (req, res) => {
  const queryParam = req.query.param; 
  const pathParam = req.params.id; 
  const result = {
    queryParam,
    pathParam,
    info: 'Data has been received',
  };
  res.json(result);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});