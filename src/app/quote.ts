export class Quote {
  constructor(public id:number,public publisher:string,public author:string,public quote:string,
    public upvotes:number,public downvotes:number,public time:number,public highest:boolean){
  }
}
