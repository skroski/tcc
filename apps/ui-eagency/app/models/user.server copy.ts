export async function getUsers(){
    const users:Promise<Response> = fetch("https://eagencyapp.herokuapp.com/api/users");
    return users
}