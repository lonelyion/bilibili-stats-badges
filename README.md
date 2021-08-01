# Bilibili Stats Badges

Bilibili状态徽章，README和功能都待完善

## 目录

+ [关系状态数徽章](#关系状态数徽章)
+ [UP主状态数徽章](#UP主状态数徽章)
+ [附加参数](#附加参数)
+ [混搭参数](#混搭参数)

## 关系状态数徽章

### 粉丝数

![Followers](https://bilistats.lonelyion.com/followers?uid=7564991)

显示**有多少人关注你**

链接: `https://bilistats.lonelyion.com/followers?uid=[你的UID]`

HTML: `<img src="https://bilistats.lonelyion.com/followers?uid=[你的UID]" alt="Followers"/>`

Markdown: `![Followers](https://bilistats.lonelyion.com/followers?uid=[你的UID])`

### 关注数

![Following](https://bilistats.lonelyion.com/following?uid=7564991)

显示**你关注了多少人**

链接: `https://bilistats.lonelyion.com/following?uid=[你的UID]`

HTML: `<img src="https://bilistats.lonelyion.com/following?uid=[你的UID]" alt="Following"/>`

Markdown: `![Following](https://bilistats.lonelyion.com/following?uid=[你的UID])`

## UP主状态数徽章

### 视频播放量

![Video Views](https://bilistats.lonelyion.com/views?uid=7564991)

显示**所有视频投稿的播放数总和**

链接: `https://bilistats.lonelyion.com/views?uid=[你的UID]&type=video`, 其中`&type=video`可有可无

HTML: `<img src="https://bilistats.lonelyion.com/views?uid=[你的UID]" alt="Video Views"/>`

Markdown: `![Video Views](https://bilistats.lonelyion.com/views?uid=[你的UID])`

### 专栏阅读量

![Article Views](https://bilistats.lonelyion.com/views?uid=7564991&type=article)

显示**所有专栏投稿的阅读数总和**

链接: `https://bilistats.lonelyion.com/views?uid=[你的UID]&type=article`

HTML: `<img src="https://bilistats.lonelyion.com/views?uid=[你的UID]&type=article" alt="Article Views"/>`

Markdown: `![Article Views](https://bilistats.lonelyion.com/views?uid=[你的UID]&type=article)`

### 获赞数

![Likes](https://bilistats.lonelyion.com/views?uid=7564991&type=likes)

就个人空间里那个获赞数，我也不知道算哪些的总和

链接: `https://bilistats.lonelyion.com/views?uid=[你的UID]&type=likes`

HTML: `<img src="https://bilistats.lonelyion.com/views?uid=[你的UID]&type=likes" alt="Likes"/>`

Markdown: `![Likes](https://bilistats.lonelyion.com/views?uid=[你的UID]&type=likes)`


## 附加参数

### color

改变徽章**右侧**的颜色，支持CSS颜色名字或十六进制数字

> 默认值: `blue`

| 参数 | 外观 |
| --- | --- |
| `?color=red` | ![](https://bilistats.lonelyion.com/followers?uid=7564991&color=red) |
| `?color=0a8b9d` | ![](https://bilistats.lonelyion.com/followers?uid=7564991&color=0a8b9d) |

### style

改变徽章的样式，支持以下几种外观

> 默认值: `flat-square`

| 参数 | 外观 |
| --- | --- |
| `?style=plastic` | ![](https://bilistats.lonelyion.com/followers?uid=7564991&style=plastic) |
| `?style=flat` | ![](https://bilistats.lonelyion.com/followers?uid=7564991&style=flat) |
| `?style=flat-square` | ![](https://bilistats.lonelyion.com/followers?uid=7564991&style=flat-square) |
| `?style=for-the-badge` | ![](https://bilistats.lonelyion.com/followers?uid=7564991&style=for-the-badge) |
| `?style=social` | ![](https://bilistats.lonelyion.com/followers?uid=7564991&style=social) |

### label

改变徽章的标签，特殊字符（如空格）最好使用[URL编码转换](https://www.bejson.com/enc/urlencode/)

> 默认值: `Bilibili 粉丝数`等上面文档显示的那样

| 参数 | 外观 |
| --- | --- |
| `?label=粉丝数` | ![](https://bilistats.lonelyion.com/followers?uid=7564991&label=粉丝数) |
| `?label=B站%20粉丝数` | ![](https://bilistats.lonelyion.com/followers?uid=7564991&color=B站%20粉丝数) |

### label_color

改变徽章**左侧**的颜色，支持CSS颜色名字或十六进制数字

> 默认值: `grey`

| 参数 | 外观 |
| --- | --- |
| `?label_color=magenta` | ![](https://bilistats.lonelyion.com/followers?uid=7564991&label_color=magenta) |
| `?label_color=33ab06` | ![](https://bilistats.lonelyion.com/followers?uid=7564991&label_color=33ab06) |

### logo_color

改变徽章**左侧**的颜色，支持CSS颜色名字或十六进制数字

> 默认值: `grey`

| 参数 | 外观 |
| --- | --- |
| `?logo_color=green` | ![](https://bilistats.lonelyion.com/followers?uid=7564991&logo_color=green) |
| `?logo_color=cf34eb` | ![](https://bilistats.lonelyion.com/followers?uid=7564991&logo_color=cf34eb) |

### format

改变数字的格式，支持`none`, `commas`, `short`

> 默认值: `none`

| 参数 | 外观 |
| --- | --- |
| `?format=none` | ![](https://bilistats.lonelyion.com/views?uid=7564991&format=none) |
| `?format=commas` | ![](https://bilistats.lonelyion.com/views?uid=7564991&format=commas) |
| `?format=short` | ![](https://bilistats.lonelyion.com/views?uid=7564991&format=short) |

## 混搭参数

通过对url参数的组合，可以同时生效多个样式，例如

| 参数 | 外观 |
| --- | --- |
| `?style=social&label=关注` | ![](https://bilistats.lonelyion.com/followers?uid=7564991&style=social&label=关注) |
| `?label=播放量&style=for-the-badge&color=3d3d3d&format=commas` | ![](https://bilistats.lonelyion.com/views?uid=7564991&?label=播放量&style=for-the-badge&color=3d3d3d&format=commas) |
| `?label=获赞&style=for-the-badge&color=red&labelColor=ce4630` | ![](https://bilistats.lonelyion.com/views?uid=7564991&type=likes&label=获赞&style=for-the-badge&color=red&labelColor=ce4630) |