<template>
	<view>
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class='cuIcon-title text-blue'></text>选择位置
			</view>
		</view>
		<view v-for="(item,index) in items" :key="index">
			<view @click="uni.navigateTo({
			})" class="bg-img bg-mask flex align-center margin-xs" style="height: 400upx;" v-bind:style="{background:'url('+item.url+')',backgroundSize:'cover'}">
				<view class="padding-xl text-white">
					<view class="padding-xs text-xxl text-bold">
						{{item.title}}
					</view>
					<view class="padding-xs text-sm">
						{{item.tip}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				items: [{
					tip: "追求真理",
					color: "red",
					title: "第十教学楼",
					url:"/static/yaan.jpg"
				},
				{
					tip: "造福社会",
					color: "red",
					title: "第一教学楼",
					url:"/static/chengdu.jpg"
				},]
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
