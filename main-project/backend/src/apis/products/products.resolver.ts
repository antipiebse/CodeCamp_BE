//controller
import { ProductsService } from './products.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import {CreateProductInput} from './dto/createProduct.input'
import {UpdateProductInput} from './dto/updateProduct.input'
import {ElasticsearchService} from '@nestjs/elasticsearch'
import {Cache} from 'cache-manager'
import { CACHE_MANAGER, Inject } from '@nestjs/common';

// @(데코레이터), : type (typescript),
@Resolver()
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService,
    private readonly elasticsearchService: ElasticsearchService,
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
    )
   
    {}
  // @Query(()=> [Product])
  // async fetchProducts()  {
  //   console.log( await this.productsService.findAll())
  //     return await this.productsService.findAll()
  // }
  @Query(() => [Product])
  async fetchProducts(
    @Args('search') search: string,
  ) {
    let result = await this.cacheManager.get(`${search}`)
    console.log("😊\\",result)
    if(!result){
    // 엘라스틱 서치에서 조회 연습하기!
      console.log("조회 시작!")
      result = await this.elasticsearchService.search({
        index:'myproduct',
        // query: {
        //   match: {name:search},
        // }
        query: {
          bool: {
            should:[{ prefix: { name: search } }]
          }
        }
      })
      //console.log(JSON.stringify(result, null,'  '))
      console.log("조회성공!")
      console.log(result["hits"]["hits"]["_source"])
      console.log("😊😊😊😊",result["hits"])
      result = result["hits"]["hits"].map((el) => {
        el["_source"][""]
        return el["_source"]
      })
      console.log("😊😊😊")
      await this.cacheManager.set(search, result,
      {
        ttl:0
      })
    }

    //결과 반환W
    return result
  }
    // @Query(()=>[Product])
    // async fetchProducts(
    //   @Args('search') search: string,
    // ){
    //   // 1. 레디스에 캐시되어 있는지 확인하기

    //   // 2. 레디스에 캐시가 되어있지 않다면, 엘라스틱서치에서 조회(유저가 검색한 검색어로 조회)
    //   const result = await this.elasticsearchService.search({
    //     index: 'myproduct',//이때 index는 엘라스틱서치에서의 테이블 명이다.
    //     query: { match:{name: search}},
    //   })
    //   console.log(result)
    //   // 3. 엘라스틱 서치에서 조회결과가 있다면, 레디스에 검색결과 캐싱해놓기

    //   // 4. 최종 결과 반환
    // }



  @Query(()=>Product)
  fetchProduct(
    @Args('productId') productId: string,
  ){
    return this.productsService.findOne({productId})
  }

  @Mutation(()=>Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ){
    return this.productsService.create({ createProductInput })//서비스에서 리턴한 값이 여기로 옴.=> 이걸 프론트엔드로 보냄.
  }
  
  @Mutation(()=>Product)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput, 
  ){
    //판매완료가 되었는지 확인해보기
    await this.productsService.checkSoldout({productId})
    
    //수정하기
    return await this.productsService.update({productId, updateProductInput})
  }

  @Mutation(()=> String)
  deleteProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productsService.delete({ productId });
  }
}
