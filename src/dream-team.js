module.exports = function createDreamTeam(members) {
  let encrMembers = '';
  for (let member of members) {
    if (typeof member == 'string') {
      encrMembers += member[0];
    }
  }
  return encrMembers.toUpperCase().split('').sort().join('');
};