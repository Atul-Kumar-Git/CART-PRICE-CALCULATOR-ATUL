const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/cart/total', (req, res) => {
  const { items } = req.body || {};

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Request must include items array.' });
  }

  let total = 0;

  for (const item of items) {
    const price = Number(item?.price);
    const qty = Number(item?.qty);

    if (!Number.isFinite(price) || !Number.isFinite(qty)) {
      return res.status(400).json({ error: 'Each item requires numeric price and qty.' });
    }

    total += price * qty;
  }

  return res.json({ total });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found.' });
});

app.listen(PORT, () => {
  console.log(`Cart Price Calculator API running on port ${PORT}`);
});
