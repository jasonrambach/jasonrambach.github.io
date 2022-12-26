---
layout: page
permalink: /publications/
title: publications
description: For an up-to-date publications list, check my <a href='https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=1l4G16AAAAAJ&sortby=pubdate'>GoogleScholar</a> profile as well
years: [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
