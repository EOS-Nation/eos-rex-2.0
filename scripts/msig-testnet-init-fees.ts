import * as fs from "fs";
import { init_fees, setstrategy, transaction } from "./msig-actions.js";

init_fees(600);

setstrategy("eosio.fees", "donatetorex", 10000);

fs.writeFileSync(`actions/msig-testnet-init-fees.json`, JSON.stringify(transaction, null, 4));