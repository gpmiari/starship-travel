const logger = require('../../../config/logger')
  .logger();

const services = require('../services');

const getStarship = async (req, res) => {
  try {
    const starships = await services.getStarshipService();
    if (starships.length === 0) {
      logger.error('Not found starship');
      return res.sendStatus(404);
    }
    return res.status(200).send(starships);
  } catch (ex) {
    logger.error(`Error on get starship: ${ex}`);
    return res.sendStatus(500);
  }
};

module.exports = getStarship;
