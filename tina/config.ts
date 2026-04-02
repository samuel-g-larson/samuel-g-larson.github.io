import { defineConfig } from "tinacms";

// Your Tina Cloud credentials.
// Get these from https://app.tina.io after creating a project
// linked to samuel-g-larson/samuel-g-larson.github.io.
// Add them as GitHub Actions secrets:
//   TINA_PUBLIC_CLIENT_ID
//   TINA_TOKEN

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.HEAD || "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },

  schema: {
    collections: [
      // --- Blog Posts ---
      {
        name: "post",
        label: "Blog Posts",
        path: "content/posts",
        format: "md",
        defaultItem: () => ({
          draft: true,
          date: new Date().toISOString(),
        }),
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "object",
            name: "cover",
            label: "Cover Image",
            fields: [
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "alt", label: "Alt Text" },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      // --- Standalone Pages (About, etc.) ---
      {
        name: "page",
        label: "Pages",
        path: "content",
        format: "md",
        match: {
          exclude: "posts/**",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
