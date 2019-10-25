;(function($) {
	'use strict'
	var nav = $('nav')
	var navHeight = nav.outerHeight()

	$('.navbar-toggler').on('click', function() {
		if (!$('#thenav').hasClass('navbar-reduce')) {
			$('#thenav').addClass('navbar-reduce')
		}
	})

	// Preloader
	$(window).on('load', function() {
		if ($('#preloader').length) {
			$('#preloader')
				.delay(100)
				.fadeOut('slow', function() {
					$(this).remove()
				})
		}
	})

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on('click', function() {
		$('.navbar-collapse').collapse('hide')
	})

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#thenav',
		offset: navHeight
	})

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll')
	$(window).on('scroll', function() {
		var pixels = 50
		var top = 1200
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce')
			$('.navbar-expand-md').removeClass('navbar-trans')
		} else {
			$('.navbar-expand-md').addClass('navbar-trans')
			$('.navbar-expand-md').removeClass('navbar-reduce')
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, 'easeInOutExpo')
		} else {
			$('.scrolltop-mf').fadeOut(1000, 'easeInOutExpo')
		}
	})
	$('.about1').click(function() {
		$('html, body').animate(
			{
				scrollTop: $('#about').offset().top
			},
			1500
		)
	})
	$('.project1').click(function() {
		$('html, body').animate(
			{
				scrollTop: $('#projects').offset().top
			},
			1500
		)
	})
	$('.skills1').click(function() {
		$('html, body').animate(
			{
				scrollTop: $('#skills').offset().top
			},
			1500
		)
	})
	$('.contact1').click(function() {
		$('html, body').animate(
			{
				scrollTop: $('#contact').offset().top
			},
			1500
		)
	})
	$('.icon-button').click(function() {
		$('html, body').animate(
			{
				scrollTop: $('#about').offset().top
			},
			1500
		)
	})
	$('.portfolio').click(function() {
		$('html, body').animate(
			{
				scrollTop: $('#home').offset().top
			},
			500
		)
	})
	$('.trigger_popup_fricc').click(function() {
		$('.hover_bkgr_fricc').show()
	})
	$('.hover_bkgr_fricc').click(function() {
		$('.hover_bkgr_fricc').hide()
	})
	$('.popupCloseButton').click(function() {
		$('.hover_bkgr_fricc').hide()
	})
})(jQuery)

// pdfjs.getDocument('/zakariaresume').then(doc => {
// 	doc.getPage(1).then(page => {
// 		var myCanvas = document.getElementById('my_canvas')
// 		var context = myCanvas.getContext('2d')
// 		var viewport = page.getViewport(1)
// 		myCanvas.width = viewport.width
// 		myCanvas.height = viewport.height
// 		page.render({
// 			canvasContext: context,
// 			viewport: viewport
// 		})
// 	})
// })
// const url = '/zakariaresume.pdf'
// let pdfDoc = null
//
// const scale = 1.5
// const canvas = document.querySelector('#pdf-render')
// const ctx = canvas.getContext('2d')
//
// const renderPage = num => {}
//
// pdfjsLib.getDocument(url).promise.then(doc => {
// 	pdfDoc = doc
// 	console.log(pdfdoc)
// })
