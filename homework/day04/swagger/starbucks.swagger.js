/**
 * @openapi
 * /starbucks:
 *   get:
 *      summary: 게시글 가져오기
 *      tags : [starbucks]
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
 *                                  name:
 *                                      type: string
 *                                      example: 아메리카노
 *                                  kcal:
 *                                      type: int
 *                                      example: 75
 */
