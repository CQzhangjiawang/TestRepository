const base_url = "http://10.167.237.181:8000/";
let app = new Vue({
	el: "#app",
	data() {
		return {
			url: "10.167.237.181:8000/all/mp3",
			songsName: [],
			songsSrc: [],
			nowIndex: 0,
			nowMusic: "",
			currentime: "",
			millsecondCount: 0,
			totaltime: 0,
			percentage: 20,
			lrcScrollHeight: 30,
			lastscrollTime: 0,
			mode: "random",
			status: "pause",
			volume: 100,
			speed: "1.0",
			nowLrcArr: {
				ti: "",
				ar: "",
				al: "",
				by: "",
				img: "",
				lrc: []
			}
		}
	},
	methods: {
		// 提交获取歌曲列表
		onsubmit: () => {
			let real_url = "http://" + app.url;
			axios.get(real_url).then(res => {
				app.songsName = res.data.songsName;
				app.songsSrc = res.data.songsSrc;
				app.nowMusic = res.data.songsSrc[app.nowIndex];
				app.play(app.nowMusic);
			}, err => {
				console.log(err);
				app.alert_message("歌曲列表获取失败...");
			})
		},
		// 选择歌曲播放
		play: async(src, index) => {
			app.nowMusic = src;
			app.nowIndex = index;
			let songName = src.substr(src.lastIndexOf("\\") + 1);
			let real_url = encodeURI(base_url + "mp3/lrc/" + songName.replace(".mp3", ""));
			await axios.get(real_url).then(res => {
				app.nowLrcArr = res.data.lrc_arr;
			}, err => {
				console.log(err);
			})
			app.status = "pause";
			app.toggle_status();
			app.goback();
		},
		timeupdate: () => {
			let audio_controller = document.getElementById("audio");
			if(audio_controller.duration != NaN) {
				app.totaltime = audio_controller.duration.toFixed(2);
				let current_time = audio_controller.currentTime;
				for(let index in app.nowLrcArr.lrc) {
					let lrc_t = app.nowLrcArr.lrc[index]["t"];
					if(Math.floor(current_time) == parseInt(lrc_t) && Math.floor(current_time) != app.lastscrollTime) {
						app.lastscrollTime = Math.floor(current_time);
						app.scroll();
						$("#lrc p:eq(" + index + ")").css("color", "#12baf6");
//						$("#lrc p:eq(" + index + ")").css("font-size", "1.6em");
						$("#lrc p:eq(" + index + ")").animate({
							"font-size":"1.6em"
						},400)
						if(index > 0) {
							$("#lrc p:eq(" + index + ")").siblings().css("color", "white");
//							$("#lrc p:eq(" + index + ")").siblings().css("font-size", "1.2em");
							$("#lrc p:eq(" + index + ")").animate({
//								"color":"white",
								"font-size":"1.2em"
							},300)
							break;
						}
					}
				}
			}
		},
		scroll: () => {
			let lrc_div = $("#lrc");
			let currentTop = parseInt(lrc_div.css("top").replace("px", ""));
			lrc_div.animate({
				top: (currentTop - app.lrcScrollHeight) + "px"
			}, 300)
		},
		goback: () => {
			$("#lrc").animate({
				top: "200px"
			}, 100);
			$("#lrc p").css("color", "white");
			$("#lrc p").css("font-size", "1.2em");
		},
		alert_message: message => {
			app.$alert(message, '提示', {
				type: "error",
				confirmButtonText: 'OK',
			});
		},
		load: () => {
			console.log("load--------------")
		},
		toggle_status: () => {
			if(app.status == "play") {
				$(".record").css("animation", "")
				$(".arm").css("animation", "")
				$(".arm").css("animation-direction", "")
				app.status = "pause"
				let audio_controller = document.getElementById("audio");
				audio_controller.pause();
				$("#status").attr("class", "glyphicon glyphicon-play");
			} else {
				$(".record").css("animation", "spin 1s infinite linear")
				$(".arm").css("animation", "armTwitch 0.5s infinite")
				$(".arm").css("animation-direction", "alternate-reverse")
				app.status = "play"
				let audio_controller = document.getElementById("audio");
				audio_controller.play();
				$("#status").attr("class", "glyphicon glyphicon-pause");
			}
		},
		volume_change: () => {
			let audio_controller = document.getElementById("audio");
			$("#audio")[0].muted = false;
			$("#volume").attr("class", "glyphicon glyphicon-volume-up")
			audio_controller.volume = app.volume / 100;
		},
		volume_switch: () => {
			if($("#audio")[0].muted) {
				$("#audio")[0].muted = false;
				$("#volume").attr("class", "glyphicon glyphicon-volume-up")
			} else {
				$("#audio")[0].muted = true;
				$("#volume").attr("class", "glyphicon glyphicon-volume-off")
			}

		},
		updateSpeed: () => {
			console.log(app.speed)
			let audio_controller = document.getElementById("audio");
			audio_controller.playbackRate = app.speed;
		},
		next: () => {
			if(app.mode == "random") {
				let index = Math.floor((Math.random() * app.songsSrc.length))
				app.nowIndex = index;
				app.nowMusic = app.songsSrc[index];
			} else if(app.mode == "sequence") {
				if(app.nowIndex < app.songsSrc.length - 1) {
					app.nowIndex += 1;
					app.nowMusic = app.songsSrc[app.nowIndex];
				} else {
					app.nowIndex = 0;
					app.nowMusic = app.songsSrc[app.nowIndex];
				}
			}else if(app.mode == "loop"){
				let audio_controller = document.getElementById("audio");
				audio_controller.currentTime = "0.0";
			}
			app.play(app.songsSrc[app.nowIndex]);
		},
		pre: () => {
			if(app.nowIndex > 0) {
				app.nowIndex -= 1;
				app.nowMusic = app.songsSrc[app.nowIndex];
			} else {
				app.nowIndex = app.songsSrc.length - 1;
				app.nowMusic = app.songsSrc[app.nowIndex];
			}
			app.play(app.songsSrc[app.nowIndex]);
		},
		stop: () => {
			let audio_controller = document.getElementById("audio");
			audio_controller.currentTime = "0.0";
			app.toggle_status();
		}

	}
})
app.onsubmit();