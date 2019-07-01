const { exec } = require('child_process')

module.exports = ls

function ls (cb) {
  exec(`arp -a | sed 's|.*(||' | sed 's|).*||'`, function (err, out) {
    if (err) return cb(err)

    const lines = out.trim().split('\n')
    console.log(lines)
  })
}
