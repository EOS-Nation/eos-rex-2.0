import * as fs from "fs";
import { buyram, delstrategy, setrexmature, setstrategy, transaction } from "./msig-actions.js";

// setcontracts
import eosio_system from '../actions/setcontract-eosio.system.json';
import eosio_bpay from '../actions/setcontract-eosio.bpay.json';
import eosio_reward from '../actions/setcontract-eosio.reward.json';
import eosio_bpay_update_auth from '../actions/updateauth-eosio.bpay.json';

// actions
import { checktime } from "./msig-actions.js";

// 1.3.0 Buy RAM for `eosio.bpay` account
buyram("eosio", "eosio.bpay", 200000);

// 1.1 Deploy updated `eosio` system contract including REX 2.0
// 1.2 Deploy new `eosio.reward` contract
// 1.3 Deploy new `eosio.bpay` contract
for ( const setcontract of [ eosio_system, eosio_bpay, eosio_reward ] ) {
    transaction.actions.push(...setcontract.actions);
}

// 1.3.1 Update permission `eosio.bpay` (15/21) (`eosio` + `@eosio.code`)
transaction.actions.push(...eosio_bpay_update_auth.actions);

// 2.1 Set incoming fees to 100% go to top 21 producers `eosio.bpay` strategy
setstrategy("eosio.fees", "eosio.bpay", 10000);

// 2.2 Delete previous `donatetorex` strategy from fees
delstrategy("eosio.fees", "donatetorex");

// 2.3 Set incoming staking reward allocation to 100% going to REX via `eosio.rex` strategy
setstrategy("eosio.reward", "eosio.rex", 10000);


// 3.1 Set REX maturity to `21 periods` (previously `5 periods`)
// 3.2 Set matured REX is sold immediately to `true`
// 3.3 Set buying REX is moved immediately to REX savings to `true`
setrexmature(21, true, true);

// 4. Set MSIG execution time
checktime("2024-07-08T00:00:00.000Z");

fs.writeFileSync(`actions/msig-mainnet-rex.2.json`, JSON.stringify(transaction, null, 4));