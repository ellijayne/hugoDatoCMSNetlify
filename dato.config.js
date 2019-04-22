module.exports = (dato, root, i18n) => {

    // inside a "src/articles" directory...
    root.directory("content/post", (postDir) => {

        // ...iterate over the "Blog post" records...
        dato.posts.date.forEach((post) => {

            // ...and create a markdown file for each article!
            postDir.createPost(
                `${post.title}.md`, "yaml", {
                    frontmatter: {
                        title: post.title,
                    },
                    content: post.content
                }
            );
        });
    });

};