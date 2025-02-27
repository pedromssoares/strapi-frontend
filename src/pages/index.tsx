/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "@/components/PostCard";
import { Post, Category } from "@/types/types";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filter, setFilter] = useState("All"); 

  const BASE_URL = process.env.NEXT_PUBLIC_API_BACKEND_URL;

  useEffect(() => {
    axios
      .get<{ data: Category[] }>(`${BASE_URL}/api/categories`)
      .then((res) => setCategories(res.data.data || []))
      .catch((err) =>
        console.error(
          "Erro ao buscar categorias:",
          err.response?.data || err.message
        )
      );

    axios
      .get<{ data: Post[] }>(`${BASE_URL}/api/posts`, {
        params: {
          populate: {
            category: { fields: ["name", "slug"] },
            image: { fields: ["url", "formats"] },
          },
        },
      })
      .then((res) => setPosts(res.data.data || []))
      .catch((err) =>
        console.error(
          "Erro ao buscar posts:",
          err.response?.data || err.message
        )
      );
  }, []);

  // 🔹 Filtra os posts de acordo com a categoria selecionada
  const filteredPosts =
    filter === "All"
      ? posts
      : posts.filter((post) => post.category?.name === filter);

  return (
    <div className="container mx-auto px-6 py-12 bg-primary text-text min-h-screen">
      <h1 className="text-5xl font-bold text-center text-accent mb-10">
        Blog Headless com Strapi
      </h1>

      {/* 🔹 Filtros de Categorias */}
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        <button
          onClick={() => setFilter("All")}
          className={`px-6 py-2 rounded-full transition ${
            filter === "All"
              ? "bg-highlight text-white"
              : "bg-secondary text-accent hover:bg-muted"
          }`}
        >
          Todas
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.name)}
            className={`px-6 py-2 rounded-full transition ${
              filter === category.name
                ? "bg-highlight text-white"
                : "bg-secondary text-accent hover:bg-muted"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* 🔹 Grid de Posts */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              slug={post.slug}
              content={post.content}
              category={post.category?.name}
              image={post.image?.formats?.medium?.url || post.image?.url}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted text-lg mt-6">
          Nenhum post encontrado para essa categoria...
        </p>
      )}
    </div>
  );
}
