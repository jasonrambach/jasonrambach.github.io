---
layout: page
title: Automotive Perception
description: Fusion of Radar, Lidar and Camera for automotive scene understanding
img: assets/img/radar.png
importance: 1
category: work
---

Radar sensors have a significant potential for several applications due to their low-cost and robustness to weather conditions.
However, their use in 3D-detection work is challenging due to the sparsity of 3D information compared to Lidar.

In our most recent paper to be presented at WACV 2026, <a href="https://arxiv.org/pdf/2512.15581"> "IMKD: Intensity-Aware Multi-Level Knowledge Distillation for Camera-Radar
Fusion" </a>, we presented a Knowledge distillation method from lidar features that is able to maintain the specific advantages of radar features while enhancing them:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/imkd.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

In our 2022 WACV paper <a href="https://openaccess.thecvf.com/content/WACV2022/papers/Stacker_Fusion_Point_Pruning_for_Optimized_2D_Object_Detection_With_Radar-Camera_WACV_2022_paper.pdf?ref=https://githubhelp.com"> "Fusion Point Pruning for Optimized 2D Object Detection </a>
with Radar-Camera Fusion", we propose a method to optimize the neural network architecture for camera-radar fusion in 2D object detection:
<iframe width="728" height="410" src="https://www.youtube.com/embed/rjf_vHxHErw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br />
<br />

In our ICPR 2020 publication <a href="https://www.dfki.de/fileadmin/user_upload/import/11198_Chamseddine2021Ghost.pdf">"Ghost Target Detection in 3D Radar Data using
Point Cloud based Deep Neural Network"</a>, we train a neural network to classify radar point cloud 3D points as normal or multi-path (ghost) detections:
<iframe width="728" height="410" src="https://www.youtube.com/embed/drKrmjzhHzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
