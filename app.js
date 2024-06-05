// CRUD Category
const { createCategory, readCategories } = require("./utils/crud-category.js");

// CRUD Tag
const { createTag, readTags } = require("./utils/crud-tag.js");

// CRUD Post
const { createPost, readPostBySlug, readPosts, updatePostBySlug, deletePostBySlug } = require("./utils/crud-post.js");

//? Create Category
// createCategory('Alimentazione');

//? Read Categories
// readCategories();

//? Create Tag
// createTag('Calcio');

//? Read Tags
// readTags();

//? Create Post
// const post = {
//     title: 'Europei',
//     categoryId: 1,
//     tags: {
//         connect: [{ id: 1 }]
//     },
//     slug: 'europei',
//     content: 'L\'Europeo 2024 partirà il 14 giugno 2024 alle 21:00',
//     published: true
// }
// createPost(post)

//? Read Post tramite slug
// readPostBySlug('europei');

//? Read Posts
// readPosts();

//? Update Post
// const updatePost = {
//     title: 'Europei 2024',
//     categoryId: 1,
//     tags: {
//         connect: [{ id: 1 }]
//     },
//     slug: 'europei-2024',
//     content: 'L\'Europeo 2024 partirà il 14 giugno 2024 alle 21:00',
//     published: true
// }
// updatePostBySlug('europei', updatePost);

//? Delete Post
// deletePostBySlug('europei-2024');