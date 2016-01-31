<html>
	<head>
		<?php include 'head.php' ?>
		<title>AVA - Gallery</title>
		<link rel="stylesheet" type="text/css" href="css/gallery.css">
	</head>
	<body>
		<?php include 'header.php' ?>
		<main class="content">
			<div class="title">
				<div class="page-tagline">photos from paradise</div>
				<h2 class="page-title">Gallery</h2>
			</div>
			<div class="overlay gallery-overlay hidden">
				<div class="overlay-frame">
					<div class="overlay-action-bar">
						<button class="previous overlay-action">previous</button>
						<button class="close overlay-action">close</button>
						<button class="next overlay-action">next</button>
					</div>
					<div id="full-photo"></div>
				</div>
				<div class="overlay-cover"></div>
			</div>
			<div class="thumbnail-overview images">
				<div class="image-row">
					<div id="aftdeck" class="img-thumb" data-order="1" data-src="images/brochure/full/aftdeck.png">
						<img src="images/brochure/thumb/aftdeck.png" title="view from the aft deck"></img>
					</div>
					<div id="sundecklounge" class="img-thumb" data-order="2" data-src="images/brochure/full/sundecklounge.png">
						<img src="images/brochure/thumb/sundecklounge.png" title="sundeck lounge"></img>
					</div>
					<div id="sundeck" class="img-thumb" data-order="3" data-src="images/brochure/full/sundeck.png">
						<img src="images/brochure/thumb/sundeck.png" title="sundeck at night"></img>
					</div>
					<div id="sundeck-b" class="img-thumb" data-order="3" data-src="images/brochure/full/sundeck-b.png">
						<img src="images/brochure/thumb/sundeck-b.png" title="bar on the sundeck"></img>
					</div>
					<div id="jacuzziempty" class="img-thumb" data-order="4" data-src="images/brochure/full/jacuzziempty.png">
						<img src="images/brochure/thumb/jacuzziempty.png" title="jacuzzi on the bow"></img>
					</div>
					<div id="saloon" class="img-thumb" data-order="5" data-src="images/brochure/full/saloon.png">
						<img src="images/brochure/thumb/saloon.png" title="the saloon"></img>
					</div>
					<div id="mastersuite" class="img-thumb" data-order="6" data-src="images/brochure/full/mastersuite.png">
						<img src="images/brochure/thumb/mastersuite.png" title="master suite"></img>
					</div>
					<div id="maincabinbath" class="img-thumb" data-order="7" data-src="images/brochure/full/maincabinbath.png">
						<img src="images/brochure/thumb/maincabinbath.png" title="master bath"></img>
					</div>
					<div id="queencabin" class="img-thumb" data-order="8" data-src="images/brochure/full/queencabin.png">
						<img src="images/brochure/thumb/queencabin.png" title="queen cabin"></img>
					</div>
					<div id="twincabin" class="img-thumb" data-order="9" data-src="images/brochure/full/twincabin.png">
						<img src="images/brochure/thumb/twincabin.png" title="twin cabin"></img>
					</div>
					<div id="eventtent" class="img-thumb" data-order="10" data-src="images/brochure/full/eventtent.png">
						<img src="images/brochure/thumb/eventtent.png" title="upper deck sheltered by a tent"></img>
					</div>
					<div id="event-b" class="img-thumb" data-order="11" data-src="images/brochure/full/event-b.png">
						<img src="images/brochure/thumb/event-b.png" title="Ava lit up at night"></img>
					</div>
					<div id="event-a" class="img-thumb" data-order="12" data-src="images/brochure/full/event-a.png">
						<img src="images/brochure/thumb/event-a.png" title="Ava hosting an event"></img>
					</div>
					<div id="cruisingbow" class="img-thumb" data-order="13" data-src="images/brochure/full/cruisingbow.png">
						<img src="images/brochure/thumb/cruisingbow.png" title="cruising on the bow"></img>
					</div>
					<div id="sttropez" class="img-thumb" data-order="14" data-src="images/brochure/full/sttropez.png">
						<img src="images/brochure/thumb/sttropez.png" title="Ava in St.Tropez"></img>
					</div>
					<div id="grandprix" class="img-thumb" data-order="15" data-src="images/brochure/full/grandprix.png">
						<img src="images/brochure/thumb/grandprix.png" title="Ava spectating the grand prix"></img>
					</div>
				</div>
			</div>
		</main>
		<footer class="footer">
			<?php include 'footer.php' ?>
		</footer>
	</body>
</html>
