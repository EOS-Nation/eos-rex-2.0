import * as fs from "fs";
import { transaction } from "./msig-actions.js";

// setcontracts
import eosio_system from '../actions/setcontract-eosio.system.json';
import eosio_bpay from '../actions/setcontract-eosio.bpay.json';
import eosio_reward from '../actions/setcontract-eosio.reward.json';

// actions
import { checktime } from "./msig-actions.js";

// Deploy new system contracts
for ( const setcontract of [ eosio_system, eosio_bpay, eosio_reward ] ) {
    transaction.actions.push(...setcontract.actions);
}

// 1. Set MSIG execution time
checktime("2024-06-01T00:00:00.000Z");

fs.writeFileSync(`actions/msig-mainnet-tokenomics.json`, JSON.stringify(transaction, null, 4));