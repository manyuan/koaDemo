let conf = {

	servport: 8080,

	mysql:{
		host: "127.0.0.1",
		port: 3306,
		database: "xianliao",
		user: "root",
		password: "123456"
	},

}

//docker-compose配置此环境变量则使用内部配置的mysql。
if(process.env.INNER_MYSQL) {
	conf.mysql.host = "mysql"
	conf.mysql.port = process.env.MYSQL_PORT
	conf.mysql.user = process.env.MYSQL_USER
	conf.mysql.password = process.env.MYSQL_PASS
	conf.mysql.database = process.env.MYSQL_DB
}

module.exports=conf
