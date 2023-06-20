// import axios npm on top

//401,500 response success & error heandling

//headers implement

//react-cookies npm

cookies.save("key", value);
cookies.load("key");
cookies.remove("key");

export const apiCallwithAuth = (options) => {
  const { method, url, payload, token, isAuthRequired } = options;
  let details = { method, url, data: payload };
  if (isAuthRequired) {
    details["headers"] = {
      Authorization: `Bearer ${token}`,
      contentType: "application/json",
    };
  } else {
    details["headers"] = {
      contentType: "application/json",
    };
  }
 return axios(details).then(res=>res).catch(err=>err)
};
