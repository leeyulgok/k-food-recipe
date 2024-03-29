"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const cors = require('cors');
const MainRoutes = require('./routes/index');
const searchRoutes = require('./routes/searchRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');
const cookingMethodRoutes = require('./routes/cookingMethodRoutes');
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', MainRoutes);
app.use('/list', searchRoutes);
app.use('/list/ingredient/', ingredientRoutes);
app.use('/list/cookingMethod/', cookingMethodRoutes);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
