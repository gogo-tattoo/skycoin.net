export const version = 'v0.19.0';
export const downloads = [{
  platform: 'downloads.wallet.macos',
  icon: 'macos',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '',
      download: 'http://downloads.skycoin.net/wallet/skycoin-0.19.0-gui-osx-x64.dmg',
      torrent: 'http://downloads.skycoin.net/wallet/skycoin-0.19.0.torrent',
      filetype: '.dmg',
      filesize: '44mb',
    }],
  }, {
    name: 'downloads.wallet.withoutElectron',
    architectures: [{
      name: '',
      download: 'http://downloads.skycoin.net/wallet/skycoin-0.19.0-bin-osx-darwin-x64.zip',
      torrent: 'http://downloads.skycoin.net/wallet/skycoin-0.19.0.torrent',
      filetype: '.zip',
      filesize: '11mb',
    }],
  }],
}, {
  platform: 'downloads.wallet.windows',
  icon: 'windows',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '64bit',
      download: 'http://downloads.skycoin.net/wallet/skycoin-0.19.0-gui-win-setup.exe',
      torrent: 'http://downloads.skycoin.net/wallet/skycoin-0.19.0.torrent',
      filetype: '.exe',
      filesize: '68mb',
    }],
  }, {
    name: 'downloads.wallet.withoutElectron',
    architectures: [{
      name: '32bit',
      download: 'http://downloads.skycoin.net/wallet/skycoin-0.19.0-bin-win-x86.zip',
      torrent: 'http://downloads.skycoin.net/wallet/skycoin-0.19.0.torrent',
      filetype: '.zip',
      filesize: '11mb',
    }, {
      name: '64bit',
      download: 'http://downloads.skycoin.net/wallet/skycoin-0.19.0-bin-win-x64.zip',
      torrent: 'http://downloads.skycoin.net/wallet/skycoin-0.19.0.torrent',
      filetype: '.zip',
      filesize: '11mb',
    }],
  }],
}, {
  platform: 'downloads.wallet.linux',
  icon: 'linux',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '64bit',
      download: 'http://downloads.skycoin.net/wallet/skycoin-0.19.0-gui-linux-x64.AppImage',
      torrent: 'http://downloads.skycoin.net/wallet/skycoin-0.19.0.torrent',
      filetype: '.AppImage',
      filesize: '59mb',
    }],
  }, {
    name: 'downloads.wallet.withoutElectron',
    architectures: [{
      name: '32bit',
      download: 'http://downloads.skycoin.net/wallet/skycoin-0.19.0-bin-linux-arm.tar.gz',
      torrent: 'http://downloads.skycoin.net/wallet/skycoin-0.19.0.torrent',
      filetype: '.tar.gz',
      filesize: '7.9mb',
    }, {
      name: '64bit',
      download: 'http://downloads.skycoin.net/wallet/skycoin-0.19.0-bin-linux-x64.tar.gz',
      torrent: 'http://downloads.skycoin.net/wallet/skycoin-0.19.0.torrent',
      filetype: '.tar.gz',
      filesize: '8.1mb',
    }],
  }],
}];
