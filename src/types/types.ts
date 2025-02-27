export interface Post {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  data: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category?: Category;
  image?: ImageData;
}

// 🔹 Estrutura dos blocos de conteúdo
export interface ContentBlock {
  type: "paragraph" | "heading" | "image" | "quote"; // 🔹 Outros possíveis tipos no Strapi
  children: ContentText[];
}

export interface ContentText {
  type: "text";
  text: string;
}

// 🔹 Estrutura da categoria
export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// 🔹 Estrutura da imagem (ajustada para refletir a API)
export interface ImageData {
  id: number;
  name: string;
  url: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
}

// 🔹 Estrutura dos formatos de imagem
export interface ImageFormat {
  url: string;
  width: number;
  height: number;
  size: number;
}