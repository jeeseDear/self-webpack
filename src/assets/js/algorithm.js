 // 链表是一种在物理上非连续、非顺序的数据结构，由若干节 点（node）所组成。
// 单向链表的每一个节点又包含两部分，一部分是存放数据的变量data，另一部 分是指向下一个节点的指针next

class linkedList {
  constructor () {
    this.head = this.Node('head')
  }
  Node (data) {
    return {
     data,
     next: null
    }
  }
  find (item) {
    let currNode = this.head
    while(currNode.data != item) {
      currNode = currNode.next
    }
    return currNode
  }
  insert (newElement, item) {
    // 插入到已知节点item后面
    let newNode = this.Node(newElement)
    let currNode = this.find(item)
    newNode.next = currNode.next
    currNode.next = newNode
  }
  display () {
    // 显示 链表的数据
    let currNode = this.head
    console.log('curr', currNode)
    while(currNode.next != null) {
      console.log('data', currNode.data)
      currNode = currNode.next
    }
  }
  findPrev (item) {
    // 删除对应的item链表数据
    let currNode = this.head
    while(currNode.next != null && currNode.next.data != item) {
      currNode = currNode.next
    }
    return currNode
  }
  remove (item) {
    let prev = this.findPrev(item)
    if (prev.next != null)
    prev.next = prev.next.next
  }
}
let linkList = new linkedList()
linkList.insert('12', 'head')
linkList.insert('13', '12')
linkList.insert('14', '13')
linkList.insert('15', '14')
linkList.remove('15')
linkList.display()

// 常见的物理数据结构 数组和链表
// 常见的逻辑结构 栈、队列、表 、树、图
// 实现一个栈

class stack {
  push () {} // 数组
  pop () {} // 数组
}
let stackInstance = new stack()
/**
 * 
 *   第一章学习内容 线下数据结构
    数组、链表， 逻辑结构 栈、队列、散列表
 * 
 * **/

/**
 * 
 *   树、二叉树
 * 
 * **/
// 二叉可查找树 遍历
// 前序遍历 二叉树的前序遍历，输出顺序是根节点、左子树、右子树。
let preListRec = []
let tree = {
  value: "-",
  left: {
      value: '+',
      left: {
          value: 'a',
      },
      right: {
          value: '*',
          left: {
              value: 'b',
          },
          right: {
              value: 'c',
          }
      }
  },
  right: {
      value: '/',
      left: {
          value: 'd',
      },
      right: {
          value: 'e',
      }
  }
}
function preOrderRec (node) {
  if (node) {
    preListRec.push(node.value)
    preOrderRec(node.left)
    preOrderRec(node.right)
  }
}
preOrderRec(tree)
console.log(preListRec)
// 二叉树的中序遍历，输出顺序是左子树、根节点、右子树
let inListRec = []
function inOrderRec (node) {
  if (node) {
    inOrderRec(node.left)
    inListRec.push(node.value)
    inOrderRec(node.right)
  }
}
inOrderRec(tree)
console.log(inListRec)
// 二叉树的后序遍历，输出顺序是左子树、右子树、根节点。
let backOrderList = []
function backOrderRec (node) {
  if (node) {
    backOrderRec(node.left)
    backOrderRec(node.right)
    backOrderList.push(node.value)
  }
}
backOrderRec(tree)
console.log(backOrderList)

