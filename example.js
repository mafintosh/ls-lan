const ls = require('./')

ls(function (err, ips) {
  if (err) throw err
  console.log(ips)
})
