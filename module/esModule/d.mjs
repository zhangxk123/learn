import { value,get,push} from "./c.mjs";
  console.log(value,get())
setTimeout(() => {
  console.log(value,get())
}, 1000);