import cheerio from 'cheerio'
export async function createBoardAPI(mydata) {
    // 3. 게시글에서 url찾아서 스크래핑
    const targetURL = mydata.contents.split(" ").filter( el => el.startsWith("http"))[0]
    // 1. 스크래핑
    const aaa = await axios.get(targetURL)

    // 2. OG골라내기
    const $ = cheerio.load(aaa.data)
    //each는 cheerio문법으로 
    $("meta").each((_, el) => {
        if ($(el).attr('property')) {
            const key = $(el).attr('property').split(":")[1]
            const value = $(el).attr('content')
            console.log(key, value)
        }
    })
}
