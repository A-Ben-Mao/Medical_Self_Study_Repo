正在装修，敬请期待......
---
写在前面
---
- 虽然已经做过挺多次实验了，但是每次进行一些许久不曾做过的分析时又会遗忘，重新去找资料而进行学习
- 故而在这里进行整理，方便自己及各位同学后期查阅

---
# 仪器与软件

## 1.1 奥林巴斯荧光显微镜——软件篇

[对应软件（OlyVIA）官方下载](https://lifescience.evidentscientific.com.cn/zh/downloads/detail-iframe/?0%5Bdownloads%5D%5Bid%5D=847254061)

[基础操作说明](https://zhuanlan.zhihu.com/p/1943622892655969723)

---
# 免疫荧光

## 2.1 细胞计数（使用ImageJ）
> 经过整理后的“最简”流程
> 
> "Image-Type-8-bit"（转换图片为8-bit）——"Image-Adjust-Threshold"（调整阈值）——"Process-Binary-Fill Holes"（填补细胞空隙，可选）——"Process-Binary-Watershed"（分离相连细胞，可选）——"Analyze-Analyze Particles"（细胞计数）

文字资料：[ImageJ实用技巧——自动细胞计数(解放双手篇)](https://zhuanlan.zhihu.com/p/54959707)

视频资料：[【科研人必备！用Image J做细胞计数竟然这么简单？】](https://www.bilibili.com/video/BV1W6CEY6E7q)

视频资料：[【用imagej对细胞核自动计数（相似结构也行）】](https://www.bilibili.com/video/BV1CG411U7oC)
- 我一般将之用于DAPI计数，也就是细胞核的总数统计

## 2.2 共定位分析及双染计数（使用ImageJ）
> 经过整理后的“最简”流程
>
> 1. 如果是合并通道需要先："Image-Color-Split Channels"（分离通道）
> 
> 2. 对每一个需要分析的通道："Image-Type-8-bit"（转换图片为8-bit）——"Image-Adjust-Threshold"（调整阈值）——"Process-Binary-Fill Holes"（填补细胞空隙，可选）——"Process-Binary-Watershed"（分离相连细胞，可选）——选中感兴趣区域后，"Edit-Selection-Creat selection"（框选目标区域）——"Analyze-Tools-ROI manager-Add"（创建感兴趣区域ROI）
>
> 3. 选择完ROI后，在"ROI manager"窗口，全选多个通道的ROI，右键"AND"（取交集），点击"Add"，选中图片上取交集后的ROI，右键"Creat Mask"（或"Edit-Selection-Create Mask"），随后在Mask上"Analyze-Analyze Particles"（细胞计数）

[【利用ImageJ完成双重免疫荧光共定位与计数分析】](https://www.bilibili.com/video/BV19gkzBTE8K)
- 共定位分析借助“colocalization finder”插件完成，点击此处跳转[插件官方页面](https://imagej.net/ij/plugins/colocalization-finder.htmlv)
- 可以得到一个共定位曲线

[【Imagej荧光共定位自动统计，更多标也行~】](https://www.bilibili.com/video/BV1xi4y1r7oZ) 
