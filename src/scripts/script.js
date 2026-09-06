export async function getData(){
    const url = '/src/data.json'
    const response = await fetch(url)
    const json = await response.json()
    return json
}

 