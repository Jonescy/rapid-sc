import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const df: DeployFunction = async (hre:HardhatRuntimeEnvironment)=>{
  const {get} = hre.deployments;
  // const {deployer} = await hre.getNamedAccounts();
  const GreeterUpgradeable = await get('GreeterUpgradeable');

  const GreeterUpgradeableV2 = await hre.ethers.getContractFactory('GreeterUpgradeableV2')
  await hre.upgrades.upgradeProxy(GreeterUpgradeable.address, GreeterUpgradeableV2, {
    kind: 'uups',
    call: {
      fn: 'initialize',
      args: [
        'Hello World V2',
        'HardHat'
      ]
    },
  })
}

export default df;
df.tags = ['GreeterUpgradeableV2'];
