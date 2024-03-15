import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const df: DeployFunction = async (hre:HardhatRuntimeEnvironment)=>{
  const {deploy} = hre.deployments;
  const {deployer} = await hre.getNamedAccounts();
  await deploy('GreeterUpgradeable', {
    from: deployer,
    log: true,
    // using proxy
    proxy: {
      proxyContract: 'UUPS',
      owner: deployer,
      // initial replace contract constructor
      execute: {
        methodName: 'initialize',
        args: ['Hello World'],
      }
    }
  });
}

export default df;

df.tags = ['GreeterUpgradeable'];
