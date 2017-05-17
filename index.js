
/**
 * Clamps numeric value between range
 * @param  {[Number]}
 * @param  {[Number]}
 * @param  {[Number]}
 * @return {[Number]}
 */

function clamp (val, min, max) {
  return Math.max(min, Math.min(max, val))
}

module.exports = clamp;
