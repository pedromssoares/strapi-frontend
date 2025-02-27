import { GetServerSideProps } from "next";
import axios from "axios";
import { Post } from "@/types/types";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism"; // 🔹 Melhor para fundo claro

interface PostPageProps {
  post: Post;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BACKEND_URL;

export default function PostPage({ post }: PostPageProps) {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BACKEND_URL;
  const imageUrl = post.image?.formats?.large?.url || post.image?.url;

  return (
    <div className="container mx-auto px-6 py-12 bg-background text-text dark:bg-darkBackground dark:text-darkText">
      {/* 🔹 Banner do post */}
      {imageUrl && (
        <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
          <Image
            src={`${BASE_URL}${imageUrl}`}
            alt={post.title}
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
      )}

      {/* 🔹 Data e Categoria */}
      <p className="text-brown-800 dark:text-brown-400 text-center mt-4 text-lg">
        📅{" "}
        {post.data
          ? format(parseISO(post.data), "dd/MM/yyyy 'às' HH:mm", {
              locale: ptBR,
            })
          : "Data Indisponível"}
        &nbsp;|&nbsp; 🏷{" "}
        <span className="font-semibold text-brown-700 dark:text-brown-300">
          {post.category?.name || "Sem categoria"}
        </span>
      </p>

      {/* 🔹 Renderizando Markdown com Estilização */}
      <div className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mt-8 text-brown-900 dark:text-brown-100">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            h1({ children }) {
              return (
                <h1 className="text-5xl font-extrabold text-brown-900 dark:text-brown-100 mt-8 mb-6">
                  {children}
                </h1>
              );
            },
            h2({ children }) {
              return (
                <h2 className="text-3xl font-semibold text-brown-800 dark:text-brown-300 mt-6 mb-4 pb-2">
                  {children}
                </h2>
              );
            },
            h3({ children }) {
              return (
                <h3 className="text-2xl font-semibold text-brown-700 dark:text-brown-300 mt-6 mb-3">
                  {children}
                </h3>
              );
            },
            h4({ children }) {
              return (
                <h4 className="text-xl font-medium text-brown-600 dark:text-brown-300 mt-6 mb-3">
                  {children}
                </h4>
              );
            },
            p({ children }) {
              return (
                <p className="leading-relaxed text-brown-900 dark:text-brown-200 text-lg">
                  {children}
                </p>
              );
            },
            code({ className, children, ...props }) {
              const isInline = className?.includes("inline");

              return isInline ? (
                <code className="bg-brown-200 dark:bg-brown-700 px-1 py-0.5 rounded text-sm font-mono">
                  {children}
                </code>
              ) : (
                
                <SyntaxHighlighter
                // @ts-expect-error para se livrar desse style
                  style={dracula}
                  language="javascript"
                  PreTag="div"
                  className="rounded-lg text-sm overflow-x-auto bg-brown-100 dark:bg-brown-800"
                  {...props}
                >
                  {String(children).trim()}
                </SyntaxHighlighter>
              );
            },
            blockquote({ children }) {
              return (
                <blockquote className="border-l-4 border-brown-600 dark:border-brown-300 pl-4 italic text-brown-700 dark:text-brown-300">
                  {children}
                </blockquote>
              );
            },
            ul({ children }) {
              return (
                <ul className="list-disc pl-5 text-brown-900 dark:text-brown-200">
                  {children}
                </ul>
              );
            },
            ol({ children }) {
              return (
                <ol className="list-decimal pl-5 text-brown-900 dark:text-brown-200">
                  {children}
                </ol>
              );
            },
            strong({ children }) {
              return (
                <strong className="text-brown-800 dark:text-brown-300">
                  {children}
                </strong>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

// 🔹 SSR: Busca os dados no servidor a cada requisição
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/posts`, {
      params: {
        filters: { slug: params?.slug },
        populate: ["category", "image"],
      },
    });

    if (!res.data.data.length) {
      return { notFound: true };
    }

    const post: Post = res.data.data[0];

    return {
      props: { post },
    };
  } catch (error) {
    console.error("Erro ao buscar post:", error);
    return { notFound: true };
  }
};
