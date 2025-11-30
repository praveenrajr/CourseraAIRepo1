const { app, PORT } = require('./config/server');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

connectDB(); // Connect to MongoDB

app.use('/api/users', userRoutes); // User routes

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
