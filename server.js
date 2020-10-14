var http = require('http');
var readline = require('readline');
var fs = require('fs');
var url = require('url');
var path = require('path');
var exec = require('child_process').exec;
var songsName = [];
var songsSrc = [];

// 获取目录下所有的歌曲
function getSongs(dir) {
	const files = fs.readdirSync(dir);
	files.forEach((item, index) => {
		var fullPath = path.join(dir, item);
		const stat = fs.statSync(fullPath);
		if(stat.isDirectory()) {
			getSongs(fullPath); //递归读取文件
		} else {
			if(item.endsWith('.mp3')) {
				songsName.push(item);
				songsSrc.push(fullPath);
			}
		}
	});
}

padZero = (num, n) => {
	let len = num.toString().length;
	while(len < n) {
		num = "0" + num;
		len++;
	}
	return num;
},
// 创建服务器
http.createServer(function(request, response) {
	// 解析请求，包括文件名
	if(request.url.startsWith('/all/mp3')) {

		songsName = [];
        songsSrc = [];
		getSongs("./mp3/");

		let data = {
			songsName:songsName,
			songsSrc:songsSrc
		}
		//可以解决跨域的请求
		response.writeHead(200, {
			"Content-Type": 'application/plain',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
		});
		response.write(JSON.stringify(data));
		response.end();
	}
	if(request.url.startsWith('/mp3/lrc')) {

		let data = {
			lrc_arr:{
				ti:"",
				ar:"",
				al:"",
				by:"",
				img:"",
				lrc:[]
			}
		};
		let songName = decodeURI(request.url.substr(request.url.lastIndexOf("/")+1));
		data.lrc_arr.img = './mp3/img/艾辰-来不及说再见.jpg';
		try{
			let lrc_infos = fs.readFileSync('./mp3/lrc/'+songName+'.lrc', 'utf-8').split('\n');
			for(let index in lrc_infos){
				if(lrc_infos[index]!=""){
					let lineArr = lrc_infos[index].split("]");
					let lineLeftArr = lineArr[0].replace("[","").split(":");
					if(lineLeftArr[0].startsWith("ti")){
						data.lrc_arr.ti = lineLeftArr[1];
					}else if(lineLeftArr[0].startsWith("ar")){
						data.lrc_arr.ar = lineLeftArr[1];
					}else if(lineLeftArr[0].startsWith("al")){
						data.lrc_arr.a1 = lineLeftArr[1];
					}else if(lineLeftArr[0].startsWith("by")){
						data.lrc_arr.by = lineLeftArr[1];
					}else{
						let minute = parseInt(lineLeftArr[0]);
						let second = parseInt(lineLeftArr[1]);
						let millsecond = lineLeftArr[1].substring(lineLeftArr[1].indexOf("."));
						data.lrc_arr.lrc.push({"t":minute*60+second+millsecond,"lr":lineArr[1]})
					}
				}
			}
		}catch(e){
			console.log(e)
		}
		response.writeHead(200, {
			"Content-Type": 'application/plain',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
		});
		response.write(JSON.stringify(data));
		response.end();
	}
	if(request.url.startsWith('/office')){

	}

}).listen(8000);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8000/');