module.exports = (dato, root, i18n, content) => {

    // inside a "src/articles" directory...
    
    root.directory("public/post", (postDir) => {

        // ...iterate over the "Blog post" records...
         //dato.posts.forEach((post) => {
            (~posts).forEach((post) => {   
                     
                

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
    })

}
