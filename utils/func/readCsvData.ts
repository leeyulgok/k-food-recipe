import fs from "fs";
import csv from "csv-parser";
import { DataType } from "../types/DataType";
import { FILE_PATH } from "../constants/filePath";

export const readCsvData = async (
  filterCondition?: (data: DataType) => boolean
): Promise<DataType[]> => {
  const data: DataType[] = [];

  await new Promise((resolve, reject) => {
    fs.createReadStream(FILE_PATH)
      .pipe(csv())
      .on('data', (row: DataType) => {
        if (!filterCondition || filterCondition(row)) {
          data.push(row);
        }
      })
      .on("end", resolve)
      .on("error", reject);
  });

  return data;
};
