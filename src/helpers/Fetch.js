export default async (url) => {
    const res = await fetch('http://localhost:3001'+url)
    const data = await res.json()
    return await data
}
