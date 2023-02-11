export async function getServices(){
    const services:Promise<Response> = fetch("https://eagencyapp.herokuapp.com/api/services");
    return services
}