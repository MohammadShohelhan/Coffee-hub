import { toast } from "react-toastify";


const getItem = ()=>{
  const item = localStorage.getItem('list-item');
  if(item){
    const obg = JSON.parse(item);
    return obg;
  }else{
    return []
  }
}

const saveLocal=(id)=>{
  const item = getItem();
  if(!item.includes(id)){
    const savedItem = JSON.stringify( [...item,id]);
    localStorage.setItem("list-item",savedItem);
    toast.success("SuccessFully Added")
  }else{
  toast.error("Already added")
  }

 
}

export {getItem,saveLocal}