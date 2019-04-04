export default const helpers = {};

// This  section helps pull the raw data from the JSON Object and parse it of the tags
// limited and only works with short tags
helpers.removeTags = (data)=>{
  let parsedString = typeof(data) == 'string' && data.trim().length > 0 ? data.trim() : " ";
  let endOfString = parsedString.length;

  let finalString = parsedString.slice(3,endOfString-4);
  return finalString;
};

// This method take the styled content from the JSON object and delivers it the way it would be rendered on Wordpress
helpers.createNode = (data)=>{
  let parsedString = typeof(data) == 'string' && data.trim().length > 0 ? data.trim() : " ";
  if(parsedString){
  let finalString = document.createRange().createContextualFragment(parsedString);
  return finalString;
  } else {
    console.error('Your HTML String was unable to be parsed due to an error');
  }

};
