import pickle
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

# -----------------------------
# Load ML model
# -----------------------------
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

# -----------------------------
# Create API application
# -----------------------------
app = FastAPI()

# -----------------------------
# Enable CORS (needed for Cloudflare)
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],        # change to your Cloudflare domain later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Health check
# -----------------------------
@app.get("/")
def home():
    return {"status": "running", "message": "PathAllAI backend (FastAPI) is live!"}

# -----------------------------
# Main prediction endpoint
# -----------------------------
@app.post("/predict")
async def predict(request: Request):
    try:
        data = await request.json()
        answers = data.get("answers", [])

        # -----------------------------
        # Sample: model expects features -> you adapt this logic
        # -----------------------------
        prediction = model.predict([answers])[0]

        response = {
            "ok": True,
            "major": prediction,
            "report": {
                "major": prediction,
                "matchPercent": 92,  # optional placeholder
                "explanation": f"The model determined that you best fit: {prediction}.",
                "source": "hf-fastapi"
            }
        }

        return response

    except Exception as e:
        return {"ok": False, "error": str(e)}
