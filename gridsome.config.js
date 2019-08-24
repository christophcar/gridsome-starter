// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: "Vue-Starter",
    siteDescription: "Your best online store for finding all stylish apparel in premium quality",
    plugins: [
        {
            use: "@gridsome/source-contentful",
            options: {
                space: "9v4d61fvxnua", // required
                accessToken: "8vknPbJ6XNt1G1LnDzahXhWEGnz9Umc8ocafGccE2P0", // required
                host: "cdn.contentful.com",
                environment: "master",
                typeName: "Contentful"
            }
        },
        {
            use: "@gridsome/source-filesystem",
            options: {
                path: "content/posts/**/*.md",
                typeName: "Post",
                route: "/posts/:slug",
                refs: {
                    tags: {
                        typeName: "Tag",
                        route: "/tags/:id",
                        create: true
                    }
                }
            }
        }
    ]
}
