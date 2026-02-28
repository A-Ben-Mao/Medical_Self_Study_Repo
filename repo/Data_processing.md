正在装修，敬请期待......
---
写在前面
---
- 虽然已经做过挺多次实验了，但是每次进行一些许久不曾做过的分析时又会遗忘，重新去找资料而进行学习
- 故而在这里进行整理，方便自己及各位同学后期查阅

---
# 1. 软件篇

## 1.1 ImageJ

软件下载：[官方下载页面](https://imagej.net/downloads)
- 我一般下载Fiji，可以简单理解为带了一些常用插件的ImageJ

## 1.2 奥林巴斯荧光显微镜相关内容
软件下载：[对应软件（OlyVIA）官方下载](https://lifescience.evidentscientific.com.cn/zh/downloads/detail-iframe/?0%5Bdownloads%5D%5Bid%5D=847254061)
- 仅支持Windows系统（截止20260109）

基础操作：[Olympus OlyVIA使用笔记丨如何处理荧光共聚焦显微镜拍摄的免疫荧光染色结果](https://zhuanlan.zhihu.com/p/1943622892655969723)

---
# 2. 免疫荧光

## 2.1 细胞计数（使用ImageJ）
**经过整理后的“最简”Protocol**
> 1. `"Image-Type-8-bit"`（转换图片为8-bit）
> 2. `"Image-Adjust-Threshold"`（调整阈值）
> 3. `"Process-Binary-Fill Holes"`（填补细胞空隙，可选）
> 4. `"Process-Binary-Watershed"`（分离相连细胞，可选）
> 5. `"Analyze-Analyze Particles"`（细胞计数）
---
**📚 参考资料**

文字资料：[ImageJ实用技巧——自动细胞计数(解放双手篇)](https://zhuanlan.zhihu.com/p/54959707)

视频资料：[【科研人必备！用Image J做细胞计数竟然这么简单？】](https://www.bilibili.com/video/BV1W6CEY6E7q)

视频资料：[【用imagej对细胞核自动计数（相似结构也行）】](https://www.bilibili.com/video/BV1CG411U7oC)
- 我一般将之用于DAPI计数，也就是细胞核的总数统计

## 2.2 共定位分析及双染计数（使用ImageJ）
**双染计数，经过整理后的“最简”Protocol**

前置步骤：如果是合并通道需要先：`"Image-Color-Split Channels"`（分离通道）

**获得每个通道的感兴趣区域（ROI）**

**方法一（任选其一），对每一个通道执行：**
> 1. `"Image-Type-8-bit"`（转换图片为8-bit）
> 2. `"Image-Adjust-Threshold"`（调整阈值）
> 3. `"Process-Binary-Fill Holes"`（填补细胞空隙，可选）
> 4. `"Process-Binary-Watershed"`（分离相连细胞，可选）
> 5. 选中感兴趣区域后，`"Edit-Selection-Creat selection"`（框选目标区域）
> 6. `"Analyze-Tools-ROI manager-Add"`（创建感兴趣区域ROI）

**方法二（任选其一），对每一个通道执行：**
> 1. `"Image-Type-8-bit"`（转换图片为8-bit）
> 2. `"Image-Adjust-Threshold"`（调整阈值）
> 3. `"Process-Binary-Fill Holes"`（填补细胞空隙，可选）
> 4. `"Process-Binary-Watershed"`（分离相连细胞，可选）
> 5. `"Analyze-Analyze Particles"`（细胞计数）
> 6. 全选ROI后右键，点击`"OR(Combine)"`，再依次点击`"Add"`，`"Delete"`，生成整合后的ROI

**最终统计双染细胞数：**
> 1. 选择完ROI后，在"ROI manager"窗口，全选多个通道的ROI
> 2. 右键后点击`"AND"`（取交集），点击`"Add"`
> 3. 选中图片上取交集后的ROI，右键`"Creat Mask"`（或`"Edit-Selection-Create Mask"`）
> 4. 随后在Mask上`"Analyze-Analyze Particles"`（细胞计数）
---
**📚 参考资料**

[【利用ImageJ完成双重免疫荧光共定位与计数分析】](https://www.bilibili.com/video/BV19gkzBTE8K)
- 共定位分析借助“colocalization finder”插件完成，点击此处跳转[插件官方页面](https://imagej.net/ij/plugins/colocalization-finder.htmlv)
- 可以得到一个共定位曲线

[【Imagej荧光共定位自动统计，更多标也行~】](https://www.bilibili.com/video/BV1xi4y1r7oZ) 

---
# 3. Western Blot

## 3.1 条带分析
**使用Imagej获得WB条带数值，经过整理后的“最简”Protocol**
> 1. `"Image-Type-8-bit"`（转换图片为8-bit）
> 2. `"Process-Subtract Background"`（背景矫正）
> 3. 用`矩形工具`框选一行或一列条带
> 4. `Analyze-Gels-Select First Lane`或者`Ctrl + 1`（将这一行条带设置为第一道）
> 5. `Analyze -> Gels -> Plot Lanes`或者`Ctrl + 3`（画出这一道条带，在横线上的profile）
> 6. 利用直线将每个峰封口（按住Shift可垂直作线）
> 7. 用`魔法棒工具`依次点选每个峰
---
**📚 参考资料**

[ImageJ实用技巧——Western Blot定量分析深入探究(定量分析篇)(]https://zhuanlan.zhihu.com/p/56500792)
