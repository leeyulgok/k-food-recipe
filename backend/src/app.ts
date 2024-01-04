const express = require('express');
const app = express();
const MainRoutes = require('./routes/index');
const searchRoutes = require('./routes/searchRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', MainRoutes);
app.use('/list', searchRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
