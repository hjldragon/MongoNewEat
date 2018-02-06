<?php
/*
 * [rockyshi 2014-05-05 13:18:27]
 * 常量定义
 */
require_once("/www/public.sailing.com/php/errcode.php");

// errcode代码统一定义到: /www/public.sailing.com/php/errcode.php
// class errcode
// {
// };

const MAX_FOODIMG_NUM = 5;  // 餐品介绍图片最大数

// 用户属性位
class UserProperty
{
    const SYS_ADMIN     = 1;    // 系统管理员
    const SHOP_USER     = 2;    // 店铺用户
    const COMPANY_USER  = 4;    // 是公司用户

    public static function IsAdmin($property)
    {
        return (UserProperty::SYS_ADMIN & $property) != 0;
    }
}
// js/cfg.js-->OrderStatus
class OrderStatus
{
    const PENDING   = 0;    // 待处理
    const CONFIRMED = 1;    // 已确认
    const PAID      = 2;    // 已支付
    const FINISH    = 3;    // 已完成
    const CANCEL    = 4;    // 已作废
    const TIMEOUT   = 5;    // 订单超时
    const PRINTED   = 6;    // 已出单
    const ERR       = 7;    // 订单出错
    const POSTPONED = 8;    // 叫起（即确认下单，但延迟出餐）

    // 是已确认状态
    static function HadConfirmed($status)
    {
        return OrderStatus::CONFIRMED == $status ||
                OrderStatus::PAID == $status ||
                OrderStatus::POSTPONED == $status;
    }
}
class NewOrderStatus
{
    const NOPAY     = 1;    // 未支付
    const PAY       = 2;    // 已支付
    const KNOT      = 3;    // 反结
    const REFUND    = 4;    // 退款成功
    const REFUNDFAIL= 5;    // 退款失败
    const CLOSER    = 6;    // 已关闭
    const GUAZ      = 7;    // 挂账
    const REFUNDING = 8;    // 退款中
}
//支付状态
class PayStatus
{
    const NOPAY     = 1;    // 未支付
    const PAY       = 2;    // 已支付
    const GUAZ      = 3;    // 挂账
}
//订单确认状态
class OrderSureStatus
{
    const NOSURE    = 1;    // 未下单
    const SURE      = 2;    // 下单
    const SUREPAY   = 3;    // 下单并支付
    // 是已确认状态
//    static function HadConfirmed($status)
//    {
//        return OrderSureStatus::SURE == $status ||
//            OrderSureStatus::SUREPAY == $status;
//    }
}
// 打印机规格
// js/cfg.js-->PrinterSpec
class PrinterSize
{
    const SPEC_80MM = 1;      // 80mm
    const SPEC_58MM = 2;      // 58mm
}
// 打印机规格
// js/cfg.js-->PrinterCategory
class PrinterCategory
{
    const PRINT_ALL      = 1;      // 全单打印（适用于给客人的小票）
    const PRINT_FOODNAME = 2;      // 只打印菜名（适用于后厨打印等）
    const PRINT_SPECIFY  = 3;      // 只打印指定菜类别时（如酒水、凉菜等指定类型菜单）
}
// 餐桌状态
class SeatStatus
{
    const VACANT = 0; // 空闲
    const INUSE  = 1; // 使用中
    const ALERT  = 2; // 有提示
}
// 支付方式
class PayWay
{
    const UNKNOWN   = 0;    // 未确定
    const CASH      = 1;    // 现金
    const WEIXIN    = 2;    // 微信支付
    const APAY      = 3;    // 支付宝支付
    const BANK      = 4;    // 支付宝支付
    const GUAZ      = 5;    // 支付宝支付

    // 是在线支付的
    static function IsOnline($pay_way)
    {
        return $pay_way == PayWay::WEIXIN;
    }
}
// 是否会员
class IsVipCustomer
{
    const YES = 1;
    const NO  = 0;
}
// 员工职务
class EmployeeDuty
{
    const UNKNOWN         = 0;   // 待定
    //const SYS_SHOP_ADMIN  = 1;   // 店铺系统管理员
    const SYS_SHOP_ADMIN  = 195;   // 店铺系统管理员
    const BOSS            = 2;   // 老板
    const GENERAL_MANAGER = 3;   // 总经理
    const SHOP_MANAGER    = 4;   // 店长
    const FOREMAN         = 5;   // 领班
    const WAITER          = 6;   // 服务员


    static function IsShopAdmin($duty)
    {
        return EmployeeDuty::SYS_SHOP_ADMIN == $duty;
    }
}

// 员工权限
// "permission" : {
//         "order_read" : 1,
//         "order_write" : 0,
//         "food_read" : 1,
//         "food_write" : 0,
//         "report_read" : 1
// }
class EmployeePermission
{
    static function AllPermission()
    {
        return [
            "order_read"  => 1,
            "order_write" => 1,
            "food_read"   => 1,
            "food_write"  => 1,
            "report_read" => 1
        ];
    }
    //
    static function HasOrderRead($permission)
    {
        return !!$permission["order_read"];
    }
    static function HasOrderWrite($permission)
    {
        return !!$permission["order_write"];
    }

    //
    static function HasFoodRead($permission)
    {
        return !!$permission["food_read"];
    }
    static function HasFoodWrite($permission)
    {
        return !!$permission["food_write"];
    }

    //
    static function HasReportRead($permission)
    {
        return !!$permission["report_read"];
    }
}
// 本餐品是否需要服务员确认
class NeedWaiterConfirm
{
    const NO   = 0;   // 不需要服务员确认
    const YES  = 1;   // 需要服务员确认
}
// 店铺是否暂停
class ShopIsSuspend
{
    const NO            = 0;    // 正常使用
    const BY_SYS_ADMIN  = 1;    // 被系统管理员暂停
    const BY_SHOP_ADMIN = 2;    // 被店铺管理员暂停
    const MAIL_URL      = "http://www.ob.com:8080/php/bind_mail.php?";  //邮箱绑定地址

    static function IsSuspend($suspend)
    {
        return (ShopIsSuspend::BY_SYS_ADMIN == $suspend
                || ShopIsSuspend::BY_SHOP_ADMIN == $suspend);
    }
}
// 菜品价格类型
class PriceType
{
    const ORIGINAL   = 1;   // 普通价格
    const DISCOUNT   = 2;   // 折扣价格
    const VIP        = 4;   // vip价格
    const FESTIVAL   = 8;   // 节日价格
}
// 营业时间段
class OpenTime
{
    const MORNING  = 1;   // 早市
    const NOON     = 2;   // 午市
    const NIGHT    = 3;   // 晚市
    const SUPPER   = 4;   // 夜宵
}
class SetPayWay
{
    const USEOUR   = 1;   // 使用个人码
    const USEOTHER = 2;   // 使用微信/支付宝的支付

}
//职级权限值
class Position
{
    const ALLBACKSTAGE   = 1;       // 后台全部权限
    const ALLWEB         = 2;       // 前端全部权限
    const ORDERING       = 4;       // 使用点餐
    const GIVING         = 8;       // 赠送
    const NEW_ORDER      = 16;      // 使用新订单管理
    const USRPREDETET    = 32;      // 使用预定
    const USRHISTORORDER = 64;      // 使用历史订单管理
    const CHECKOUT       = 128;     // 结账
    const ORDEROUT       = 256;     // 下单并结账
    const CLOSEOUT       = 512;     // 关闭并结账
    const USROUT         = 1024;    // 使用退款申请
    const FCHECKOUT      = 2048;    // 使用反结账
    const REFUND         = 4096;    // 退款
    const CLOSEROREDER   = 8192;    // 关闭订单
    const INVOICE        = 16384;   // 开发票
    const REDDASHED      = 32768;   // 红冲
    const USERSILVER     = 65536;   // 使用收银
    const GUAZHANG       = 131072;  // 挂账
    const MALING         = 262144;  // 抹零
    const CLOSEREFUND    = 524288;  // 关闭并退款
    const HISTORYPAY     = 1048576; // 结账(历史订单)
    const SETTING        = 2097152; // 基础设置
    //时候拥有后台管理权限
    public static function IsAdmin($position_permission)
    {
        return (Position::ALLBACKSTAGE & $position_permission) != 0;
    }


}
class PositionType
{
    const SYSTEMTYPEONE   = 1;      // 系统默认创建的职级的type
}
class EmployeeFreeze
{
    const FREEZE   = 1;             // 员工已冻结
}
//支付设置
class PaySetingWay
{
    const PAYONE   = 1;             // 个人码支付方式
    const PAYTWO   = 2;             // 微信/支付宝端支付方式

}
//店铺消息设置
class ShopNewsDay
{
    const NUM   = 5;             // 店铺每日群发消息限制数
}
//图片类型
class ImgType
{
    const NONE   = 0;             // 无定义
    const USER   = 1;             // 用户图片
}
// 餐桌餐位费结算方式
class SeatPriceType
{
    const NO       = 0;   // 不收餐位费
    const NUM      = 1;   // 按人数
    const FIXED    = 2;   // 固定数
    const RATIO    = 3;   // 按订单总额比例
}
// 菜品时间设置
class SaleFoodSetTime
{
    const SETTIME   = 1;   // 自定义时间戳
    const SETWEEK   = 2;   // 自定义周期
}
// 分类类别
class CateType
{
    const TYPEONE     = 1;   // 一般类品分类
    const TYPETWO     = 2;   // 配件
    const TYPETHREE   = 3;   // 酒水
}
//销售方式
class SALEWAY
{
    const EAT     = 1;             // 在店吃
    const SINCE   = 2;             // 自提
    const PACK    = 3;             // 打包
    const TAKEOUT = 4;             // 外卖
}
// 用户端
class UserSrc
{   
    const CUSTOMER = 1;   // 客户端
    const SHOP     = 2;   // 商户平台端
    const PLATFOR  = 3;   // 运营平台端
}
// 店铺支持支付方式
class ShopSaleWAY
{
    const CASH    = 1;   // 现金
    const BANK    = 2;   // 银行卡
    const WEIXIN  = 3;   // 微信
    const APAY    = 4;   // 支付宝
    const GUAZ    = 5;   // 挂账
}
class OrderPayWay
{
    static public $pay_type = [
        1 => "现金支付",
        2 => "微信支付",
        3 => "支付宝支付",
        4 => "银行卡支付",
        5 => "挂账",
    ];
}
?>
