export default function handler(req, res) {
  console.log("=== BOT REQUEST ===");
  console.log("URL:", req.url);
  console.log("Method:", req.method);
  console.log("Headers:", JSON.stringify(req.headers, null, 2));
  console.log("Query:", req.query);
  
  res.status(200).json({ 
    message: "Caught!", 
    your_payload: req.query,
    timestamp: new Date().toISOString()
  });
}

