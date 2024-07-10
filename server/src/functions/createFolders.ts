import path from "path";
import fs from "fs";

const clientDir = path.join(__dirname, "../../../client");
const viewsDir = path.join(__dirname, "../../../client/views")

const createFolders = ():void => {
    if (!fs.existsSync(clientDir)) {
        fs.mkdirSync(clientDir);
    };

    if (!fs.existsSync(viewsDir)) {
        fs.mkdirSync(viewsDir);
    }
};

export default createFolders;