# JS_LinkedList
You can test code with this:

// Test LinkList\
    class CostumeNode{\
        constructor(value, id) {\
        this.value = value\
        this.id = id\
        this.next = undefined\
        this.before = undefined
    }
    }\
    const test = new LinkedList(CostumeNode)\
    test.add_last('hi', 42)\
    test.add_last('nima', 44)\
    test.add_last('reza', 46)\
    test.delete(44, 'id')\
    test.show('value')