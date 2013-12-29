<Article id="slideshow"><!--all page-level content fits within the "slidehow" 
sections are moved left & right within this block. Only one section displays at a time-->
	<DIV id="back" class="clickable button">BACK</DIV>
	<DIV id="next" class="clickable button">NEXT</DIV>
	<DIV id="slider">

		<?php include 'section_Intro.php' ?>		
		<?php include 'section_Decks.php' ?>
		<?php include 'section_Saloon.php' ?>
		<?php include 'section_MasterSuite.php' ?>
		<?php include 'section_GuestSuite.php' ?>
		<?php include 'section_Events.php' ?>
		<?php include 'section_Berthing.php' ?>
		<?php include 'section_Service.php' ?>
		<?php include 'section_FullSpecs.php' ?>

	</DIV><!--slider-->
</ARTICLE><!--slidehow-->

<NAV>
	<!--Must contain one link for each section included in the slider.-->
	<UL id="navigation">
		<LI class="clickable">Home</LI>
		<LI class="clickable">Decks</LI>
		<LI class="clickable">Saloon</LI>
		<LI class="clickable">Master Suite</LI>
		<LI class="clickable">Guest Suite</LI>
		<LI class="clickable">Events</LI>
		<LI class="clickable">Berthing</LI>
		<LI class="clickable">Service</LI>
		<LI class="clickable">Full Specs</LI>
	</UL>
</NAV>