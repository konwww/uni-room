<template>
	<view>
		<wuc-tab :tab-list="tabList" textFlex :tabCur.sync="TabCur" tab-class="text-center text-black bg-white fiexd"
		 select-class="text-orange"></wuc-tab>
		<scroll-view>
			<block v-if="TabCur===1">
				<view class="cu-bar bg-white solid-bottom">
					<view class="action">
						<text class='cuIcon-title text-blue'></text>快速选择
					</view>
				</view>
				<view class="flex">
					<navigator v-for="(classroom,index) in randData" :key="index" v-bind:url="'classroom?rid='+classroom.rid">
						<view class="padding-sm margin-sm radius text-center" style="width: 200upx;" v-bind:class="'bg-'+getColor()">
							{{classroom.houseNum}}
						</view>
					</navigator>
				</view>
				<view class="flex">
					<button class="flex-sub margin margin-bottom-xl cu-btn padding bg-black">换一批</button>
				</view>
				<view v-for="(item,index) in items" :key="index">
					<view class="cu-bar bg-white solid-bottom">
						<view class="action">
							<text class='cuIcon-title text-blue'></text>{{item.floor}}
						</view>
					</view>
					<view class="flex">
						<navigator v-for="(classroom,key) in item.classroom" :key="key" v-bind:url="'classroom?rid='+classroom.rid">
							<view class="padding-sm margin-sm radius" v-bind:class="'bg-'+item.color">
								{{classroom.houseNum}}
							</view>
						</navigator>
					</view>
				</view>
			</block>
			<block v-if="TabCur===0">
				<button @tap=""></button>
			</block>
		</scroll-view>
		<view>
			<w-picker mode="dateTime" startYear="2019" @confirm="onConfirm" ref="picker" themeColor="#f00"></w-picker>
		</view>
	</view>
</template>
<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	import wPicker from '@/components/w-picker/w-picker.vue'
	var color = ["red", "black", "green", "blue", "orange", "olive", "cyan", "purple", "mauve", "pink", "brown", "grey",
		"white", "yellow"
	]
	export default {
		components: {
			WucTab,
			wPicker
		},
		data() {
			return {
				TabCur: 0,
				tabList: [{
					name: '快速选择'
				}, {
					name: '精确选择'
				}],
				items: [{
						classroom: [{
							"rid": "0",
							"houseNum": "A101",
						}, {
							"rid": "1",
							"houseNum": "A102",
						}, {
							"rid": "2",
							"houseNum": "A103",
						}, ],
						floor: "一楼",
						color: getColor()
					},
					{
						classroom: [{
							"rid": "0",
							"houseNum": "A201",
						}, {
							"rid": "1",
							"houseNum": "A202",
						}, {
							"rid": "2",
							"houseNum": "A203",
						}, ],
						floor: "二楼",
						color: getColor()
					}, {
						classroom: [{
							"rid": "0",
							"houseNum": "A201",
						}, {
							"rid": "1",
							"houseNum": "A202",
						}, {
							"rid": "2",
							"houseNum": "A203",
						}, ],
						floor: "三楼",
						color: getColor()
					}, {
						classroom: [{
							"rid": "0",
							"houseNum": "A201",
						}, {
							"rid": "1",
							"houseNum": "A202",
						}, {
							"rid": "2",
							"houseNum": "A203",
						}, ],
						floor: "二楼",
						color: getColor()
					}, {
						classroom: [{
							"rid": "0",
							"houseNum": "A201",
						}, {
							"rid": "1",
							"houseNum": "A202",
						}, {
							"rid": "2",
							"houseNum": "A203",
						}, ],
						floor: "三楼",
						color: getColor()
					},
				],
				randData: [{
					"rid": "2",
					"houseNum": "A203",
				}, {
					"rid": "1",
					"houseNum": "A102",
				}, {
					"rid": "2",
					"houseNum": "A103",
				}, ],

			}
		},
		methods: {
			getColor() {
				return getColor();
			},
			tabChange(index) {
				this.TabCur = index;
			},
			swiperChange3(e) {
				let {
					current
				} = e.target;

				this.TabCur = current;
			}
		}
	}

	function getColor() {
		var index = parseInt(Math.random() * 14);
		return color[index];
	}
	function onConfirm(){
		
	}
	function openPicker(){
		
	}
</script>

<style>

</style>
