
import express from 'express'
const app = express();

app.use(express.json());
app.get('/products', (req, res) => {
  res.json({ message: "This is the GET product path" });
});

app.get('/users', (req, res) => {
  res.json({ message: "This is the GET user path" });
});

// POST routes
app.post('/products', (req, res) => {
  res.json({ message: "This is the POST product path and a new product was added" });
});

app.post('/users', (req, res) => {
  res.json({ message: "This is the POST user path and a new user was added" });
});

app.put('/products', (req, res) => {
  res.json({ message: "This is the PUT product path and a product was updated" });
});

app.put('/users', (req, res) => {
  res.json({ message: "This is the PUT user path and a user was updated" });
});

// DELETE routes
app.delete('/products', (req, res) => {
  res.json({ message: "This is the DELETE product path and a product was removed" });
});

app.delete('/users', (req, res) => {
  res.json({ message: "This is the DELETE user path and a user was removed" });
});


app.patch('/products', (req, res) => {
  res.json({ message: "This is the PATCH product path and a product was partially updated" });
});

app.patch('/users', (req, res) => {
  res.json({ message: "This is the PATCH user path and a user was partially updated" });
});
const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




    
