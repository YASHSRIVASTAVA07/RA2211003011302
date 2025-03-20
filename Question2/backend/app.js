const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

app.use(cors()); // Allow all origins
app.use('/api', apiRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
