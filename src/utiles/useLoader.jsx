export const userloader =async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(res);
    const data =  await res.json();
    return data;

}
export const singleuserloader =async({params})=>{
const {id}=params;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+ id);
    console.log(res);
    const data =  await res.json();
    return data;

}