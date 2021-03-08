// 反转链表
function reverseList(head){
  let pre=null;
  cur=head;
  while (cur!=null) {
    let next=cur.next;
    cur.next=pre;
    pre=cur;
    cur=next;
  }
  return pre
}
let list={
  val:1,
  next:{
    val:2,
    next:{
      val:3,
      next:{
        val:4,
        next:null
      }
    }
  }
}
console.log(reverseList(list))