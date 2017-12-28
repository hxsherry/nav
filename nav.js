var keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];
var hash = {
    'q': 'http://www.qq.com/',
    'w': 'weibo.com',
    'e': 'http://element-cn.eleme.io/#/zh-CN',
    'r': 'http://www.renren.com/',
    't': 'https://www.taobao.com/',
    'y': 'http://www.youdao.com/',
    'u': 'https://www.uber.com.cn/',
    'i': 'http://inspinia.liyarou.com/',
    'p': 'https://www.panda.tv/'
};

//从localStorage中取值
function getLocalStorage() {
    var hashLocalStorage = JSON.parse(localStorage.getItem('newSite') || 'null');
    if (hashLocalStorage) {
        hash = hashLocalStorage
    }
}

//create tagElement
function tag(tagName) {
    return document.createElement(tagName)
}

//创建键盘
function createKeyBoard() {
    //注意循环嵌套循环
    var container = document.getElementById('container');
    for (var index = 0; index < keys.length; index++) {
        var row = keys[index];
        //创建并插入div元素
        var div = tag('div');
        container.appendChild(div);
        //创建并插入kbd元素
        for (var index1 = 0; index1 < row.length; index1++) {
            var kbd = tag('kbd');
            kbd.textContent = row[index1];
            kbd.id = row[index1];
            div.appendChild(kbd);
            //创建并插入btn元素
            var btn = tag('button');
            btn.textContent = 'edit';
            btn.id = row[index1];
            kbd.appendChild(btn);
            //btn编辑及更新储存功能，保证更新不为空才会保存
            btn.onclick = function (event) {
                var key = event.target.id;
                var newSite = window.prompt('请输入键位' + event.target.id + '对应的网站地址');
                if (newSite) {
                    hash[key] = newSite;
                    localStorage.setItem('newSite', JSON.stringify(hash));
                }
            };
        }
    }
}

//监听用户事件
function listenUsers() {
    document.onkeypress = function (event) {
        var key = event['key'];
        var website = hash[key];
        // location.href=website  是 _self
        window.open(website, '_blank')
    };
    document.onclick = function (event) {
        var key = event.target.id;
        if (key) {
            var website1 = hash[key];
            window.open(website1, '_blank')
        }
    };

}

createKeyBoard();
getLocalStorage();
listenUsers();

//raw js
// var index = 0;
// while (index < keys.length) {
//     var container = document.getElementById('container');
//     var div1 = document.createElement('div');
//     container.appendChild(div1);
//     var index1 = 0;
//     var row = keys[index];
//     while (index1 < row.length) {
//         var kbd = document.createElement('kbd');
//         kbd.textContent = row[index1];
//         kbd.id = row[index1];
//         div1.appendChild(kbd);
//         //创建并插入btn元素
//         var btn = document.createElement('button');
//         btn.textContent = 'edit';
//         btn.id = row[index1];
//         kbd.appendChild(btn);
//         //btn编辑及更新储存功能，保证更新不为空才会保存
//         btn.onclick = function (event) {
//             var key = event.target.id;
//             var newSite = window.prompt('请输入键位' + event.target.id + '对应的网站地址');
//             if (newSite) {
//                 hash[key] = newSite;
//                 localStorage.setItem('newSite', JSON.stringify(hash));
//             }
//         };
//         index1++;
//     }
//     index++;
// }






