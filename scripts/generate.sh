# new contracts
npx @wharfkit/cli generate --json ./build/contracts/eosio.system/eosio.system.abi --file ./codegen/eosio.system.ts eosio
npx @wharfkit/cli generate --json ./build/contracts/eosio.reward/eosio.reward.abi --file ./codegen/eosio.reward.ts eosio.reward

# existing
npx @wharfkit/cli generate --url https://eos.greymass.com --file ./codegen/time.eosn.ts time.eosn
npx @wharfkit/cli generate --url https://eos.greymass.com --file ./codegen/eosio.fees.ts eosio.fees
npx @wharfkit/cli generate --url https://eos.greymass.com --file ./codegen/eosio.saving.ts eosio.saving