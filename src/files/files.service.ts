import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {

    async createFile(file): Promise<string> {
        try {
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve(__dirname, '..', 'static');
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer);
            return fileName;
        } catch (e) {
            throw new HttpException('Error occured while writing the file', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async deleteFile(fileName: string) {
        const filePath = path.resolve(__dirname, '..', 'static');
        // delete a file asynchronously
fs.unlink(path.join(filePath, fileName), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('File is deleted.');
    }
  });
    }
}
