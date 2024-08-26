---
title: "內容傳遞網路（CDN）的運作與應用場景探討 | Lucas's Blog"
description: '2024-08-26 介紹的CDN架構、功能以及應用場景​，以及實作範例。'
---

# [內容傳遞網路（CDN）的運作與應用場景探討]{.text-xl .font-bold}
<br>
介紹一般網站架設以及有CDN網站的差異，以及CDN組成，及實際應用的示範。

## [傳統網站架設]{.text-lg .font-bold}
<br>

傳統網站架設

是把網站內容放到一台Server

然後使用者在瀏覽器上點選網址後

會連到DNS把網址轉換成該網站的IP位置

然後再由瀏覽器直接連線到那台Server取得網站內容資料
<br>

![傳統網站運作流程](https://cdn.lucas-chen.website/2024/08/26/01.png)
<br>

那這個方式會有以下缺點

- 離Server 越遠 速度會越慢 (特別是全球性網站)
- Server 穩定性比較差 (流量大，同時連線同一台Server，讓Server當機的機會變大)


## [CDN介紹]{.text-lg .font-bold}
<br>

所以就衍生出了CDN

CDN 全名 內容傳遞網路 – Content Delivery Network

可以將網站內容 部署到不同位置的邊緣節點

不同地區的用戶可以就近存取伺服器並取得內容

會有以下優點

- 實現加快載入速度 (物理上的距離降低)
- 降低主機負擔 (都存取最近的CDN server，原本的Server 負載降低)
- 可靠性提升 (多台cdn server就可以降低當機導致網站無法使用的風險)
- 提升用戶體驗 (連線速度提升，瀏覽網站速度變快，且不容易網站掛掉)


CDN 運作流程圖：

<br>

![CDN 網站運作流程](https://cdn.lucas-chen.website/2024/08/26/02.png)
<br>

將網站內容放到 主要存放資料的Server

並設定完CDN後

使用者連線到這個網站

會先連到DNS

DNS 再轉派發到 CDN DNS

CDN DNS再根據使用者的位置不同

回傳最靠近使用者的 CDN 邊緣伺服器 IP

然後使用者在連線到最靠近使用者的 CDN 邊緣伺服器 取得網站資料


CDN 簡易組成如下

- 主要存放資料的Server (Origin Server)
- DNS
- CDN DNS
- CDN 邊緣伺服器 (存放在不同國家地區的CDN Server)

<br>

![CDN 組成](https://cdn.lucas-chen.website/2024/08/26/03.png)

<br>

## [實戰演練]{.text-lg .font-bold}

我先將測試網站放了一堆GIF 檔案比較大的圖片

並且放到距離台灣很遠的地方

然後看他第一次載入網站的速度

<br>

![CDN 實戰演練1](https://cdn.lucas-chen.website/2024/08/26/04.png)
<br>

![CDN 實戰演練2](https://cdn.lucas-chen.website/2024/08/26/05.png)
<br>

![CDN 實戰演練3](https://cdn.lucas-chen.website/2024/08/26/06.png)
<br>

發現到載入圖片的速度將近3秒

然後開始串上CDN

我使用 Cloudflare 這個CDN服務商，他有免費方案讓我使用

<br>

![CDN 實戰演練4](https://cdn.lucas-chen.website/2024/08/26/07.png)
<br>

![CDN 實戰演練5](https://cdn.lucas-chen.website/2024/08/26/08.png)
<br>

![CDN 實戰演練6](https://cdn.lucas-chen.website/2024/08/26/09.png)
<br>

![CDN 實戰演練7](https://cdn.lucas-chen.website/2024/08/26/10.png)
<br>

選完後，會有兩個 主要的 CDN DNS 需要設定在你的域名代理商

我是在Gandi購買的網域

所以我要去Gandi 設定網域 名稱伺服器
<br>

![CDN 實戰演練8](https://cdn.lucas-chen.website/2024/08/26/11.png)
<br>

![CDN 實戰演練9](https://cdn.lucas-chen.website/2024/08/26/12.png)
<br>

![CDN 實戰演練10](https://cdn.lucas-chen.website/2024/08/26/13.png)
<br>

設定完後就是這樣

掛載CDN 服務器後

就可以看看有了CDN 速度會變多快

<br>

![CDN 實戰演練11](https://cdn.lucas-chen.website/2024/08/26/14.png)
<br>

相較於沒掛載CDN 服務之前 每張圖需要快3秒

掛載後，讀取網站 每張圖片不到 200毫秒

速度上快很多

那我要怎麼確認網站有串上CDN呢

可以直接在網址後面加上 cdn-cgi/trace

可以看到colo=KHH 代表者是連到高雄的cdn edge server

台北 連高雄 速度上就真的可以加快很多呢！


![CDN 實戰演練12](https://cdn.lucas-chen.website/2024/08/26/15.png)
<br>


不只網站可以用CDN 加快

還有影片串流 跟  軟體安裝檔案  或是 遊戲的圖片影片加速

都是使用CDN 來讓速度提升，使用者體驗變好的應用


如果有什麼不足的部分，歡迎補充喔  

謝謝大家！