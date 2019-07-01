export const store = {
    debug: true,
    state: {
      click: false
    },
    setMessageAction (newValue) {
      if (this.debug) console.log('setMessageAction triggered with', newValue)
      this.state.click = newValue
    },
    clearMessageAction () {
      if (this.debug) console.log('clearMessageAction triggered')
      this.state.click = ''
    }
}