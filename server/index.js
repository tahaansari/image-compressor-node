// server/index.js
import path from 'path';
import express from "express";
import { fileURLToPath } from 'url';
import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3001;
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET reques ts to /api route 
app.get("/api",async (req, res) => {
    // res.json({ message: "Hello from server!" });
  
    const files = await imagemin(['server/images/*.{jpg,png}'], {
        destination: 'server/build/images',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ] 
    });
    
    // console.log(files.length > 0);

    if(files.length > 0){
        res.json({ status: "ok", data: files });
    }else{
        res.json({ status: "failed" });
    }

});

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});