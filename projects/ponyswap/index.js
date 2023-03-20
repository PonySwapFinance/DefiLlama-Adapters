const { getUniTVL } = require('../helper/unknownTokens')
module.exports = {
  start: 1678790700,
  arbitrum: {
    tvl: getUniTVL({ factory: '0x66020547Ce3c861dec7632495D86e1b93dA6542c', fetchBalances: true, useDefaultCoreAssets: true, }),
  },
};