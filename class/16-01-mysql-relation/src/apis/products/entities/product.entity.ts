import { Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm'
import { ProductTag } from '../../productsTag/entities/productTag.entity'
import { ProductSaleslocation} from '../../productsSalesloctation/entities/productSaleslocation.entity'
import { ProductCategory} from '../../productsCategory/entities/productCategory.entity'
import { User } from '../../users/entities/user.entity'

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column() //{type: 'varchar'}
  name: string

  @Column()
  description: string

  @Column()
  price: number

  @Column()
  isSoldout: boolean
  // soldedAt: Date

  @JoinColumn()
  @OneToOne(() => ProductSaleslocation)
  productSaleslocation: ProductSaleslocation

  @ManyToOne(() => ProductCategory)
  productCategoay: ProductCategory

  @ManyToOne(() => User)
  user:User

  @JoinTable()
  @ManyToMany(()=> ProductTag, (productTags) => productTags.products)
  productTags: ProductTag[]
}
