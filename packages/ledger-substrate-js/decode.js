const { decodeAddress } = require('@polkadot/util-crypto');
const { u8aToHex } = require('@polkadot/util');
const publicKey = decodeAddress('5DSaSznmKRjt9Lvg4478V54UU8kdNyZKSQM8brSiczFR1S1H');
const hexPublicKey = u8aToHex(publicKey);
console.log(hexPublicKey);
