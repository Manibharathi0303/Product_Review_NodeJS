require('dotenv').config();
const express = require('express');
const app = express();
const reviewsRoutes = require('./routes/reviews');

app.use(express.json());
app.use('/reviews', reviewsRoutes);

// Enhanced Error Logging
app.use((err, req, res, next) => {
  console.error('🔥 Internal Server Error:', err.message);
  console.error(err.stack); // Logs the full error stack trace
  res.status(500).json({ error: err.message || 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
