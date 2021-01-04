//Gets the date by Date() function.

module.exports.getDate = function getDate() {

let today = new Date();

let options = {
  weekday: "long",
  day :"numeric",
  month: "long"
};

//toLocaleDateString function formts the data from date() to Day, month (Saturday, 4).

let day = today.toLocaleDateString("en-US", options );
return(day);
};


module.exports.getDay = function getDate() {

let today = new Date();

let options = {
  weekday: "long",
};

//toLocaleDateString function formts the data from date() to Day, month (Saturday, 4).

let day = today.toLocaleDateString("en-US", options );
return(day);
};
