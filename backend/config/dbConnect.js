import mongoose from "mongoose";
import dotenv from "dotenv";

// Ngarko variablat e mjedisit
dotenv.config();

export const connectDataBase = () => {
    let DB_URI = "";

    if (process.env.NODE_ENV === 'DEVELOPMENT') DB_URI = process.env.DB_LOCAL_URI;
    if (process.env.NODE_ENV === 'PRODUCTION') DB_URI = process.env.DB_URI;

    // Lidhu me MongoDB pa opsionet e vjetruara
    mongoose.connect(DB_URI)
        .then((con) => {
            console.log(`MongoDB u lidh me HOST: ${con.connection.host}`);
        })
        .catch((err) => {
            console.error("Gabim gjatë lidhjes me MongoDB:", err.message);
            process.exit(1); // Dil nga procesi në rast gabimi
        });
};
