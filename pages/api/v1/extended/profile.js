import path from 'path';
import fs from 'fs';
const profilesFilePath = path.join(process.cwd(),'data', 'exchange-profile-list.json');

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  const readable = fs.createReadStream(profilesFilePath);
  readable.pipe(res);
}
