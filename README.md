# Project Atelier API

Project Atelier is a system design capstone. The goal was to replace the exisiting API (for [Project Atelier](https://github.com/rpp33-fec-green/FEC-Team-Green)) with a backend system that can support the full data set for the retailing website and can be scaled to meet the demands of production traffic. The original monolithic system was break into different pieces with my teammates (proudcts, reviews and QA)so each part of the service could be scaled according.

## Project Overview:

The final architecture consits of a Nginx load balancer, three Node/Express servers and one PostgreSQL database. This API endpoint has been optimized and tuned to handle production level traffice (verified by loader.io stress test)

## Resources:
- API Documentation: [Atelier API](https://gist.github.com/trentgoing/d69849d6c16b82d279ffc4ecd127f49f)
- Engineering Journal: [SDC Engineering Journal](https://wendai.notion.site/6be1f04e577240e89e935a9e791e0334?v=373c2bdab69342d4948957ff4f86b7d7)

## 📦 Tech Stack
<div>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
   <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
  <img src="https://img.shields.io/badge/supertest-3178C6?style=for-the-badge&logoColor=white" />
</div>

