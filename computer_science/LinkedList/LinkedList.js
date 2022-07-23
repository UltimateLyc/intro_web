class Node 
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

class LinkedList 
{

    constructor(head = null)
    {
        this.head = head; //this.head -> head;
    }

    insert(data)
    {
        let node = new Node(data);

        if (this.head == null)
        {
            this.head = node;
        }
        else 
        {
            let current = this.head

            while (current.next !== null)
            {
                current = current.next;
            }
            current.next = node;
        }

    }

    delate()
    {

    }

    print()
    {

    }

    search()
    {

    }
}

let ll = new LinkedList()
ll.insert(2);
ll.insert(1);
ll.insert(3);
ll.insert(4);
console.log(ll.head.next);   