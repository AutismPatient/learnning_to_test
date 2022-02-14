package internal

import "time"

type LoginModel struct {
	UserName     string `json:"userName"`
	UserPassword string `json:"userPassword"`
}
type User struct {
	UUID       string    `json:"uuid"`
	UserName   string    `json:"userName"`
	NickName   string    `json:"nickName"`
	CreateTime time.Time `json:"createTime"`
	Vip        bool      `json:"vip"`
	Role       string    `json:"role"`
	DataSource string    `json:"dataSource"`
}

var UserList = []User{
	{
		UUID:       "123456WN",
		UserName:   "Admin",
		NickName:   "管理员",
		CreateTime: time.Date(2022, time.December, 22, 15, 35, 2, 0, time.Local),
		Vip:        false,
		Role:       "管理员角色组",
		DataSource: "服务器一组数据源",
	},
	{
		UUID:       "WE94444",
		UserName:   "v_zhangsan",
		NickName:   "张三",
		CreateTime: time.Date(2021, time.April, 12, 4, 5, 2, 0, time.Local),
		Vip:        false,
		Role:       "用户组",
		DataSource: "服务器二组数据源",
	},
	{
		UUID:       "6666",
		UserName:   "vip_666",
		NickName:   "VIP用户",
		CreateTime: time.Date(2018, time.September, 15, 2, 6, 2, 0, time.Local),
		Vip:        true,
		Role:       "用户组",
		DataSource: "服务器二组数据源",
	},
}
