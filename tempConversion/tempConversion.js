var ftoc = function(fah) {
  return (fah-32)/1.8
}

var ctof = function(cel) {
  return cel*1.8+32;
}

module.exports = {
  ftoc,
  ctof
}
