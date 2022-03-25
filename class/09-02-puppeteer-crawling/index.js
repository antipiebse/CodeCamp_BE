import puppeteer from 'puppeteer'

async function startCrawling() {
    const browser = await puppeteer.launch({
        headless: false,  // false 일 경우 실행 시 웹사이트 확인 가능
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 720 })
    await page.goto("https://www.goodchoice.kr/product/search/2")
    //시간을 일부러 지연하여 차단 방지

    //비슷한 패턴이 있으면 그걸 이용해서 반복문으로 크롤링도 가능
    const stage = await page.$eval("#poduct_list_area > li: nth - child(2) > a > div > div.name > div > span",(el)=>el.textContent)
    await page.waitForTimeout(1200)

    const location= await page.$eval("#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)",(el)=>el.textContent)
    await page.waitForTimeout(1300)

    const price = await page.$eval("#poduct_list_area > li:nth-child(2) > a > div > div.price > p > b",(el)=>el.textContent)
    await page.waitForTimeout(1300)

    console.log(stage)
    console.log(location.trim())
    console.log(price)

    //browser닫기
    await browser.close()
}
startCrawling()