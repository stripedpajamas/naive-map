# naive-hashmap

trying to build a somewhat efficient map in JS without using `Map` or `{ key: val }`. uses a fixed size array as the base data structure, hashes keys into an array index, then traverses linked list nodes to handle collisions.

supports `set`, `get`, `remove`

```javascript
let hm = new HashMap()
hm.set('pete', 'is coding')
console.log(hm.get('pete')) // is coding

hm.set('joel', 'is sleeping')
hm.set('joel', 'is eating')
console.log(hm.get('joel')) // is eating

console.log(hm.get('kev')) // null

hm.remove('pete')
console.log(hm.get('pete')) // null
```

## License
MIT