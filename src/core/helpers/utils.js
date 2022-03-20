import inRange from 'lodash/inRange';

/**
 * Generates the progress bar variant based on the skill level value
 * 
 * @param {int} intSkillLevel 
 * @returns {void|string} 
 */
export function generateVariant(intSkillLevel) {
    if (!intSkillLevel || intSkillLevel <= 0) {
        return;
    }

    if (inRange(intSkillLevel, 1, 33)) {
        return 'info';
    } else if (inRange(intSkillLevel, 34, 66)) {
        return 'warning';
    } else if (inRange(intSkillLevel, 67, 100)) {
        return 'success';
    }
};