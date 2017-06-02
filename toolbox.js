

function balance(acc){
  return web3.fromWei(eth.getBalance(acc),'ether')
}
