# eosio
cleos -u https://eos.api.eosnation.io set contract eosio build/contracts/eosio.system eosio.system.wasm eosio.system.abi -s -d --json-file actions/setcontract-eosio.system.json --expiration 8640000
cleos -u https://eos.api.eosnation.io set contract eosio.bpay build/contracts/eosio.bpay eosio.bpay.wasm eosio.bpay.abi -s -d --json-file actions/setcontract-eosio.bpay.json --expiration 8640000
cleos -u https://eos.api.eosnation.io set contract eosio.reward build/contracts/eosio.reward eosio.reward.wasm eosio.reward.abi -s -d --json-file actions/setcontract-eosio.reward.json --expiration 8640000 -p eosio.reward@owner
cleos -u https://eos.api.eosnation.io set contract eosio.fees build/contracts/eosio.fees eosio.fees.wasm eosio.fees.abi -s -d --json-file actions/setcontract-eosio.fees.json --expiration 8640000 -p eosio.fees@owner

# testnet
cleos -u https://eos.api.eosnation.io set contract eosio.saving build/contracts/eosio.saving eosio.saving.wasm eosio.saving.abi -s -d --json-file actions/setcontract-eosio.saving.json --expiration 8640000