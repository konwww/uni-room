<template>
	<view>
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class='cuIcon-title text-blue'></text>选择你所在的校区
			</view>
		</view>
		<view v-for="(item,index) in items" :key="index">
			<navigator v-bind:url="item.link" open-type="navigate">
				<view class="bg-img bg-mask flex align-center margin-xs" style="height: 400upx;" v-bind:style="{background:'url('+item.url+')',backgroundSize:'cover'}">
					<view class="padding-xl text-white">
						<view class="padding-xs text-xxl text-bold">
							{{item.title}}
						</view>
						<view class="padding-xs text-sm">
							{{item.tip}}
						</view>
					</view>
				</view>
			</navigator>
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
						title: "雅安",
						url: "/static/yaan.jpg",
						link: "./building"
					},
					{
						tip: "造福社会",
						color: "red",
						title: "成都",
						url: "/static/chengdu.jpg",
						link: "./building"
					}, {
						tip: "自强不息",
						color: "red",
						title: "都江堰",
						url: "/static/dujiangyan.jpg",
						link: "./building"
					},
				]
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
