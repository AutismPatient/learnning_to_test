package main

import (
	"net/http"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"

	"github.com/go-basic/uuid"

	"test_server/internal"
)

const (
	userName = "admin"
	password = "qazp!.>"
)

func main() {
	n := gin.Default()

	n.POST("/login", func(c *gin.Context) {

		obj := &internal.LoginModel{}

		if err := c.BindJSON(obj); err != nil {
			c.JSON(http.StatusOK, gin.H{
				"code": "failure",
				"msg":  "参数绑定错误",
				"data": nil,
			})
			return
		}

		if obj.UserName != userName || obj.UserPassword != password {
			c.JSON(http.StatusOK, gin.H{
				"code": "failure",
				"msg":  "用户名或密码错误",
				"data": nil,
			})
			return
		}
		token := uuid.New()
		c.JSON(http.StatusOK, gin.H{
			"code": "success",
			"msg":  "操作成功",
			"data": token,
		})
	})

	n.GET("/user/get", func(c *gin.Context) {
		var userInfo = struct {
			NickName string `json:"nick_name"`
			UUID     string `json:"uuid"`
			UserName string `json:"user_name"`
		}{
			UserName: userName,
			UUID:     "V_14225541451",
			NickName: "管理员",
		}

		c.JSON(http.StatusOK, gin.H{
			"code": "success",
			"msg":  "操作成功",
			"data": &userInfo,
		})
	})

	n.GET("/user/list", func(c *gin.Context) {

		var (
			list     []internal.User
			listData []internal.User
		)

		var nick, nex = c.GetQuery("nickName")
		var v, ex = c.GetQuery("vip")
		var size, _ = strconv.ParseInt(c.Query("size"), 0, 64)
		var current, _ = strconv.ParseInt(c.Query("current"), 0, 64)

		var vip, err = strconv.ParseBool(v)

		if err != nil {
			ex = false
		}

		if size <= 0 {
			size = 10
		}
		if current <= 0 {
			current = 1
		}

		for i := 0; i < len(internal.UserList); i++ {
			var data = internal.UserList[i]
			if strings.ContainsAny(data.NickName, nick) && nex || (data.Vip == vip && ex) {
				list = append(list, data)
			} else if !nex && !ex {
				list = append(list, data)
			}
		}

		//if ex || nex {
		//	linq.From(internal.UserList).WhereT(func(u internal.User) bool {
		//		return strings.ContainsAny(u.NickName, nick) || (u.Vip == vip)
		//	}).ToSlice(&list)
		//} else {
		//	list = internal.UserList
		//}

		if len(list) > 0 {
			skip := (current - 1) * size
			size = skip + size
			if limit := len(list); int(size) > limit {
				size = int64(limit)
			}
			listData = list[skip:size]
		}

		c.JSON(http.StatusOK, gin.H{
			"code":  "success",
			"msg":   "操作成功",
			"total": len(list),
			"data":  listData,
		})
	})

	err := n.Run(":8089")
	if err != nil {
		panic(err)
	}
}
