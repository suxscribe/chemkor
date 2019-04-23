<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Chemkor</title>

	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">



	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/manifest.json">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="theme-color" content="#ffffff">

	<link rel="stylesheet" href="css/uikit.min.css">
	<link rel="stylesheet" href="css/components/slideshow.min.css">
	<link rel="stylesheet" href="css/components/accordion.min.css">
	<link rel="stylesheet" href="css/components/dotnav.min.css">
	<link rel="stylesheet" href="css/components/slidenav.min.css">
	<link rel="stylesheet" href="css/components/slider.min.css">
	<link rel="stylesheet" href="css/custom.css">
	<link rel="stylesheet" href="css/my-style.css">

	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script src="https://api-maps.yandex.ru/2.1/?apikey=d4e6eee7-7efa-4043-aaed-c08551d2d3d6&lang=ru_RU" type="text/javascript"></script>

	<script src="js/uikit.min.js"></script>
	<script src="js/components/slideshow.js"></script>
	<script src="js/components/accordion.js"></script>
	<script src="js/components/slider.js"></script>
	<script src="js/components/slideset.js"></script>
	<script src="js/components/sticky.js"></script>
	<script src="js/components/lightbox.js"></script>
	<script src="js/jquery.inputmask.js"></script>
	<script src="js/jquery.nicescroll.min.js"></script>
	<script src="js/jquery.animateNumber.min.js"></script>
	<script src="js/raphael-min.js"></script>
	<script src="js/russian-map.js"></script>

	<script src="js/custom.js"></script>
	<script src="js/my-script.js"></script>
</head>
<body>
	
	<header class="header-top" data-uk-sticky="{media: 960}">
		<div class="header-top-logo">
			<div class="logo-sign">
				<a href="./"><img src="images/logo.svg" alt=""><!-- <span>Производитель труб из ПВХ</span> --></a>
			</div>
			<div class="logo-text"></div>
		</div>
		<ul class="header-top-nav uk-navbar-nav">
			<li class="uk-parent" data-uk-dropdown>
				<a href="">Компания</a>

				<div class="uk-dropdown uk-dropdown-navbar">
					<ul class="uk-nav uk-nav-navbar">
						<li><a href="page-company.php">Компания</a></li>
						<li><a href="news.php">Новости</a></li>
						<li><a href="">Пресс-центр</a></li>

						<li><a href="page-production.php">Производство</a></li>
						<li><a href="page-laboratory.php">Лаборатория</a></li>
					</ul>
				</div>

			</li>
			<li class="uk-active"><a href="katalog-produktsii.php">Каталог продукции</a></li>
			<li class="uk-parent" data-uk-dropdown>
				<a href="tekh-resheniya.php">Решения</a>

				<div class="uk-dropdown uk-dropdown-navbar">
					<ul class="uk-nav uk-nav-navbar">
						<li><a href="obsadnyye-truby.php">Обсадные трубы</a></li>
						<li><a href="tr-teplica.php">Теплицы</a></li>
						<li><a href="tr-navozoudalenie.php">Навозоудаление</a></li>
						<li><a href="tr-kanalizatsiya.php">Канализация</a></li>
						<li><a href="tr-sbor-livnevyh.php">Сбор ливневых стоков с дорог</a></li>
						<li><a href="tr-livnevaya-kanalizatsiya.php">Ливневая канализация</a></li>
					</ul>
				</div>

			</li>
			<li><a href="realizovannyye-proyekty.php">Проекты</a></li>

			<li class="uk-parent" data-uk-dropdown>
				<a href="">Документация</a>

				<div class="uk-dropdown uk-dropdown-navbar">
					<ul class="uk-nav uk-nav-navbar">
						<li><a href="sertifikaty.php">Сертификаты</a></li>
						<li><a href="">Нормативные документы</a></li>
						<li><a href="">Техническая информация</a></li>
					</ul>
				</div>

			</li>

			<li><a href="contacts.php">Контакты</a></li>
		</ul>
		<div class="header-top-phone">
			<div class="header-top-phone-sign uk-flex-item-none" data-uk-dropdown>
				<div class="icon-info"></div>
				<div class="header-top-phone-dropdown uk-dropdown uk-dropdown-width-4">
					<div class="uk-grid uk-grid-width-large-1-3 uk-dropdown-grid" data-uk-grid-margin>
						<div>
							<p><strong>Представительство в Москве</strong><br>
								г. Москва, ул. Бутлерова, 4, корп. 3 <br>
								<a href="tel:+74953350948">(495) 335-09-48</a>, <a href="tel:+74953351082">335-10-82</a> <br>
								Время работы: с 8-30 до 17-30
							</p>
						</div>
						<div>
							<strong>Офис продаж в Н. Новгороде</strong> <br>
							г. Н.Новгород, ул. Генкиной, 61 <br>
							<a href="tel:+78343816788">(831) 438-67-88</a> (многоканальный) <br>
							Время работы: с 8-00 до 17-00
						</div>
						<div>
							<strong>Производство</strong> <br>
							г. Дзержинск, ул. 1 Мая, 1 <br>
							<a href="tel:+78313279545">(8313)  27-95-45</a>, <a href="tel:+78313264783">26-47-83</a> <br>
							Время работы: с 8-00 до 17-00
						</div>
					</div>
				</div>
			</div>
			<div class="header-top-phone-phone">
				<a href="tel:+78314386788">+7 (831) 438-67-88</a>
			</div>
		</div>
		<div class="header-top-search">
			<a class="icon-search" href="#modal-search" data-uk-modal></a>
		</div>
		<div class="header-top-lang">
			<a href="">ENG</a> <!-- ENG / RUS -->
		</div>
		<div class="header-top-menu-toggle">
			<a href="#menu" class="z-navbar-toggle" data-uk-modal><span></span></a>
		</div>
	</header>

