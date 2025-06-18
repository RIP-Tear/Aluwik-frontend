export interface Blog {
  id: string;
  uuid: string;
  createdAt: string;
  author: string;
  views: number;
  tags: string[];
  title: string;
  text: string;
  image: string;
  public: boolean;
}
export interface BlogData {
  blogs: Blog[];
}
