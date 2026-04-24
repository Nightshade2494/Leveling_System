const fs = require('fs');
const path = require('path');
const hre = require('hardhat');

async function main() {
  const factory = await hre.ethers.getContractFactory('RewardTaskApp');
  const contract = await factory.deploy();
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  const network = hre.network.name;

  const outputPath = path.join(__dirname, '..', 'deployed-address.json');
  const payload = {
    network,
    contractName: 'RewardTaskApp',
    contractId: address,
    deployedAt: new Date().toISOString()
  };

  fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2));

  console.log(`Contract deployed on ${network}`);
  console.log(`Contract ID (address): ${address}`);
  console.log(`Saved deployment info to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
