// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');

$("nav.menu>ul.menu-lista>li.menu-lista-item>a.menu-lista-contato").click(function(){
	ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
});

$("nav.menu>ul.menu-lista>li.menu-lista-item>a.menu-lista-download").click(function(){
	ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
});

$("main>section>div.cards-montadoras>div.card-montadoras").click(function(){
	let element = $(this);
	let name = element.data("name");
	ga('send', 'event', 'analise', 'ver_mais', name);
});

$("main>section>form.contato>ul>li>input").blur(function(){
	let element = $(this);
	if(element.val().length > 0){
		let id = element.attr("id");
		ga('send', 'event', 'contato', id, 'preencheu');
	}
});

$("main>section>form.contato").submit(function(){
	ga('send', 'event', 'contato', 'enviado', 'enviado');
});