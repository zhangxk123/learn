/**
 * @description 迭代法实现
 * @param {*} head
 * @returns {*} 
 */
function reverseList(head){
  let cur=head;
  let pre=null;
  while (cur) {
    const tmp=cur.next; //辅助变量  存储下一个节点
    //交换=====
    cur.next=pre;
    pre=cur;
    //=====
    cur=tmp;  //循环体
  }
  return pre
}

//要点在于  声明两个指针，cur指向头节点，pre指向null
// 遍历cur节点  通过cur=cur.next
// pre指向head

/**
 * @description 递归实现 利用尾调用优化tco
 * @param {*} head
 * @returns {*} 
 */
var reverseList = function(head) {
  'use strict';
  if(head==null||head.next==null) return head;
  const next=reverseList(head.next);
  head.next.next=head;
  head.next=null;
  return next
};
