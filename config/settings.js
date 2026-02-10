// const rootUrl='http://192.168.2.8:8000/smartcommunity'
const rootUrl='https://2c745e4f.r26.cpolar.top/smartcommunity'

//表示导出--》在任意js中可以导入--》导入的就是下面的对象
module.exports={
  welcome: rootUrl + '/welcome/',
  banner: rootUrl + '/banner/',
  collection: rootUrl + '/collection/',
  area: rootUrl + '/area/',
  statistics: rootUrl + '/statistics/',
  face: rootUrl + '/face/',
  voice: rootUrl + '/voice/',
  notice: rootUrl + '/notice/',
  activity: rootUrl + '/activity/',
}