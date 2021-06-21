import path from 'path';
import fs from 'fs';
const zeroPositionsFilePath = path.join(process.cwd(),'data', 'sbt-binance-futures-0-positions.json');
const onePositionsFilePath = path.join(process.cwd(),'data', 'sbt-binance-futures-1-positions.json');

const mockedProfiles = {
  14: zeroPositionsFilePath,
  15: onePositionsFilePath
}

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  const {profileId} = req.query
  let filePath = mockedProfiles[profileId]
  const readable = fs.createReadStream(filePath);
  readable.pipe(res);
}
