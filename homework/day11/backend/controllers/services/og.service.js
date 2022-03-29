import axios from "axios"
import cheerio from "cheerio"

export class Og {
    constructor(targetURL) {
        this.targetURL = targetURL
    }
    async scrapData() {
        // 3. 게시글에서 url찾아서 스크래핑
        // 1. 스크래핑
        const html = await axios.get(this.targetURL)
        const og = new Object()

        // 2. OG골라내기
        const $ = cheerio.load(html.data)
        //each는 cheerio문법으로 
        $("meta").each((_, el) => {
            if ($(el).attr('property')) {
                const key = $(el).attr('property').split(":")[1]
                const value = $(el).attr('content')
                og[key] = value
            }
        })
        return {...og}
    }
}