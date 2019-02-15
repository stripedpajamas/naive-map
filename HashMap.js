const ListNode = require('./ListNode')

class HashMap {
    constructor () {
        this.size = 0
        this.capacity = 1000
        this.data = new Array(this.capacity)
    }
    _hash (key) {
        let final = 0
        for (let i = 0; i < key.length; i++) {
            final += key[i].charCodeAt(0)
        }
        return final % this.capacity
    }
    set (key, val) {
        let hash = this._hash(key)
        let head = this.data[hash]
        if (!head) {
            this.data[hash] = new ListNode({ key, val })
            this.size++
            return
        }
        let prev = null
        let current = head
        while (current) {
            if (current.data.key === key) {
                current.data.val = val
                return
            }
            prev = current
            current = current.next
        }
        prev.next = new ListNode({ key, val })
        this.size++
    }
    get (key) {
        let hash = this._hash(key)
        let head = this.data[hash]
        if (!head) return null
        let current = head
        while (current) {
            if (current.data.key === key) {
                return current.data.val
            }
            current = current.next
        }
        return null
    }
    remove (key) {
        let hash = this._hash(key)
        let head = this.data[hash]
        if (!head) return
        if (head.data.key === key) {
            this.data[hash] = head.next
            this.size--
            return
        }
        let prev = null
        let current = head
        while (current) {
            if (current.data.key === key) {
                prev.next = current.next
                this.size--
                return
            }
            prev = current
            current = current.next
        }
    }
}

module.exports = HashMap
