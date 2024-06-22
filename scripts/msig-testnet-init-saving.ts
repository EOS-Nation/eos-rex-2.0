import * as fs from "fs";
import eosio_saving from '../actions/setcontract-eosio.saving.json';
import { setdistrib, transaction } from "./msig-actions.js";

transaction.actions.push(...eosio_saving.actions);

const accounts = [
    {account: "eosio.reward", percent: 10000}
]
setdistrib(accounts);

fs.writeFileSync(`actions/msig-testnet-init-saving.json`, JSON.stringify(transaction, null, 4));