require("dotenv").config({ path: __dirname + "/../.env" });
const app = require("./app");

// Importar la conexión REAL con modelos
const db = require("./models");

const PORT = process.env.PORT || 3000;
const MAX_RETRIES = 40;
let currentRetry = 0;

const connectWithRetry = async () => {
    try {
        await db.sequelize.authenticate();
        console.log('✅ DB connection successful!');

        await db.sequelize.sync({ alter: true });
        console.log('🔄 All models synchronized successfully.');

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });

    } catch (error) {
        currentRetry++;
        console.error(`DB connection error: ${error.name}: ${error.message}`);

        if (currentRetry < MAX_RETRIES) {
            const delay = 5000;
            console.log(`Attempting to reconnect (${currentRetry}/${MAX_RETRIES}) in ${delay / 1000}s...`);
            setTimeout(connectWithRetry, delay);
        } else {
            console.error("❌ Fatal error: Failed to connect to the database after multiple retries.");
            process.exit(1);
        }
    }
};

connectWithRetry();
