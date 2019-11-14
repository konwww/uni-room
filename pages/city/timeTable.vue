<template>
	<view>
		<view class="flex justify-around">
			<view class="margin-xs"><text class="text-bold text-xs text-grey"></text></view>
			<view v-for="n in ['周一','周二','周三','周四','周五','周六','周日']" :key="n" class="margin-xs"><text class="text-bold text-grey text-xs">{{n}}</text></view>
		</view>
		<scroll-view>
			<view class="flex justify-around">
				<view style="height: 1800upx;" class="margin-xs">
					<view v-for="n in [8,10,12,14,16,18,20,22]" :key="n" class="margin-bottom-xs" style="height: 240upx;">
						<text class="text-grey text-bold text-xs">{{n}}:00</text>
					</view>
				</view>
				<view v-for="n in 7" :key="n" style="height: 2000upx;width: 150upx;" class="margin-xs bg-gray">
					<view v-for="n in 8" :key="n" class="margin-bottom-xs radius" :class="'bg-'+getColor()" style="height: 240upx;">
						<text class="text-grey text-bold text-xs"></text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	var color = ['red', 'black', 'green', 'blue', 'orange', 'olive', 'cyan', 'purple', 'mauve', 'pink', 'brown', 'grey', 'white', 'yellow'];
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			getColor() {
				console.log(this.$data);
				return getColor();
			},
		}
	}
	function getColor() {
		var index = parseInt(Math.random() * 14);
		return color[index];
	}
</script>

<style></style>
