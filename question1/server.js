const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Health Check Route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'AffordMed API Running ✅'
  });
});

// Calculate Average Route
app.post('/calculate-average', (req, res) => {
  try {
    const { numbers } = req.body;

    // Input validation
    if (!Array.isArray(numbers) || numbers.length === 0) {
      return res.status(400).json({
        error: 'Invalid input. Please provide an array of numbers.'
      });
    }

    const validNumbers = numbers.filter(num => typeof num === 'number');

    if (validNumbers.length === 0) {
      return res.status(400).json({
        error: 'Array should contain at least one valid number.'
      });
    }

    // Average Calculation
    const sum = validNumbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / validNumbers.length;

    res.status(200).json({
      numbers: validNumbers,
      average: average
    });

  } catch (err) {
    res.status(500).json({
      error: 'Server Error'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
