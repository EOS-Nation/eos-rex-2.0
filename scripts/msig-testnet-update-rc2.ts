import * as fs from "fs";
import { transaction } from "./msig-actions.js";

// setcontracts
import eosio_bpay from '../actions/setcontract-eosio.bpay.json';
import eosio_fees from '../actions/setcontract-eosio.fees.json';

for ( const setcontract of [ eosio_bpay, eosio_fees ] ) {
    transaction.actions.push(...setcontract.actions);
}

fs.writeFileSync(`actions/msig-testnet-update-rc2.json`, JSON.stringify(transaction, null, 4));