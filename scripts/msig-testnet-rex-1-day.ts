import * as fs from "fs";
import { setrexmature, transaction } from "./msig-actions.js";

setrexmature(1, true, true);

fs.writeFileSync(`actions/msig-testnet-rex-1-day.json`, JSON.stringify(transaction, null, 4));