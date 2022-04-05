/**
 * @openapi
 * /user:
 *   post:
 *      summary: 회원가입
 *      tags : [User]
 *      requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                  schema: 
 *                    type: object
 *                    properties:
 *                        name:
 *                            type: string
 *                            example: 문성민
 *                        email:
 *                            type: string
 *                            example: aasa@gmail.com
 *                        personal:
 *                            type: string
 *                            example: 123123-1234567
 *                        prefer:
 *                            type: string
 *                            example: https://naver.com
 *                        pwd:
 *                            type: string
 *                            example: 13245
 *                        phone:
 *                            type: string
 *                            example: 01012345678
 *      responses:
 *          200:
 *              description: userid 리턴
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          example: 61231321e3esefs
 *          422:
 *              desctiption: 핸드폰 인증이 안 됨!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          example: 핸드폰 인증 x
 */
