// const HOST = "http://bb.test.com";
// const HOST = "http://bb.test.com";
const HOST="http://blackboard.finspace.top"
export default {
	HOST,
	setWeekInfo
}

function setWeekInfo() {
	let week = [],
		tmp = {};
	for (let i = 1; i <= 20; i++) {
		tmp["label"] = "第" + i + "周";
		tmp["value"] = i;
		tmp["children"] = [{
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
		}]
		week.push(tmp);
		tmp = {};
	}
	return week;
}
