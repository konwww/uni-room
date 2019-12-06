<template>
	<view class="bg-gradual-blue flex flex-direction justify-center" style="height: 100vh;margin-top: -44px;">
		<view class="flex justify-center bg-gradual-black margin align-center radius" style="height: 25vh;border: solid 6px #555555;box-shadow: inset -2px -2px 3px #CCCCCC;">
			<text class="text-Abc text-center text-lg" style="font-family: shouxie;">同学,借教室吗?</text>( ´▽` )ﾉ
		</view>
		<form class="margin">
			<view class="cu-form-group">
				<input type="text" placeholder="邮箱|用户名"></input>
			</view>
			<view class="cu-form-group">
				<input type="password" placeholder="密码"></input>
			</view>
			<view class="cu-form-group">
				<button class="cu-btn bg-black" style="width: 100%;">登陆</button>
			</view>
		</form>
	</view>
</template>

<script>
	uni.setNavigationBarTitle({
		title: '登陆'
	});
</script>

<style>
	@font-face {
		font-family: shouxie;
		src: url("../../static/shouxie.ttf");
	}

	.bg-gradual-black {
		background-image: linear-gradient(to left, #232526 0, #333333 100%);
		/* background-image: linear-gradient(to left, #232526, #414345); */
		color: white;
	}
</style>
