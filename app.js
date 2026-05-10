const express = require('express');
const app = express();

// === 新增：品牌中间件 ===
app.use((req, res, next) => {
  res.setHeader('X-Spark-Rule', '星是规则，火是相信');
  res.setHeader('X-Powered-By', '星火科技 Spark Tech');
  next();
});
// =====================

// ... 后续其他代码