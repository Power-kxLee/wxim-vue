<template>
	<div>
		<div class="pd10 first">
			<mt-cell title="王大锤" label="微信号：18813364620" is-link>
				<img slot="icon" src="../../assets/image/6135373832343233323531343739313739383233333937_big.jpg" class="avatar">
				<span>
                  <img slot="icon" src="../../assets/image/code.png" style="width: 18px;height: 18px;">
              	</span>
			</mt-cell>
		</div>

		<div class="pd10">
			<mt-cell title="钱包" is-link>
				<img slot="icon" src="../../assets/image/wallet.png">
			</mt-cell>
		</div>

		<div class="pd10">
			<mt-cell title="收藏" is-link>
				<img slot="icon" src="../../assets/image/collection.png">
			</mt-cell>
			<mt-cell title="相册" is-link>
				<img slot="icon" src="../../assets/image/album.png">
			</mt-cell>
			<mt-cell title="卡包" is-link>
				<img slot="icon" src="../../assets/image/card_package.png">
			</mt-cell>
			<mt-cell title="表情" is-link>
				<img slot="icon" src="../../assets/image/expression.png">
			</mt-cell>
		</div>

		<div class="pd10">
			<mt-cell title="设置" is-link>
				<img slot="icon" src="../../assets/image/setting.png">
			</mt-cell>
		</div>
	</div>
</template>

<style>
	.pd10 {
		padding: 10px 0;
	}
	img {
		width: 24px;
		height: 24px;
	}
	.mint-cell-label {
		margin-left:37px;
	}
	.avatar {
		width: 32px;
		height: 32px;
	}
	.mint-cell-title {
		position: relative;
	}
	.first .mint-cell-text {
		position: absolute;
		left: 40px;
	}
	.mint-cell-label {
		position: absolute;
		top: 15px;
		margin-left:41px;
	}
</style>