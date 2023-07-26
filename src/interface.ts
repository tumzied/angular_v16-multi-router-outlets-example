export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IPost{
  userId:number;
  id: number;
  body: string;
  title: string;

}

export interface IComment{
  postID:number;
  id:number;
  body:string;
  email:string;
  name:string;
}