/**
 * @openapi
 * /users:
 *   get:
 *      summary: 게시글 가져오기
 *      tags : [users]
 *      parameters:
 *          - in: query
 *            name: number
 *            type: int
 *      responses:
 *          200:
 *              description: 성공
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              properties:
 *                                  email:
 *                                      type: string
 *                                      example: a@gmail.com
 *                                  name:
 *                                      type: string
 *                                      example: 철수
 *                                  phone:
 *                                      type: string
 *                                      example: 01012345896
 *                                  personal:
 *                                      type: string
 *                                      example: 010222-3331245
 *                                  prefer:
 *                                      type: string
 *                                      example: https://naver.com
 */

