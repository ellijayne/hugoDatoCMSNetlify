module.exports = (dato, root, i18n) => {

    // inside a "src/articles" directory...
    root.directory("content/post", (postDir) => {

        // ...iterate over the "Blog post" records...
        dato.posts.forEach((post) => {

            // ...and create a markdown file for each article!
            postDir.createPost(
                `${post.slug}.md`, "yaml", {
                    frontmatter: {
                        title: post.title,
                    },
                    content: post.content
                }
            );
        });
    });
};