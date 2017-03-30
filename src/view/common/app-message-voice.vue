<template>
	<footer>
		<form action="" method="post">
			<div class="usergoban">
				<div class="footer-left">
					<div class="mifileinput">
						<span class="mifileinput-z"> <span class="pmicon icon-tupian"></span> </span>
						<input type="file" id="filebtn" name="productpic[]">
					</div>
				</div>
				<div class="footer-center">
					<textarea verify="" name="content" id="msg-text" type="text" class="input-text"></textarea>
				</div>
				<label for="" class="footer-right">
					<mt-button plain size="small" type="primary" class='util-btn'>
					Send
					</mt-button>
				</label>
			</div>
		
		</form>
	</footer>
</template>