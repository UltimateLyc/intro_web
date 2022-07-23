class Node 
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.rigth = null;
    }
}

class BinaryTree
{
    constructor (root = null)
    {
        this.root = root;
    }

    insert(data)
    {
        let node = new Node(data);

        if (this.root == null)
        {
            this.root = node;
        }
        else
        {
            let current = this.root;

            while(true)
            {
                if (current.left == null && current.data > data)
                {
                    current.left = node;
                    break;
                }
                else if (current.rigth == null && current.data < data)
                {
                    current.rigth = node;
                    break;
                }

                if(current.data < data)
                {
                    current = current.rigth;
                }
                else
                {
                    current = current.left;
                }

                
            }

        }
    }
}

let bn = new BinaryTree()
bn.insert(26);
bn.insert(55);
bn.insert(14);
bn.insert(19);
bn.insert(6);
bn.insert(84);
bn.insert(54);
bn.insert(99);
bn.insert(87);
bn.insert(47);
bn.insert(53);
bn.insert(30);
bn.insert(29);
bn.insert(85);
bn.insert(58);

console.log(bn);
