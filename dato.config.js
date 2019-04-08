module.exports = (dato, root, i18n, content) => {

    // inside a "src/articles" directory...
    
    root.directory("content/post", (postDir) => {

        // ...iterate over the "Blog post" records...
         //dato.posts.forEach((post) => {
            content.posts.forEach((post) => {

                if ((`${post.title}.md`).length = 0) {
                     dato.posts.forEach((post) => {
                          postDir.createPost(
                              `${post.title}.md`, "yaml", {
                                  frontmatter: {
                                      title: post.title,
                                  },
                                  content: post.content
                              }
                          );
                     })
                     return;
                }

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