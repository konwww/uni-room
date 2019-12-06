<template>
	<view>
		<view class="bg-gradual-blue flex justify-center padding">
			<image src="../../static/dujiangyan.jpg" style="border-radius: 100%;width: 300upx;height: 300upx;border: 10upx solid rgba(255,255,255,0.5);"></image>
		</view>
		<form>
			<view class="cu-form-group">
				<view class="title">用户名</view>
				<input type="text" v-model="info.username" placeholder="大于4个字符" :value="info.username" :disabled="!status.edit.username" />
				<view class="text-blue" @tap="change_status('username')">{{status.edit.username?"完成":"编辑"}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title">邮箱</view>
				<input type="text" v-model="info.email" :value="info.email" :disabled="!status.edit.email" />
				<view class="text-blue" @tap="change_status('email')">{{status.edit.email?"完成":"编辑"}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title">更新密码</view>
				<input type="password" v-model="info.password" :disabled="true" />
				<view class="text-blue">更新</view>
			</view>
		</form>
		<uni-fab :pattern="{
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#007AFF'}"
		 :content="tab_content" horizontal="right" vertical="bottom" direction="vertical" @trigger="trigger"></uni-fab>
	</view>
</template>

<script>
	import uniFab from '@/components/uni-fab/uni-fab.vue';
	import common from "@/common/common.js"
	export default {
		components: {
			uniFab
		},
		data() {
			return {
				info: {
					username: "",
					email: "",
					password: ""
				},
				status: {
					edit: {
						username: false,
						email: false
					}
				},
				tab_content: [{
						iconPath: '/static/component.png',
						selectedIconPath: '/static/componentHL.png',
						text: '首页',
						active: false
					},
					{
						iconPath: '/static/api.png',
						selectedIconPath: '/static/apiHL.png',
						text: '账号设置',
						active: true
					},
					{
						iconPath: '/static/template.png',
						selectedIconPath: '/static/templateHL.png',
						text: '我的预约',
						active: false
					}
				]
			}
		},
		methods: {
			trigger(e) {

			},
			change_status(name) {
				this.status.edit[name] = !this.status.edit[name];
				switch (name) {
					case 'email':
					this.change_pwd();
						break;
					case 'username':
					this.change_username()();
						break;
					default:
						break;
				}
			},
			change_pwd() {
				uni.request({
					url: common.HOST + "/user/change-pwd",
					data:this.info,
					success: (data) => {
						
					},
					fail: (data) => {
						
					}
				})
			},
			change_email() {
					if (this.status.edit.email)return false;//如果状态是编辑状态，则直接跳过
					uni.request({
						url: common.HOST + "/user/set-email",
						data:this.info,
						success: (data) => {
							
						},
						fail: (data) => {
							
						}
					})

			},
			change_username() {
				if (this.status.edit.username)return false;//如果状态是编辑状态，则直接跳过
				uni.request({
					url: common.HOST + "/user/set-username",
					data:this.info,
					success: (data) => {
						
					},
					fail: (data) => {
						
					}
				})
			}
		}
	}
</script>

<style>
</style>
