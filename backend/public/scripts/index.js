function onSubmit() {
  const {name,value} = document.getElementById('form');
  return fetch("/api/login", {
    method: "POST",
    mode: "cors",
    credentials: "include", // show cookie
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      name:name.value,
      passward:name.passward
    })
  })
}
document.getElementById("submit").addEventListener('click', onSubmit, false)