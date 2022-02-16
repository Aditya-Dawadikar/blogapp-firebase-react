export function isAuthenticated(){
    let user = JSON.parse(sessionStorage.getItem('currUser'))
    if(user===null){
        window.location.href=process.env.REACT_APP_BASE_LOCAL_PATH
    }
}