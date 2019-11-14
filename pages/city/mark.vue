<template>
	<view>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">地点</view>
				<input class="text-center" placeholder="用途" :value="data.houseNum" disabled="" name="input"></input>
			</view>
			<view class="cu-form-group">
					<view class="title">使用日期</view>
					<input @tap="pickDate()" :value="data.date" placeholder="选择日期" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">开始时间</view>
					<input @tap="pickStartTime()" :value="data.startTime" placeholder="选择时间" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">结束时间</view>
					<input @tap="pickEndTime()" :value="data.endTime" placeholder="选择时间" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">用途</view>
					<input placeholder="用途" name="input"></input>
				</view>
				<view class="cu-form-group">
					<button class="cu-btn" style="width: 100%;">添加</button>
				</view>
		</form>
		<view>
			<w-picker mode="date" startYear="2019" @confirm="setUsageDate" ref="usageDate" current="" themeColor="#f00"></w-picker>
			<w-picker mode="time" startYear="2019" @confirm="setStartTime" ref="usageStartTime" current="" themeColor="#f00"></w-picker>
			<w-picker mode="time" startYear="2019" @confirm="setEndTime" ref="usageEndTime" current="" themeColor="#f00"></w-picker>
		</view>
	</view>
</template>

<script>
	
	import wPicker from '@/components/w-picker/w-picker.vue';
export default {
	components:{
		wPicker
	},
	data() {
		return {
			data: {
				date: "",
				startTime: "",
				endTime: "",
				rid:123,
				houseNum:"A211",
			},
		}
	},
	methods: {
		pickDate() {
			this.$refs['usageDate'].show();
		},
		pickStartTime() {
			this.$refs['usageStartTime'].show();
		},
		pickEndTime() {
			this.$refs['usageEndTime'].show();
		},
		setUsageDate(val) {
			this.$data.data.date = val.result;
		},
		setStartTime(val) {
			this.$data.data.startTime = val.result;
		},
		setEndTime(val) {
			this.$data.data.endTime = val.result;
		}
	}
};
</script>
<style></style>
