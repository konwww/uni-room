<template>
	<view>

		<view class="flex justify-center">
			<button class="cu-btn bg-cyan xs margin" @tap="renderPicker('weekTimes')">第{{api.weekTimes}}周</button>
		</view>
		<view class="flex justify-around">
			<view class="margin-xs"><text class="text-bold text-xs text-grey"></text></view>
			<view v-for="n in ['周一','周二','周三','周四','周五','周六','周日']" :key="n" class="margin-xs"><text class="text-bold text-grey text-xs">{{n}}</text></view>
		</view>
		<scroll-view>
			<view class="flex justify-around">
				<view style="height: 1800upx;" class="margin-left-sm">
					<view v-for="n in [8,10,12,14,16,18,20,22]" :key="n" :style="'height:240upx'">
						<text class="text-grey text-bold text-xs">{{n}}:00</text>
					</view>
				</view>
				<view v-for="(item,index) in table" :key="index" style="height: 1680upx;width: 150upx;max-width: 150upx;" class="margin-xs bg-gray">
					<view @tap="value.usage!==undefined?toggleMsg(value):togglePopup()" v-for="(value,key) in item" :key="key" class="radius flex flex-direction align-center light"
					 :class="'bg-'+value.color" style="margin-bottom: 3upx;" :style="'height: '+(value.length*2)+'upx;'">
						<text class="text-bold text-xs">{{8+parseInt(value.startHeight/60)+":"+parseInt(value.startHeight%60/10)+""+parseInt(value.startHeight%60%10)}}</text>
						<text class="text-bold text-xs">{{value.usage!=undefined?value.usage:"空闲"}}</text>
						<text class="text-bold text-xs">{{8+parseInt(value.endHeight/60)+":"+parseInt(value.endHeight%60/10)+""+parseInt(value.endHeight%60%10)}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
		<uni-popup ref="mark">
			<view>
				<form>
					<view class="cu-form-group margin-top">
						<view class="title">地点</view>
						<input class="text-center" placeholder="用途" :value="api.location" disabled="" name="input"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">第{{api.weekTimes}}周</view>
						<input @tap="renderPicker('weekNum')" :value="pickVal.weekNumAlias" placeholder="星期N" name="input"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">开始时间</view>
						<input @tap="renderPicker('startTime')" :value="pickVal.startTime==null?'选择时间':pickVal.startTime" placeholder="选择时间"
						 name="input"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">结束时间</view>
						<input @tap="renderPicker('endTime')" :value="pickVal.endTime==null?'选择时间':pickVal.endTime" placeholder="选择时间"
						 name="input"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">用途</view>
						<input v-model="pickVal.usage" placeholder="用途" name="input"></input>
					</view>
					<view class="cu-form-group">
						<button class="cu-btn" style="width: 100%;" @tap="mark()">添加</button>
					</view>
				</form>
			</view>
		</uni-popup>
		<uni-popup ref="marked">
			<view class="bg-black radius padding flex flex-direction">
				<text class="text-bold text-xs margin-xs">开始时间:{{8+parseInt(msg.startHeight/60)+":"+parseInt(msg.startHeight%60/10)+""+parseInt(msg.startHeight%60%10)}}</text>
				<text class="text-bold text-xs margin-xs">结束时间:{{8+parseInt(msg.endHeight/60)+":"+parseInt(msg.endHeight%60/10)+""+parseInt(msg.endHeight%60%10)}}</text>
				<text class="text-bold text-xs margin-xs">用于: {{msg.usage}}</text>
			</view>
		</uni-popup>
		<uni-popup ref="msg">
			<view class="bg-black padding-lg"><text>{{msg.alert}}</text></view>
		</uni-popup>
		<!-- 选择器集合 -->
		<view>
			<w-picker mode="selector" @confirm="setWeekTimes" ref="weekTimes" :selectList="weekInfo" themeColor="#f00"></w-picker>
			<w-picker mode="selector" @confirm="setWeekNum" ref="weekNum" :selectList="weekNumList" themeColor="#f00"></w-picker>
			<w-picker mode="time" startYear="2019" step="10" @confirm="setStartTime" ref="startTime" current="" themeColor="#f00"></w-picker>
			<w-picker mode="time" startYear="2019" step="10" @confirm="setEndTime" ref="endTime" current="" themeColor="#f00"></w-picker>
		</view>
	</view>
</template>

<script>
	import wPicker from '@/components/w-picker/w-picker.vue';
	import common from "@/common/common.js";
	import uniPopup from "@/components/uni-popup/uni-popup.vue";
	var color = ['red', 'green', 'blue', 'orange', 'olive', 'cyan', 'purple', 'mauve', 'pink', 'brown',
		'yellow'
	];
	export default {
		components: {
			wPicker,
			uniPopup
		},
		data() {
			return {
				pickVal: {
					weekNumAlias: "",
					startTime: null,
					endTime: null,
					weekNum: null,
					usage: "xxx"
				},
				api: {
					weekTimes: 10,
					cid: 3068,
					limitTime: 223000,
					location: "A211"
				},
				table: [],
				weekInfo: common.setWeekInfo(),
				weekNumList: [{
					label: "星期一",
					value: 1,
				}, {
					label: "星期二",
					value: 2,
				}, {
					label: "星期三",
					value: 3,
				}, {
					label: "星期四",
					value: 4,
				}, {
					label: "星期五",
					value: 5,
				}, {
					label: "星期六",
					value: 6,
				}, {
					label: "星期日",
					value: 7,
				}],
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
				}
			}
		},
		methods: {
			onLoad(option) {
				this.api.cid=option.id
				this.getTimeTable();
			},
			onReady(option) {},
			getColor() {
				return getColor();
			},
			renderPicker(name) {
				this.$refs[name].show();
			},
			setStartTime(val) {
				this.$data.pickVal.startTime = val.result;
			},
			setEndTime(val) {
				this.$data.pickVal.endTime = val.result;
			},
			getTimeTable() {
				let exp = this.$data.api
				uni.request({
					url: common.HOST + "/public/get-time-table",
					data: exp,
					success: (data) => {
						let limitTime = this._data.api.limitTime;
						limitTime = ((limitTime / 10000 - 8) - (limitTime / 10000 - 8) % 1) * 60 + (limitTime / 10000 - 8) % 1 * 100;
						this._data.table = format_time_table(data.data.data, parseInt(limitTime));
					}
				})
			},
			mark() {
				let data = this.pickVal;
				data["weekTimes"] = this.api.weekTimes;
				data["cid"] = this.api.cid;
				uni.request({
					url: common.HOST + "/public/register",
					data: data,
					success: (resData) => {
						this.msg.alert = resData.data.msg;
						this.$refs.msg.open();
					}
				})
			},
			setWeekTimes(val) {
				this.$data.api.weekTimes = val.checkArr.value;
				this.getTimeTable();
			},
			setWeekNum(val) {
				this.pickVal.weekNum = val.checkArr.value
				this.pickVal.weekNumAlias = val.result
			},
			togglePopup(type, open) {
				this.type = type;
				this.$refs.mark.open();
			},
			toggleMsg(msg) {
				this.msg = msg;
				this.$refs.marked.open();
			},
		}
	}

	function format_time_table(data, limitTime) {
		let newData = {
			"1": [],
			"2": [],
			"3": [],
			"4": [],
			"5": [],
			"6": [],
			"7": []
		};
		for (let i in data) {
			switch (data[i].weekNum) {
				case 0:
					newData["1"].push(data[i]);
					break;
				case 1:
					newData["2"].push(data[i]);
					break;
				case 2:
					newData["3"].push(data[i]);
					break;
				case 3:
					newData["4"].push(data[i]);
					break;
				case 4:
					newData["5"].push(data[i]);
					break;
				case 5:
					newData["6"].push(data[i]);
					break;
				case 6:
					newData["7"].push(data[i]);
					break;
			}
		}
		for (let i in newData) {
			//初始化
			let start = 0,
				end = 0,
				line = [];
			if (newData[i].length === 0) {
				line.push({
					startHeight: end,
					endHeight: limitTime,
					length: limitTime - end,
					color: getColor()
				})
				newData[i] = line;
				continue;
			}
			for (let k in newData[i]) {
				let startHei = parseInt(newData[i][k].startHeight),
					endHei = parseInt(newData[i][k].endHeight);
				if (startHei > 0 && startHei - end - 1 > 0) {
					let tmp = {
						startHeight: end,
						endHeight: startHei,
						length: startHei - end,
						color: getColor()
					};
					line.push(tmp)
					line.push(newData[i][k])
				} else {
					line.push(newData[i][k]);
				}
				start = startHei,
					end = endHei;
			}
			if (limitTime - end + 1 > 0) {
				line.push({
					startHeight: end,
					endHeight: limitTime,
					length: limitTime - end - line.length,
					color: getColor()
				});
			}
			newData[i] = line;
		}
		console.log(newData);
		return newData;
	}


	function getColor() {
		var index = parseInt(Math.random() * 10);
		return color[index];
	}
</script>

<style></style>
