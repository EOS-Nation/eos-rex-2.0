import type {Action, NameType, UInt16Type} from '@wharfkit/antelope'
import {ABI, Blob, Name, Struct, UInt16} from '@wharfkit/antelope'
import type {ActionOptions, ContractArgs, PartialBy, Table} from '@wharfkit/contract'
import {Contract as BaseContract} from '@wharfkit/contract'
export const abiBlob = Blob.from(
    'DmVvc2lvOjphYmkvMS4yAAQLZGVsc3RyYXRlZ3kAAQhzdHJhdGVneQRuYW1lCmRpc3RyaWJ1dGUAAAtzZXRzdHJhdGVneQACCHN0cmF0ZWd5BG5hbWUGd2VpZ2h0BnVpbnQxNg5zdHJhdGVnaWVzX3JvdwACCHN0cmF0ZWd5BG5hbWUGd2VpZ2h0BnVpbnQxNgMAPFPZ3IyjSgtkZWxzdHJhdGVneQAAgMr6uJuxSwpkaXN0cmlidXRlAAA8U9ncjLPCC3NldHN0cmF0ZWd5AAEAAFaOqWxuxgNpNjQAAA5zdHJhdGVnaWVzX3JvdwAAAAAA'
)
export const abi = ABI.from(abiBlob)
export namespace Types {
    @Struct.type('delstrategy')
    export class delstrategy extends Struct {
        @Struct.field(Name)
        strategy!: Name
    }
    @Struct.type('distribute')
    export class distribute extends Struct {}
    @Struct.type('setstrategy')
    export class setstrategy extends Struct {
        @Struct.field(Name)
        strategy!: Name
        @Struct.field(UInt16)
        weight!: UInt16
    }
    @Struct.type('strategies_row')
    export class strategies_row extends Struct {
        @Struct.field(Name)
        strategy!: Name
        @Struct.field(UInt16)
        weight!: UInt16
    }
}
export const TableMap = {
    strategies: Types.strategies_row,
}
export interface TableTypes {
    strategies: Types.strategies_row
}
export type RowType<T> = T extends keyof TableTypes ? TableTypes[T] : any
export type TableNames = keyof TableTypes
export namespace ActionParams {
    export namespace Type {}
    export interface delstrategy {
        strategy: NameType
    }
    export interface distribute {}
    export interface setstrategy {
        strategy: NameType
        weight: UInt16Type
    }
}
export interface ActionNameParams {
    delstrategy: ActionParams.delstrategy
    distribute: ActionParams.distribute
    setstrategy: ActionParams.setstrategy
}
export type ActionNames = keyof ActionNameParams
export class Contract extends BaseContract {
    constructor(args: PartialBy<ContractArgs, 'abi' | 'account'>) {
        super({
            client: args.client,
            abi: abi,
            account: args.account || Name.from('eosio.reward'),
        })
    }
    action<T extends ActionNames>(
        name: T,
        data: ActionNameParams[T],
        options?: ActionOptions
    ): Action {
        return super.action(name, data, options)
    }
    table<T extends TableNames>(name: T, scope?: NameType): Table<RowType<T>> {
        return super.table(name, scope, TableMap[name])
    }
}
