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
  var formData = new FormData();
  formData.append('photo', image);
  return fetch(`/uploadUserImage/${filename}`, {
    method: 'POST',
    body: formData
  }).then(res => res.json())
}

export const __loadUser = (username) => {
  console.log("__loadUser");
  let token = localStorage.getItem('token');
  //token = "xyz"
  var formData = new FormData();
  formData.append('json', token);
  console.log(token);
  return fetch(`${baseUrl}/getUser/${username}/${token}`,{
    headers: { 'x-access-token' : token },
    method:'POST',
    body: JSON.stringify(token)
  })
  .then(res=>res.json());
}