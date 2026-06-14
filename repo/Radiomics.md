# 1. 3DSlicer 基础操作

[【影像组学 3Dslicer软件教学（上）】](https://www.bilibili.com/video/BV1w44y147ph/)

[【影像组学 3Dslicer软件教学（下）】](https://www.bilibili.com/video/BV1VP4y1b73b/)
- 时长约 1h，同一个 up 主，覆盖了 3DSlicer 的基本操作
- 该 up 主还有补充教学和 pyradiomics 的内容，质量可

---
# 2. 颅脑核磁标准化处理

## 2.1 配准与标准化流程

不同个体的脑结构存在差异，要将多组影像数据纳入同一坐标空间进行比较分析，必须进行配准和标准化。简单来说，就是将不同人的脑图像对齐到一个标准模板上。这是影像组学分析前最关键的一步预处理。

[【【影像组学】一个小时带你全流程入门影像组学 | 从dicom到nifti格式到序列ANTs配准等预处理 | 从特征提取到特征工程到机器学习】](https://www.bilibili.com/video/BV1L7FveEE7s/)

## 2.2 在 Windows 环境下使用 Matlab 的 SPM 进行配准与标准化

有 Matlab 的情况下用 SPM 比较方便，图形界面操作，对新手友好。

[【神经影像处理_SPM实操_PET和MRI的图像标准化】](https://www.bilibili.com/video/BV1Y1YXzME9k/)

[使用Matlab SPM12与MRIcroGL进行头核磁ROI的标准化与Overlap图的制作](https://blog.csdn.net/YimingChen98/article/details/129855869)（需 csdn 会员）

## 2.3 在 Linux 环境下使用 ANTs 进行配准与标准化

ANTs 是目前配准效果最好的工具之一，但全命令行操作，学习成本比 SPM 高。

[【【核磁共振影像数据处理】高级的配准软件ANTS使用介绍】](https://www.bilibili.com/video/BV1hB4y1K7gf/)
- 基本是参考官方手册演示，没涉及太多具体参数调优，暂未找到更优教程

---
# 3. 颅骨剥离 / 头皮剔除

MRI 原始数据中颅骨包绕脑组织，若不先行剥离，后续的配准、特征提取等步骤会受到干扰。因此颅骨剥离通常作为预处理的第一步。

## 3.1 3DSlicer

### 3.1.1 使用插件 SwissSkullStripper 进行自动剥离

SwissSkullStripper 是 3DSlicer 的一个插件，可实现一键自动颅骨剥离，避免手动逐层勾画 ROI 的繁琐操作。
文字说明：[SlicerCN论坛讨论](https://forum.slicercn.com/t/topic/5511)
视频演示：[【3d slicer 计算大脑体积，去除颅骨】](https://www.bilibili.com/video/BV1vm421V7ZW/)

### 3.1.2 通过阈值剔除

若不想额外安装插件，也可以直接用阈值法进行颅骨剔除，原理基于不同组织间信号强度的差异。

[【3D Slicer共学 | CT和MRI去脑壳】](https://www.bilibili.com/video/BV1KG4y1Y7N9/)（官方视频中文配音版）

---
# 4. 影像组学相关内容

## 4.1 使用 FAE 进行影像组学特征提取及分析

影像组学的核心是从医学影像中提取大量定量特征（形态、纹理、强度等），进而结合这些特征进行统计建模和分类分析。FAE 提供图形界面操作，无需编程即可完成特征提取。

视频演示：[【FAE软件介绍】](https://www.bilibili.com/video/BV1yt4y1S79S/)
- 时长约 30min，讲解比较系统，建议具备一定影像组学基础后再看
