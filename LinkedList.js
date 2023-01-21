class Node{
    constructor(value) {
        this.value = value
        this.next = undefined
        this.before = undefined
    }
}
class LinkedList{
    constructor(nodeClass) {
        if(nodeClass !== undefined) this.NodeClass = nodeClass
        else this.NodeClass = Node
        this.first = undefined
        this.last = undefined
        this.size = 0
    }
    add_last(){
        const node = new this.NodeClass(...arguments)
        if (this.first === undefined){
            this.first = node
            this.last = node
        }else {
            this.last.next = node
            node.before = this.last
            this.last = node
        }
        this.size++
    }
    add_first(){
        const node = new this.NodeClass(...arguments)
        if (this.first === undefined){
            this.first = node
            this.last = node
        }else {
            node.next = this.first
            this.first.before = node
            this.first = node
        }
        this.size++
    }
    delete_last(){
        if(this.last !== undefined) {
            this.last = this.last.before
            this.last.next = undefined
            this.size--
            return true
        }else {
            return false
        }
    }
    delete_first(){
        if(this.first !== undefined){
            this.first = this.first.next
            this.first.before = undefined
            this.size--
            return true
        }else {
            return false
        }

    }
    delete(value, type){
        let flag = false
        if(this.first instanceof Node){
            type = 'value'
        }
        let head = this.first
        while (head !== undefined){
            if (head[type] === value){
                head.before.next = head.next
                head.next.before = head.before
                this.size--
                flag = true
                break
            }
            head = head.next
        }
        return flag
    }
    show(type){
        if(this.first instanceof Node){
            type = 'value'
        }
        let head = this.first
        while (head !== undefined){
            console.log(head[type])
            head = head.next
        }
    }
}