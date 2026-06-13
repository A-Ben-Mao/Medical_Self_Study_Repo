
# 普通转录组学（RNA-seq）—— 个人整理仓库

以下是本人自学普通转录组学分析后，亲自整理和完善的开源代码仓库，覆盖从 Bulk RNA-seq 到单细胞 RNA-seq 的常用分析流程。

---

## 📦 仓库一：Basic_Bioinformatics_Analysis

**链接：** https://github.com/A-Ben-Mao/Basic_Bioinformatics_Analysis

适用于普通转录组（Bulk RNA-seq）的标准分析流程，包含：

- 差异表达分析（DESeq2 等）
- 富集分析（GO / KEGG / GSEA）
- 可直接运行的 R 脚本模板
- 代码注释详细，适合初学者复用

> 适合人群：已理解 RNA-seq 基础概念，需要上手实操的学习者。

---

## 📦 仓库二：scRNA_seq_Analysis

**链接：** https://github.com/A-Ben-Mao/scRNA_seq_Analysis

适用于单细胞转录组（scRNA-seq）的数据分析流程，包含：

- 单细胞数据质控与标准化
- 降维聚类（PCA、UMAP）
- 细胞类型注释
- 差异分析及可视化

> 适合人群：有一定转录组基础，希望拓展单细胞分析能力的学习者。

---

## 💡 使用建议

1. 先浏览仓库的 README，了解整体结构和前置要求
2. 对照实际课题或公开数据集，运行代码以加深理解
3. 两个仓库可配合使用：先从 Bulk RNA-seq 入手建立基础，再进入 scRNA-seq

