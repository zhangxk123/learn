/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  //创建哑节点指向头节点
  let dummyNode=new ListNode(0,head);
  let length=getLength(head);
  let cur=dummyNode;
  for(let i=1;i<length-n+1;i++){
    cur=cur.next;
  }
  cur.next=cur.next.next;
  //获取原链表的长度
  function getLength(root){
    let length=0;
    while(root){
      ++length;
      root=root.next;
    }
    return length
  }
  const res=dummyNode.next;
  dummyNode=null;
  return res
};