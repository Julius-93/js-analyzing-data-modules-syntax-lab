require('datejs');

function combineUsers(...args) {
  // make the object with an empty users array
  let combinedObject = {
    users: []
  };

  // go through each array that got passed in
  for (let i = 0; i < args.length; i++) {
    // add this array's names into users
    combinedObject.users = [...combinedObject.users, ...args[i]];
  }

  // get today's date
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}

module.exports = combineUsers;

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
