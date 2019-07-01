# ls-lan

List all IPs on the local LAN

```
npm install -g ls-lan
```

## Usage

Simply lists all IPs on the local LAN.
Currently only works on macOS, but PR support for other OS'es

```sh
ls-lan # Prints a list of IPs found on the local LAN
```

There is a js API available as well

```js
const ls = require('ls-lan')

ls(function (err, ips) {
  if (err) throw err
  console.log(ips.join('\n'))
})
```

## License

MIT
