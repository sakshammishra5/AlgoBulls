export async function loginUser(creds) {
  console.log("api function chala");
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}

export async function getPost() {
  console.log("get post wala api");
  const res = await fetch("/api/getpost");
  const data = await res.json();
  return data.users;
}

export async function getLikesPost(){
const res=await fetch("api/liked-posts")
const data= await res.json()
return data.users
}

export async function getBookMarkedPost(){
  const res= await fetch("api/bookmarked-post")
  const data= await res.json()
  return data.users
}