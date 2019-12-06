<template>
	<view>
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>
				选择位置
			</view>
		</view>
		<view v-for="(item, index) in items" :key="index">
			<navigator :url="'./floor?bid='+item.id">
				<view class="flex align-center margin-xs" style="height: 400upx;" :class="'bg-gradual-'+getColor()">
					<view class="padding-xl text-white">
						<view class="padding-xs text-xxl text-bold">{{ item.buildingAlias }}</view>
						<view class="padding-xs text-sm">造福社会</view>
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>
<script>
	import common from "../../common/common.js"
	export default {
		data() {
			return {
				api: {
					exp: null
				},
				items: null
			};
		},
		methods: {
			onLoad(option) {
				this.api.exp = JSON.stringify({
					city: option.city
				});
				this.getBuildingList();
			},
			onReady(){
				uni.setNavigationBarTitle({
					title: '选择教学楼'
				});
			},
			// 读取楼栋数据
			getBuildingList() {
				uni.request({
					url: common.HOST + "/building/index",
					data: this.api,
					success: (data) => {
						this.items = data.data.data;
						console.log(this.items);
					},
					fail: (err) => {

					}
				})
			},
			getColor() {
				let color = ["blue", "orange", "red", "pink", "purple", "red"],
					index = parseInt(Math.random() * 6);
				return color[index];

			}
		}
	};
</script>

<style></style>
