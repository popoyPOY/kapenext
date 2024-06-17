


const isLogin =  async (token: any) => {
  const response = await fetch("http://localhost:8000/api/user/profile", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })

  return response
}

export default isLogin