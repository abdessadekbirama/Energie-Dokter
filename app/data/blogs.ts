interface BlogPost {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Lorem ipsum",
    subtitle: "Lorem ipsum dolor sit amet",
    image: "/assets/blogs/img1.svg",
  },
  {
    id: 2,
    title: "Lorem ipsum",
    subtitle: "Lorem ipsum dolor sit amet",
    image: "/assets/blogs/img2.svg",
  },
  {
    id: 3,
    title: "Lorem ipsum",
    subtitle: "Lorem ipsum dolor sit amet",
    image: "/assets/blogs/img3.svg",
  },
];
