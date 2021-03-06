/*eslint-disable semi*/
import path from "path";
import fs from "fs";

function __schemes() {
    let filePath;
    fs.readdirSync("./src/schemes/").forEach(file => {
        filePath = path.join(__dirname, "/../src/schemes/" + file);
        file = file.split(".").slice(0, -1).join(".");
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) throw err;
            fs.writeFileSync(`schemes/${file}.sublime-color-scheme`, data, (err) => {
                if (err) console.log(err);
            });
        });
    });
}

export default function schemes() {
    __schemes();
}
