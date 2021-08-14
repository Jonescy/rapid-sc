import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import fs from "fs";
// import {parseEther} from 'ethers/lib/utils';

const df: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {deployments, getNamedAccounts} = hre;
    const {deploy} = deployments;

    const {deployer} = await getNamedAccounts();

    await deploy('Greeter', {
        from: deployer,
        args: ["jones zi"],
        log: true,
    });

};
export default df;
df.tags = ['Greeter'];