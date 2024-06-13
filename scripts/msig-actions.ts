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
