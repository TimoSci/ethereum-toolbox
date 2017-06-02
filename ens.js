function owner(name){
  return deedContract.at(ethRegistrar.entries(web3.sha3(name))[1]).owner();
}

function ens_owner(name){
  return ens.owner(namehash(name+'.eth'));
}

function status(name){
  return ethRegistrar.entries(web3.sha3(name))[0];
}

function auctionEnd(name){
  return new Date(ethRegistrar.entries(web3.sha3(name))[2].toNumber() * 1000)
}
