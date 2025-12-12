export default {
  async fetch(request) {
    return new Response("PathAllAI Worker is running!", {
      headers: { "content-type": "text/plain" },
    });
  }
};
