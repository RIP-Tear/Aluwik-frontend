"use client";

import { Background } from "@/components/molecules/background/Background";
import { Footer } from "@/components/molecules/footer/Footer";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import NotFoundPost from "@/components/organisms/blog-page/not-found-post/NotFoundPost";
import PostBlog from "@/components/organisms/blog-page/post-blog/PostBlog";
import LenisProvider from "@/utils/LenisProvider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../../../app/globals.css";
import { useQuery, useMutation } from "@apollo/client";
import { BlogData, Blog } from "@/models/blogData";
import { GET_BLOG } from "@/graphql/queries/blogQuery";
import { INCREMENT_BLOG_VIEWS } from "@/graphql/mutations/blog/incrementBlogViewMutation";

export default function BlogPostPage() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery<BlogData>(GET_BLOG);
  const [post, setPost] = useState<Blog | undefined>(undefined);

  const [incrementBlogViews] = useMutation(INCREMENT_BLOG_VIEWS);

  useEffect(() => {
    if (typeof id === "string" && data?.blogs) {
      const found = data.blogs.find(p => p.uuid === id);
      setPost(found);
    }
  }, [id, data]);

  useEffect(() => {
    if (post?.uuid) {
      incrementBlogViews({ variables: { uuid: post.uuid } });
    }
  }, [post?.uuid, incrementBlogViews]);

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Wystąpił błąd podczas ładowania posta.</p>
      </div>
    );
  }

  if (!post && !loading) {
    return <NotFoundPost />;
  }

  return (
    <>
      {post && (
        <PageHead
          title={`Sztuczna co? | ${post.title}`}
          description={post.text?.slice(0, 160) || "Post o sztucznej inteligencji"}
        />
      )}
      <LenisProvider>
        <Background>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 h-full">{post && <PostBlog post={post} />}</main>
            <Footer />
          </div>
        </Background>
      </LenisProvider>
    </>
  );
}
