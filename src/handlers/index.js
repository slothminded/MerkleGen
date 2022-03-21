const keccak256 = require('keccak256')
const { MerkleTree } = require('merkletreejs')


function getRoot(address){
    const whitelistAddresses = address;
    const leafNodes = whitelistAddresses.map(addr => keccak256(addr.toString()));
    const tree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    const root = tree.getRoot().toString('hex')
    return root
}

function verify(addresses,address){
    const whitelistAddresses = addresses;
    const leafNodes = whitelistAddresses.map(addr => keccak256(addr.toString()));
    const tree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    const root = tree.getRoot().toString('hex')
    const claimingAccount = keccak256(address);
    const hexProof = tree.getHexProof(claimingAccount);
    const verify = tree.verify(hexProof, claimingAccount, root);
    console.log(verify)
    return { 'proof': hexProof, 'verify': verify, "leaf": "0x" + claimingAccount.toString('hex') };
}


export {getRoot,verify} ;