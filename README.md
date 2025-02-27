# 📌 Headless CMS Blog

Welcome to **Headless CMS Blog**, a modern and fully customizable blog built with **Next.js** and **Strapi**! This project follows a **headless architecture**, leveraging Strapi as the CMS and Next.js for the frontend, ensuring a fast and flexible solution for content management.

---

## 🚀 Features

- **Headless CMS:** Powered by Strapi for seamless content management.
- **SSG & SSR:** Utilizes Next.js **getStaticProps** and **getServerSideProps** for optimized performance.
- **Markdown Support:** Blogs are written in Markdown format for easy formatting.
- **Dark Mode:** Fully integrated with Tailwind CSS dark mode.
- **SEO Optimized:** Dynamically generates **meta tags**, **OpenGraph**, and **structured data**.
- **Responsive Design:** Mobile-first approach with Tailwind CSS.
- **Fast Image Optimization:** Uses Next.js Image component for automatic resizing and lazy loading.
- **Multi-language Support:** Powered by i18n.
- **Category Filtering:** Easily filter blog posts by categories.
- **Dynamic Routing:** Automatically generates dynamic pages for posts and categories.
- **Deployed on Vercel:** Live and optimized deployment.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Strapi (Headless CMS)
- **Database:** PostgreSQL (on Render.com)
- **Deployment:** Vercel (Frontend) & Render (Backend)
- **State Management:** React Hooks & Context API
- **Markdown Rendering:** React Markdown & rehype plugins
- **Animations:** Framer Motion

---

## Image

<img width="1462" alt="image" src="https://github.com/user-attachments/assets/77ae4518-6af9-4987-8e0c-bc1744a39f02" />

---


## 📂 Folder Structure

```
frontend/
│── src/
│   ├── components/       # Reusable components (Header, Footer, PostCard, etc.)
│   ├── pages/            # Next.js page routes
│   │   ├── index.tsx     # Home page (Lists all posts)
│   │   ├── post/[slug].tsx # Dynamic blog post page
│   │   ├── category/[slug].tsx # Dynamic category filtering
│   ├── styles/           # Tailwind CSS styles
│   ├── services/         # API requests to Strapi
│   ├── types/            # TypeScript interfaces
│── public/               # Static assets
│── next.config.js        # Next.js configuration
│── tailwind.config.js    # Tailwind CSS configuration
│── package.json          # Dependencies
│── README.md             # Documentation
```

---

## 🔧 Installation

### **1️⃣ Clone the repository**
```sh
git clone https://github.com/your-username/headless-cms-blog.git
cd headless-cms-blog
```

### **2️⃣ Install dependencies**
```sh
yarn install
# or
npm install
```

### **3️⃣ Configure environment variables**
Create a `.env.local` file in the root and add the following:
```env
NEXT_PUBLIC_API_URL=https://your-strapi-api-url.com
```

### **4️⃣ Run the project locally**
```sh
yarn dev
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deployment

### **Vercel (Recommended)**
1. Create a Vercel account and install the Vercel CLI.
2. Run the following command:
```sh
vercel
```
3. Follow the instructions to deploy the project.

---

## 🎨 Customization

You can customize the project by modifying the following:
- **Colors & Styles**: Tailwind configuration in `tailwind.config.js`
- **Fonts**: Modify `globals.css` with your preferred fonts.
- **SEO Settings**: Update the `<Head>` metadata in each page.
- **i18n Translations**: Add more languages in `i18n.js`.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the project, open an issue, or submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🌎 Live Demo

🔗 [Live Blog](https://strapi-frontend-puce.vercel.app/)

---

## 📞 Contact

For any inquiries, feel free to reach out:
📧 Email: pedro.santos-soares@outlook.com

