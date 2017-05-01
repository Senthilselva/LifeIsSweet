const baseUrl = '/user'; //because of the proxy in package.json of the client/package.json it'll know to use localhost:3001 before /songs on your dev environment - THIS IS NOT A NPM THING - this is a create-react-app thing

export const __createUser = (user) => {
	console.log("createUser")
	return fetch(`${baseUrl}/create`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json())
}

export const __getUser = (user) => {
	console.log("createUser")

	return fetch(`${baseUrl}/authenticate`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json())
}

export const __downLoadFile = (image,filename ) => {
  console.log("image");
  console.log(image);
  console.log(filename)
  var formData = new FormData();
  //need to be in this order for multer to detect the file name
  formData.append('filename', filename);  
  formData.append('photo', image);
  
  return fetch(`/uploadUserImage/${filename}`, {
    method: 'POST',
    body: formData
  }).then(res => res.json())
}

//user info
export const __loadUser = (username) => {
  console.log("__loadUser");
  let token = localStorage.getItem('token');
  //token = "xyz"
  var formData = new FormData();
  formData.append('json', token);
  //console.log(token);
  return fetch(`${baseUrl}/getUser/${username}`,{
    headers: { 'x-access-token' : token },
    method:'POST',
    body: JSON.stringify(token)
  })
  .then(res=>res.json());
}

//Get one child
export const __loadChild = (id) => {
  console.log("__loadChild");
  let token = localStorage.getItem('token');
  
  var formData = new FormData();
  formData.append('json', token);
  return fetch(`${baseUrl}/getChild/${id}/`,{
    headers: { 'x-access-token' : token },
    method:'POST',
    body: JSON.stringify(token)
  })
  .then(res=>res.json());
}

export const __getAllChildren = () => {
  console.log("__getAllChildren");
  let token = localStorage.getItem('token');

  return fetch(`${baseUrl}/getChildren/`,{
    headers: { 'x-access-token' : token },
    method:'POST',
    body: JSON.stringify(token)
  })
  .then(res=>res.json());
}
         
export const __writeMessage = (partnerId,message) => {

  console.log("__writeMessage");

  let token = localStorage.getItem('token');

  return fetch(`${baseUrl}/writemsg/${partnerId}/${message}`,{
    headers: { 'x-access-token' : token },
    method:'POST',
    body: JSON.stringify(token)
  })
  .then(res=>res.json());

} 
