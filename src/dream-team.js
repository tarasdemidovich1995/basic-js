module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let encrMembers = '';
  for (let member of members) {
    if (typeof member == 'string') {
      encrMembers += member.split(' ').join('')[0];
    }
  }
  encrMembers = encrMembers.toUpperCase().split('').sort().join('');
  return encrMembers;
};