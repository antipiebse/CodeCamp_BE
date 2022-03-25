import puppeteer from 'puppeteer'


//iframe은 셀렉터를 복사해도 다른 사이트라 적용이 안 된다.
//
async function startCrawling() {
    const browser = await puppeteer.launch({
        headless: false,  // false 일 경우 실행 시 웹사이트 확인 가능
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }); const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 720 })
    await page.goto("https://finance.naver.com/item/sise.naver?code=005930")
    await page.waitForTimeout(1300)
    const framePage = await page.frames().find(el => el.url("/item/sise_day.naver?code=005930"))


    for (let i = 3; i <= 7; i++) {
        await page.waitForTimeout(500)
        // iframe 안에 바디 안에 테이블이 있어 접속한 사이트에서는 찾을 수 없다.
        // const price = await page.$eval("body > table.type2 > tbody > tr:nth-child(3) > td:nth-child(2)", el=>el.textContent)
        const date = await framePage.$eval(`body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1) > span`, el => el.textContent)
        const price = await framePage.$eval(`body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2)`, el => el.textContent)
        console.log(`날짜: ${date} 가격: ${price}`)

    }


    //browser닫기
    await browser.close()
}
startCrawling()