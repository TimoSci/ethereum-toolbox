
// function balance(){
//   return web3.fromWei(eth.getBalance(eth.accounts[0]),'ether')
// }

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

function balance(acc){
  return web3.fromWei(eth.getBalance(acc),'ether')
}
