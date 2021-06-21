import path from 'path';
import fs from 'fs';
const binanceBalanceFilePath = path.join(process.cwd(),'data', 'sbt-binance-futures-0-balances.json');
const coinbaseBalanceFilePath = path.join(process.cwd(),'data', 'sbt-coinbase-spot-0-balances.json');

const mockedProfiles = {
  13: binanceBalanceFilePath,
  16: coinbaseBalanceFilePath
}

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  const {profileId} = req.query
  let filePath = mockedProfiles[profileId]
  const readable = fs.createReadStream(filePath);
  readable.pipe(res);
}
