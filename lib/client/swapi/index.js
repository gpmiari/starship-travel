require('dotenv').config({ quiet: true });

const logger = require('../../../config/logger').logger();

const searchStarShips = async (query = '') => {
  const url = `https://swapi.co/api/starships/${query}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status !== 200) {
      const errorMessage = `Error ${response.status} on get starships.`;
      logger.error(errorMessage);
      throw new Error(errorMessage);
    }
    logger.info(`Get starships: ${response.status}`);
    return await response.json();
  } catch (ex) {
    logger.error(`Error on get starships: ${ex}`);
    throw ex;
  }
};

module.exports = {
  searchStarShips,
};
