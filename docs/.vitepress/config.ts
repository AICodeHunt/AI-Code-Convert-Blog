import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
	lang: 'en-US',
	title: 'AI Code Convert Blog',
	appearance: 'dark',
	description: 'Convert Code or Natural Language To Programming Language Code.',

	head: [
		['script', {}, `
		      var _hmt = _hmt || [];
		      (function() {
		        var hm = document.createElement("script");
		        hm.src = "https://hm.baidu.com/hm.js?ae152cb2b0b6450d60d0bab1e8a8d527";
		        var s = document.getElementsByTagName("script")[0]; 
		        s.parentNode.insertBefore(hm, s);
		      })();
		`],
		// Google Analytics
		['script', { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-Q03Q3VY7RV' }],
		['script', {}, `
		    window.dataLayer = window.dataLayer || [];
		    function gtag(){dataLayer.push(arguments);}
		    gtag('js', new Date());
		    gtag('config', 'G-Q03Q3VY7RV');
		`],
		['link', { rel: 'icon', href: '/code-converter.svg' }],
		['meta', { name: 'description', content: 'Use AI To Convert Code Or Generate Code From One Language To Another. AI Code Translator. Translate Code From Any Language To Another With A Click Of A Button.' }],
		['meta', { name: 'keywords', content: 'AI Code Converter,Code Convert AI, Code Generate AI,Code Translator,AICodeHelper,free,online' }],
		['meta', { property: 'og:title', content: 'AI Code Convert' }],
		['meta', { property: 'og:description', content: 'Use AI To Convert Code Or Generate Code From One Language To Another. AI Code Translator. Translate Code From Any Language To Another With A Click Of A Button.' }],
	],

	themeConfig: {
		siteTitle: "AICodeConvert",
		logo: "/code-converter.svg",
		nav: nav(),

		sidebar: {
			'/code-converter/': showCodeConverter(),
		},

		footer: {
			message: '.',
			copyright: 'Copyright © aicodeconvert.com'
		},

		search: {
			provider: 'local'
		}
	},
});

function nav() {
	return [
		{ text: 'AICodeConverter', link: '/code-converter/what-is-aicodeconverter' },
	]
}

function showCodeConverter() {
	return [
		{
			text: 'AI Code Converter',
			collapsed: false,
			items: [
				{ text: 'What is AICodeConverter', link: '/code-converter/what-is-aicodeconverter' },
				{ text: 'How to use AICodeConverter', link: '/code-converter/how-to-use-aicodeconverter' }
			]
		}
	]
}