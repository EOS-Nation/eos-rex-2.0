import { Serializer } from "@wharfkit/antelope";
import * as System from "../codegen/eosio.system.js"
import * as Time from "../codegen/time.eosn.js"
import * as Fees from "../codegen/eosio.fees.js"

export interface Action {
    account: string;
    name: string;
    authorization: { actor: string, permission: string }[];
    data: string;
}

export const transaction: {expiration: string, actions: Action[]} = {
    expiration: "2025-01-01T00:00:00",
    actions: [],
}

export function setstrategy(account = "eosio.fees", strategy: string, weight: number) {
    transaction.actions.push({
        account,
        name: "setstrategy",
        authorization: [{
            actor: account,
            permission: "owner"
        }],
        data: Serializer.encode({object: Fees.Types.setstrategy.from({
            strategy,
            weight
        })}).hexString,
    })
}

export function delstrategy(account = "eosio.fees", strategy: string) {
    transaction.actions.push({
        account,
        name: "delstrategy",
        authorization: [{
            actor: account,
            permission: "owner"
        }],
        data: Serializer.encode({object: Fees.Types.delstrategy.from({
            strategy,
        })}).hexString,
    })
}

export function buyrambytes(payer: string, receiver: string, bytes: number) {
    transaction.actions.push({
        account: "eosio",
        name: "buyrambytes",
        authorization: [{
            actor: payer,
            permission: "active"
        }],
        data: Serializer.encode({object: System.Types.buyrambytes.from({
            payer,
            receiver,
            bytes,
        })}).hexString,
    })
}

// Configure REX 2.0 features
export function setrexmature(num_of_maturity_buckets = 21, sell_matured_rex = true, buy_rex_to_savings = true) {
    transaction.actions.push({
        account: "eosio",
        name: "setrexmature",
        authorization: [{
            actor: "eosio",
            permission: "active"
        }],
        data: Serializer.encode({object: System.Types.setrexmature.from({
            num_of_maturity_buckets,
            sell_matured_rex,
            buy_rex_to_savings,
        })}).hexString,
    })
}

// 4. Set MSIG execution time
export function checktime(date = "2024-07-08T00:00:00.000Z") {
    transaction.actions.push({
        account: "time.eosn",
        name: "checktime",
        authorization: [{
            actor: "eosio",
            permission: "active"
        }],
        data: Serializer.encode({object: Time.Types.checktime.from({
            time: new Date(date),
        })}).hexString,
    })
}
