import puppeteer from 'puppeteer'
import mongoose from 'mongoose'
import { Starbucks }  from './models/starbucks.model.js'
mongoose.connect("mongodb://localhost:27017/codecamp")
.then(()=>console.log('connected'))
.catch(e=>console.log(e));


async function startCrawling() {
    const browser = await puppeteer.launch({
        headless: false// false 일 경우 실행 시 웹사이트 확인 가능
    });
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 720 })
    await page.goto("https://www.starbucks.co.kr/menu/drink_list.do")
    await page.waitForTimeout(1300)


    for (let i = 1; i <= 10; i++) {
        await page.waitForTimeout(500)
                                    // #container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(2) > dl > dt > a > img
                                    // #container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(1) > dl > dt > a > img
        const img = await page.$eval(`#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dt > a > img`, el =>  el.getAttribute("src"))
        const name = await page.$eval(`#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dd`, el =>el.textContent)
        
        console.log(`이미지: ${img} 이름: ${name}`)
        const starbucks = new Starbucks({
            name : name,
            img : img
        })

        console.log(starbucks)
        await starbucks.save()
    }

    //browser닫기
    await browser.close()
}
startCrawling()
