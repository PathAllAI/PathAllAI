export default {
  async fetch(request, env) {
    const url = "https://sanzharx-pathallai.hf.space/predict";  // Example: https://your-space.hf.space/run/predict

    // Forward incoming request body
    const body = await request.text();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body
    });

    // Return HF response to frontend
    return new Response(await response.text(), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // allow frontend
      },
      status: response.status
    });
  }
}
