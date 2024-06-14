import type {Action, NameType, UInt16Type} from '@wharfkit/antelope'
import {ABI, Blob, Name, Struct, UInt16} from '@wharfkit/antelope'
import type {ActionOptions, ContractArgs, PartialBy, Table} from '@wharfkit/contract'
import {Contract as BaseContract} from '@wharfkit/contract'
export const abiBlob = Blob.from(
    'DmVvc2lvOjphYmkvMS4yAAQLZGVsc3RyYXRlZ3kAAQhzdHJhdGVneQRuYW1lCmRpc3RyaWJ1dGUAAAtzZXRzdHJhdGVneQACCHN0cmF0ZWd5BG5hbWUGd2VpZ2h0BnVpbnQxNg5zdHJhdGVnaWVzX3JvdwACCHN0cmF0ZWd5BG5hbWUGd2VpZ2h0BnVpbnQxNgMAPFPZ3IyjSgtkZWxzdHJhdGVned8BLS0tCnNwZWNfdmVyc2lvbjogIjAuMi4wIgp0aXRsZTogZGVsc3RyYXRlZ3kKc3VtbWFyeTogJ2RlbHN0cmF0ZWd5JwppY29uOiBodHRwczovL2dhdGV3YXkucGluYXRhLmNsb3VkL2lwZnMvUW1aNEhTWkR1U3JaNEJIYXd0WlJoVmZ3eVlKNERlcE5KcVZEenhZNTlLdmVpTSMzODMwZjFjZThjYjA3Zjc3NTdkYmNmMzgzYjFlYzFiMTE5MTRhYzM0YTFmOWQ4YjA2NWYwNzYwMGZhOWRhYzE5Ci0tLQCAyvq4m7FLCmRpc3RyaWJ1dGWWAi0tLQpzcGVjX3ZlcnNpb246ICIwLjIuMCIKdGl0bGU6IERpc3RyaWJ1dGUKc3VtbWFyeTogJ2Rpc3RyaWJ1dGUnCmljb246IGh0dHBzOi8vZ2F0ZXdheS5waW5hdGEuY2xvdWQvaXBmcy9RbVo0SFNaRHVTclo0Qkhhd3RaUmhWZnd5WUo0RGVwTkpxVkR6eFk1OUt2ZWlNIzM4MzBmMWNlOGNiMDdmNzc1N2RiY2YzODNiMWVjMWIxMTkxNGFjMzRhMWY5ZDhiMDY1ZjA3NjAwZmE5ZGFjMTkKLS0tCgpEaXN0cmlidXRlIHRoZSBzeXN0ZW0gZmVlIHRvIHRoZSBjb3JyZXNwb25kaW5nIGFjY291bnQuADxT2dyMs8ILc2V0c3RyYXRlZ3nfAS0tLQpzcGVjX3ZlcnNpb246ICIwLjIuMCIKdGl0bGU6IHNldHN0cmF0ZWd5CnN1bW1hcnk6ICdzZXRzdHJhdGVneScKaWNvbjogaHR0cHM6Ly9nYXRld2F5LnBpbmF0YS5jbG91ZC9pcGZzL1FtWjRIU1pEdVNyWjRCSGF3dFpSaFZmd3lZSjREZXBOSnFWRHp4WTU5S3ZlaU0jMzgzMGYxY2U4Y2IwN2Y3NzU3ZGJjZjM4M2IxZWMxYjExOTE0YWMzNGExZjlkOGIwNjVmMDc2MDBmYTlkYWMxOQotLS0BAABWjqlsbsYDaTY0AAAOc3RyYXRlZ2llc19yb3cBDVVzZXJBZ3JlZW1lbnRHVGhlIGBlb3Npby5yZXdhcmRgIGNvbnRyYWN0IGhhbmRsZXMgc3lzdGVtIHN0YWtpbmcgcmV3YXJkIGRpc3RyaWJ1dGlvbi4AAAAA'
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
