import Job from './../schema/Job';
import {  Arg, ID, Query, Resolver } from "type-graphql";

@Resolver(Job)
class JobResolver {
  @Query(() => [Job],{ description: "Get all jobs.", nullable: true })
  async jobs() {
    // will be replaced with actual service logic.
    return [
      {
        id: "1",
        title: "Software Engineer",
        description: "A software engineer is a person who applies the principles of software engineering to the design, development, maintenance, testing, and evaluation of computer software."
      },
      {
        id: "2",
        title: "Product Manager",
        description: "A product manager is a professional role that is responsible for the development of products for an organization, known as the practice of product management."
      }
    ];
  }

  @Query(() => Job)
  async findJobById(
    @Arg("id")
    id: string){
      // will be replaced with actual service logic.
    return {
      id,
      title: "Software Engineer",
      description: "A software engineer is a person who applies the principles of software engineering to the design, development, maintenance, testing, and evaluation of computer software."
    }
  }
}

export default JobResolver;