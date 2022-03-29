/**
 * @openapi
 * /users:
 *   get:
 *      summary: user목록 가져오기
 *      tags : [Users]
 *      description: 
 *      responses:
 *          200:
 *              description: user목록을 불러옵니다.
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              type: object
 *                              properties:
 *                                  _id: 
 *                                      type: string
 *                                      example: 61231321e3esefs
 *                                  name: 
 *                                      type: string
 *                                      example: 성민
 *                                  email: 
 *                                      type: string
 *                                      example: 123@gmail.com
 *                                  personal: 
 *                                      type: string
 *                                      example: 222010-*******
 *                                  prefer: 
 *                                      type: string
 *                                      example: https://naver.com
 *                                  pwd: 
 *                                      type: string
 *                                      example: 1234
 *                                  phone: 
 *                                      type: string
 *                                      example: 01012345678
 *                                  og:
 *                                      type: object
 *                                      properties:
 *                                          title:
 *                                              type: string
 *                                              example: 네이버
 *                                          description:
 *                                              type: string
 *                                              example: 네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나보세요
 *                                          image:
 *                                              type: string
 *                                              example: https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_2128.png                        
 */
