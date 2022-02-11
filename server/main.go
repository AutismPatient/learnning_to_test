package main

import (
	"net/http"

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

	err := n.Run(":8089")
	if err != nil {
		panic(err)
	}
}
