// element ui plus 一些封装

import {ElMessage,ElMessageBox} from "element-plus"

let messageUI = null

const mainMessage = function (opt) {
    if (messageUI) {
        messageUI.close()
    }
    messageUI = ElMessage(opt)
}

export function successMessage(msg) {
    mainMessage({
        message: msg,
        type: 'success',
    })
}

export function infoMessage(msg) {
    mainMessage({
        message: msg,
        type: 'info',
    })
}

export function warningMessage(msg) {
    mainMessage({
        message: msg,
        type: 'warning',
    })
}

export function errorMessage(msg) {
    mainMessage({
        message: msg,
        type: 'error',
    })
}

export const showMessage = mainMessage


let messageBoxUI = null

const mainBox = function () {
    if(messageBoxUI){
        messageBoxUI.close()
    }
    messageBoxUI = ElMessageBox
    return messageBoxUI
}

export const messageBox = mainBox()