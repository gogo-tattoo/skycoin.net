export default [{
  platform: 'downloads.wallet.macos',
  icon: 'macos',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '',
      download: '',
      torrent: '',
      filetype: '.zip',
      filesize: '10mb',
    }],
  }, {
    name: 'downloads.wallet.withoutElectron',
    architectures: [{
      name: '',
      download: '',
      torrent: '',
      filetype: '.zip',
      filesize: '10mb',
    }],
  }],
}, {
  platform: 'downloads.wallet.windows',
  icon: 'windows',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '64bit',
      download: '',
      torrent: '',
      filetype: '.zip',
      filesize: '10mb',
    }],
  }, {
    name: 'downloads.wallet.withoutElectron',
    architectures: [{
      name: '32bit',
      download: '',
      torrent: '',
      filetype: '.zip',
      filesize: '10mb',
    }, {
      name: '64bit',
      download: '',
      torrent: '',
      filetype: '.zip',
      filesize: '10mb',
    }],
  }],
}, {
  platform: 'downloads.wallet.linux',
  icon: 'linux',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '64bit',
      download: '',
      torrent: '',
      filetype: '.zip',
      filesize: '10mb',
    }],
  }, {
    name: 'downloads.wallet.withoutElectron',
    architectures: [{
      name: '32bit',
      download: '',
      torrent: '',
      filetype: '.zip',
      filesize: '10mb',
    }, {
      name: '64bit',
      download: '',
      torrent: '',
      filetype: '.zip',
      filesize: '10mb',
    }],
  }],
}];
