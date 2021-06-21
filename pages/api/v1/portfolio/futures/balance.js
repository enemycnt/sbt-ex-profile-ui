import path from 'path';
import fs from 'fs';
const zeroBalanceFilePath = path.join(process.cwd(),'data', 'sbt-binance-futures-0-balances.json');
const oneBalanceFilePath = path.join(process.cwd(),'data', 'sbt-binance-futures-1-balances.json');

const mockedProfiles = {
  14: zeroBalanceFilePath,
  15: oneBalanceFilePath
}

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  const {profileId} = req.query
  let filePath = mockedProfiles[profileId]
  const readable = fs.createReadStream(filePath);
  readable.pipe(res);
}
