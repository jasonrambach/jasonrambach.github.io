---
layout: page
title: Object Pose
description: 6DoF Object Pose and State Estimation
img: assets/img/pose.png
importance: 1
category: work
---

Object pose estimation is a key problem for Augmented Reality as well as Robotic applications.

In our CVPR 2022 paper, <a href="https://openaccess.thecvf.com/content/CVPR2022/papers/Su_ZebraPose_Coarse_To_Fine_Surface_Encoding_for_6DoF_Object_Pose_CVPR_2022_paper.pdf"> "ZebraPose: Coarse to Fine Surface Encoding for 6DoF Object Pose Estimation </a> we proposed a formulation of the 6DoF problem as a hierarchical binary surface encoding prediction.
<iframe width="728" height="410" src="https://www.youtube.com/embed/tJ7xtjYh9Mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br />
In the follow-up work <a href="https://openaccess.thecvf.com/content/CVPR2024/papers/Lin_HiPose_Hierarchical_Binary_Surface_Encoding_and_Correspondence_Pruning_for_RGB-D_CVPR_2024_paper.pdf"> HiPose </a> at CVPR 2024, we extended ZebraPose to directly make use of RGB-D data.
<iframe width="728" height="410" src="https://www.youtube.com/embed/6SYs-_maFSQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br />
The article <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10906413"> Resolving Symmetry Ambiguity in Correspondence-Based Methods for Instance-Level Object Pose Estimation</a> (IEEE Transactions on Image Processing, 2025) adapts the surface encodings of ZebraPose for symmetric objects.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/symnet.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<br />
Previously, we applied our object pose estimation methods to Augmented Reality assembly applications where we estimate the current pose and state of an assembly process (<a href="https://www.researchgate.net/profile/Jason-Rambach/publication/335207627_Deep_Multi-State_Object_Pose_Estimation_for_Augmented_Reality_Assembly/links/5d56c09d92851cb74c714724/Deep-Multi-State-Object-Pose-Estimation-for-Augmented-Reality-Assembly.pdf"> ISMAR 2019 paper </a> )
<iframe width="728" height="410" src="https://www.youtube.com/embed/WoXo_Dg1Xwo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="728" height="410" src="https://www.youtube.com/embed/0F7IsYCQfeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
