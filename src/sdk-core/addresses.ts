import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains';

type AddressMap = { [chainId: number]: string };

type ChainAddresses = {
  v3CoreFactoryAddress: string;
  multicallAddress: string;
  quoterAddress: string;
  v3MigratorAddress?: string;
  nonfungiblePositionManagerAddress?: string;
  tickLensAddress?: string;
  swapRouter02Address?: string;
  v1MixedRouteQuoterAddress?: string;
};

const DEFAULT_NETWORKS = [ChainId.BASE, ChainId.BASE_GOERLI];

function constructSameAddressMap(address: string, additionalNetworks: ChainId[] = []): AddressMap {
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = address;
    return memo;
  }, {});
}

export const PROTOCOL_TOKEN_ADDRESSES: AddressMap = {
  [ChainId.BASE]: '0xd5046B976188EB40f6DE40fB527F89c05b323385',
};

export const V2_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.BASE]: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB',
};
export const V2_ROUTER_ADDRESSES: AddressMap = {
  [ChainId.BASE]: '0x327Df1E6de05895d2ab08513aaDD9313Fe505d86',
};

const BASE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x3f6533d37d7623Bf7a396730637CE0F52bf27781',
  multicallAddress: '0x091e99cb1C49331a94dD62755D168E941AbD0693', // Uni custom one
  quoterAddress: '0xAFc31e5B4e6EA3C51471B0b3e9767E5046ba8b02', // V2
  v3MigratorAddress: '0xFE159B4219A5981AB3Dd57EC7F9E6E0F10E2Ce87',
  nonfungiblePositionManagerAddress: '0x20C51B3dA2E7821eF62D63a447Ac9E5F8a503065',
  tickLensAddress: '0x49a3A5cf91DE1b78c43Dc1adD03E8A71f1Ea2e30',
  swapRouter02Address: '0xA80f87B1872E9242eA94c36dA88eAbab6B1D2A6c', // 02?
};

// Base Goerli v3 addresses
const BASE_GOERLI_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '',
  quoterAddress: '',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
};

export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.BASE]: BASE_ADDRESSES,
  [ChainId.BASE_GOERLI]: BASE_GOERLI_ADDRESSES,
};

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress;
    return memo;
  }, {}),
};

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress;
    if (v3MigratorAddress) {
      memo[chainId] = v3MigratorAddress;
    }
    return memo;
  }, {}),
};

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress;
    return memo;
  }, {}),
};

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress;
    return memo;
  }, {}),
};

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress;
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress;
    }
    return memo;
  }, {}),
};

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'),
};

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress;
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress;
    }
    return memo;
  }, {}),
};

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
  const v1MixedRouteQuoterAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v1MixedRouteQuoterAddress;
  if (v1MixedRouteQuoterAddress) {
    memo[chainId] = v1MixedRouteQuoterAddress;
  }
  return memo;
}, {});

// export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
//   if (chainId == ChainId.BNB) {
//     return CHAIN_TO_ADDRESSES_MAP[chainId].swapRouter02Address;
//   }
//   return '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';
// };
