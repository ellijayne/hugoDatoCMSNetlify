module.exports = (dato, root, i18n) => {


    // root.createPost("content/post/my-post.md", "toml", {
    //     frontmatter: {
    //         title: "First article",
    //         type: "post",
    //         categories: ["random"],
    //         weight: 4,
    //         date: "2012-04-06",
    //     },
    //     content: "Lorem **ipsum dolor sit amet**, consectetur adipiscing elit."
    // });


    // inside a "src/articles" directory...
    root.directory("content/post", dir => {

        // ...iterate over the "Blog post" records...
        dato.posts.forEach((post) => {

            // ...and create a markdown file for each article!
            dir.createPost(
                `${post.slug()}.md`, "yaml", {
                    frontmatter: {
                        title: post.title,
                    },
                    content: post.content
                }
            );
        });
    });
};