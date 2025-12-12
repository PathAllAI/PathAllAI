import pandas as pd
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier
import pickle

# -------- SAMPLE TRAINING DATA --------
# you can expand this dataset later
data = {
    "answers": [
        ["Creative","Leader","Imagination","Groups","Creating",
         "Arts/Design","Creativity","Designing","Writing","Creativity",
         "Arts/Media","Flexible","Creative space","Creating things","Inspiring others",
         "Mostly B","Moderate","Decent","A few","Strong international"],

        ["Logic & data","Strategist","Logic & data","Working alone","Achieving",
         "Math/Physics","Logic","Analyzing data","Technical tasks","Problem-solving",
         "Engineering","Structured","Office/Lab","Solving problems","Innovation",
         "Mostly A","Very prepared","Very strong","Many","Top global"],

        ["Helping others","Supporter","Understanding people","Both","Helping others",
         "Biology/Chemistry","Communication","Explaining concepts","Research","Empathy",
         "Medicine","Interactive","Research center","Helping people","Improving lives",
         "A/B mix","Moderate","Decent","A few","Strong international"],

        ["Business","Leader","Hands-on solutions","Depends","Achieving",
         "Math/Physics","Responsibility","Organizing","Discussions","Responsibility",
         "Business","Structured","Corporate","Managing teams","Economy",
         "Mixed","Need improvement","Minimal","None","Any with scholarships"]
    ],
    "label": ["Arts", "Engineering", "Medicine", "Business"]
}

df = pd.DataFrame(data)

# Split answer lists into separate columns
answers_df = df["answers"].apply(pd.Series)
answers_df.columns = [f"q{i}" for i in range(1, 21)]

X = answers_df
y = df["label"]

# ML Pipeline
pipeline = Pipeline([
    ("encode", ColumnTransformer(
        [("cat", OneHotEncoder(handle_unknown="ignore"), X.columns)],
        remainder="drop"
    )),
    ("model", RandomForestClassifier(n_estimators=200))
])

pipeline.fit(X, y)

# Save model
with open("model.pkl", "wb") as f:
    pickle.dump(pipeline, f)

print("Model trained and saved as model.pkl")
