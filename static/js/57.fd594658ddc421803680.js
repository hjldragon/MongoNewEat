webpackJsonp([57],{"0su8":function(t,e,n){var a=n("G+59");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("e3092b42",a,!0)},BuMn:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAATtJREFUKBVjZICC////M770qk8BcpMZ/jNqg4UZ/18F0nPFtzXOYWRk/A8SYwQRr4NaJf9+/7UEqMkJxEcHQMX7mDnZYkTXVT9nApkMU8yiIsnAyM8FVw9ig8RABkHVMDJnnvqf+v8/Qx5IQqgjgYHDWovhx+GrDIwcrAxCnYkM3H7mDD/P3WX49+6z4tdlB56yAI1LBhn59/VHhr9vPjGwyouBFYLEQOzfD1+B5UB8IEhmgnnw/8dvDO/K54MVgBTCFIPEQHJgAAwMJgiLeJKJARJ0YM+C3AwzGeQUEBskBg8IoFqQDXNB5jOL8jMwi/CBnQRyxvvyBWA2SAwkBwVzGSER1rAHFHSgkAJ5HuZmkMkgxX/uPGcAxYX4tgYXJlAMgiIFJACSgCkGmQhiwxRD1fwHxzRYksikAQBZz6bA60d9pgAAAABJRU5ErkJggg=="},"FPn+":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tagEditor"},[n("el-dialog",{attrs:{visible:t.isDialogVisible,"show-close":!1,"before-close":t.handleClose,size:""},on:{open:t.getTag}},[n("div",{staticClass:"dialog-title",attrs:{slot:"title"},slot:"title"},[t._v("添加"+t._s(t.tagObj.name)+"图标")]),t._v(" "),n("div",{staticClass:"dialog-content"},[n("div",{staticClass:"clearfix tip-delete"},[n("span",[t._v("请选择标签（多选）")]),t._v(" "),t.isDeleteState?n("span",{staticClass:"right btn red-text",on:{click:t.deleteStateCancel}},[t._v("取消")]):t._e(),t._v(" "),t.isDeleteState?n("span",{staticClass:"right btn blue-text",on:{click:t.deleteStateOk}},[t._v("确定")]):t._e(),t._v(" "),t.isDeleteState?t._e():n("span",{staticClass:"right btn red-text",on:{click:t.toggleDelete}},[t._v("删除")])]),t._v(" "),n("div",{staticClass:"selet-tag"},[n("el-checkbox-group",{model:{value:t.tagSelect,callback:function(e){t.tagSelect=e},expression:"tagSelect"}},t._l(t.shopTag,function(e){return n("el-checkbox-button",{key:e,class:{delete:t.isDeleteState},attrs:{disabled:t.isDeleteState,label:e}},[t._v("\r\n                    "+t._s(e)+"\r\n                    "),t.isDeleteState?n("span",{staticClass:"delete-btn",on:{click:function(n){t.deleteTag(e)}}}):t._e()])}))],1),t._v(" "),t.isDeleteState?t._e():n("div",{staticClass:"dialog-add clearfix"},[n("el-form",{ref:"Form",staticClass:"left",attrs:{model:t.form,rules:t.rules}},[n("el-form-item",{attrs:{prop:"dialongInputValue"}},[n("el-input",{staticClass:"left",attrs:{placeholder:"请输入内容"},model:{value:t.form.dialongInputValue,callback:function(e){t.$set(t.form,"dialongInputValue",e)},expression:"form.dialongInputValue"}})],1)],1),t._v(" "),n("div",{staticClass:"add-btn left",on:{click:function(e){t.addTag("Form")}}},[t._v("添加")])],1),t._v(" "),t.isDeleteState?t._e():n("div",{staticClass:"confirm-btn clearfix"},[n("div",{staticClass:"ok left",on:{click:t.confirmOk}},[t._v("确定")]),t._v(" "),n("div",{staticClass:"cancel left",on:{click:t.handleClose}},[t._v("取消")]),t._v(" "),t.isShowErrorTip?n("span",{staticClass:"error-tip"},[t._v("选择标签不能超过"+t._s(t.tagObj.limitSelect)+"个")]):t._e()])])])],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},"G+59":function(t,e,n){e=t.exports=n("BkJT")(!0),e.push([t.i,'.dialog-title[data-v-ac645efa]{width:540px;height:40px;font-size:16px;color:#fff;background-color:#5a8cff;text-align:center;line-height:40px}.dialog-content[data-v-ac645efa]{padding:40px 50px 50px}.dialog-content .tip-delete[data-v-ac645efa]{margin-bottom:30px}.dialog-content .tip-delete .btn[data-v-ac645efa]{padding-left:20px;cursor:pointer}.dialog-content .selet-tag[data-v-ac645efa]{max-width:440px;margin-bottom:20px}.dialog-content .selet-tag .delete-btn[data-v-ac645efa]{width:12px;height:12px;position:absolute;content:"";background-image:url('+n("BuMn")+");background-repeat:no-repeated;top:0;right:0;cursor:pointer}.dialog-add[data-v-ac645efa]{margin-left:30px;min-width:380px}.dialog-add .add-btn[data-v-ac645efa]{width:60px;height:34px;font-size:14px;color:#5a8cff;line-height:34px;text-align:center;border:1px solid #5a8cff;margin-left:20px;cursor:pointer}.confirm-btn[data-v-ac645efa]{margin-left:30px;min-width:380px;margin-top:20px;position:relative}.confirm-btn div[data-v-ac645efa]{width:160px;height:40px;border-radius:4px;border:1px solid #5a8cff;color:#5a8cff;line-height:40px;text-align:center;cursor:pointer}.confirm-btn .ok[data-v-ac645efa]{margin-right:60px;background-color:#5a8cff;color:#fff}.confirm-btn .error-tip[data-v-ac645efa]{color:#ff4949;font-size:12px;line-height:1;padding-top:4px;position:absolute;top:100%;left:0}.blue-text[data-v-ac645efa]{color:#5a8cff}.red-text[data-v-ac645efa]{color:#e7487e}","",{version:3,sources:["E:/ordering/www/shop/html/src/modules/merchandise/components/tagEditor.vue"],names:[],mappings:"AACA,+BACE,YAAa,AACb,YAAa,AACb,eAAgB,AAChB,WAAY,AACZ,yBAA0B,AAC1B,kBAAmB,AACnB,gBAAkB,CACnB,AACD,iCACE,sBAA6B,CAC9B,AACD,6CACI,kBAAoB,CACvB,AACD,kDACM,kBAAmB,AACnB,cAAgB,CACrB,AACD,4CACI,gBAAiB,AACjB,kBAAoB,CACvB,AACD,wDACM,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,WAAY,AACZ,+CAAoD,AACpD,8BAA+B,AAC/B,MAAO,AACP,QAAS,AACT,cAAgB,CACrB,AACD,6BACE,iBAAkB,AAClB,eAAiB,CAClB,AACD,sCACI,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,cAAe,AACf,iBAAkB,AAClB,kBAAmB,AACnB,yBAA0B,AAC1B,iBAAkB,AAClB,cAAgB,CACnB,AACD,8BACE,iBAAkB,AAClB,gBAAiB,AACjB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,kCACI,YAAa,AACb,YAAa,AACb,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,iBAAkB,AAClB,kBAAmB,AACnB,cAAgB,CACnB,AACD,kCACI,kBAAmB,AACnB,yBAA0B,AAC1B,UAAY,CACf,AACD,yCACI,cAAe,AACf,eAAgB,AAChB,cAAe,AACf,gBAAiB,AACjB,kBAAmB,AACnB,SAAU,AACV,MAAQ,CACX,AACD,4BACE,aAAe,CAChB,AACD,2BACE,aAAe,CAChB",file:"tagEditor.vue",sourcesContent:['\n.dialog-title[data-v-ac645efa] {\n  width: 540px;\n  height: 40px;\n  font-size: 16px;\n  color: #fff;\n  background-color: #5a8cff;\n  text-align: center;\n  line-height: 40px;\n}\n.dialog-content[data-v-ac645efa] {\n  padding: 40px 50px 50px 50px;\n}\n.dialog-content .tip-delete[data-v-ac645efa] {\n    margin-bottom: 30px;\n}\n.dialog-content .tip-delete .btn[data-v-ac645efa] {\n      padding-left: 20px;\n      cursor: pointer;\n}\n.dialog-content .selet-tag[data-v-ac645efa] {\n    max-width: 440px;\n    margin-bottom: 20px;\n}\n.dialog-content .selet-tag .delete-btn[data-v-ac645efa] {\n      width: 12px;\n      height: 12px;\n      position: absolute;\n      content: "";\n      background-image: url(../view/images/deletetag.png);\n      background-repeat: no-repeated;\n      top: 0;\n      right: 0;\n      cursor: pointer;\n}\n.dialog-add[data-v-ac645efa] {\n  margin-left: 30px;\n  min-width: 380px;\n}\n.dialog-add .add-btn[data-v-ac645efa] {\n    width: 60px;\n    height: 34px;\n    font-size: 14px;\n    color: #5a8cff;\n    line-height: 34px;\n    text-align: center;\n    border: 1px solid #5a8cff;\n    margin-left: 20px;\n    cursor: pointer;\n}\n.confirm-btn[data-v-ac645efa] {\n  margin-left: 30px;\n  min-width: 380px;\n  margin-top: 20px;\n  position: relative;\n}\n.confirm-btn div[data-v-ac645efa] {\n    width: 160px;\n    height: 40px;\n    border-radius: 4px;\n    border: 1px solid #5a8cff;\n    color: #5a8cff;\n    line-height: 40px;\n    text-align: center;\n    cursor: pointer;\n}\n.confirm-btn .ok[data-v-ac645efa] {\n    margin-right: 60px;\n    background-color: #5a8cff;\n    color: #fff;\n}\n.confirm-btn .error-tip[data-v-ac645efa] {\n    color: #ff4949;\n    font-size: 12px;\n    line-height: 1;\n    padding-top: 4px;\n    position: absolute;\n    top: 100%;\n    left: 0;\n}\n.blue-text[data-v-ac645efa] {\n  color: #5a8cff;\n}\n.red-text[data-v-ac645efa] {\n  color: #e7487e;\n}\n'],sourceRoot:""}])},XFuC:function(t,e,n){"use strict";function a(t){n("0su8"),n("pLNm")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("uCRJ"),o=n("FPn+"),A=n("/Xao"),c=a,r=A(i.a,o.a,!1,c,"data-v-ac645efa",null);e.default=r.exports},XhrD:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAKZJREFUKBVj9Kp43vDvP0M9AwHAyMDwhIGZOQ1IMzCQookJpGFbh2QDEyNDI4iNDfBwMjLY6nIw/GdgkAFrACnCpUlZioVhdrEIw8/fQOVAAHYSmAUlQM4TFWCub00WZDh14yeDowEHQ/+aT2A2Vg0gQZAmcSHm+qooAYZFu78wnAZqhAEMG2ASuAICpwaQRmya8GrApomgBnRNRGlA1wTiEwVAfgIAQIND6eL7zdsAAAAASUVORK5CYII="},pLNm:function(t,e,n){var a=n("u8Dr");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("473a8801",a,!0)},u8Dr:function(t,e,n){e=t.exports=n("BkJT")(!0),e.push([t.i,'.tagEditor .el-checkbox-button{margin-right:10px;margin-bottom:10px}.tagEditor .el-checkbox-button:first-child .el-checkbox-button__inner,.tagEditor .el-checkbox-button:last-child .el-checkbox-button__inner{border-radius:0}.tagEditor .el-checkbox-button__inner{padding:7px 15px;border-left:1px solid #bfcbd9}.tagEditor .el-checkbox-button.is-checked .el-checkbox-button__inner{border-color:#5a8cff;color:#5a8cff;background-color:#fff;-webkit-box-shadow:none;box-shadow:none}.tagEditor .el-checkbox-button.is-checked .el-checkbox-button__inner:after{width:12px;height:12px;position:absolute;content:"";background-image:url('+n("XhrD")+");background-repeat:no-repeated;top:0;right:0}.tagEditor .el-checkbox-button.is-disabled .el-checkbox-button__inner{background-color:#fff;cursor:inherit}","",{version:3,sources:["E:/ordering/www/shop/html/src/modules/merchandise/components/tagEditor.vue"],names:[],mappings:"AACA,+BACE,kBAAmB,AACnB,kBAAoB,CACrB,AACD,2IAEE,eAAiB,CAClB,AACD,sCACE,iBAAkB,AAClB,6BAA+B,CAChC,AACD,qEACE,qBAAsB,AACtB,cAAe,AACf,sBAAuB,AACvB,wBAAyB,AACjB,eAAiB,CAC1B,AACD,2EACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,WAAY,AACZ,+CAAiD,AACjD,8BAA+B,AAC/B,MAAO,AACP,OAAS,CACV,AACD,sEACE,sBAAuB,AACvB,cAAgB,CACjB",file:"tagEditor.vue",sourcesContent:['\n.tagEditor .el-checkbox-button {\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.tagEditor .el-checkbox-button:first-child .el-checkbox-button__inner,\n.tagEditor .el-checkbox-button:last-child .el-checkbox-button__inner {\n  border-radius: 0;\n}\n.tagEditor .el-checkbox-button__inner {\n  padding: 7px 15px;\n  border-left: 1px solid #bfcbd9;\n}\n.tagEditor .el-checkbox-button.is-checked .el-checkbox-button__inner {\n  border-color: #5a8cff;\n  color: #5a8cff;\n  background-color: #fff;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.tagEditor .el-checkbox-button.is-checked .el-checkbox-button__inner::after {\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  content: "";\n  background-image: url(../view/images/select.png);\n  background-repeat: no-repeated;\n  top: 0;\n  right: 0;\n}\n.tagEditor .el-checkbox-button.is-disabled .el-checkbox-button__inner {\n  background-color: #fff;\n  cursor: inherit;\n}\n'],sourceRoot:""}])},uCRJ:function(t,e,n){"use strict";var a=n("zXF4"),i=n("EuEE"),o=n("a2vD");e.a={data:function(){var t=this;return{isDialogVisible:!1,form:{dialongInputValue:""},shopTag:[],tagSelect:[],tagSelectCopy:[],tagSelectCopyT:[],shopTagCopy:[],isShowErrorTip:!1,isDeleteState:!1,rules:{dialongInputValue:[{validator:function(e,n,a){""===n?a(new Error("标签不能为空")):n.length>t.tagObj.limitWord?a(new Error("标签字数不能超过"+t.tagObj.limitWord)):t.shopTag.length>t.tagObj.limitNum-1?a(new Error("已经超过上限数量,请先删除在添加")):-1!==t.shopTag.indexOf(n)?a(new Error("标签已经存在")):a()},trigger:"click"}]}}},props:{dialogVisible:{type:Boolean,default:!1},selectArr:{type:Array,default:[]},tagObj:{type:Object,default:function(){return{name:"特色",value:"shop_feature",limitNum:30,limitWord:5,limitSelect:10}}}},watch:{dialogVisible:function(t){!0===t&&(this.isDialogVisible=!0)},tagSelect:function(t){t.length>this.tagObj.limitSelect?this.isShowErrorTip=!0:this.isShowErrorTip=!1}},computed:{},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.shopTag.push(e.form.dialongInputValue),e.form.dialongInputValue=""})},resetForm:function(t){this.$refs[t].resetFields()},getTag:function(){var t={get_shop_label:1,label_name:this.tagObj.value};n.i(a.a)(t,this.getTaghandler)},getTaghandler:function(t){var e=this;if(0===t.ret){var n=t.data[this.tagObj.value];i.a.isEmpty(n)?this.shopTag=[]:this.shopTag=n,this.tagSelect=this.selectArr,this.tagSelect.forEach(function(t){-1===e.shopTag.indexOf(t)&&e.shopTag.push(t)})}else console.log("获取标签失败!")},saveTag:function(){var t={save_label:1,label_name:this.tagObj.value},e=o.a.getShopid();t.shop_id=e,t[this.tagObj.value]=this.shopTag,n.i(a.b)(t,this.saveTagHandler)},saveTagHandler:function(t){0===t.ret?console.log("保存标签成功!"):console.log("保存标签失败!")},addTag:function(t){this.submitForm(t)},handleClose:function(t){if(this.form.dialongInputValue="",!0===this.isDeleteState)return!1;this.$emit("on-close"),this.isDialogVisible=!1},confirmOk:function(){return!(this.tagSelect.length>this.tagObj.limitSelect)&&(!0!==this.isDeleteState&&(this.$emit("on-close"),this.$emit("on-change",this.tagSelect),this.saveTag(),void(this.isDialogVisible=!1)))},toggleState:function(){this.isDeleteState=!this.isDeleteState},toggleDelete:function(){this.tagSelectCopy=this.tagSelect.slice(),this.tagSelectCopyT=this.tagSelect.slice(),this.shopTagCopy=this.shopTag.slice(),this.tagSelect=[],this.toggleState()},deleteStateOk:function(){this.tagSelect=this.tagSelectCopy,this.toggleState()},deleteStateCancel:function(){this.tagSelect=this.tagSelectCopyT,this.shopTag=this.shopTagCopy,this.toggleState()},deleteTag:function(t){this.shopTag=this.deleteArrayItem(this.shopTag,t),this.tagSelectCopy=this.deleteArrayItem(this.tagSelectCopy,t)},deleteArrayItem:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1];return t.forEach(function(n,a){if(n===e)return void t.splice(a,1)}),t}}}},zXF4:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"f",function(){return o}),n.d(e,"e",function(){return A}),n.d(e,"d",function(){return c}),n.d(e,"g",function(){return r}),n.d(e,"h",function(){return l}),n.d(e,"j",function(){return s}),n.d(e,"i",function(){return g}),n.d(e,"a",function(){return d}),n.d(e,"b",function(){return f});var a=n("EuEE"),i=function(t,e){a.a.DataEncSubmit("menu_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},o=function(t){var e={list:1};a.a.DataEncSubmit("category_get.php",e,function(e){t&&"function"==typeof t&&t(e)})},A=function(t,e){var n={foodinfo:1,food_id:t};a.a.DataEncSubmit("menu_get.php",n,function(t){e&&"function"==typeof e&&e(t)})},c=function(t,e){a.a.DataEncSubmit("menu_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},r=function(t,e){a.a.DataEncSubmit("category_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},l=function(t,e){a.a.DataEncSubmit("gen_id.php",t,function(t){e&&"function"==typeof e&&e(t)})},s=function(t,e){a.a.DataEncSubmit("category_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},g=function(t,e){a.a.DataEncSubmit("menu_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},d=function(t,e){a.a.DataEncSubmit("shopinfo_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},f=function(t,e){a.a.DataEncSubmit("shopinfo_save.php",t,function(t){e&&"function"==typeof e&&e(t)})}}});
//# sourceMappingURL=57.fd594658ddc421803680.js.map