/**
 * @openapi
 * /tokens/phone:
 *   post:
 *      summary: 토큰 인증 요청
 *      tags : [Tokens]
 *      requestBody:
 *            description: 받은 전화번호를 서버로 보내 토큰을 생성합니다.
 *            required: true
 *            content: 
 *              application/json:
 *                  schema: 
 *                    type: object
 *                    properties:
 *                        phone:
 *                            type: string
 *                            example: 01012345678
 *      responses:
 *          200:
 *              description: 생성된 토큰과 전화번호 인증 여부를 리턴
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              _id: 
 *                                  type: string
 *                                  example: 61231321e3esefs
 *                              token: 
 *                                  type: string
 *                                  example: 123456
 *                              phone: 
 *                                  type: string
 *                                  example: 01012345678
 *                              isAuth: 
 *                                  type: boolean
 *                                  example: false
 */


/**
 * @openapi
 * /tokens/phone:
 *   patch:
 *      summary: 인증 확인
 *      tags : [Tokens]
 *      requestBody:
 *            description: 번호, 토큰, 인증 여부를 확인합니다.
 *            required: true
 *            content: 
 *              application/json:
 *                  schema: 
 *                    type: object
 *                    properties:
 *                        phone:
 *                            type: string
 *                            example: 01012345678
 *                        token:
 *                            type: string
 *                            example: 123456
 *      responses:
 *          200:
 *              description: 생성된 토큰과 전화번호 인증 여부를 리턴
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              _id: 
 *                                  type: string
 *                                  example: 61231321e3esefs
 *                              token: 
 *                                  type: string
 *                                  example: 123456
 *                              phone: 
 *                                  type: string
 *                                  example: 01012345678
 *                              isAuth: 
 *                                  type: boolean
 *                                  example: true
 */
