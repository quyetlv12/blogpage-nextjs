type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
  thumnail: string;
  slug: string;
  created_at: string;
  createBy: string;
  content: string;
  category: string;
  categories : any[]
};
