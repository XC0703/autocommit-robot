const request = require("request");
const path = require("path");
const fs = require("fs");
const id = (~~(Math.random() * 100000)).toString(); // 获取小于10w的数字
const url = `https://robohash.org/${id}`;
const dirPath = path.resolve(__dirname, "pictures");
// 这一步的处理，因为github获取的时间时区是美国时区，所以获取到的时间格式是6/16/2023，我们可以先split后将年份放到数组第一位，这样就是需要的文件名格式了
const dateArr = new Date().toLocaleDateString().split("/"); // 本地调试时用.toLocaleDateString("en")
dateArr.unshift(dateArr.pop());
const date = dateArr.join("-");
request(url).pipe(fs.createWriteStream(`${dirPath}/${date}.png`));