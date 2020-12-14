module.exports = {
	siteMetadata: {
		title: "ExiVue 1.0",
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		{
			resolve: '@el7cosmos/gatsby-plugin-prefetch-google-fonts',
			options: {
				fonts: [
					{
						family: 'Exo 2',
						variants: ['100', '400'],
					},
				],
			},
		},
	],
};
