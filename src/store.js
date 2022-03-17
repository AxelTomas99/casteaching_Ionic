export default {
    debug: false,
    user: null,
    get(state) {
        if (this.debug) console.log('getMessageAction triggered with', state)
        return this[state]
    }
}
