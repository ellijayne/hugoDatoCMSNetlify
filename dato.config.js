module.exports = (dato, root, i18n, content) => {

    // inside a "src/articles" directory...
    
    root.directory("content/post", (postDir) => {

        // ...iterate over the "Blog post" records...
         //dato.posts.forEach((post) => {
            (content.posts && dato.posts).forEach((post) => {
               

                    if ((`${post.title}.md`) > 1) {
                        return;

                    } else {
                        postDir.createPost(
                            `${post.title}.md`, "yaml", {
                                frontmatter: {
                                    title: post.title,
                                },
                                    content: post.content
                            }
                        );
                    }
                })

         

                    
                     
                

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
    }
