import { NetworkType as TezosNetwork } from "@airgap/beacon-sdk";
import Web3 from "web3";
import {
  BlockchainWallet,
  FlowWallet,
  TezosWallet,
  EthereumWallet,
} from "@rarible/sdk-wallet";
import { Web3Ethereum } from "@rarible/web3-ethereum";
import {
  Connector,
  IConnectorStateProvider,
  ConnectionProvider,
  InjectedWeb3ConnectionProvider,
  AbstractConnectionProvider,
  EthereumProviderConnectionResult,
} from "@rarible/connector";

import { Blockchain } from "@rarible/api-client";

// import { FortmaticConnectionProvider } from "@rarible/connector-fortmatic"
// import { PortisConnectionProvider } from "@rarible/connector-portis"

export type WalletAndAddress = {
  wallet: BlockchainWallet;
  address: string;
};

function mapEthereumWallet<O>(
  provider: AbstractConnectionProvider<O, EthereumProviderConnectionResult>
): ConnectionProvider<O, WalletAndAddress> {
  return provider.map((state) => ({
    wallet: new EthereumWallet(
      new Web3Ethereum({ web3: new Web3(state.provider), from: state.address })
    ),
    address: state.address,
  }));
}

const injected = mapEthereumWallet(new InjectedWeb3ConnectionProvider());

const state: IConnectorStateProvider = {
  async getValue(): Promise<string | undefined> {
    return undefined;
  },
  async setValue(value: string | undefined): Promise<void> {},
};

export const connector = Connector.create(injected, state);
