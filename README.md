# JS_LinkedList

You can test code with this:\
// Test LinkList\
class CostumeNode{\
constructor(name, age, weight) {\
this.name = name\
this.age = age\
this.weight = weight\
}\
}\
test = new LinkedList(CostumeNode)\
test.add_first('Alireza', 21, 70)\
test.add_first('Mohammad', 19, 72)\
test.add_last('Surena', 20, 48)\
test.add(1, 'Parviz', 19, 80)\
test.show('name')\
console.log('.---------')\
test.delete(19, 'age')\
test.show('name')\
--------------------------------
result:\
Mohammad\
Parviz\
Alireza\
Surena\
.---------\
Parviz\
Alireza\
Surena
