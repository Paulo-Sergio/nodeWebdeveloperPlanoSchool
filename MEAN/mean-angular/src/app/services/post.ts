export class Post {

  constructor(
    public _id: string,
    public title: string,
    public body: string,
    public slug: string,
    public created_at: Date
  ) { }

}