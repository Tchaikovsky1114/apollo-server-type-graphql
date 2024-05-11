import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
class Job {
  @Field(type => ID)
  id!: string;
  @Field()
  title!: string;
  @Field()
  description?: string;
}

export default Job;