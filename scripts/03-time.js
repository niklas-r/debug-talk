function initArray () {
  console.debug('Initializing array...')
  console.time('Array initialized in')

  var array = new Array(1000000)

  for (var i = array.length - 1; i >= 0; i--) {
    array[i] = { }
    }

    console.timeEnd('Array initialized in')
  }
