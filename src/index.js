import { connectedToDatabase } from "./database/db.js";
import { app } from "./server.js";

connectedToDatabase()

app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
})