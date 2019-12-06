<template>
	<view>
		<wuc-tab :tab-list="tabList" textFlex :tabCur.sync="TabCur" tab-class="text-center text-black bg-white fiexd"
		 select-class="text-orange"></wuc-tab>
		<scroll-view>
			<block v-if="TabCur === 1">
				<view v-for="(item, index) in items" :key="index">
					<view class="cu-bar bg-white solid-bottom">
						<view class="action">
							<text class="cuIcon-title text-blue"></text>
							{{ item.floor }}
						</view>
					</view>
					<view class="flex flex-wrap justify-around">
						<navigator v-for="(classroom, key) in item.classroom" :key="key" v-bind:url="'classroom?rid=' + classroom.rid">
							<view @tap="linkTo('./timeTable?id='+classroom.rid)" class="padding-sm margin-sm radius shadow" v-bind:class="'bg-' + item.color">{{ classroom.houseNum }}</view>
						</navigator>
					</view>
				</view>
				<view class="flex justify-center margin-top-xl">
					<button @tap="setHouseList()" v-if="api.page>0" class="cu-btn bg-white sm">more</button>
				</view>
			</block>
			<block v-if="TabCur === 0">
				<view>
					<view class="margin">
						<text>使用日期</text>
						<button @tap="pickDate" class="cu-btn radius bg-black margin">{{ data.date === false ? '选择日期' : data.date }}</button>
					</view>
					<view class="margin">
						<text>开始时间</text>
						<button @tap="pickStartTime" class="cu-btn radius bg-black margin">{{ data.startTime === false ? '选择时间' : data.startTime }}</button>
					</view>
					<view class="margin">
						<text>结束时间</text>
						<button @tap="pickEndTime" class="cu-btn radius bg-black margin">{{ data.endTime === false ? '选择时间' : data.endTime }}</button>
					</view>
					<view class="flex"><button class="margin radius bg-black cu-btn lg flex-sub" @tap="setRandData()">筛选</button></view>
					<view>
						<view v-for="(item, index) in randData" :key="index">
							<view class="lg radius margin padding" @tap="pickThis(item.rid,item.houseNum)" :class="'bg-' + getColor()">{{ item.houseNum }}</view>
						</view>
					</view>
				</view>
			</block>
		</scroll-view>
		<view>
			<w-picker mode="linkage" :value="['1','1']" @confirm="setUsageDate" ref="usageDate" :linkList="weekInfo" themeColor="#f00"></w-picker>
			<w-picker mode="time" startYear="2019" @confirm="setStartTime" ref="usageStartTime" current="" themeColor="#f00"></w-picker>
			<w-picker mode="time" startYear="2019" @confirm="setEndTime" ref="usageEndTime" current="" themeColor="#f00"></w-picker>
		</view>
		<uni-popup ref="mark">
			<form>
				<view class="cu-form-group margin-top">
					<view class="title">地点</view>
					<input class="text-center" :value="data.value.houseAlias" disabled="" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">时间</view>
					<input class="text-center" :value="data.date" disabled="" placeholder="星期N" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">开始时间</view>
					<input :value="data.value.start" disabled="" placeholder="选择时间" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">结束时间</view>
					<input :value="data.value.end" disabled="" placeholder="选择时间" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">用途</view>
					<input placeholder="用途" v-model="data.value.usage" :value="data.value.usage" name="input"></input>
				</view>
				<view class="cu-form-group">
					<button class="cu-btn" style="width: 100%;" @tap="mark()">添加</button>
				</view>
			</form>
		</uni-popup>
		<uni-popup ref="msg">
			<view class="bg-black padding-lg"><text>{{msg.alert}}</text></view>
		</uni-popup>
	</view>
</template>
<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	import wPicker from '@/components/w-picker/w-picker.vue';
	import common from "@/common/common.js";
	import uniPopup from "@/components/uni-popup/uni-popup.vue";
	var color = ['red', 'black', 'green', 'blue', 'orange', 'olive', 'cyan', 'purple', 'mauve', 'pink', 'brown', 'grey',
		'white', 'yellow'
	];
	export default {
		components: {
			WucTab,
			wPicker,
			uniPopup
		},
		data() {
			return {
				data: {
					date: false,
					startTime: false,
					endTime: false,
					value: {
						weekNum: null,
						weekTimes: null,
						start: null,
						end: null,
						usage: "",
						cid: "",
						houseAlias: ""
					},
				},

				popup: {
					mark: false,
					msg: false,
					alert: false,
				},
				msg: {
					startHeight: 0,
					usage: 0,
					endHeight: 0,
					alert: ""
				},
				weekInfo: common.setWeekInfo(),
				TabCur: 0,
				tabList: [{
						name: '快速选择'
					},
					{
						name: '精确选择'
					}
				],
				items: [],
				randData: [],
				api: {
					bid: 97,
					page: 1,
					limit: 24
				}
			};
		},
		methods: {
			onLoad(option) {
				//获取传递过来的building id
				this.api.bid = option.bid
			},
			onReady() {
				this.setHouseList();
			},
			getColor() {
				console.log(this.$data);
				return getColor();
			},
			setRandData() {
				let data = this.$data.data.value;
				data["bid"] = this.$data.api.bid;
				let responseData = [];
				uni.request({
					url: common.HOST + "/public/randHouse",
					data: data,
					success: (resData) => {
						responseData = resData.data.data;
						this._data.randData = responseData;
					}
				})
			},
			setHouseList() {
				let data = this.$data.api;
				let responseData = []
				uni.request({
					url: common.HOST + "/public/get-house-list",
					data: data,
					success: (resData) => {
						responseData = resData.data.data;
						this._data.items.push({
							classroom: responseData,
							floor: data.page,
							color: getColor()
						});
						if (responseData.length < data.limit) {
							this._data.api.page = -1;
						}
						this._data.api.page += 1;
					}
				})
			},
			tabChange(index) {
				this.TabCur = index;
			},
			swiperChange3(e) {
				let {
					current
				} = e.target;
				this.TabCur = current;
			},
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
				this.$data.data.value.weekTimes = val.checkValue[0]
				this.$data.data.value.weekNum = val.checkValue[1]
				console.log(val);
			},
			setStartTime(val) {
				this.$data.data.startTime = val.result;
				this.$data.data.value.start = val.result;
			},
			setEndTime(val) {
				this.$data.data.endTime = val.result;
				this.$data.data.value.end = val.result;
			},
			linkTo(url) {
				uni.navigateTo({
					url: url
				})
			},
			mark() {
				let data = this.data.value;
				delete data["start"];
				delete data["end"];
				data["startTime"] = this.data.startTime;
				data["endTime"] = this.data.endTime;
				uni.request({
					url: common.HOST + "/public/register",
					data: data,
					success: (resData) => {
						this.msg.alert = resData.data.msg;
						this.$refs.msg.open();
					}
				})
			},
			pickThis(cid, houseAlias) {
				this.data.value.cid = cid;
				this.data.value.houseAlias = houseAlias;
				this.$refs["mark"].open();
			}
		}
	};
	
	function getColor() {
		var index = parseInt(Math.random() * 14);
		return color[index];
	}
</script>

<style></style>
