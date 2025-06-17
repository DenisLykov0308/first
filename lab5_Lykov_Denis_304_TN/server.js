const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));
app.use(express.json());

app.post('/calculate', (req, res) => {
  const num = req.body.number;
  const square = num * num;

  res.json({ number: num, square: square });
});

app.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:${PORT}`);
});
