import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  login: string;
  @Field({ nullable: true })
  id: number;
  @Field()
  node_id: string;
  @Field()
  avatar_ur: string;
  @Field()
  type: string;
  @Field()
  site_admin: boolean;
}
