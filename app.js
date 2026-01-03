const express = require('express');
const cors = require('cors');
const testController = require('./Controllers/TestController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/test', testController.getAll);
app.get('/api/test/:id', testController.getById);
app.post('/api/test', testController.create);
app.put('/api/test/:id', testController.update);
app.delete('/api/test/:id', testController.remove);

app.get('/', (req, res) => {
    res.json({ message: 'Backend API is running' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
