import axios from 'axios';

/**
 * Get Assets
 * @param owner 
 * @param offset Fetch datas from offset of N
 * @param limit Fetch datas with amount of N
 */
export const fetchAssets = async function (owner: string, offset: number, limit: number) {
  try {
    const response = await axios.get(`${process.env.apiBaseURL}/assets`, {
      params: {
        owner,
        offset,
        limit,
      },
    });

    return response.data.assets || [];
  } catch (error) {
    throw error;
  }
};

export const fetchAsset = async function (tokenId: string) {
  try {
    const response = await axios.get(`${process.env.apiBaseURL}/assets`, {
      params: {
        token_ids: tokenId,
        offset: 0,
        limit: 1,
      },
    });

    return response.data.assets ? response.data.assets[0] : null;
  } catch (error) {
    throw error;
  }
};