<template>
	<view>
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-unlock text-blue"></text>待使用教室
			</view>
		</view>
		<view class="flex flex-direction">
			<view class="cu-card bg-gradual-blue shadow margin radius" v-for="(room,key) in data.action" :key="key" style="min-height: 330upx;">
				<view class="flex flex-direction padding">
					<text class="text-bold margin-xs">地址：{{room.alias}}</text>
					<text class="text-bold margin-xs">时间：第{{room.weekTimes}}周星期{{room.weekNum}} {{room.startTime}}-{{room.endTime}}</text>
					<text class="text-bold margin-xs">用于：{{room.usage}}</text>
					<view class="margin-sm flex justify-end">
						<button class="cu-btn cuIcon cuIcon-delete" @tap="toggleLayer('destoryLayer',room)"></button>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon cuIcon-lock text-grey"></text>已使用教室
			</view>
		</view>
		<view class="flex flex-direction">
			<view class="cu-card bg-black shadow margin radius" v-for="(room,key) in data.history" :key="key" style="min-height: 330upx;">
				<view class="flex flex-direction padding">
					<text class="text-bold margin-xs">地址：{{room.alias}}</text>
					<text class="text-bold margin-xs">时间：第{{room.weekTimes}}周星期{{room.weekNum}} {{room.startTime}}-{{room.endTime}}</text>
					<text class="text-bold margin-xs">用于：{{room.usage}}</text>
				</view>
			</view>
		</view>
		<uni-popup ref="destoryLayer" type="center">
			<view class="radius bg-black" style="min-height: 300upx;">
				<view class="flex flex-direction padding">
					<text class="text-bold margin-xs">地址：{{data.popup.destoryLayer.alias}}</text>
					<text class="text-bold margin-xs">时间：第{{data.popup.destoryLayer.weekTimes}}周星期{{data.popup.destoryLayer.weekNum}}
						{{data.popup.destoryLayer.startTime}}-{{data.popup.destoryLayer.endTime}}</text>
					<text class="text-bold margin-xs">用于：{{data.popup.destoryLayer.usage}}</text>
					<view class="margin flex">
						<input class="bg-black" v-model="status.form.confirm.isOK" type="text" placeholder="确认删除,请输入 'OK' " /><button
						 class="cu-btn cuIcon cuIcon-delete" @tap="confirm"></button>
					</view>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="msg" type="center">
			<view class="radius padding-lg text-center bg-black">{{data.popup.msg}}</view>
		</uni-popup>
		<uni-fab :pattern="{
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#007AFF'}"
		 :content="content" horizontal="right" vertical="bottom" direction="vertical" @trigger="trigger"></uni-fab>
	</view>
</template>

<script>
	import common from "@/common/common.js";
	import uniPopup from "@/components/uni-popup/uni-popup.vue";
	import uniFab from '@/components/uni-fab/uni-fab.vue';
	export default {
		components: {
			uniPopup,
			uniFab
		},
		data() {
			return {
				data: {
					history: [{
						cid: "1234",
						alias: "A201",
						weekTimes: 7,
						weekNum: 3,
						startTime: "18:00",
						endTime: "19:00",
						usage: "用于XXX班举办团日活动"
					}],
					action: [{
						cid: "1234",
						alias: "A201",
						weekTimes: 7,
						weekNum: 3,
						startTime: "18:00",
						endTime: "19:00",
						usage: "用于XXX班举办团日活动"
					}],
					popup: {
						destoryLayer: {
							cid: "1234",
							alias: "A201",
							weekTimes: 7,
							weekNum: 3,
							startTime: "18:00",
							endTime: "19:00",
							usage: "用于XXX班举办团日活动"
						},
						msg: {

						}
					}
				},
				status: {
					popup: {
						destoryLayer: false
					},
					form: {
						confirm: {
							isOK: ""
						}
					}
				},
				content: [{
						iconPath: '/static/component.png',
						selectedIconPath: '/static/componentHL.png',
						text: '首页',
						active: false
					},
					{
						iconPath: '/static/api.png',
						selectedIconPath: '/static/apiHL.png',
						text: '账号设置',
						active: false
					},
					{
						iconPath: '/static/template.png',
						selectedIconPath: '/static/templateHL.png',
						text: '我的预约',
						active: true
					}
				]


			}
		},
		methods: {
			onLoad() {

			},
			getHistory() {

			},
			getAction() {

			},
			toggleLayer(type, value) {
				this.$refs[type].open();
				this.data.popup[type] = value;
			},
			confirm() {
				if (this.status.form.confirm.isOK === "OK") {
					this.data.popup.msg = "你填写了OK";
				} else {
					this.data.popup.msg = "你填写的不是OK";
				}
				this.$refs.msg.open();
			}
		}
	}
</script>

<style>
</style>
