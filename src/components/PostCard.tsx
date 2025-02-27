import Image from "next/image";
import ReactMarkdown from "react-markdown";

const BASE_URL = process.env.NEXT_PUBLIC_API_BACKEND_URL;

interface PostProps {
  id: number;
  title: string;
  slug: string;
  content: string;
  category?: string;
  image?: string;
}

export default function PostCard({ title, content, slug, category, image }: PostProps) {
  const imageUrl = image ? `${BASE_URL}${image}` : "/default-image.jpg";

  return (
    <div className="bg-background dark:bg-darkBackground border border-muted p-6 rounded-xl shadow-md transition-all hover:shadow-lg">
      {/* 🔹 Imagem */}
      {image && (
        <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
          <Image
            src={imageUrl}
            alt={title}
            width={640}
            height={360}
            priority={true}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* 🔹 Título do Post */}
      <h3 className="text-2xl font-bold text-accent mb-2">{title}</h3>

      {/* 🔹 Categoria do Post */}
      {category && (
        <span className="text-sm font-semibold bg-highlight text-white px-3 py-1 rounded-full uppercase tracking-wide">
          {category}
        </span>
      )}

      {/* 🔹 Exibir apenas um trecho do Markdown */}
      <div className="text-gray-700 dark:text-gray-700 text-sm mt-2">
        <ReactMarkdown>{content.slice(0, 150) + "..."}</ReactMarkdown>
      </div>

      {/* 🔹 Link para ler mais */}
      <div className="mt-4">
        <a
          href={`/post/${slug}`}
          className="text-highlight hover:underline font-semibold"
        >
          Leia mais →
        </a>
      </div>
    </div>
  );
}