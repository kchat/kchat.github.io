var testing = false

function init () {
  const config = {
    container: '#trollbox',
    firebase: {
      apiKey: 'AIzaSyDXUBjOj50SnRsQ2sn7V2Y9fyizNGOjZkg',
      authDomain: 'rickturpbox.firebaseapp.com',
      databaseURL: 'https://rickturpbox-default-rtdb.firebaseio.com',
      projectId: 'rickturpbox',
      storageBucket: 'rickturpbox.appspot.com',
      messagingSenderId: '128242437670'
    },
    channel: 'demo',
    user: 'anon',
    delayRender: false
  }

  var trollbox = new window.Trollbox(config)

  if (testing) {
    setTimeout(() => {
      trollbox.setChannel('someroom')
      trollbox.setUser('user')
    }, 2000)

    setTimeout(() => {
      trollbox.destroy()
    }, 4000)

    setTimeout(() => {
      init()
    }, 6000)
  }
}

init()