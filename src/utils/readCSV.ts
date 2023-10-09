import fs from "fs/promises";
import * as path from "path";
import csvtojson from "csvtojson";

const readCSVToJSON = async (filename: string): Promise<Array<object>> => {
  try {
    // read the file then convert it in JSON format
    return await csvtojson().fromString(
      await fs.readFile(path.join(__dirname, `../../assets/${filename}`), {
        encoding: "utf8",
      })
    );
  } catch (err) {
    console.log(err);
  }

  return [];
};

export { readCSVToJSON };
